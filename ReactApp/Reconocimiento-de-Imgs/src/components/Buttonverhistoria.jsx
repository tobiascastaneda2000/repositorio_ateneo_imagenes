import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'


export const Buttonverhistoria = (props)=>{

    console.log(`estas son  los valores de las props del boton ${Object.values(props)}`);
    /*let nuevoIndices= props.maps(=>(element){ element})*/
    return <Link to={`/historia/${Object.values(props)}`} className="button">  ver historia    </Link>

        







}