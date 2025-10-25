import React, { useContext } from 'react'
import FormContext from './context/FormContext'

const Test = () => {

    const { state } = useContext(FormContext)


  return (

    <div>
        <p>{state.formData.name}</p>
        <p>{state.formData.location}</p>
        <p>{state.formData.hotel}</p>
        <p>{state.formData.room}</p>
        <p>{state.formData.price}</p>           
              


    </div>
  )
}

export default Test