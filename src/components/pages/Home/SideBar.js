import React from 'react'
import './SideBar.css'
import EventCard from './EventCard'

function SideBar(props) {
    const cardList = props.item.map((card,index) => <EventCard
        alt={index}
        key={card.id}
        party={card.party}
        img={card.img}
        rating={card.rating}
        more={card.more}
        user={card.user}
        eventNum={props.eventNum}
        setEventNum={props.setEventNum}
        setChosenEvent={props.setChosenEvent} 
        chosenEvent ={props.chosenEvent}
        eventButton={props.eventButton}
        setEventButton={props.setEventButton}
    />)
    return (
        <div className="event-card-list">
            {cardList}
        </div>
    )
}

export default SideBar