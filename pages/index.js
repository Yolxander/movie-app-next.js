import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResults from './searchResults';
import { createMovie, getMovies } from '../actions';

const API_KEY = 'ce762116';

const Search = (props) => {
	const [q, setQuery] = useState('');
	const [data, setData] = useState(null);

	const { movies } = props;

	

	const handleCreateMovie = (movie) => {
		createMovie(movie);
	};

	useEffect(() => {
		axios
			.get(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
			.then((resp) => {
				setData(resp.data.Search);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [q]);

	return (
		<div className="wrapper">
			<div className="searchBar">
				<div className="ui fluid icon input">
					<input
						className="searchBar"
						placeholder="search by name"
						value={q}
						id="name-input"
						type="text"
						onChange={(e) => setQuery(e.target.value)}
					/>
					<i className="search icon"></i>
				</div>
			</div>
			<SearchResults
				results={data}
				query={q}
				handleFormSubmit={handleCreateMovie}
				movies={movies}
			/>
		</div>
	);
};

Search.getInitialProps = async () => {
	const movies = await getMovies();
	return {
		movies,
	};
};

export default Search;
