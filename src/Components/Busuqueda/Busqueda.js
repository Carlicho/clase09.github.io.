import React from "react";
import { useState } from 'react';

function Busqueda (props){

    const [busqueda, setBusqueda] = useState('');
        return(<div>
            
                <div className='input-group p-4' >
                <input className='form-control' type="text" placeholder='Elegi una cancion'
                onChange={(e)=>{
                  setBusqueda(e.target.value);
                }} />
                
                <button className="btn btn-outline-primary">Buscar</button>
         
        
              </div>
              {
              (busqueda.length>0)
               && (<div className='text-end text-info'>
                Usted Quiere Escuchar {busqueda}

               </div>)
              }
              </div>)}
   
   export default Busqueda
        

