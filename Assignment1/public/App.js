const name = /*#__PURE__*/React.createElement("div", {
  id: "name"
}, /*#__PURE__*/React.createElement("h2", {
  id: "name_in"
}, "Jyoti Nitish Nalwade"));
const picture = /*#__PURE__*/React.createElement("div", {
  id: "picture_out"
}, /*#__PURE__*/React.createElement("img", {
  id: "picture_in",
  src: "images/image.jpg"
}));
const introduction = /*#__PURE__*/React.createElement("div", {
  id: "intro_out"
}, /*#__PURE__*/React.createElement("p", {
  id: "intro_in"
}, "I am Graduate student in computer Science department at SDSU. I have four years of corporate experience from IT Ferm named Cognizant Technology solutions, India."));
const button = /*#__PURE__*/React.createElement("div", {
  id: "button_out"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/jyoti-nalwade5/fullstack-assignment1.git"
}, /*#__PURE__*/React.createElement("button", {
  id: "button_in"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(name, document.getElementById('name'));
ReactDOM.render(picture, document.getElementById('picture'));
ReactDOM.render(introduction, document.getElementById('introduction'));
ReactDOM.render(button, document.getElementById('button'));