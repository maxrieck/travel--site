import { Route, Routes } from 'react-router-dom'
import { FormProvider } from './context/FormContext'
import './App.css'
import Homepage from './pages/Homepage'
import Form1 from './forms/Form1'
import Form2 from './forms/Form2'
import Form3 from './forms/Form3'
import Form4 from './forms/Form4'
import Navbar from './navbar/Navbar'
import Checkout from './forms/Checkout'
import Test from './Test'


function App() {
  

  return (
    <>
      <FormProvider>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Homepage />}/>
          <Route path='/form1' element={<Form1 />}/>
          <Route path='/form2' element={<Form2 />}/>
          <Route path='/form3' element={<Form3 />}/>
          <Route path='/form4' element={<Form4 />}/>
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Test />
      </FormProvider>
    </>
  )
}

export default App
