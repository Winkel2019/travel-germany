import React, { useState, useEffect } from 'react';
import tripsData from '../tripsData';
import MyContext from './MyContext';

const MyProvider = (props) => {
  const [data, setData] = useState(tripsData);
  const [listData, setListData] = useState([]);
  const [list, setList] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [state, setState] = useState(false);
  const [passedData, setPassedData] = useState(tripsData);
  const [isFiltering, setIsFiltering] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    culturalTrip: false,
    musicTrip: false,
    natureTrip: false,
    shipTrip: false,
    specialTrip: false,
  });

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
    for (const key in checkboxes) {
      if (checkboxes[key] === true) {
        setCheckboxes(false);
      }
    }
    setPassedData(data);
  };

  const newTotalPrice = listData.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  useEffect(() => {
    setTotalPrice(newTotalPrice);
  }, [newTotalPrice]);

  const handleWishlist = ({ trip }) => {
    const found = listData.find((item) => item.id === trip.id);

    if (found === undefined) {
      setListData([...listData, { ...trip, quantity: 1 }]);
      setList(list + 1);
    } else {
      const index = listData.indexOf(found);
      found.quantity += 1;
      let copyListData = [...listData];
      copyListData.splice(index, 1, found);
      setListData(copyListData);
    }
  };

  const handleDelete = ({ trip }) => {
    const found = listData.find((item) => item.id === trip.id);
    const index = listData.indexOf(found);
    let copyListData = [...listData];
    copyListData.splice(index, 1);
    setListData(copyListData);
    setList(list - 1);
  };

  const addQuantity = ({ trip }) => {
    const found = listData.find((item) => item.id === trip.id);

    if (found === undefined) {
      setListData([...listData, { ...trip, quantity: 1 }]);
    } else {
      const index = listData.indexOf(found);
      found.quantity += 1;
      let copyListData = [...listData];
      copyListData.splice(index, 1, found);
      setListData(copyListData);
    }
  };

  const reduceQuantity = ({ trip }) => {
    const found = listData.find((item) => item.id === trip.id);
    const index = listData.indexOf(found);
    found.quantity -= 1;
    let copyListData = [...listData];
    found.quantity >= 1
      ? copyListData.splice(index, 1, found)
      : copyListData.splice(index, 1);
    setListData(copyListData);
    found.quantity === 0 && setList(list - 1);
  };

  return (
    <MyContext.Provider
      value={{
        list,
        setList,
        data,
        setData,
        listData,
        setListData,
        handleWishlist,
        handleDelete,
        totalPrice,
        state,
        setState,
        addQuantity,
        reduceQuantity,
        checkboxHandler,
        checkboxes,
        resetFilter,
        passedData,
        setPassedData,
        isFiltering,
        setIsFiltering,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
