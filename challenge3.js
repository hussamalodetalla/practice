// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
function matchHouses(step) {
	if (step===0){
		return 0 ;
							 }
	else if (step < 0 || typeof step !== "number"){
		return "The input (step) will always be a non-negative integer."
	}	
else
	return (5*step)+1;
}