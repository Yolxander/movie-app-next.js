import React, { useState, useEffect } from 'react';
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';

import { getMovies, getCategories } from '../actions';

const Home = (props) => {
	const { images,categories } = props;
	return (
		<div>
			<div className="home-page">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
              <SideMenu 
              title={'Categories:'} 
              categories={categories}
              />
						</div>
						<div className="col-lg-9">
							<Carousel images={images} />
							<div className="row">
								<MovieList movies={props.movies} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.home-page {
						padding-top: 60px;
					}
				`}
			</style>
		</div>
	);
};

Home.getInitialProps = async () => {
  const movies = await getMovies()//grabing the movies fetched in actions-index
  const categories = await getCategories()
  const images = movies.map(movie => ({
      id: `image-${movie.id}`,
      url: movie.cover,
      name: movie.name }))

  return {
    movies,
    images,
    categories
  }
}

export default Home;
