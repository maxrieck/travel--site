import React, { useContext } from 'react'
import FormContext from '../context/FormContext'
import { useNavigate } from 'react-router-dom'
import './Form.css'

const CloseBtn = () => {

  const { state } = useContext(FormContext)

  const navigate = useNavigate()
    
  return (

    <button type='button'
      className='closeBtn'
      onClick={() => {
        navigate(state.prevPath)
        console.log(state.prevPath)
      }}
    >X</button>

  )
}

export default CloseBtn