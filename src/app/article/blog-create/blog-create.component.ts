import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  txtName: string = "";
  txtMess: string = "";
  isSave = false;

  constructor() { }
  ngOnInit() { }

  FormCheckVal(): boolean {
    if (this.isSave)
      return true;
    else if (this.txtName.length > 0 || this.txtMess.length >0)
      return false;
    return true;
  }

}
