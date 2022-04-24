import React, { useEffect, useReducer } from 'react';
import './App.css';
import { tareasReducers } from './reducers/tareasReducers'
import {useForm} from './hooks/useForm'

/* const initialState = [
  {
    id: new Date().getTime(),
    description: "Aprender Mongo",
    done: false,
  }
] */

const init = () => {
   /* [
    {
      id: new Date().getTime(),
      description: "Aprender Mongo",
      done: false,
    }
  ] */

  return JSON.parse(localStorage.getItem('tareas')) || []
  
}


function App() {

  const [tareas,dispatch] = useReducer(tareasReducers, [], init)

  /* console.log(tareas); */

  const [{description},handleInputChange, reset] = useForm({
    description:"",
  })

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  
   
  }, [tareas])
  
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(description.trim().length < 1) {
      return
    }
    let nuevaTarea = 
    {
      id: new Date().getTime(),
      description,
      done: false,
    }

    const agregarTarea = {
      type:'agregar' ,
      payload: nuevaTarea
    }
    dispatch(agregarTarea);

    reset()
  }

  const handleDelete = (id) => {
  const borrarTarea = {
    type:"borrar",
    payload: id
  }
  dispatch(borrarTarea)
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
          <ul className='list-group list-group-flush px-4'>

            {tareas.map(({ description, done, id  }, i) => (

              <li
                key={description + i}
                className='d-flex justify-content-between
                 align-items-center'>
                <p>
                  {i + 1}. {description}
                </p>
                <button
                  className='btn btn-sm btn-danger mb-1'
                  onClick={() => handleDelete(id)}
                >
                  <i className='fas fa-trash-alt'></i>
                </button>
              </li>

            ))}
          </ul>
        </div>
        <div className='col-5'>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name='description'
              placeholder='Aprender...'
              autoComplete='off'
              className='form-control'
              value={description} 
              onChange={handleInputChange}

            />
            <button
              type="submit"
              className='btn btn-primary w-100 mt-2'>
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
