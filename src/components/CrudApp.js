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
    return (
        <div>
            <h2>CRUD App</h2>
            <CrudForm/>
            <CrudTable data={db}/>
        </div>
    )
}

export default CrudApp
