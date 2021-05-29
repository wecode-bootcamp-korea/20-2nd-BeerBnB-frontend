import React, { useState, useEffect } from 'react';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import Step4 from './Components/Step4';
import Step5 from './Components/Step5';

const InitialData = {
  name: null,
  category: null,
  adult: 1,
  children: 0,
  amenity: [],
  min_date: 0,
  max_date: 0,
  address: null,
  price: null,
  images: null, //마지막 순서로 구현 예정
  is_refund: null,
};

const Host = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState(InitialData);

  const sendToServer = () => {
    const url = 'http://15.165.250.158:8000/user/host';
    const option = {
      method: 'POST',
      body: JSON.stringify({
        name: inputValue.name,
        category: inputValue.category,
        adult: inputValue.adult,
        children: inputValue.children,
        amenity: inputValue.amenity,
        min_date: inputValue.min_date,
        address: inputValue.address,
        price: inputValue.price,
        images: inputValue.images, //마지막 순서로 구현 예정
        is_refund: inputValue.is_refund,
      }),
    };
    fetch(url, option);
  };

  return (
    <div>
      {currentPage === 1 && (
        <Step1
          setCurrentPage={setCurrentPage}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      )}
      {currentPage === 2 && (
        <Step2
          setCurrentPage={setCurrentPage}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      )}
      {currentPage === 3 && (
        <Step3
          setCurrentPage={setCurrentPage}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      )}
      {currentPage === 4 && (
        <Step4
          setCurrentPage={setCurrentPage}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      )}
      {currentPage === 5 && (
        <Step5
          setCurrentPage={setCurrentPage}
          setInputValue={setInputValue}
          inputValue={inputValue}
          sendToServer={sendToServer}
        />
      )}
    </div>
  );
};

export default Host;
