// food prices
const beerCost = 6.25;
const burgerCost = 6.75;
const popCost = 6.75;

//user's money
let accountBalance = 15.75;

//Check account balance
function checkBalance(amt) {
	if (accountBalance - amt >= 0) {
		return true;
	}
	else {
		console.log("Insufficient funds");
		return false;
	}
	//You could also do "return ((accountBalance - amt) >= 0)"
}
//drink beer
function drinkBeer() {
	if (checkBalance(beerCost)) {
		accountBalance -= beerCost;
		console.log("Enjoy your beer.");
	}
	console.log("\tBalance: ", accountBalance.toFixed(2));
}

//eat burger
function eatBurger() {
	if (checkBalance(burgerCost)) {
		accountBalance -= burgerCost;
		console.log("Enjoy your burger.");

	}
	console.log("\tBalance: ", accountBalance.toFixed(2));

}

//drink pop
function drinkPop() {
	if (checkBalance(drinkPop)) {
		accountBalance -= popCost;
		console.log('Enjoy your drink');

	}
	console.log('\tBalance: ', accountBalance.toFixed(2));

}

//Visit the carnival, eat and drink

const mealList = [drinkBeer, drinkPop, eatBurger, drinkBeer];
function visitCarnival(mList) {
	for (let i = 0; i < mealList.length; i++) {
		console.log(mealList[i]);
		// mList[i].call();
		mList[i]();

	}
}
visitCarnival(mealList);




