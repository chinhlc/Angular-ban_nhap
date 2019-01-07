import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [] // những service được nhúng ở đây thì value sẽ k bị thay đổi đồng loạt nếu biến trong file nào đó bị thay đổi.
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [UserService]    // Sẽ bị thay đổi đồng loạt. Nói cách khác, các variable được khai báo trong những service này sẽ là global variable
                                  // Đây là cách xử lý lỗi của lazy loading và providers khi nó k tự đồng bộ dữ liệu mà lại tự chia dữ liệu riêng cho từng module lazy loading khác nhau.
                                                      // Dẫn đến cùng một biến được khai báo trong service nhưng mỗi module lại có một giá trị khác nhau
                                                      // do lazy loading nó sẽ tự tạo ra mỗi injector tree riêng cho mỗi module khác nhau.
                                                          // Tức là tạo ra mỗi instantiate riêng cho 1 module khác nhau
                                                          // cho nên có nhiều instantiate cùng sử dụng 1 service => data khác nhau
    };
  }
}
