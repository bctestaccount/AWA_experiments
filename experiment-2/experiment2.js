// Define favorites and pinterest sections
var favorites = document.getElementsByClassName('whishlist_wrap');
var pinterest = document.getElementById('social');

// Move favorites and pinterest sections under main product thumbnails
var magicToolbox = document.getElementsByClassName('MagicToolboxContainer');
magicToolbox[0].appendChild(favorites[0]);
favorites[0].style.width = '132px';
magicToolbox[0].appendChild(pinterest);

// Define magazine section and target area
var mags = document.getElementsByClassName('downloads-links-block');
var addToBox = document.getElementsByClassName('add-to-box');

// Remove the clearing div whitespace
var clearingDiv = mags[0].nextSibling.nextSibling;
clearingDiv.style.display = 'none';

// Move .mags right after .add-to-box
addToBox[0].parentNode.insertBefore(mags[0], addToBox[0].nextSibling);

// Define magazine text and hide it initially
var magText = document.getElementsByClassName('download-text');
for (var i = 0; i < magText.length; i++) {
	magText[i].style.display = 'none';
}

// Define magazine holders and set margins
var magHolder = document.getElementsByClassName('download-holder');
for (var i = 0; i < magHolder.length; i++) {
	magHolder[i].style.marginRight = '90px';
	magHolder[i].style.border = 'none';
}

// Place border on heading
document.getElementsByClassName('head')[0].style.borderBottom = "solid 1px #DFDFDF";

// Create event listeners for mousover and mouseleave
function addHover(num) {
	magHolder[num].addEventListener('mouseover', function() {
		magText[num].setAttribute("style", "background-color: white; display: block; border: solid 1px #d5d6d7; z-index: 15; position: absolute; width: 160px; text-align: center; padding: 5px 5px 5px 7px");
	}, false);
	magHolder[num].addEventListener('mouseleave', function() {
		magText[num].style.display = 'none';
	}, false);
}

// Attach event listeners
for (var i = 0; i < magHolder.length; i++) {
	addHover(i);
}
