class Task {
    constructor(id, time) {
        this.id = id;
        this.time = time;
    }
    run() {
        console.log(this + ' launched.');
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(this + ' completed.');
                resolve();
            }, this.time);
        });
    }
    toString() {
        return `Task ${this.id}[${this.time}ms]`;
    }
}

class TaskManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.waiting = [];
        this.running = [];
    }
    push(tk) {
        this.waiting.push(tk);
        if (this.running.length < this.capacity) {
            this.next();
        } else {
            console.log(tk + ' put on hold.');
        }
    }
    next() {
        const task = this.waiting.shift();
        if (!task) {
            if (!this.running.length) {
                console.log("All done.");
            }
            return; // No new tasks
        }
        this.running.push(task);
        const runningTask = task.run();
        console.log("Currently running: " + this.running);
        runningTask.then(() => {
            this.running = this.running.filter(t => t !== task);
            console.log("Currently running: " + this.running);
            this.next();
        });
    }
}

const a = new Task('A', 100);
const b = new Task('B', 200);
const c = new Task('C', 400);
const d = new Task('D', 5000);
const e = new Task('E', 6000);
const manager = new TaskManager(3);
manager.push(a);
manager.push(b);
manager.push(c);
manager.push(d);
manager.push(e);
