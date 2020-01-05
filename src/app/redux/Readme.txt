// Lenh CLI
Install Redux

  yarn add @ngrx/store@6.1.2 @ngrx/effects@6.1.2 @ngrx/router-store@6.1.2 @ngrx/store-devtools@6.1.2

  Có thể cài thêm @ngrx/entity



// Tao REST JSON giả lập
        npm install -g json-server


// Chạy nhiều comman line cũng một lúc. Dùng để mở cùng lúc 2 http trên 2 port khác nhau bằng duy nhất một lệnh chạy "yarn start"
        yarn add concurrently

        vd:
          concurrently \"ng serve --open --port 4400\" \"json-server --watch demoinfo.json --port 4500\"

/********************
 Cấu trúc
********************/
Redux đơn giản:
--------------

      app/redux/customer.reducer.ts: 			Chứa state và reducer cho các action

      app/app.module.ts:						      import store của redux vào:
                                                import {StoreModule} from '@ngrx/store';
                                                ...

                                                imports: [
                                                  ...
                                                  StoreModule.forRoot({}),
                                                ]
      app/article/blog.module.ts:				  import store, state của redux vào. Và dùng "forFeature" đăng ký reducer nếu blog.module là một module có sử dụng lazyload
                                                import {StoreModule} from '@ngrx/store';
                                                import {customerReducer} from '../redux/customer.reducer';
                                                ...
                                                imports: [
                                                  ...
                                                  StoreModule.forFeature('storeReduxCustomer', customerReducer),
                                                ]
      app/article/blog.component.ts:			chạy dispatch action và subscribe lắng nghe state do reducer trả về
                                                import {Store} from '@ngrx/store';
                                                ...
                                                ngOnInit() {
                                                  this.store.dispatch({ type: 'LOAD_CUSTOMERS' });
                                                  this.store.subscribe(state => (this.data_use = state.storeReduxCustomer.user));
                                                }

Redux phức tạp:
--------------

      app/app.module.ts:						  import store và effect của redux vào:
                                            import {StoreModule} from '@ngrx/store';
                                            import {StoreDevtoolsModule} from '@ngrx/store-devtools';
                                            import {EffectsModule} from '@ngrx/effects';
                                            ...
                                            imports: [
                                              ...
                                              // Store và effect cho cả app
                                              StoreModule.forRoot({}),
                                              StoreDevtoolsModule.instrument(),
                                              EffectsModule.forRoot([]),
                                            ]

      Tạo redux:
              app/redux/effect-redux/people.state.ts				Định nghĩa kiểu dữ liệu
              app/redux/effect-redux/people.actions.ts			khai báo các action và các constructor nếu có data truyền vào
                                                                - Thường import các file people.state.ts để khai báo kiểu dữ liệu
              app/redux/effect-redux/people.reducer.ts			Chạy các action khi nó được gọi dispatch. Return ra state
                                                                - Nó có thể được chạy 2 lần. lần 1 khi action được dispatch. lần 2 khi effects gọi tới 1 action khác
                                                                - có thể dùng để khai báo thêm một state khác
                                                                - Thường import các file people.state.ts, people.actions.ts
              app/redux/effect-redux/people.effects.ts			Lắng nghe action được dispatch. chạy service và xử lý dữ liệu. Truyền dữ liệu và gọi action success. Nếu false thì truyền lỗi vào gọi action lỗi
                                                                - Thường import các file people.state.ts, people.actions.ts, people.service.ts
              app/redux/effect-redux/people.service.ts			Xử lý dữ liệu hoặc request. trả về data dữ liệu
                                                                - Thường import các file people.state.ts để khai báo kiểu dữ liệu


      app/article/blog.module.ts:				import store, effect của redux và module vào. Sau đó dùng "forFeature" đăng ký reducer và effect nếu blog.module là một module có sử dụng lazyload
                                              import {StoreModule} from '@ngrx/store';
                                              import {EffectsModule} from '@ngrx/effects';
                                              import {PeopleReducer} from '../redux/effect-redux/people.reducer';
                                              import {PeopleEffect} from '../redux/effect-redux/people.effects';
                                              ...
                                              imports: [
                                                ...
                                                StoreModule.forFeature('storeReduxPeople', PeopleReducer),
                                                EffectsModule.forFeature([PeopleEffect]),
                                              ]
      app/article/blog.component.ts:			Chạy dispatch action và subscribe lắng nghe state do reducer trả về
                                                import {Store} from '@ngrx/store';
                                                import * as PeopleActionRedux from '../redux/effect-redux/people.actions';
                                                ...
                                                ngOnInit() {
                                                  this.store.dispatch(new PeopleActionRedux.LoadPeoples());
                                                  this.store.subscribe(state => (this.data_people = state.storeReduxPeople.customers));
                                                }
