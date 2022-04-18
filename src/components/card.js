import React from 'react'
import ReactDOM from 'react-dom'
import symbol from '../images/symbol.png'

export default function Card(props) {
    return (
       <section className='card'>
           <div className='card-left'>
            <img src={props.imageUrl} alt='Image from the travel destination' className='card-img'/>
           </div>
           <div className='card-right'>
            <div className='card-flex-1'>
            <img src={symbol} alt="Location Symbol" className='card-symbol' />
            <p className='card-location'>{props.location}</p>
            <a href={props.googleMapsUrl} className='card-maps'>View on Google Maps</a>
            </div>
            <h2 className='card-title'>{props.title}</h2>
            <div className='card-flex-1'>
            <p className='card-startDate strong'>{props.startDate}</p>
            <p className='strong'>-</p>
            <p className='card-endDate strong'>{props.endDate}</p>
            </div>
            <p className='card-text'>{props.description}</p>
           </div>
           <hr className='card-hr' />
       </section>
    )
}