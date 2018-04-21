// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  drivers[drivers.length] = name;
}

function prependDriver(name){
  drivers.slice();
}

function removeLastDriver(){
  drivers.slice(0, drivers.length-1);
}

function removeFirstDriver(){
  drivers.slice(-1, -(drivers.length-1)
}
