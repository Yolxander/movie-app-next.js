import React, { useState } from 'react';
import Modal from '../components/modal';
import Banner from '../components/banner';


const SearchResults = (props) => {
    
    
    const handleIndex =(index)=>{
        props.handleFormSubmit(props.results[index])
        
    }
    const name = props.movies.map(el=>el.Title)
    const movieLimit = props.movies.length === 5

	return (
		<div className="resultsSection">

            {movieLimit && <div className="banner"><Banner /></div>}

            {props.results && props.results.map((result,index)=>{
                return(
                    <div key={index}className="movieCard">
                            <h2>{result.Title}</h2>
                            <img alt={result.Title} src={result.Poster}/>
                            <h3>{result.Year}</h3>
                            {/* this check that the same movie wont get nominated more than once */}
                            {movieLimit || name.includes(result.Title)?  null : <Modal handleIndex={handleIndex} index={index} movies={props.movies} />}
                    </div>
                )
            })}
            {!props.query && <div><h2>Let's find your movie</h2></div>}
            {props.query && !props.results && <div>loading..</div>}
            
		</div>
	);
};




export default SearchResults;
