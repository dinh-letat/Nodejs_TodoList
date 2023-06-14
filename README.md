# NodeJs_TodoLIst
# Nodejs_TodoList


// 1. Khởi tạo dự án:
npm init -y

// 2. Tạo flder app để lưu file chính:
todoList -> app

// 3. Tạo live server cho nodejs:
npm i nodemon
    -> npm i -g nodemon : cài package vào toàn bộ máy
    -> npm i --save-dev nodemon : cài package vào project

// 4. Cài đặt môi trường Website:
- Flow Uwebsite: dependencies chạy trong cả 3 môi trường
    + Dev: nhánh của các coder phát triển web -> lệnh dev
    + Staging: nhánh của các tester vào kiểm tra
    + Production: nhánh cho người dùng họ dùng -> lệnh start

// 5. Create command Nodejs:
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

- Truyển tham số: để truyển ts vào handler func thì truyền builder (builder là 1 object)
    + thêm builder: 
    builder: {
        id: {
            type:"number"
        },
        title: {
            type: "string"
        },
        description: {
            type: "string"
        }
    }
- Định nghĩa lại hàm handler: 
    handler: (args) => {
        const {id, title, description} = args;
        console.log("id: ", id)
        console.log('title: ', title);
        console.log('description: ', description);
        console.log("create item");
    }
node todoList/app/index.js create --title="hocmai" --décription="hoc rat la vui"

//* 6. Lấy công việc từ file Json
- Thêm thư viện 'fs'
const fs = require ('fs'); 

- chuyển sang chuỗi:
const taskString = buffer.toString();
        console.log(buffer);
        console.log('Task String: \n', taskString);

- Chuyển sang Json: 
const tasksJson = JSON.parse(taskString);
        console.log('Task Json: \n',tasksJson[1]);

-> Xuất ra để các file khác sử dụng được trong hàm module:
- module.export = {

}

//* 7. Thêm công việc vào file Json
- Tạo hàm createTask (args) => {}
createTask (args) => {
    const newTask = {
        id: ,
        title: "",
        description
    }
}

- Lấy mảng để tạo cv lưu vào mảng:
let tasks = []; // Khởi tạo biến tasks là một array

- Thêm phần tử vào trong mảng
    taskList.push(newTask);
    taskList = [...taskList, newTask];

- Lưu công việc vào mảng:
fs.writeFile('./data/todo_list.json',JSON.stringify(taskList));

//* 8. Lấy chi tiết một công việc:
- Tạo hàm readDetail