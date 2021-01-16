import React, {useState} from 'react';
import Header from './Header';
import Checkboxes from './Checkboxes';
import TripContainer from './TripContainer';
import Footer from './Footer';

import '../App.css';
import tripsData from '../tripsData';

const App = () => {
  const [data, setData] = useState(tripsData)
  const [checkboxes, setCheckboxes] = useState({
    culturalTrip: false, musicTrip: false, natureTrip: false, shipTrip: false, specialTrip: false,
  });
  const [state, setState] = useState(false)

  const [list, setList] = useState(0)

  const [formData, setFormData] = useState({name:'', email:''})
  const [submit, setSubmit] = useState(false)

  const formHandler = (e) => {
    setFormData({...data, [e.target.name]: e.target.value})
    }
  
  const submitHandler = (e) => {
      e.preventDefault()
      setSubmit(true)
  }

  const handleState = (e) =>{
    setState(!state)
}

  const handleFiltering = () => {
       
    let newDataArray = []
    for (const key in checkboxes) {
        if( checkboxes[key] === true){
            console.log(key)
            console.log("FROM INSIDE");
            newDataArray.push(...data.filter(trip => trip.checkbox === key))
            
            
        }
        setData(newDataArray)
    }
    //setData( data.filter(trip => trip.checkbox === "culturalTrip"))

}

  const checkboxHandler = (e) => {
    setCheckboxes({ ...checkboxes, [e.target.name]: e.target.checked });
    handleFiltering()
    
  };
  console.log('data', data);
  console.log('checkboxes', checkboxes)

  const addList = () => {
    setList(list + 1)
  }

  return (
    <>
    <Header list={list} state={state} formData={formData} formHandler={formHandler} submitHandler={submitHandler} />
    <main className='container'>
     <Checkboxes checkboxes={checkboxes} checkboxHandler={checkboxHandler}/>
     <TripContainer handleState={handleState} dataToShow={data} checkboxes={checkboxes} addList={addList}/>
    </main>
    <Footer />
   </>
  );
}

export default App;
