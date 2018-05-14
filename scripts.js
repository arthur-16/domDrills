document.addEventListener("DOMContentLoaded", function() {
  let div1 = document.createElement("div");
  let h1 = document.createElement("h1");
  let text1 = document.createTextNode("This is an h1");
  h1.appendChild(text1);
  div1.appendChild(h1);
  let h2 = document.createElement("h2");
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");
  let h5 = document.createElement("h5");
  let h6 = document.createElement("h6");
  let text2 = document.createTextNode("This is an h2");
  let text3 = document.createTextNode("This is an h3");
  let text4 = document.createTextNode("This is an h4");
  let text5 = document.createTextNode("This is an h5");
  let text6 = document.createTextNode("This is an h6");
  h2.appendChild(text2);
  h3.appendChild(text3);
  h4.appendChild(text4);
  h5.appendChild(text5);
  h6.appendChild(text6);
  div1.appendChild(h2);
  div1.appendChild(h3);
  div1.appendChild(h4);
  div1.appendChild(h5);
  div1.appendChild(h6);
  document.body.appendChild(div1);
  h1.classList.add("h1");
  h2.classList.add("h2");
  h3.classList.add("h3");
  h4.classList.add("h4");
  h5.classList.add("h5");
  h6.classList.add("h6");

  let colors = [
    "red",
    "blue",
    "black",
    "green",
    "yellow",
    "black",
    "purple",
    "brown"
  ];
  let listItemCounter = 1;
  let btn = document.createElement("button");
  let btnText = document.createTextNode("Change Color");
  btn.appendChild(btnText);
  document.body.appendChild(btn);
  btn.addEventListener("click", function() {
    let rand = Math.floor(Math.random() * 7);
    h1.style.color = colors[rand];
  });
  let btn2 = document.createElement("button");
  let btnText2 = document.createTextNode("Click to add new list item");
  btn2.appendChild(btnText2);
  btn2.classList.add("btn");
  document.body.appendChild(btn2);

  let ul = document.createElement("ul");
  let ulText = document.createTextNode("This i list item number");
  ul.appendChild(ulText);

  btn2.addEventListener("click", function() {
    let counter = listItemCounter++;
    let list1 = document.createElement("li");
    let list1Text = document.createTextNode("This is list item " + counter);
    list1.appendChild(list1Text);
    document.body.appendChild(list1);
    list1.addEventListener("click", function() {
      let rand = Math.floor(Math.random() * 7);
      this.style.color = colors[rand];
    });
    list1.addEventListener("dblclick", function() {
      this.remove("li");
    });
  });
});
