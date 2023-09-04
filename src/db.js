import Dexie from 'dexie';

// ����������� ����� ���� ������
const db = new Dexie('MyDatabase');
db.version(1).stores({
    cars: '++id,make,model,year', // ������� ������� "cars" � ���������������� ����� "id" � ������ "make", "model", "year"
});

export default db;