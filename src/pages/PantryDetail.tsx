import { Fragment, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data from '../assets/data/data';
import { PantryProps } from './PantryCard';


const PantryDetail = () => {
  const { pantryID } = useParams();
  // Use the id to fetch additional data or perform operations;
  const pantryData = data.filter(item => item.id === Number(pantryID));
  //or you can fake fetch call.
  // const [pantryData1, setData] = useState([]);
  // useEffect(() => {
  //   setData(pantryData as []);

  //   return () => {

  //   };
  // }, []);
  return (
    <>
      {pantryData.map((item: PantryProps) =>
        <div key={item.id}>
          <h1>{item.title}</h1>
          <div>
            <p>{item.description}</p>
            <p> {item.location}</p>
          </div></div>)}
    </>
  );

};

export default PantryDetail;
