const fs = require('fs');

// Tạo mới một công việc
const createTask = (title, description) => {
    const newTask = {
        id: Math.random().toString(),
        title, 
        description,
    };
    
    // lấy mảng readAllTask
    let taskList = readAllTask();

    // thêm phần tử vào trong mảng
    // taskList.push(newTask)
    taskList = [...taskList, newTask];

    // lưu công việc vào mảng
    fs.writeFileSync("task.json", JSON.stringify(taskList))

    // trả về, thông báo cho người dùng
    return newTask;
}

// lấy toàn bộ thông tin công việc
const readAllTask = () => {
    const buffer = fs.readFileSync("task.json"); // hex
    
    // chuyển sang chuỗi
    const taskToString = buffer.toString();
    // console.log(taskToString);
    
    // chuyển sang json
    const taskToJson = JSON.parse(taskToString);
    // console.log(taskToJson);
    return taskToJson;
}

// Lấy chi tiết một công việc:
const readDetailTask = (id) => {
    let taskList = readAllTask();
    const task = taskList.find((task) => id === task.id);
    console.log(task)
    return task;
  };





module.exports = {
    readAllTask,
    createTask,
    readDetailTask,
    // updateTask,
    // deleteTask
}