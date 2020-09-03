import React, { useState, useEffect } from 'react';
import SideMenu from '../components/sideMenu';
import MovieList from '../components/movieList';

import { getMovies, getCategories } from '../actions';
import Footer from '../components/footer';
import Welcome from '../components/welcome';

const Nominee = (props) => {
	const { movies } = props;
	const empty = movies.length === 0

	return (
		<div>
			<div className="home-page">
				<div className="container">
					<div className="row">
						<div className="col-lg-2">
						</div>
						<div className="col-lg-8">
							<div className="row">
								{movies && <MovieList movies={movies} />}
								{ empty &&  <Welcome /> }
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

Nominee.getInitialProps = async () => {
	const movies = await getMovies();
	const categories = await getCategories();
	const images = movies.map((movie) => ({
		id: `image-${movie.imdbID}`,
		url: movie.Poster,
		name: movie.Title,
	}));

	return {
		movies,
		images,
		categories,
	};
};

export default Nominee;
