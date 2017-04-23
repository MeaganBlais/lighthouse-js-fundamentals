var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("ingredients");

var i = 0;
while (i <= 0) {
	console.log(ingredients);
	i++;
}

// prints the formatting [","] - all items on new line - sloppy looking 

for (var i = 0; i < ingredients.length; i++) {
	console.log(ingredients[i]);
}

// prints only the items in a clean list 

for (i = 7; i >= 0; i--) {
	console.log(ingredients[i]);
}

// prints list backwards. need to know list.length and then use i-- to count backwards
