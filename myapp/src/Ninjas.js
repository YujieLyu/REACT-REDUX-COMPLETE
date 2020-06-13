import React from 'react';

const Ninjas = ({ ninjas, deleteNinja }) => {

    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className="ninja" key={ninja.id}>
                <div>name: {ninja.name}</div>
                <div>age: {ninja.age}</div>
                <div>belt: {ninja.belt}</div>
                <button onClick={()=>{deleteNinja(ninja.id)}}>Delete Ninja</button>
            </div>
        ) : null
    });
    return (
        <div className="ninjaList">
            {ninjaList}
        </div>
    )

}

export default Ninjas