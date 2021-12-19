function Electro (type, powerSocket, power) {
    this.type = type;
    this.powerSocket = powerSocket;
    this.power = power;
}

Electro.prototype.use = function() {
    if (this.powerSocket === true && this.power > 0) {
        this.power = this.power - 1.5;
        return this.power;
    } else {
        console.log ('Подключите прибор к элеткропитанию')
    }
}

Electro.prototype.info = function () {
    if (this.powerSocket === true) {
        return `${this.type} подключен к электропитанию`
    } else if (this.powerSocket === false) {
        console.log( `${this.type} отключен от электропитания`)
    }
}

const deskLamp = new Electro ('deskLamp', true, 100);
const computer = new Electro ('computer', false, 100);
 