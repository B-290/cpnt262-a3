'use strict';

const newArray = [
  {    
    id:           237,
    title:        'Puppy',
    source:       'Lorem Picsum',
    fileName:     './images/img2.jpg',
    attribution:  {
      source: 'Lorem Picsum',
      credit: 'André Spieker',
      url:  'https://unsplash.com/photos/8wTPqxlnKM4'
    }
  },
  {
      
  id:           11,
  title:        'Puppy',
  source:       'Lorem Picsum',
  fileName:     './images/img4.jpg',
  attribution:  {
    source: 'Lorem Picsum',
    credit: 'André Spieker',
    url:  'https://unsplash.com/photos/8wTPqxlnKM4'
  }
}];

  
let someHTML = '';
for (let i = 0; i < newArray.length; i++) {
  someHTML += `
  <img src='${newArray[i].fileName}' alt='my image'>
  <a href="${newArray[i].attribution.url}">Some Text</a>`;
}
// newArray.forEach(function(image){
//   // someHTML = someHTML +``;  
//   someHTML += `
//   <img src='${image.fileName}' alt='my image'>
//   <a href="${image.attribution.url}">Some Text</a>`;
// });
  document.querySelector('.gallery').innerHTML = someHTML;