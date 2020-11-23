import React from 'react'
import './card-list.styles.scss'
import Card from '../card/card.componets'

const CardList= (props) =>(
    <div className='card-list'>
        {props.mons.map(monster => <Card key={monster.id} mons={monster}/>)}
    </div>
)
export default CardList
