import React, { useEffect, useState } from 'react'

//import './Home.css';
import GoodsList from './../GoodsElements/GoodsList';

export default function Home() {

  const [goodsList,setGoodsList] = useState([])

  useEffect(() => {
    fetch("/goodsList")
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            setDocElements(result.response);
        }
    )
  },[])

  return (
    <div>
      <GoodsList List={goodsList} />
    </div>
  )
}
