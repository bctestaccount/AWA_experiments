/* NOTE: First deselect "Pause on exceptions" in Chrome Dev Tools (if currently activated) to to prevent lock-up from the carousel script. */

// Select the slider element
var offer = document.getElementsByClassName('home-slider');

// Define magazine images
var m1 = "<a href='#'><img class='mag' src='http://i.imgur.com/T7E10I1.jpg'></a>";
var m2 = "<a href='#'><img class='mag' src='http://i.imgur.com/HugIgEu.jpg'></a>";
var m3 = "<a href='#'><img class='mag' src='http://i.imgur.com/ypANPAO.jpg'></a>";
var m4 = "<a href='#'><img class='mag' src='http://i.imgur.com/tPqOpd3.jpg'></a>";
var m5 = "<a href='#'><img class='mag' src='http://i.imgur.com/Z2vVozz.jpg'></a>";
var m6 = "<a href='#'><img class='mag' src='http://i.imgur.com/tIbXNGP.jpg'></a>";

// Define section title
var title = "<h2 id='magTitle'>AS SEEN IN THE MEDIA</h2><br>";

// Define category link
var link = "<br><a href='#' id='newlink'>View all products featured in media &gt;</a>"

// Combine title, images, and link
var magazines = title + m1 + m2 + m3 + m4 + m5 + m6 + link;

// Insert images into .home-slider div
offer[0].innerHTML = magazines;

// Create new CSS
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = ".mag {margin: 20px 9px 0 22px;} #magTitle {font-size: 22px; text-align: center; font-weight: bold} #newlink{color: #666666; text-decoration: underline; float: right; padding: 20px 24px 0 0}";
document.getElementsByTagName('head')[0].appendChild(style);

// Apply new CSS class to new .home-slider elements
document.getElementsByClassName('home-slider').className = '.mag';