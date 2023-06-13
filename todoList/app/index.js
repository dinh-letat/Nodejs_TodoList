//import yargs from 'yargs'; es6
 const yargs = require('yargs'); //es5 (common js)
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
    handler: () => {
        console.log("create item");
    }
});

// Read-all 
yargs.command({
    command: "read-all",
    handler: () => {
        console.log('read-all items')
    }
})

// Read-detail
yargs.command({
    command: "read-detail",
    handler: () => {
        console.log('read-detail item');
    }
});

// Update 
yargs.command({
    command: "update",
    handler: () => {
        console.log('update items')
    }
})

// Delete
yargs.command({
    command: "delete",
    handler: () => {
        console.log('delete items')
    }
})

yargs.parse();