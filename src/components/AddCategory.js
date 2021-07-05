import React,{ useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [txtNombre, setTxtNombre] = useState('');

    const handleChange = (e) =>{
        setTxtNombre(e.target.value);
        console.log(txtNombre)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
       // console.log(txtNombre)
       if(txtNombre.trim().length>0){
        setCategories( cats => [txtNombre,...cats]);
        setTxtNombre('');
       }
       
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input
                type="text"
                value={txtNombre}
                onChange={handleChange}
            />
        </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired

}