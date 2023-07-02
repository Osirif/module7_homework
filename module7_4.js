function Device(name) {
    this.name = name;
    this.model = String();
    this.active = false;
    this.power = 0;
}
Device.prototype.turnOn = function () {
    this.active = true;
}
Device.prototype.turnOff = function () {
    this.active = false;
}

Lamp.prototype = new Device("Лампа");
    function Lamp(model, power) {
        this.model = model;
        this.mode = 1;
        this.power = power;
}
Lamp.prototype.setMode = function (mode) {
    this.mode = mode;
    this.power *= mode;
}

Laptop.prototype = new Device("Ноутбук");
    function Laptop(model, power) {
        this.model = model;
        this.power = power;
        this.workload = 1;
}

Laptop.prototype.setWorkload = function (workload) {
    this.workload = workload;
    this.power *= workload;
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