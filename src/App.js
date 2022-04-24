import React, { useEffect, useReducer } from 'react';
import './App.css';
import { tareasReducers } from './reducers/tareasReducers'
import { AddTarea } from './components/AddTarea';
import { ListTareas } from './components/ListTareas';

const init = () => {
 

  return JSON.parse(localStorage.getItem('tareas')) || []
  
}


function App() {

  const [tareas,dispatch] = useReducer(tareasReducers, [], init)

  /* console.log(tareas); */

 

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  
   
  }, [tareas])

  const handleAdd = (nuevaTarea) => {
    const agregarTarea= {
      type:"agregar",
      payload: nuevaTarea
    }
    dispatch(agregarTarea)
  }
  
  const handleDelete = (id) => {
    //action de borrar
  const borrarTarea = {
    type:"borrar",
    payload: id
  }
  dispatch(borrarTarea)
  }

  const handleUpdate = (id) => {
    const updateTarea = {
      type: 'update',
      payload:id
    }

    dispatch(updateTarea)
  }
  
  
 
  return (
    <div>
      <h1>tareas App</h1>
      <hr />
      <h4>
        Total de tareas: {tareas.length}
      </h4>
      <hr />
      <div className='row'>
        <div className='col-7'>
         <ListTareas
         tareas={tareas}
         handleDelete={handleDelete}
         handleUpdate={handleUpdate}
         />
        </div>
        <div className='col-5'>
          <AddTarea
          handleAdd={handleAdd}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
