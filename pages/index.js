import React, { useState } from 'react';
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';

import { getMovies } from '../actions';

const Home = () => {
	const [movies, setMovies] = useState([]);

	// improve this because now it's called everytime!
	getMovies().then((movies) => {
		setMovies(movies);
	});

	return (
		<div>
			<div className="home-page">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<SideMenu appName={'Movie DB'} />
						</div>
						<div className="col-lg-9">
							<Carousel />
							<div className="row">
								<MovieList movies={movies} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.home-page {
						padding-top: 80px;
					}
				`}
			</style>
		</div>
	);
};

export default Home;
