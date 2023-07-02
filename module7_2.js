function isContainName(query, object) {
    for (let item in object)
        if (item === query) return true;

    return false;
}

let names = {
    Sasha: 1,
    Lesha: 2,
    Jenya: 3
}

console.log(isContainProperty("Lesha", names));