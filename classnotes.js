var Person = function(){
	this.property1 = true;
	this.property2 = true;
}

Person.prototype.displayData = function(){
	console.log(this);
}

// if we were passing in properties we'd have to pass them in as arguments of the function.

var Student = function(){
	Person.call(this);
	this.newProperty1 = true;
	this.newProperty2 = true;
}

Student.prototype = Object.create(Person, prototype);

var student = newStudent();

// this referes to the object just LEFT of the '.' 99% of the time.

student.displayData();


String.prototyp.reverse() = function(){
	var newString = '';
		for (var i = this.length - 1; i >= 0; i--) {
			newString = newString + this[i] + 1;
		};
		return newString;
};

