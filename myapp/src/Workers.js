import React from 'react';
// Why const here? Why not function?
const Workers = ({ workers, deleteWorkers }) => {
    const workerList = workers.map(worker => {
        return worker.age > 20 ? (
            <div className="workers" key={worker.id}>
                <div>Name: {worker.name}</div>
                <div>Age: {worker.age}</div>
                <div>Belt: {worker.belt}</div>
                <button>Delete worker</button>
            </div>
        ) : null
    })


    return (
        <div className="worker-list">
            {workerList}
        </div>
    )
}

export default Workers