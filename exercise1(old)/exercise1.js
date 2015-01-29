// Select the upsell element
var offer = document.getElementsByClassName('S2OFFER');

// Define magazine images and category image
var zooey = "<a href='#'><img class='mag' src='http://i.imgur.com/4B5EsUs.jpg'></a>";
var mensfashion = "<a href='#'><img class='mag' src='http://i.imgur.com/fGSmQap.jpg'></a>";
var kardashian = "<a href='#'><img class='mag' src='http://i.imgur.com/J6A9RLM.jpg'></a>";
var bazaar = "<a href='#'><img class='mag' src='http://i.imgur.com/t1ZPPjU.jpg'></a>";
var brad = "<a href='#'><img class='mag' src='http://i.imgur.com/x4E8YLz.jpg'></a>";
var gaga = "<a href='#'><img class='mag' src='http://i.imgur.com/HGj3gjb.jpg'></a>";
var magLink = "<a href='#'><img id='magLink' src='http://i.imgur.com/9prD474.jpg'></a>";

// Combine images
var magazines = gaga + mensfashion + kardashian + bazaar + brad + zooey + magLink;

// Insert images into S2OFFER div
offer[0].innerHTML = magazines;

//Create CSS for magazines
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = ".mag {box-shadow: 0 11px 42px -17px #000000; margin: 19px 21px 0 0;}";
document.getElementsByTagName('head')[0].appendChild(style);

// Apply class to S2OFFER
document.getElementsByClassName('S2OFFER').className = '.mag';
