console.log("Js is running Ok");
let homeButton  = document.getElementById("homeButton");
let projectButton  = document.getElementById("projectButton");
let contactButton  = document.getElementById("contactButton");
let addressButton  = document.getElementById("addressButton");



let homePageContent = `  <div id="text">
                            <h2>Hi, Welcome You By</h2>
                            <h1>Muhammad Bilal</h1><br>
                            <h3>JavaScript Web Developer and Programmer</h3>
                            <p>(Final year Student of BSCS at PUCIT)</p>
                            </div>
                            <div id="myPicContainer">
                            <img src="img/Profile Pic.png" alt="My Profile Photo" >
                            </div>
                            `;
let projectPageContent = `

<div class="projectCards">
<div class="card shadow-lg" style="width: 18rem">
  <a href="https://muhammad-bilal-official.github.io/snake-game/" target="_blank">
    <img src="./img/projects/snake-game.PNG"  class="card-img-top img img-fluid" alt="Snake Game Project"
      width="100%" />
  </a>

  <div class="card-body">
    <h3 class="card-title">Snake Game (Responsive)</h3>
    <p class="card-text">
      <b> Used: </b> Only HTML, CSS and JS <br>
      Used CSS Grid for Snake Table. <br>
      Responsive. <br>
      Score and High Score Functionality. <br>
      Stores the High Score on Local Storage,therefore even if you Reload the page, still your high score is there.
    </p>
    <div class="mt-2">
      <a href="https://muhammad-bilal-official.github.io/snake-game/" class="btn btn-danger"
        target="_blank">Demo <i class="fa-solid fa-arrow-right"></i></a> <br>
    </div>
    <div class="mt-2">
      <a href="https://github.com/Muhammad-Bilal-official/snake-game" class="btn btn-green"
        target="_blank">Git Repository <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </div>
</div>
</div>
<div class="projectCards">
<div class="card shadow-lg" style="width: 18rem">
  <a href="https://muhammad-bilal-official.github.io/food-app-sm/" target="_blank">
    <img src="./img/projects/food App 2 bootstrap.PNG"  class="card-img-top img img-fluid" alt="Snake Game Project"
      width="100%" />
  </a>

  <div class="card-body">
    <h3 class="card-title">Food App (Responsive)</h3>
    <p class="card-text">
      <b>Used:</b>  BootStrap, HTML, CSS and JS <br>
      Food Changes dynamically when Click on the food ICON that gives it look of Single Page Application <br>
      Responsive and Move Up button in Small Screens. <br>
      Different way of showing Add to Cart and Order List in Small Screens.
    </p>
    <div class="mt-2">
      <a href="https://muhammad-bilal-official.github.io/food-app-sm/" class="btn btn-danger"
        target="_blank">Demo <i class="fa-solid fa-arrow-right"></i></a> <br>
    </div>
    <div class="mt-2">
      <a href="https://github.com/Muhammad-Bilal-official/food-app-sm" class="btn btn-green"
        target="_blank">Git Repository <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </div>
</div>
</div>
<div class="projectCards">
<div class="card shadow-lg" style="width: 18rem">
  <a href="https://muhammad-bilal-official.github.io/gitNotes/" target="_blank">
    <img src="./img/projects/git-notes.PNG"  class="card-img-top img img-fluid" alt="Snake Game Project"
      width="100%" />
  </a>

  <div class="card-body">
    <h4 class="card-title">Git and GitHub Guide (Responsive)</h4>
    <p class="card-text">
      <b>Used:</b>  BootStrap, HTML, CSS and JS <br>
      It is a good Guide for any bigginer to leanrn basics of bootsrap. <br>
      Responsive and Attractive Design in All Screens. <br>
      Took much effort to make screen shots according to the points.
    </p>
    <div class="mt-2">
      <a href="https://muhammad-bilal-official.github.io/gitNotes/" class="btn btn-danger"
        target="_blank">Demo <i class="fa-solid fa-arrow-right"></i></a> <br>
    </div>
    <div class="mt-2">
      <a href="https://github.com/Muhammad-Bilal-official/gitNotes" class="btn btn-green"
        target="_blank">Git Repository <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    </div>
</div>
</div>

<div class="projectCards">
<div class="card shadow-lg" style="width: 18rem">
  <a href="https://muhammad-bilal-official.github.io/magic-notes/" target="_blank">
    <img src="./img/projects/magic notes.PNG"  class="card-img-top img img-fluid" alt="Snake Game Project"
      width="100%" />
  </a>

  <div class="card-body">
    <h4 class="card-title">Magic Notes (Responsive)</h4>
    <p class="card-text">
      <b>Used:</b>  BootStrap HTML, CSS and JS <br>
      Responsive and Most of the JS logic in it. <br>
      User can add notes and Delete them <br>
      User can Also Search any note <br>
      Notes are stored and fetched from local Storage therefore your notes wil be saved even if you reload or revist the site.
    </p>
    <div class="mt-2">
      <a href="https://muhammad-bilal-official.github.io/magic-notes/" class="btn btn-danger"
        target="_blank">Demo <i class="fa-solid fa-arrow-right"></i></a> <br>
    </div>
    <div class="mt-2">
      <a href="https://github.com/Muhammad-Bilal-official/magic-notes" class="btn btn-green"
        target="_blank">Git Repository <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    </div>
</div>
</div>
<div class="projectCards">
<div class="card shadow-lg" style="width: 18rem">
  <a href="https://muhammad-bilal-official.github.io/book-library/" target="_blank">
    <img src="./img/projects/Books Libarary.PNG"  class="card-img-top img img-fluid" alt="Snake Game Project"
      width="100%" />
  </a>

  <div class="card-body">
    <h4 class="card-title">Books Library (Responsive)</h4>
    <p class="card-text">
      <b>Used:</b>  BootStrap HTML, CSS and JS <br>
      Responsive and Attractive Design with JS logic <br>
      User Can Add a Book Detail while selecting the book Category <br>
      User can Delete a Book Record <br>
      Records are stored on Local Storage <br>
    </p>
    <div class="mt-2">
      <a href="https://muhammad-bilal-official.github.io/book-library/" class="btn btn-danger"
        target="_blank">Demo <i class="fa-solid fa-arrow-right"></i></a> <br>
    </div>
    <div class="mt-2">
      <a href="https://github.com/Muhammad-Bilal-official/book-library" class="btn btn-green"
        target="_blank">Git Repository <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    </div>
</div>
</div>
<div class="projectCards">
<div class="card shadow-lg" style="width: 18rem">
  <a href="https://muhammad-bilal-official.github.io/form-with-validation/" target="_blank">
    <img src="./img/projects/Form With Validations.PNG"  class="card-img-top img img-fluid" alt="Snake Game Project"
      width="100%" />
  </a>

  <div class="card-body">
    <h4 class="card-title">Form with Validations (Responsive)</h4>
    <p class="card-text">
      <b>Used:</b>  BootStrap HTML, CSS and JS <br>
      Completely Responsive with JS logic <br>
      Username Validation  <br>
      Email Validation  <br>
      Phone Number Validation  <br>
      Alert Box that Form Submitted or Not   <br>
    </p>
    <div class="mt-2">
      <a href="https://muhammad-bilal-official.github.io/form-with-validation/" class="btn btn-danger"
        target="_blank">Demo <i class="fa-solid fa-arrow-right"></i></a> <br>
    </div>
    <div class="mt-2">
      <a href="https://github.com/Muhammad-Bilal-official/form-with-validation" class="btn btn-green"
        target="_blank">Git Repository <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    </div>
</div>
</div>


<div class="projectCards">
<div class="card shadow-lg" style="width: 18rem">
  <a href="https://muhammad-bilal-official.github.io/Tic-Tac-Toe/" target="_blank">
    <img src="./img/projects/tic-tac-toe game.PNG"  class="card-img-top img img-fluid" alt="Snake Game Project"
      width="100%" />
  </a>

  <div class="card-body">
    <h4 class="card-title">Tic-Tac-Toe Game (Responsive)</h4>
    <p class="card-text">
      <b>Used:</b>  Only HTML, CSS and JS <br>
      Responsive and Shows Turn Tab Specialy button in Small Screens and Hover Turn in Large Screen <br>
      Animation with Transition when a player win <br>
    </p>
    <div class="mt-2">
      <a href="https://muhammad-bilal-official.github.io/Tic-Tac-Toe/" class="btn btn-danger"
        target="_blank">Demo <i class="fa-solid fa-arrow-right"></i></a> <br>
    </div>
    <div class="mt-2">
      <a href="https://github.com/Muhammad-Bilal-official/Tic-Tac-Toe" class="btn btn-green"
        target="_blank">Git Repository <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    </div>
</div>
</div>
<div class="projectCards">
<div class="card shadow-lg" style="width: 18rem">
  <a href="https://muhammad-bilal-official.github.io/Wall-Clock/" target="_blank">
    <img src="./img/projects/Analog Wall Clock.PNG"  class="card-img-top img img-fluid" alt="Snake Game Project"
      width="100%" />
  </a>

  <div class="card-body">
    <h4 class="card-title">Analog Wall Clock (Responsive)</h4>
    <p class="card-text">
      <b>Used:</b>  Only HTML, CSS and JS <br>
      Completely Responsive <br>
      Shows the Time According to the System Time.  <br>
    </p>
    <div class="mt-2">
      <a href="https://muhammad-bilal-official.github.io/Wall-Clock/" class="btn btn-danger"
        target="_blank">Demo <i class="fa-solid fa-arrow-right"></i></a> <br>
    </div>
    <div class="mt-2">
      <a href="https://github.com/Muhammad-Bilal-official/Wall-Clock" class="btn btn-green"
        target="_blank">Git Repository <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    </div>
</div>
</div>
<div class="projectCards">
<div class="card shadow-lg" style="width: 18rem">
  <a href="https://muhammad-bilal-official.github.io/portfolio1/" target="_blank">
    <img src="./img/projects/portfolio.PNG"  class="card-img-top img img-fluid" alt="Snake Game Project"
      width="100%" />
  </a>

  <div class="card-body">
    <h4 class="card-title">My Portfolio (Responsive)</h4>
    <p class="card-text">
      <b>Used:</b>  Only HTML, CSS and JS with bootStrap only to use cards <br>
      Completely Responsive <br>
      Single Page Application using Vanila JavaScript  <br>
    </p>
    <div class="mt-2">
      <a href="https://muhammad-bilal-official.github.io/portfolio1/" class="btn btn-danger"
        target="_blank">Demo <i class="fa-solid fa-arrow-right"></i></a> <br>
    </div>
    <div class="mt-2">
      <a href="https://github.com/Muhammad-Bilal-official/portfolio1" class="btn btn-green"
        target="_blank">Git Repository <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    </div>
</div>
</div>
`;

let contactPageContent = `  <div id="contactFormContainer">
                                <div id="formHeading">
                                    <h1>Contact Form</h1>
                                </div>
                                <form id="contactForm">
                                    <div class="formInput">
                                        <input type="text" placeholder="Enter Your Name" />
                                    </div>
                                    <div class="formInput">
                                        <input type="phone" placeholder="Enter Your Phone" />
                                    </div>
                                    <div class="formInput">
                                        <input type="email" placeholder="Enter Your Email" />
                                    </div>
                                    <div class="formInput">
                                        <input id="contactFormBtn" type="button" value="Submit" />
                                    </div>
                                </form>
                            </div>`;
let addressPageContent = `Working on it`;
                            
let mainContentContainer = document.getElementById("mainContentContainer");
mainContentContainer.innerHTML = homePageContent;


homeButton.addEventListener("click",()=>{
    mainContentContainer.innerHTML = homePageContent;
});
projectButton.addEventListener("click",()=>{
    mainContentContainer.innerHTML = projectPageContent;
});
contactButton.addEventListener("click",()=>{
    mainContentContainer.innerHTML = contactPageContent;
});
addressButton.addEventListener("click",()=>{
    mainContentContainer.innerHTML = addressPageContent;
});
