import Dexie from 'dexie';

const db = new Dexie('CarDatabase');
db.version(1).stores({
    cars: '++id,make,model,year', // Создайте хранилище для машин с автоинкрементным ключом 'id'
});

// Определите класс модели для машин
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

export { db, Car };