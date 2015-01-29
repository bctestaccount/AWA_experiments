// Define modal
var sizeGuide = document.getElementById('size-guide-men');

// Change heading to "Size Guide"
document.getElementsByClassName('sub-heading')[0].innerHTML = "<b>Size Guide</b>";

// Add subtitle
var parent = document.getElementById('size-guide-men');
var text = document.createTextNode('Lyle and Scott sizes fits true to size across all ranges.');
var sibling = document.getElementsByClassName('sub-heading')[0].nextSibling;
var br = document.createElement("br");

parent.insertBefore(br, sibling);
parent.insertBefore(text, br);

// Replace "Bottoms" title with "FAQ"
var topTitle = document.getElementsByClassName('sub-title')[0];
topTitle.innerHTML = "FAQ"
topTitle.setAttribute("style", "color: #666666; font-family: Arial");


// Hide table
var table = topTitle.nextSibling.nextSibling;
table.style.display = 'none';

// Reduce Bottoms table bottom margin to create more space in modal
var bottomsTable = topTitle.previousSibling.previousSibling;
bottomsTable.setAttribute("style", "margin-bottom: 15px;");

// Move FAQ title down under Bottoms table
sizeGuide.appendChild(topTitle);

// Include toggle arrows
var arrow = "<img class='arrow' src='http://i.imgur.com/WyrXJF0.jpg'>";
var arrow2 = "<img class='arrow2' style='width: 15px; height: 12px; vertical-align: middle; float: left; margin-right: 9px;' src='http://i.imgur.com/Z7EBIku.jpg'>";

// Set Question 1
var p1 = document.createElement("p");
p1.setAttribute("id", "q1");
p1.innerHTML = arrow + arrow2 + "<a href='#' class='question'>I usually wear S/M/L/XL in other brands. What size should I buy?</a>";
sizeGuide.appendChild(p1);

var p1Answer = document.createElement("p");
p1Answer.setAttribute("class", "answer");
p1Answer.innerHTML = "Simply buy the size you usually wear. Our garments are standard sizes, but if you have any problems with fit, returns in the UK are free and easy via Collect+ (outside of end of season sale period).";
sizeGuide.appendChild(p1Answer);


// Set Question 2
var p2 = document.createElement("p");
p2.setAttribute("id", "q2");
p2.innerHTML = arrow + arrow2 + "<a href='#' class='question'>How do I make sure I buy the right size?</a>";
sizeGuide.appendChild(p2);

var p2Answer = document.createElement("p");
p2Answer.setAttribute("class", "answer");
p2Answer.innerHTML = "To be absolutely certain, measure your chest and waist and use the chart above.<br><b>Chest:</b> Place the tape under your armpits and measure across the broadest part of your chest.<br><b>Waist:</b> Place the tape measure around your waist, just below your navel.<br><b>Tip:</b> Measure against your body, not over clothes. Hold the tape measure gently but firmly and do not pull it tight. If you're in between two sizes go for the larger size.";
sizeGuide.appendChild(p2Answer);


// Set Question 3
var p3 = document.createElement("p");
p3.setAttribute("id", "q3");
p3.innerHTML = arrow + arrow2 + "<a href='#' class='question'>The last time I bought a Lyle & Scott garment it was too large/small. How do I avoid this?</a>";
sizeGuide.appendChild(p3);

var p3Answer = document.createElement("p");
p3Answer.setAttribute("class", "answer");
p3Answer.innerHTML = "We are sorry you have had problems in the past. In August 2013, we standardised Lyle & Scott sizes across all ranges. We now recommend buying your normal size.";
sizeGuide.appendChild(p3Answer);


// Set Question 4
var p4 = document.createElement("p");
p4.setAttribute("id", "q4");
p4.innerHTML = arrow + arrow2 + "<a href='#' class='question'>Is there a difference in size between the various ranges?</a>";
sizeGuide.appendChild(p4);

var p4Answer = document.createElement("p");
p4Answer.setAttribute("class", "answer");
p4Answer.innerHTML = "No, not any more. Since August 2013, all Lyle & Scott ranges come in standardised sizes.";
sizeGuide.appendChild(p4Answer);


// Set Question 5
var p5 = document.createElement("p");
p5.setAttribute("id", "q5");
p5.innerHTML = arrow + arrow2 + "<a href='#' class='question'>I’m still not sure. What should I do?</a>";
sizeGuide.appendChild(p5);

var p5Answer = document.createElement("p");
p5Answer.setAttribute("class", "answer");
p5Answer.innerHTML = "The best thing to do is place your order and try it on at home. Returns in the UK are free via Collect+ (outside of end of season sale period), so it’s quick and easy to get a full refund if you are not satisfied with the fit.";
sizeGuide.appendChild(p5Answer);


// Include some formatting for the toggle arrow
var arrows = document.getElementsByClassName('arrow');
for (var i = 0; i < arrows.length; i++) {
	arrows[i].setAttribute("style", "margin-right: 12px; width: 13px; height: 16px; vertical-align: middle; float: left;");
}

// Hide all "down" arrows initially
var arrows2 = document.getElementsByClassName('arrow2');
for (var i = 0; i < arrows2.length; i++) {
	arrows2[i].style.display = 'none';
}

// Set question colors to black
var questions = document.getElementsByClassName('question');
for (var i = 0; i < questions.length; i++) {
	questions[i].setAttribute("style", "color: black;");
}

// Set answer colors to dark blue
var answers = document.getElementsByClassName('answer');
for (var i = 0; i < answers.length; i++) {
	answers[i].setAttribute("style", "color: #0b4459; padding-left: 24px;");
	answers[i].style.display = 'none';
}

// Construct click event listeners and toggle arrows
function addListeners(num) {
	questions[num].addEventListener('click', function() {
		event.preventDefault();
		if (answers[num].style.display == "none") {
			answers[num].style.display = "block";
			questions[num].previousSibling.previousSibling.style.display = 'none';
			questions[num].previousSibling.style.display = 'block';
		} else {
			answers[num].style.display = "none";
			questions[num].previousSibling.previousSibling.style.display = 'block';
			questions[num].previousSibling.style.display = 'none';
		}
	});
}

// Attach click event listeners on all questions
for (var i = 0; i < questions.length; i++) {
	addListeners(i);
}


/* OPTIONAL: Run the following code in the console on the product page (before opening the modal), then run the main script above in the console to allow scrolling in the modal.
document.getElementById('quickbuy').setAttribute("style", "position: absolute;");
*/



