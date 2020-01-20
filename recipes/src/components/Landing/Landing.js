import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe.js';
import RecipeCard from '../RecipeCard/RecipeCard';
import './Landing.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Landing(props) {
	let categories = ["Beef", "Breakfast", "Chicken", "Dessert", "Misc", "Pasta", "Pork", "Seafood", "Sides", "Starter", "Vegan", "Vegetarian"]
	console.log(props);
	const { recipe } = props;
	
	return (
		<div className='container'>
			{recipe && (
				<Link to={`/recipes/${recipe.idMeal}`}>
					
						<RecipeCard recipe={recipe} id={recipe.idMeal} />

				</Link>
            )}
			<div className="categories">
				{categories.map(item => {
				return <div className="category" value={item}>{item}</div>
				})
			}
			</div>
		</div>
	);
}

export default Landing;
