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
  drivers.splice(drivers.length, 0, name);
}

function prependDriver(name){
  drivers.splice(0, 0, name);
}

function removeLastDriver(){
  rmv = drivers.slice(0, drivers.length-1);
  rmv
}

function removeFirstDriver(){
  drivers.slice(-1, -(drivers.length-1));
}
