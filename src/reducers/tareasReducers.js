

export const tareasReducers = (state=[], action) => {

    switch (action?.type) {
        case 'agregar':
            //agregar elemento al array
            
            return [...state, action.payload]; // +elemente agregado

            case 'borrar' : 
            //eliminar elemente al array

            return state.filter(tarea => tarea.id!== action.payload); // -elemento eliminado

            case 'update' : 

            return state.map(tarea => {
                if(tarea.id===action.payload){
                    return{
                        ...tarea,
                        done: !tarea.done
                    }
                }else{
                    return tarea
                }
            })
    
        default:
            return state;
    }
 
   

}
