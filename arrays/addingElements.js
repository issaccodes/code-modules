const cars = ['Volvo', 'BMW', 'Lamborghini', 'Ferrari', 'Mercedes'];
cars[cars.length] = 'Hero Honda';
cars.push('Pagani');


console.log(cars.toString());

cars.pop();
console.log(cars.toString());