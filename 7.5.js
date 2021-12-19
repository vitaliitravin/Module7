class Electro {
    constructor (type, powerSocket, power) {
        this.type = type;
        this.powerSocket = powerSocket;
        this.power = power;
    }

    use() {
        if (this.powerSocket === true && this.power > 0) {
            this.power = this.power - 1.5;
            return this.power;
        } else {
            console.log ('Подключите прибор к элеткропитанию')
    }

    info () {
        if (this.powerSocket === true) {
            return `${this.type} подключен к электропитанию`
        } else if (this.powerSocket === false) {
            console.log( `${this.type} отключен от электропитания`)
        }
    }
}

const deskLamp = new Electro ('deskLamp', true, 100);
const computer = new Electro ('computer', false, 100);

deskLamp.use();
deskLamp.info();
computer.use();
computer.info();