import React, { useEffect, useState } from 'react';

//import './Home.css';
import GoodsList from './../GoodsElements/GoodsList';
import Menu from './../MenuComponent/Menu';

export default function Home() {

  const [goodsList,setGoodsList] = useState([])

  useEffect(() => {
    fetch("/basketList")
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            setGoodsList(result.response);
        }
    )
  },[])

  return (
    <div>
      <Menu/>
      
      <GoodsList List={goodsList}/>
    </div>
  )
}
