var thing = new Stuff();

class Stuff {
  constructor(name) {
    this.name = name;
  }
  
  doThing() {
    alert("Whoa diddly doodle. You created a new Stuff called: " + this.name);
  }
}







class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}
