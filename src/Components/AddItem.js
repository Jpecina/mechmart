import React from 'react';
import FormSheet from './Form';

function AddItem(){
    const style = {
        height:'70%',
        width: '50%',
        display:'flex',
    }
    return(
        <div className = "form-div" style = {style}>
        <FormSheet/>
        </div>
    )
}
export default AddItem