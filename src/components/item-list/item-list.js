import React from 'react';
import './item-list.scss';

const ItemList = (props) => {
  const { data, children: getLabel, onItemSelected } = props;
  const items = data.map((item) => {
    const {id} = item;
    const label = getLabel(item);
    return (
    <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
    >
      {label}
    </li>
    )
  })
  
  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
}

export default ItemList;
