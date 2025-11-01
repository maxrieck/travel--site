import { Link, useLocation } from 'react-router-dom'
import Form3 from '../forms/Form3'
import { useContext } from 'react'
import FormContext from '../context/FormContext'
import MainCarousel from '../mainCarousel/MainCarousel'
import { vacationData } from '../mainCarousel/data'


const Homepage = () => {

  const { dispatch } = useContext(FormContext)

  const location = useLocation()

  const setLocation = () => {
    dispatch({type: "SET_PATH",
      payload: location.pathname
    })
  }

  return (
    <div>        

        <MainCarousel data = {vacationData}/>

        <Link to='/form1' 
          className='bookBtn'
          onClick={setLocation}         
        >Book Now</Link>

        

    </div>
  )
}

export default Homepage