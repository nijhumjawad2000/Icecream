var title = document.createElement("h1");
title.innerHTML = "Making Ice Cream Sandwiches";
document.body.appendChild(title);
title.style.color = "orange";
var para1 = document.createElement("p");
para1.innerHTML = "Kids and adults alike will be fighting over these big monster ice cream sandwiches! The best part about these things is that they are no bake. You don't even need to warm up your oven if you purchased cookies. Makes early to use the mini M&Ms or the large ones will fall off. As a volunteer field editor for Taste of Home magazine, I love recipes that can be assembled quickly and still make a quick presentation.";
document.body.appendChild(para1);

var title1 = document.createElement("div");
title1.style.backgroundColor = "orange";
var title2 = document.createElement("h2");
title2.innerHTML = "Ingredients";
title1.appendChild(title2);
document.body.appendChild(title1);
title1.style.padding = "20px";

var ul = document.createElement("ul");
var li1 = document.createElement("li");
li1.innerHTML = "Cookies and Cream ice cream";
ul.appendChild(li1);
var li2 = document.createElement("li");
li2.innerHTML = "Large chocolate chip cookies";
ul.appendChild(li2);
var li3 = document.createElement("li");
li3.innerHTML = "M&M's minis";
ul.appendChild(li3);
var li4 = document.createElement("li");
li4.innerHTML = "Reese's mini peanut butter cups";
ul.appendChild(li4);
title1.appendChild(ul);
document.body.appendChild(title1);

var pic1 = document.createElement("img");
pic1.src = "ice-cream.JPG";
document.body.appendChild(pic1);
pic1.style.width = "24%";

var pic2 = document.createElement("img");
pic2.src = "cookies.jpg";
document.body.appendChild(pic2);
pic2.style.width = "24%";

var pic3 = document.createElement("img");
pic3.src = "mmminis.jpg";
document.body.appendChild(pic3);
pic3.style.width = "24%";

var pic4 = document.createElement("img");
pic4.src = "pb.JPG";
document.body.appendChild(pic4);
pic4.style.width = "24%";

var para4 = document.createElement("p");
para4.innerHTML = "For more information about this recipe, please visit ";
var link = document.createElement("a");
link.href = "https://www.tasteofhome.com/recipes/candy-craze-ice-cream-sandwiches/";
link.innerHTML = "The Taste of Home website";
para4.appendChild(link);
document.body.appendChild(para4);