import { useState } from 'react';

const MovieCreateForm = () => {
	const [form, setForm] = useState({
	});

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;

		setForm({
			...form,
			[name]: target.value,
		});
	};

	return (
		<form>
            {JSON.stringify(form)}
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					onChange={handleChange}
					name="name"
					value={form.name}
					type="text"
					className="form-control"
					id="name"
					aria-describedby="emailHelp"
					placeholder="Lord of the Rings"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="description">Description</label>
				<input
					onChange={handleChange}
					name="description"
					value={form.description}
					type="text"
					className="form-control"
					id="description"
					placeholder="Somewhere in Middle-earth..."
				/>
			</div>
			<div className="form-group">
				<label htmlFor="description">Rating</label>
				<input
					onChange={handleChange}
					name="description"
					value={form.rating}
					type="number"
					max="5"
					min="0"
					className="form-control"
					id="rating"
					placeholder="3"
				/>
				<small id="emailHelp" className="form-text text-muted">
					Max: 5, Min: 0{' '}
				</small>
			</div>
			<div className="form-group">
				<label htmlFor="image">Image</label>
				<input
					onChange={handleChange}
					name="image"
					value={form.image}
					type="text"
					className="form-control"
					id="image"
					placeholder="http://....."
				/>
			</div>
			<div className="form-group">
				<label htmlFor="cover">Cover</label>
				<input
					onChange={handleChange}
					name="cover"
					value={form.cover}
					type="text"
					className="form-control"
					id="cover"
					placeholder="http://......"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="longDesc">Long Description</label>
				<textarea
					onChange={handleChange}
					name="longDesc"
					value={form.longDesc}
					className="form-control"
					id="longDesc"
					rows="3"
				></textarea>
			</div>
			<div className="form-group">
				<label htmlFor="genre">Genre</label>
				<select multiple className="form-control" id="genre">
					<option>drama</option>
					<option>music</option>
					<option>adventure</option>
					<option>historical</option>
					<option>action</option>
				</select>
			</div>
		</form>
	);
};

export default MovieCreateForm;
