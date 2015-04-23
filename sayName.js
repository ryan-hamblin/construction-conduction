//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age){
	this.name = name,
	this.age = age
};


//Now create three instances of Person with data you make up

var goose = new Person('Goose', 35);
var maverick = new Person('Maverick', 33);
var nikki = new Person('Novack', 44);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function(){
	alert(this.name);
};

goose.sayName();
maverick.sayName();
nikki.sayName();
