import React, { useState, useEffect } from 'react'
import './App.css'
import Chefs from './pages/chefs/Chefs'
import Events from './pages/events/Events'
import Footer from './pages/footer/Footer'
import Header from './pages/header/Header'
import Hero from './pages/hero/Hero'
import Menu from './pages/menu/Menu'

function App() {
	const[recipes, setRecipes] = useState([])
	const[search, setSearch] = useState('')
	const[query, setQuery] = useState('steak') 
	
	useEffect(()=>{
		getMenu()
	}, [query])

		const getMenu = async ()=>{
		const id = `3a7be06d`
		const key = `7e94ae7781c42c3db3fa9b6d892cd142`
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`);
		const data = await response.json();
		setRecipes(data.hits)
	}	

	const updateSearch = (e) =>{
		setSearch(e.target.value);
	}
	const getSearch = (e) =>{
		e.preventDefault()
		setQuery(search)
	}

return (
<div className="App">
	<Header />
	<Hero />
	<Chefs />
	<Events />
	<div className="menuItems">
	<h2 id='meniu' className="menuName">Menu</h2>
			<form onSubmit={getSearch}>
				<div className="searchSpace">
				<input className="searchBar" type="text" value={search} onChange={updateSearch} placeholder='Search for food!'/><button type="submit" className="searchButton">Search</button></div>
				</form>
			
			<div className="menus">
	{recipes.map(recipe =>(
		<Menu 
			key={recipe.recipe.label}
			name={recipe.recipe.label}
			image={recipe.recipe.image}
			recommend={recipe.recipe.mealType}
			cautions={recipe.recipe.cautions}
			type={recipe.recipe.cuisineType}
			price={Math.floor(Math.random() * 50) + 10}
			/>
	))}
		</div>
	</div>

		<Footer />

</div>
)
}

export default App
