import React from 'react';
import { useRouter } from 'next/router';

const Banner = () => {
	const router = useRouter();
	const { Banner } = router.query;

	let closeButton = null;

	const handleClose = () => {
		router.push('/nominee');
	};


	return (
		<div className="card">
			<div className="card-header">Limit Reached</div>
			<div className="card-body">
				<h5 className="card-title">You have 5 nominations</h5>
				<button
					onClick={handleClose}
					ref={(ele) => (closeButton = ele)}
					type="button"
					classNameName="btn btn-secondary"
					data-dismiss="modal"
				>
					See Nominee
				</button>
			</div>
		</div>
	);
};

export default Banner;
