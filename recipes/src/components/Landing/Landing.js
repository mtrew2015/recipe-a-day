import React, { useEffect } from 'react';
import Recipe from '../Recipe/Recipe.js';
import RecipeCard from '../RecipeCard/RecipeCard';
import './Landing.scss';
import { Link } from 'react-router-dom';

function Landing(props) {
	console.log(props);
	const { recipe } = props;
	useEffect(() => {}, []);
	return (
		<div className='container'>
			{recipe && (
				<Link to={`/recipes/${recipe.idMeal}`}>
					
						<RecipeCard recipe={recipe} id={recipe.idMeal} />

				</Link>
            )}
		</div>
	);
}

export default Landing;
