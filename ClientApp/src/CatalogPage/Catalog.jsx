import React, { useEffect, useState } from 'react';
import GoodsList from './../GoodsElements/GoodsList';
import Menu from './../MenuComponent/Menu';


export default function Main({...props}) {

    const [goodsList,setGoodsList] = useState([])

    useEffect(() => {
        fetch("/goodsList")
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

//labElement.defaultProps = {items : {123}}