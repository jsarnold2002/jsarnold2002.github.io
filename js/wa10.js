const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a run. When they got to :inserty:, they gasped in happiness for a few moments, then :insertz:. Jack saw the whole shabang, but was not startled — :insertx: weighs 300 pounds, and it was a cold day.";

const insertX = ["Willy the Wonka","Big Brother","Father Thanksgiving"];
const insertY = ["the onion kitchen","Disneyworld","the Green House"];
const insertZ = ["spontaneously erupted","melted into a puddle on the street","turned into a tiger and ran away"];

randomize.addEventListener('click', result);

let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx",xItem);
newStory = newStory.replace(":inserty",yItem);
newStory = newStory.replace(":insertz",zItem);


function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob",name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    newStory = newStory.replace("pounds","stone");
    const temperature =  Math.round((94-32)*(5/9));
    newStory = newStory.replace("fahrenheit", "centigrade");

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
