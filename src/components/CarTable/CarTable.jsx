import React, { useState, useEffect } from 'react';
import './CarTable.css';
import { db, Car } from './DexieConfig'; // Импортируйте базу данных Dexie и модель Car

const CarTable = () => {
    const [cars, setCars] = useState([]);
    const [newCar, setNewCar] = useState({ make: '', model: '', year: '' });

    useEffect(() => {
        // Загрузите данные из IndexedDB при монтировании компонента
        db.cars.toArray().then((carsFromDB) => {
            setCars(carsFromDB);
        });
    }, []);

    const addCar = () => {
        const { make, model, year } = newCar;

        if (make && model && year) {
            // Добавьте новую машину в IndexedDB
            db.cars.add(new Car(make, model, year)).then((carId) => {
                setCars([...cars, { id: carId, make, model, year }]);
                setNewCar({ make: '', model: '', year: '' });
            });
        }
    };

    const deleteCar = (id) => {
        // Удалите машину из IndexedDB и обновите состояние
        db.cars.delete(id).then(() => {
            const updatedCars = cars.filter((car) => car.id !== id);
            setCars(updatedCars);
        });
    };

    return (
        <div>
            <h1>Car</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mark</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>
                                <button onClick={() => deleteCar(car.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Add New Car</h2>
            <input
                type="text"
                placeholder="Make"
                value={newCar.make}
                onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
            />
            <input
                type="text"
                placeholder="Model"
                value={newCar.model}
                onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
            />
            <input
                type="number"
                placeholder="Year"
                value={newCar.year}
                onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
            />
            <button onClick={addCar}>Add</button>
        </div>
    );
};

export default CarTable;