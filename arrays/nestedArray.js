const obj = {
    name: "Issac",
    age: 24,
    cars: [
        {brand: 'ford', models: 'fiesta'},
        {brand: 'bmw', models: 'x3'},
        {brand:'fiat', models: '500'},
    ]
}

for (let i in obj.cars) {
    console.log(obj.cars[i].brand);
    for (let j in obj.cars) {
        console.log(obj.cars[j].models);
    }
}