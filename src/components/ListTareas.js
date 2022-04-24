import React from 'react'
import { ItemTarea } from './ItemTarea'

export const ListTareas = ({tareas, handleDelete,handleUpdate}) => {
  return (
    <ul className='list-group list-group-flush px-4'>

            {tareas.map((tarea, i) => (

              <ItemTarea
              key={tarea.id}
              tarea={tarea}
              i={i}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              />

            ))}
          </ul>
  )
}
