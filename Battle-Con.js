function character(name, profession, gender, age, strength, hp) {
    this.Name = name;
    this.Profession = profession;
    this.Gender = gender;
    this.Age = age;
    this.Strength = strength;
    this.HitPoints = hp;
    this.printStats = function() {
       console.log(JSON.stringify(this, null, 2));
        }
    this.IsAlive = function() {
	if (this.HitPoints <0){
		console.log(this.Name + " is Dead!");
	} else{
		console.log(this.Name + " is Alive!");
	}
  }   
}

var Goku = new character("Goku", "Saiyan", "Male", 30, 9000, 75);
var Vegeta = new character("Vegeta", "Saiyan", "Male", 32, 6000, 65);

Goku.printStats();
Vegeta.printStats();

Goku.IsAlive();
Vegeta.IsAlive();