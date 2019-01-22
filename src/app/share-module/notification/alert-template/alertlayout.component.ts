import { Component, OnInit } from '@angular/core';

import {IToast} from '../models/alert.interface';
import {AlertService} from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alertlayout.component.html',
  styleUrls: ['./alertlayout.component.css']
})
export class AlertlayoutComponent implements OnInit {
  alerts: IToast[] = [];

  constructor(private alertservice: AlertService) { }

  ngOnInit(): void {
    this.alertservice.getToast().subscribe((toast: IToast) => {
      if (!toast) {
        // clear alerts when an empty toast is received
        this.alerts = [];
        return;
      }
      this.alerts.push(toast);
      setTimeout(() => this.removeAlerts(toast), 3000);
    });
  }

  removeAlerts(toast: IToast): void {
    this.alerts = this.alerts.filter(x => x !== toast);
  }
}
