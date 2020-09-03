
import { useRouter } from 'next/router';



// Containment
const SideMenu = (props) => {
	const { categories } = props;
	const router = useRouter();
	let modal = null;

	

	return (
		<div>
			<h1 className="my-4 categorie">Categories:</h1>
		</div>
	);
};

export default SideMenu;
