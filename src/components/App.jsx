import React, {useRef, useState, useEffect, useReducer} from 'react';
import Header from './Header';
import Checkboxes from './Checkboxes';
import TripContainer from './TripContainer';
import Footer from './Footer';
import tripsData from '../tripsData';
import {countListReducer} from '../reducers/countListReducer'

import '../App.css';

const App = () => {
  const [data, setData] = useState(tripsData)
  const [passedData, setPassedData] = useState(tripsData);
  const [checkboxes, setCheckboxes] = useState({
    culturalTrip: false, musicTrip: false, natureTrip: false, shipTrip: false, specialTrip: false,
  });
  const [isFiltering, setIsFiltering] = useState(false);

  const [state, setState] = useState(false)

  const [formData, setFormData] = useState({name:'', email:''})
  const [submit, setSubmit] = useState(false)

  const [list, dispatchList] = useReducer(countListReducer, 0)

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

  useEffect(() => {
    const handleFiltering = () => {
      let newDataArray = [];
      for (const key in checkboxes) {
        if (checkboxes[key] === true) {
          const tempArray = data.filter((trip) => trip.checkbox === key);
          newDataArray.push(...tempArray);
        }
        setPassedData(newDataArray);
      }
    };

    if (isFiltering) {
      handleFiltering();
      setIsFiltering(false);
    }
  }, [passedData, isFiltering, checkboxes, data]);

  const checkboxHandler = (e) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
    if (!isFiltering) {
      setIsFiltering(true);
    }
  };

  const resetFilter = () => {
    for(const key in checkboxes){
        if(checkboxes[key] === true){
            setCheckboxes(false) 
        }
    } 
    setPassedData(data)
  }


  return (
    <>
    <Header list={list} state={state} formData={formData} formHandler={formHandler} submitHandler={submitHandler} />
    <main className='container'>
     <Checkboxes checkboxes={checkboxes} setCheckboxes={setCheckboxes} checkboxHandler={checkboxHandler} resetFilter={resetFilter}/>
     <TripContainer handleState={handleState} dataToShow={passedData.length > 0 ? passedData : data} checkboxes={checkboxes} dispatchList={dispatchList} />
    </main>
    <Footer />
   </>
  );
}

export default App;
