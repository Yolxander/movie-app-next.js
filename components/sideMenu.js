import Modal from "./modal";


const SideMenu = (props) => {
	const { categories } = props;
	return (
		<div>
            <Modal />
			<h1 className="my-4 title">{props.title}</h1>
			<div className="list-group">
				{categories.map((c,index) => (
                    <a 
                    key={index}
                    href="#" 
                    className="list-group-item">
						{c.name}
					</a>
				))}
			</div>
            <style jsx>
				{`
					.title {
						font-size: 30px
					}
				`}
			</style>
		</div>
	);
};

export default SideMenu;
