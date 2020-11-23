import React from 'react'
import './card.styles.scss'

const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.mons.id}?set=set2&size=200x200 `} alt="monsters"/>
        <h1> {props.mons.name} </h1>
        <p>{props.mons.email}</p>
    </div>
)

export default Card