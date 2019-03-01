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

