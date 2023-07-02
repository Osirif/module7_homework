class Device {
    constructor(name) {
        this.name = name;
        this.model = String();
        this.active = false;
        this.power = 0;
    }

    turnOn() {
        this.active = true;
    }
    turnOff() {
        this.active = false;
    }
}

class Lamp extends Device {
    constructor(model, power) {
        super();
        this.name = "Лампа";
        this.model = model;
        this.mode = 1;
        this.power = power;
    }

    setMode(mode) {
        this.mode = mode;
        this.power *= mode;
    }
}

class Laptop extends Device {
    constructor(model, power) {
        super();
        this.name = "Ноутбук";
        this.model = model;
        this.power = power;
        this.workload = 1;
    }

    setWorkload(workload) {
        this.workload = workload;
        this.power *= workload;
    }
}

const lamp1 = new Lamp("GP Lighting", 20);
const lamp2 = new Lamp("Osram", 30);
const asus = new Laptop("Asus", 150);
const lenovo = new Laptop("Lenovo", 250);

lamp1.turnOn();
lamp1.setMode(3);
lamp2.turnOff();
lenovo.turnOn();
asus.turnOn();
asus.setWorkload(5);

console.log(getpower([lamp1, lamp2, lenovo, asus]));

function getpower(devices) {
    let answer = "В розетку включены: \n";
    let power = 0;

    devices.forEach((element) => {
        if (element.active) {
            answer += element.name + " \"" + element.model + "\" (" + element.power + " Вт)\n";
            power += element.power;
        }
    });

    answer += "Потребляемая мощность: " + power + " Вт.";

    return answer;
}