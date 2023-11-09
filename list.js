class Task {
    constructor(desc, status) {
        this.desc = desc;
        this.status = status;
    }

    html(pos) {
        return `
            <div class="task">
                <button class="menos x" onclick="deleteTask(${pos})">X</button>
                <p>${this.desc}</p>
                <div>
                    <button class="menos" onclick="stepBack(${pos})">-</button>
                    <button class="mas" onclick="updateTask(${pos})">+</button>
                </div>
            </div>
        `;
    }
}
