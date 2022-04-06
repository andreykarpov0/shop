import React from 'react'

import Good from './Good'

export default function DocView({List, ...props}) {
  
  return (
    <div>
        {
          List.map((el) => <Good name={el.name} cost={el.cost} id={el.id} key={el.id.toString()}/>)
        }
    </div>
  )
}
