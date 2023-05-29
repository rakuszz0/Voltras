function forbidden(a, b) {
    const comp = (a > b) - (a < b)
    const statements = {
        "-1": `${a} is less than ${b}`,
        0: `${a} is equal to ${b}`,
        1: `${a} is grater than ${b}`

    }


    return statements[comp.toString()];
}

console.log(forbidden(5, 4,));
console.log(forbidden(-4, -7,));
console.log(forbidden(2, 2,));