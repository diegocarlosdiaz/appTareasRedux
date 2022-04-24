import React from 'react'

export const ItemTarea = ({tarea:{id,description,done},i,handleDelete,handleUpdate}) => {
  return (
    <div>
        <li
                key={ id }
                className='d-flex justify-content-between
                 align-items-center'>
                <p
                onClick={()=> handleUpdate(id)}
                className={done&&'text-decoration-line-through'}
                >
                  {i + 1}. {description}
                </p>
                <button
                  className='btn btn-sm btn-danger mb-1'
                  onClick={() => handleDelete(id)}
                >
                  <i className='fas fa-trash-alt'></i>
                </button>
              </li>
    </div>
  )
}
