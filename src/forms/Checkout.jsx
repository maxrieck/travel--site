import React, { useContext } from 'react'
import FormContext from '../context/FormContext'
import './Form.css'


const Checkout = () => {

  const { state } = useContext(FormContext)
  
    const price = state.formData.perNight
    const nights = state.formData.dates?.length
    
  return (
    <div className='formBackground'>

      <div className='checkout'>

        <h3>Book your trip</h3>
        <p>Location: {state.formData.location}</p>
        <p>Hotel: {state.formData.hotel}</p>
        <p>Room Type: {state.formData.room}</p>
        <p>Dates: </p>
        <ul>
          {state.formData.dates.map((date, index) => (
            <li
             key={index}>{date?.toString?.()}</li>
          ))}
        </ul>
        <p>Price per night: ${state.formData.perNight.toFixed(2)}</p>
        <br />
        <hr style={{ border: '1px solid #ccc', margin: '16px 0' }} />
      <h3>Total Price: ${(price * nights).toFixed(2)}</h3>

      <button>Book Now</button>

      </div>

    </div>
  )
}

export default Checkout