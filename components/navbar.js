import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container">
			<Link href="/nominee">
				<a className="navbar-brand" >
					Movie Next
				</a>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link href="/">
								<a className="nav-link">
									Search
									<span className="sr-only">(current)</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/nominee">
								<a className="nav-link">Nominee</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
