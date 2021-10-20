import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


const CrudApi = () => {
    const [db, setDb] = useState([]);

    const [dataToEdit, setDataToEdit] = useState(null)

    /* variable simplificado del useHttp */
    let api = helpHttp();
    let url = "http://localhost:5000/clientes";

    useEffect(() => {
        api.get(url).then((res) => {
            if(!res.err){
                setDb(res);
            } else {
                setDb(null)            
            }
        });
    }, []);

    
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
            <h2>CRUD Api</h2>
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

export default CrudApi
