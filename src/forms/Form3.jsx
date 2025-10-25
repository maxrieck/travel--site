import { destinations, roomTypes } from './formData'
import { useState, useContext, } from 'react'
import { useNavigate } from 'react-router-dom';
import FormContext from '../context/FormContext';
import './Form.css'


const Form3 = () => {

  const { dispatch } = useContext(FormContext)
  
  const [newLocation, setNewLocation] = useState('')
  const [newHotel, setNewHotel] = useState('')
  const [newRoom, setNewRoom] = useState('')
  const [perNight, setPerNight] = useState(0)

  const hotels = destinations.find(dest => dest.location === newLocation)?.hotels || []

  const navigate = useNavigate()

  const pricePerNight = () => {
    const hotelObj = hotels.find(h => h.name === newHotel);
    const roomObj = roomTypes.find(r => r.type === newRoom);

    if (!hotelObj || !roomObj) return 0;

    setPerNight(hotelObj.price * roomObj.value)
  }

  const handleForm = (e) => {
    e.preventDefault()
    dispatch({type: 'ADD_INFO',
      payload: {
        location: newLocation,
        hotel: newHotel,
        perNight: perNight,
        room: newRoom,
      }
    })
    navigate('/checkout')

  }

  return (

    <div className='formBackground'>

      <form className='formMain' onSubmit={handleForm}>
      
      <select name="location" id=""
        value={newLocation} onChange={e => setNewLocation(e.target.value)}
      >
        <option value="">Select Destination</option>
        {destinations.map((item, index) => (
          <option key={index} value={item.location}>{item.location}</option>
        ))}
      </select>

      <select name="hotels" id="" 
        value = {newHotel} onChange={e => setNewHotel(e.target.value)}
      >
        <option value="" >Select Hotel</option>
        {hotels.map((item, index) => (
          <option key={index} value={item.name}>{item.name} ${item.price}</option>
        ))}
      </select>

      <select name="rooms" id=""
        value={newRoom} onChange={e => setNewRoom(e.target.value)}
      >
        <option value=""></option>
        {roomTypes.map((item, index) => (
          <option key={index} value={item.type}>{item.type}</option>
        ))}
      </select>

      <button type='button' onClick={pricePerNight}>Check Price</button>

      <h3>${perNight.toFixed(2)}</h3>

      <button type='submit'>Next</button>

      </form>

    </div>
    
  )
}

export default Form3