# NodeJs_TodoLIst
# Nodejs_TodoList


// 1. Khởi tạo dự án
npm init -y

// 2. Tạo flder app để lưu file chính
todoList -> app

// 3. Tạo live server cho nodejs
npm i nodemon
    -> npm i -g nodemon : cài package vào toàn bộ máy
    -> npm i --save-dev nodemon : cài package vào project

// 4. Cài đặt môi trường Website
- Flow Uwebsite: dependencies chạy trong cả 3 môi trường
    + Dev: nhánh của các coder phát triển web -> lệnh dev
    + Staging: nhánh của các tester vào kiểm tra
    + Production: nhánh cho người dùng họ dùng -> lệnh start

// 5. Create command Nodejs
- Dùng thư viện Yargs để phân luồng xử lý
npm i yargs

- import thư viện vào file để sử dụng:
const yargs = require("yargs");

- // Tạo lệnh test sử dụng lệnh: node todoList/app/index.js test
yargs.command({
    command: 'test',
    handler: () => {
        console.log('test');
    }
});
yargs.parse();

- Tạo lệnh CRUD
node todoList/app/index.js create
node todoList/app/index.js read-all
node todoList/app/index.js read-detail
node todoList/app/index.js update
node todoList/app/index.js delete

- Truyển tham số 
