# AngularCli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Tối ưu Angular app bằng việc sử dụng Angular CLI
### Tạo Project
Chúng ta có thể nhanh chóng tạo nên một bộ khung Angular sẵn sàng cho việc code:
`ng new angular-cli`

### Tạo Module và component cho module đó
##### Tạo Module
Việc tổ chức theo module rất quan trọng. Vì thế chúng ta sẽ luôn khởi tạo module đầu tiên trước khi khởi tạo bất cứ component, directive, pipe, ...
Ví dụ, để implement CRUD cho đối tượng Product, chúng ta sẽ thực hiện như sau:

Tại thư mục project, chúng ta sẽ dựng module Product:

`ng generate module product`

Bạn có thể viết ngắn gọn hơn bằng cách:

`ng g m product`

##### Tạo component
Tiếp theo chúng ta tạo tiếp các component cần thiết cho ProductModule, gồm ProductList (xem danh sách sản phẩm), ProductCreate (thêm mới sp), ProductDetail (sửa sản phẩm). 

Chúng ta dùng câu lệnh `ng generate component` hay cách viết ngắn `ng g c`:

Giá trị truyền vào cho câu lệnh gồm: `tên-module(cũng là tên thư mục)/tên-component`

`ng g c product/product-list`

`ng g c product/product-create`

`ng g c product/product-detail`

##### Tạo Router
Khi tổ chức code theo module, chúng ta cũng sẽ chuyển quyền quản lý route cho module. Trước tiên, chúng ta sẽ tạo một component gốc tại product module dùng để chứa Router Outlet (tạo 1 component với cùng tên product):

`ng g c product`

Tiếp theo, chúng ta sẽ đặt `<router-outlet></router-outlet>` vào `product.component.html`:

Và phần việc còn lại, chúng ta sẽ định nghĩa route theo ý muốn. Ở ví dụ này mình sẽ sử dụng `/product` làm slug cho module product `/product/list` để hiển thị `ProductListComponent`, ...:

```
// product.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'create',
        component: ProductCreateComponent
      },
      {
        path: 'detail',
        component: ProductDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
      ProductComponent,
      ProductListComponent,
      ProductCreateComponent,
      ProductDetailComponent
  ]
})
export class ProductModule { }
```

Lúc này, bạn đã scaffold xong một ProductModule hoàn thiện. Việc cuối cùng, để sử dụng được ProductModule này, chúng ta cần `import vào AppModule` để bắt đầu sử dụng.

```
// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Ngoài ra chúng ta sẽ cần thêm `router-outlet cho app.component.html` để chứa nội dung routes chúng ta vừa định nghĩa trong app.module.ts phía trên:

`
// app.component.html
<router-outlet></router-outlet>
`

Lúc này bạn có thể khởi chạy ứng dụng bằng câu lệnh `ng serve --open`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
