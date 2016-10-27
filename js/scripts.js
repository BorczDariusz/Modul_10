function MobilePhones(model, price, color, warranty) {
	this.model = model || 'Ask for model';
	this.price = price || 'Ask for price';
	this.color = color || 'Ask for color';
	this.warranty = this.price * 0.1 || 'Ask for warranty'
}

MobilePhones.prototype.printInfo = function() {
	console.log('This mobile phone\'s model is ' + this.model + ', color is ' + this.color + ', price is ' + this.price + '. Extended warranty price: ' + this.warranty + '(10%).');
}

var samsungGalaxyS6 = new MobilePhones('Samsung Galaxy', 1300, 'black/silver/white');
var iphone6 = new MobilePhones('Iphone 6S', 1600, 'black/silver/white');
var onePlusOne = new MobilePhones('OnePlus One', 900, 'black/silver');

samsungGalaxyS6.printInfo();
iphone6.printInfo();
onePlusOne.printInfo();