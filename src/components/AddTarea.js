import React from 'react'
import {useForm} from '../hooks/useForm'


export const AddTarea = ({handleAdd}) => {

    const [{description},handleInputChange, reset] = useForm({
        description:"",
      })

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
        
    
        handleAdd(nuevaTarea)
    
        reset()
      }
  return (
    <div>
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
  )
}
