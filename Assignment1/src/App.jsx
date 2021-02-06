

const name = (
<div id ="name">
        <h2 id = "name_in">Jyoti Nitish Nalwade</h2>
</div>
);

const picture = (
    <div id = "picture_out">
        <img id = "picture_in" src = "images/image.jpg"/>
    </div>
);

const introduction = (
    <div id= "intro_out">
        <p id = "intro_in">
        I am Graduate student in computer Science department at SDSU. I have four years of corporate experience from IT Ferm named Cognizant Technology solutions, India.
        </p>
    </div>
            
);

const button = (
    <div id= "button_out">
        <a href="https://github.com/jyoti-nalwade5/fullstack-assignment1.git"><button id= "button_in">VIEW MY GITHUB REPO</button></a>
    </div>

);

ReactDOM.render(name, document.getElementById('name'));
ReactDOM.render(picture, document.getElementById('picture'));
ReactDOM.render(introduction, document.getElementById('introduction'));
ReactDOM.render(button, document.getElementById('button'));
