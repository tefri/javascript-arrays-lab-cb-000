const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name)
{
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  return kittens;
}

function destructivelyRemoveLastKitten()
{
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift();
  return kittens;
}

function appendKitten(name)
{
  var kittens1 = [...kittens, name];
  return kittens1;
}

function prependKitten(name)
{
  var kittens2 =[name, ...kittens];
  return kittens2;
}

function removeLastKitten()
{
  var kittens3 = kittens.slice(0, 2);
  return kittens3;
}

function removeFirstKitten()
{
  var kittens4 =  kittens.slice(1,3);
  return kittens4;
}
