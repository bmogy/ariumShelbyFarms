const getName = (x) =>{
	console.log("My name is " + x);
}
getName("Brian Mogy");
var getInfo = {
	init(name, age) =>{
		this.name=name; 
		this.age = age; 
	}, 
	story() =>{
		console.log("my name is " + this.name + "and i am " + this.age); 
	}
}
getInfo.init("brian", 23); 
getInfo.story();