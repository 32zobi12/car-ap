import Dexie from 'dexie';

// Определение схемы базы данных
const db = new Dexie('MyDatabase');
db.version(1).stores({
    cars: '++id,make,model,year', // Создаем таблицу "cars" с автоинкрементным полем "id" и полями "make", "model", "year"
});

export default db;