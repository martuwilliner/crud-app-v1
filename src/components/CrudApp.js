import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialData = [
    {
        id: 1,
        name: "Seiya",
        constellation:"Pegaso"
    },
    {
        id: 2,
        name: "Shiryu",
        constellation:"Dragón"
    },
    {
        id: 3,
        name: "Hyoga",
        constellation:"Cisne"
    },
    {
        id: 4,
        name: "Shun",
        constellation:"Andrómeda"
    },
    {
        id: 5,
        name: "Ikki",
        constellation:"Fénix"
    },
];
const initialDb= [
    {
        id: 1,
        name: "Martin",
        lastname: "Williner"
    },
    {
        id: 2,
        name: "Maria",
        lastname: "Visintin"
    },
    {
        id: 3,
        name: "Nilda",
        lastname: "Leal"
    },
    {
        id: 4,
        name: "Laura",
        lastname: "Casuso"
    },
    {
        id: 5,
        name: "Lautaro",
        lastname: "Aravena"
    },
];

const CrudApp = () => {
    const [db, setDb] = useState(initialDb);

    const [dataToEdit, setDataToEdit] = useState(null)

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db,data])
    }

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el)
        setDb(newData);
    }

    const deleteData = (id) => {
        let isDelete = window.confirm(`Estás seguro de eliminar el registro del id '${id}'?`)
    
        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData)
        }else{
            return;
        }
    } 

    return (
        <div>
            <h2>CRUD App</h2>
            <article className="grid-1-2">
            <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            />
            <CrudTable data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
            />
            </article>
           
        </div>
    )
}

export default CrudApp
