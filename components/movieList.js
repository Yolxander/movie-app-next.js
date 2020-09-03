import React from 'react';
import { deleteMovie } from '../actions'
import { useRouter } from 'next/router';

const MovieList = (props) => {
	const { movies } = props;
	const router = useRouter();
	const { id } = router.query;

	const handleDeleteMovie = (id) => {
		deleteMovie(id).then(() => {
			router.push('/nominee');
		});
	};

	return movies.map((movie) => (
		<div key={movie.id} className="col-lg-4 col-md-6 mb-4">
			<div className="card">
				<a>
					<img className="card-img-top" src={movie.Poster} alt="" />
				</a>
				<div className="card-body">
					<h4 className="card-title">
						<a>{movie.Title}</a>
					</h4>
					<div>{movie.genre}</div>
					<p className="card-text">{movie.Year}</p>
					<button
					onClick={() => handleDeleteMovie(movie.id)}
					className="btn btn-danger btn-lg"
					href="#"
					role="button"
				>
					Delete
				</button>
				</div>
			</div>
		</div>
	));
};

export default MovieList;
