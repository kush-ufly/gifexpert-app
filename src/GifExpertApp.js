import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['Monster Inc','Bichos','Buscando a Nemo'];
const [categories, setCategories] = useState(['Monster Inc']);

 //const handleAdd = (nombre)=>{
    //setCategories( cats => [...cats, nombre]);
// }
//Variables de Componenentes


    return (
        <>
           <h2>GifExpertApp</h2> 
           <AddCategory setCategories={setCategories}/>
           <hr/>
           
           <label>Introduce el Nombre De la Película de Pixar</label>
           

           <ol>
               {
                   categories.map((category) => ( 
                           <GifGrid
                           
                           key={category}
                           category ={category}
                           
                           />
                    ))
               }
           </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
