import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Personaje from './Personaje';

const PintarDatos = ({nombrePersonaje}) => {

    const [personajes, setPersonajes] = useState([])

    useEffect(()=>{
        consumirApi(nombrePersonaje);
    },[nombrePersonaje]);

    const consumirApi = async (nombre) =>{
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive
            `);
            if(!res.ok){
                return Swal.fire({
                    title:'Error',
                    text:'Escriba algo aqui',
                    icon:'error'
                })
            }
            const data = await res.json();
            console.log(data.results)
            setPersonajes(data.results)
        } catch (error) {
          
        } finally{

        }

    }

  return (
    <div className='row mt-2'>
        {
            personajes.map((item) => (
                <Personaje key={item.id} personaje={item}/>
            ))
        }
    </div>
  );
};

export default PintarDatos