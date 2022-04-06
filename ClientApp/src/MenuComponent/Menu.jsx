import React from 'react';

import './Menu.css';
import GetMenuItems from './GetMenuItems';

export default function Menu({items, ...props}) {
  return (
    <div>
        {
            GetMenuItems().map((el) => <a className="menuUrl" href={el.url}>{el.name}</a>)
        }
    </div>
  )
}
