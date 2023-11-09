function createTask() {
    const taskValue = document.getElementById("task-input").value;
    const task = new Task(taskValue, "TODO");
    let list = getTaskList();
    list.push(task);
    updateTaskList(list);
    renderAll();
}

function getTaskList() {
    const list = JSON.parse(localStorage.getItem("list")) || [];
    return list.map(obj => new Task(obj.desc, obj.status));
}

function updateTaskList(list) {
    const listStr = JSON.stringify(list);
    localStorage.setItem("list", listStr);
}

function renderAll() {
    const divTodo = document.getElementById("todo");
    const divDoing = document.getElementById("doing");
    const divDone = document.getElementById("done");

    divTodo.innerHTML = "";
    divDoing.innerHTML = "";
    divDone.innerHTML = "";

    const list = getTaskList();
    list.forEach((objTask, i) => {
        const targetDiv = objTask.status === "TODO" ? divTodo : objTask.status === "DOING" ? divDoing : divDone;
        targetDiv.innerHTML += objTask.html(i);
    });
}

function updateTask(pos) {
    const list = getTaskList();
    list[pos].status = list[pos].status === "TODO" ? "DOING" : "DONE";
    updateTaskList(list);
    renderAll();
}

function stepBack(pos) {
    const list = getTaskList();
    list[pos].status = list[pos].status === "DOING" ? "TODO" : "DOING";
    updateTaskList(list);
    renderAll();
}

function deleteTask(pos) {
    const list = getTaskList();
    list.splice(pos, 1);
    updateTaskList(list);
    renderAll();
}

renderAll();
