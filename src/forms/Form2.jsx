import { useState, useContext,  } from 'react'
import FormContext from '../context/FormContext'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-multi-date-picker';
import './Form.css'
import CloseBtn from './CloseBtn';


const Form2 = () => {

  const { dispatch } = useContext(FormContext)

  const [dates, setDates] = useState([]);

  const navigate = useNavigate()

  const handleForm = (e) => {
      e.preventDefault()
      dispatch({type: 'ADD_INFO',
        payload: {
          dates: dates
        }
      })

      navigate('/form3')
  }

  return (

    <div className='formBackground'>

      <form onSubmit={handleForm} className='formMain' >

        <CloseBtn />

      <button type='button' 
      className='backBtn' 
      onClick={() => navigate('/form1')}>Go back</button>

      <DatePicker
        multiple
        value={dates}
        onChange={setDates}
        placeholder="Select multiple dates"
        />

        <div>
         <h4>Selected dates:</h4>

         <ul>
          {dates.map((date, index) => (
            <li key={index}>{date.format('MM/DD/YYYY')}</li>
          ))}
         </ul>
         
        </div>

        <button type='submit'>Next</button>

        </form>

    </div>

  )
}

export default Form2