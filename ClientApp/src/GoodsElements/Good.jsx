import React from 'react'



export default function DocElement({name, cost, id, ...props}) {

  

  const eventAct = () => {
    window.location.href = "/Document?id=" + id.toString();
  }

  return ( 
        <div className="Good" onClick={eventAct}>
          <div className="DocElementName" /*href={url}*/>{name}</div>
          <div className="DocElementEditDate">{cost}</div>
        </div>
  )
}

//labElement.defaultProps = {items : {123}}