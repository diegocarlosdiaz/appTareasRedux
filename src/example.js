/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
 
    <App />,
  
  document.getElementById('root')
);


 */

const initialState = [
    {
      id: 1,
      tarea: 'Aprender React',
      completada: false
    }
  ]
    ;
  
  const tareasReducer = (state = initialState, action) => {
  
    switch (action?.type) {
      case 'agregar':
  
        return [...state, action.payload];
  
      default:
        return state;
    }
  
  }
  
  let tareas = tareasReducer();
  
  
  
  
  const nuevaTarea = {
    id: 2,
    tarea: 'Aprender Mongo',
    completada: false
  }
  
  const agregarTarea = {
  
    type: 'agregar',
    payload: nuevaTarea
  }
  
  tareas = tareasReducer(tareas, agregarTarea)
  
  
  console.log(tareas);
  
  
  
  
  /* console.log(tareas);
   */