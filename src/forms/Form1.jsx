import React, { useState, useContext } from 'react'
import  FormContext from '../context/FormContext'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import CloseBtn from './CloseBtn'



const Form1 = () => {


    const { state , dispatch } = useContext(FormContext)

    const [newName, setNewName] = useState('')
    const [notifications, setNotifications] = useState(false)
    const [newEmail, setNewEmail] = useState('')

    const navigate = useNavigate()

    const handleForm = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_INFO',
            payload: {
                name: newName,
                email: newEmail,
                notifications: notifications,

            }
         })        
         navigate('/form2')
    }


  return (
    <div className='formBackground'>
      {state.formData.notifications && <p>
        Notifications Enabled!
      </p>}

      <form className='formMain' onSubmit={handleForm}>

      <CloseBtn />

        <h2>Registration Form</h2>
        <br />
        <input
          type="text" value={newName} placeholder='Your Name'
          onChange={e => setNewName(e.target.value)}
        />

        <input 
          type="email" value={newEmail} placeholder='Your Email'
          onChange={e => setNewEmail(e.target.value)}
        />

          <h3>Notifications</h3>
        <div stlye={{display: 'inline'}}>
          <label>
            <input
              type="radio"
              name="notifications"
              value="true"
              checked={notifications === true}
              onChange={() => setNotifications(true)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="notifications"
              value="false"
              checked={notifications === false}
              onChange={() => setNotifications(false)}
            />
            No
          </label>
        </div>

        <button type='submit'>Next</button>
      </form>
    </div>
  )
}

export default Form1