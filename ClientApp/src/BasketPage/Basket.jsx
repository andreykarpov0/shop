import React, { useEffect, useState } from 'react'

//import './Home.css';
import GoodsList from './../GoodsElements/GoodsList';

export default function Home() {
  const testList = [{id:"/1", name:"one"}]

  const [DocElements,setDocElements] = useState([])

  useEffect(() => {
    fetch("/projectList")
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
      <Menu items={GetMenuItems()}/>
      <DocView List={testList}/>
    </div>
  )
}
