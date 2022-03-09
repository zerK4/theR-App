import "./Menu.css"

export default function Menu({ name, image, recommend, cautions, type, price, chefNames }) {
    return (
		<div className="menuContainer">
			<div className="menuItem">
				<h1 className="menuTitle">{name}</h1>
				<img src={image} alt="image" className="menuImage"/>
				<p>Cuisine type: {type}</p>
				<p>Recommended for: {recommend}</p>
				<p>Cautions: {cautions}</p>
				<p>${price}</p>
			</div>
		</div>
    )
}
