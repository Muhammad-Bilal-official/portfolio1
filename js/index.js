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
let projectPageContent = `123`;

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
let addressPageContent = `123`;
                            
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
