$(function () {
    let newTodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todoList = $('#todolist')

    addtodoBtn.click(function () {
        let newTodo = newTodoBox.val() // .val() returns the value of the input nox. this is added cz of jquery

        //send this data to backend
        //it does AJAX(async js and xml) without reloading our page still make get and post req from browser to server
        $.post(
            '/todos/', //path relative to website
            {task: newTodo}, //body
            function (data) {
                todoList.empty(); //it will delete all data present in todoList
                for (todo of data) { //runs through data array and takes each item and makes it available for to-do
                    todoList.append("<li>" + todo.task + "</li>")
                }
            }  //callback function
        )
    })
})
//whatever you put inside dollar(which is a jquery function)

