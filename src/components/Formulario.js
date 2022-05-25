import React from 'react';
import Swal from 'sweetalert2';
import {useFormulario} from "../hooks/UseFormulario"

const Formulario = ({setNombrePersonaje}) => {

    const [inputs, handleChange , reset ]=useFormulario({
        nombre:''
    });

    const {nombre} = inputs;

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(nombre)

        if(!nombre.trim()){
            return Swal.fire({
                title:'Error',
                text:'Escriba algo aqui',
                icon:'error'
            })

        }

        setNombrePersonaje(nombre.trim().toLowerCase())
        reset()
    }

  return (
  
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder='Ingrese personaje'
            className='form-control'
            value= {nombre}
            onChange={handleChange}
            name="nombre"
            />
            <br/>
            <button type='submit' className='btn btn-dark'>ENVIAR</button>
        </form>
    
 
  )
}

export default Formulario