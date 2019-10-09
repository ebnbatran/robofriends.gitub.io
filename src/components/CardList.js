import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
	const cardsArray = robots.map((user) => {
		return <Card 
							key={user.id}
							id={user.id} 
							name={user.name} 
							username={user.username} 
							email={user.email} 
						/>				
	});

	return (
		<div>
			{cardsArray}		
		</div>
	);
}


export default CardList;