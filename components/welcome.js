import React from 'react';
import { useRouter } from 'next/router';

const Welcome = () => {
	const router = useRouter();
	const { welcome } = router.query;


	const submitModal = () => {
		router.push('/');
	};

	return (
		<div className="welcome-nominee">
			<h2>Movie Next</h2>
			<h3>In this app you'll search and nominate the movies of your choice</h3>
			<p>You'll have a max of 5 nominee</p>
			<button onClick={submitModal} type="button" className="btn btn-primary">
				Start Searching
			</button>
		</div>
	);
};

export default Welcome;
