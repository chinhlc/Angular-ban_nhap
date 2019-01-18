import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  public success(message, title) {
    this.toastr.success(message, title);
  }
  public warning(message, title) {
    this.toastr.warning(message, title);
  }
  error(message, title) {
    this.toastr.warning(message, title, {
      timeOut: 3000
    });
  }
}
