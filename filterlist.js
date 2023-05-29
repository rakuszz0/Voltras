function filterList(classList) {
    let filteredList = [];
    let typeNames = {};

    for (let i = 0; i < classList.length; i++) {
        let item = classList[i];
        let typeName = item.type + '-' + item.name;

        if (!(typeName in typeNames) || item.price < typeNames[typeName].price) {
            typeNames[typeName] = item;
        }
    }

    for (let key in typeNames) {
        filteredList.push(typeNames[key]);
    }

    return filteredList;
}

let classList = [
    {
        "type": "Pen",
        "name": "Snowman",
        "price": 10000
    },
    {
        "type": "Ruler",
        "name": "Butterfly",
        "price": 5000
    },
    {
        "type": "Pen",
        "name": "Snowman",
        "price": 12000
    },
    {
        "type": "Eraser",
        "name": "Kenko",
        "price": 12000
    },
    {
        "type": "Pen",
        "name": "Kenko",
        "price": 10000
    },
    {
        "type": "Eraser",
        "name": "Kenko",
        "price": 9000
    },
    {
        "type": "Eraser",
        "name": "Snowman",
        "price": 2000
    },
    {
        "type": "Ruler",
        "name": "Snowman",
        "price": 10000
    }
];

let result = filterList(classList);
console.log(result);
