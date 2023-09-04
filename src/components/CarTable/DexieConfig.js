import Dexie from 'dexie';

const db = new Dexie('CarDatabase');
db.version(1).stores({
    cars: '++id,make,model,year', // �������� ��������� ��� ����� � ���������������� ������ 'id'
});

// ���������� ����� ������ ��� �����
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

export { db, Car };