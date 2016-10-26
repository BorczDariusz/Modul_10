function MobilePhones(model, price, color) {
	this.model = model || 'Ask for model';
	this.price = price || 'Ask for price';
	this.color = color || 'Ask for color';
}
MobilePhones.prototype.printInfo = function() {
	console.log('This mobile phone\'s model is ' + this.model + ', color is ' + this.color + ', price is ' + this.price + '.');
}

var samsungGalaxyS6 = new MobilePhones('Samsung Galaxy', 1300, 'black/silver/white');
var iphone6 = new MobilePhones('Iphone 6S', 1600, 'black/silver/white');
var onePlusOne = new MobilePhones('OnePlus One', 900, 'black/silver');

samsungGalaxyS6.printInfo();
iphone6.printInfo();
onePlusOne.printInfo();