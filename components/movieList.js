import React, { useEffect } from 'react';

const MovieList = ({ movies }) => {
    
    // reduce text
    const shorten =(text,maxLength)=>{
        if(text && text.length > maxLength){
            return text.substr(0,maxLength) + '...'
        }
        return text
    }

	return (
		// used "react fragment" instead of "div" cuz boostrap will have issues if the div containig the boostrap class is a child like in this case
		<>
			{movies.map((movie, index) => {
				return (
					<div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
						<div className="card h-100">
							<a href="#">
								<img
									className="card-img-top"
									src={movie.image}
									alt={movie.name}
								/>
							</a>
							<div className="card-body">
								<h4 className="card-title">
									<a href="#">{movie.name}</a>
								</h4>
								
								<p className="card-text">
									{shorten(movie.description,200)}
								</p>
							</div>
							<div className="card-footer">
								<small className="text-muted">
									{movie.rating}
								</small>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default MovieList;
