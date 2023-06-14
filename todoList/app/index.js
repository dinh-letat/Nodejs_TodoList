//import yargs from 'yargs'; es6

const yargs = require('yargs'); //es5 (common js)
const fs = require('fs'); // file system (build in nodejs)
const {
    readAllTask,
    createTask,
    readDetailTask, } = require('./model/task')
// console.log("todolist");
// console.log("added nodemon")
// --------------------------------------------- //

// Tạo lệnh test
yargs.command({
    command: 'test',
    handler: () => {
        console.log("test command");
    }
});
// lưu lại các lệnh vừa tạo

// --------------------------------------------- //
// Tạo lệnh CRUD

// Create command
yargs.command({
    command: 'create',
    builder: {
        title: {
            type: "string"
        },
        description: {
            type: "string"
        }
    },
    handler: (args) => {
        const { title, description } = args;
        const newTask = createTask(title, description);
        console.log("Tạo mới công việc thành công: \n", newTask)

        // console.log("id: ", id)
        // console.log('title: ', title);
        // console.log('description: ', description);
        // console.log("create item");
    }
});

// Read-all 
yargs.command({
    command: "read-all",
    handler: () => {
        const result = readAllTask();
        console.log('Task Json: \n', result);
    }
})

// Read-detail
yargs.command({
    command: "read-detail",
    buidler: {
        id: {
            type: "string"
        }
    },
    handler: (args) => {
        const { id } = args;
        const task = readDetailTask(id);
        console.log(readDetailTask)
        if (task) {
            console.log('Task có id là: ', task);
        } else {
            console.log("Not found!")
        }
        // console.log("id: ", id);
        // console.log('read-detail item');
    }
});

// Update 
yargs.command({
    command: "update",
    builder: {
        id: {
            type: "string"
        },
        title: {
            type: "string"
        },
        description: {
            type: "string"
        }
    },
    handler: (args) => {
        const { id, title, description } = args;
        const task = updateTask();
        // console.log(id, title, description)
        // console.log('update items')
    }
})

// Delete
yargs.command({
    command: "delete",
    builder: {
        id: {
            type: "string"
        }
    },
    handler: (args) => {
        const { id } = args;
        const task = deleteTask();
        // console.log("id: ", id);
        // console.log('delete items')
    }
})

yargs.parse();