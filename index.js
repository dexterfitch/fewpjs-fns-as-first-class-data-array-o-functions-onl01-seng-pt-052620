function wakeDog(dogName, dogBreed) {
  let task = `Wake ${dogName} the ${dogBreed}`;
  console.log(task);
  return String(task);
}

function leashDog(dogName, dogBreed) {
  let task = `Leash ${dogName} the ${dogBreed}`;
  console.log(task);
  return String(task);
}

function walkToPark(dogName, dogBreed) {
  let task = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(task);
  return String(task);
}

function throwFrisbee(dogName, dogBreed) {
  let task = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(task);
  return String(task);
}

function walkHome(dogName, dogBreed) {
  let task = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(task);
  return String(task);
}

function unleashDog(dogName, dogBreed) {
  let task = `Unleash ${dogName} the ${dogBreed}`;
  console.log(task);
  return String(task);
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  for(let i = 0; i < routine.length; i++) {
    routine[i](dogName, dogBreed);
  }
}
