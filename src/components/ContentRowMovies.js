import React from 'react';
import SmallCard from './SmallCard';

let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

let totalAwards = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    return (
        <div className="row">
            {cartProps.map( (movie, i) => {
                return <SmallCard {...movie} key={i}/>
            })}
        </div>
    )
}

export default ContentRowMovies;