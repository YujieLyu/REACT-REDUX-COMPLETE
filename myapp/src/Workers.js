import React from 'react';
import './Workers.css'
// Why const here? Why not function?
const Workers = ({ workers, deleteWorker }) => {
    const workerList = workers.map(worker => {
        return worker.age > 20 ? (
            <div className="workers" key={worker.id}>
                <div>Name: {worker.name}</div>
                <div>Age: {worker.age}</div>
                <div>Belt: {worker.belt}</div>
                <button onClick={()=>{deleteWorker(worker.id)}}>Delete worker</button>
            </div>
        ) : null
    });


    return (
        <div className="worker-list">
            {workerList}
        </div>
    )
};

export default Workers;
