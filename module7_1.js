let clansCamarilla = {
    Ventrue: 1,
    Brujah: 2,
    Gangrel: 3
}

let clansSabat = Object.create(clansCamarilla);
clansSabat.Lasombra = 4;
clansSabat.Tzimisce = 5;

keyObject(clansSabat);

function keyObject(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key))
            console.log(key + ": " + object[key]);
    }
}