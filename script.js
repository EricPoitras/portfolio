// Data
var counter = 1;
var about_data = [
  {
      content:`
        <ul class="list-group" style="width:550px">
          <li class="list-group-item text-center" style="background-color: transparent">
                <h5 class="font-weight-bold">Front-End Web</h5>
                    <img class="ml-2 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" height="50px">
                    <img class="ml-2 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" height="50px">
                    <img class="ml-2 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Badge_js-strict.svg" height="50px">
          </li>
          <li class="list-group-item text-center" style="background-color: transparent">
                    <h5 class="font-weight-bold">Web Libraries</h5>
                    <img class="ml-2 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg" height="50px">
                    <img class="ml-2 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg" height="50px">
            </li>
          <li class="list-group-item text-center" style="background-color: transparent">
                    <h5 class="font-weight-bold">ML & APIs</h5>
                    <img class="ml-2 mr-2" src="https://1xltkxylmzx3z8gd647akcdvov-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/rapidminer-logo-retina.png" height="50px">
                    <img class="ml-2 mr-2" src="https://verify-img-thumb.s3.amazonaws.com/BigML.png/320px-BigML.png" height="50px">
            </li>
          <li class="list-group-item text-center" style="background-color: transparent">
                    <h5 class="font-weight-bold">Win & Game App</h5>
                    <img class="ml-2 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" height="50px">
                    <img class="ml-2 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg" height="50px">
            </li>
          <li class="list-group-item text-center" style="background-color: transparent">
                    <h5 class="font-weight-bold">Multimedia</h5>
                    <img class="ml-2 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Adobe_Experience_Design_logo.svg" height="50px">
                    <img class="ml-2 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" height="50px">
                    <img class="ml-2 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" height="50px">
                    <img class="ml-2 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Adobe_Premiere_Pro_Logo.svg" height="50px">
            </li>
        </ul>
`,
      caption: "<h4>SKILLS</h4>",
      url:""
  },
  {
      content: "<h1>COURSES</h1>", 
      caption: "<h6 class='mb-3'>Graduate course in the masters in statistics program about data analytics (i.e., RapidMiner, BigML API), visualizations (JS charts), multimedia (Adobe CC), and front-end web development (HTML, CSS, JS).</h6><i class='fas fa-code d-inline'></i><h6 class='d-inline'>CODE</h6><i class='fas fa-laptop-code d-inline'></i><h6 class='d-inline'>LIVE</h6>",
      url: "edps6447.png"
  },
  {
      content: "<h1>MIXED REALITY</h1>", 
      caption: "<h6 class='mb-3'>Tangible and virtual 3D models of fossils at the Natural History Museum of Utah that implement machine learning models for automated detection of student behaviors in real-time.</h6><i class='fas fa-code d-inline'></i><h6 class='d-inline'>CODE</h6><i class='fas fa-laptop-code d-inline'></i><h6 class='d-inline'>LIVE</h6>",
      url: "NHMU%20Mixed%20Reality.png"
  },
  {
      content: "<h1>ANALYTICS DASHBOARD</h1>", 
      caption: "<h6 class='mb-3'>MICoder is an online data coding and scoring platform that implements machine learning models to analyze therapist-client discourse in counseling sessions.</h6><i class='fas fa-code d-inline'></i><h6 class='d-inline'>CODE</h6><i class='fas fa-laptop-code d-inline'></i><h6 class='d-inline'>LIVE</h6>",
      url: "MICoder.png"
  },
  {
      content: "<h1>TUTORING SYSTEM</h1>", 
      caption: "<h6 class='mb-3'>MITutor is an application that implements natural language processing as part of training workshops given at the UCC clinic at the University of Utah.</h6><i class='fas fa-code d-inline'></i><h6 class='d-inline'>CODE</h6><i class='fas fa-laptop-code d-inline'></i><h6 class='d-inline'>LIVE</h6>",
      url: "NIH%20depth.png"
  }
];
var contact_data = [
  { 
      content: "<h1>Get In Touch</h1>",
      caption: "<h4>eric.poitras@utah.edu</h4>"}
];
var github_data = [
  {
      url: "https://github.com/EricPoitras"}
];



// Variables
var label = document.querySelector(".label");
var left = document.querySelector("#icon_top");
left.style.animationPlayState = "paused";
var right = document.querySelector("#icon_bottom");
right.style.animationPlayState = "paused";
var coffee = document.querySelector(".fa-coffee");
var list = document.querySelector(".fa-th-list");
var paperplane = document.querySelector(".fa-paper-plane");
var github = document.querySelector(".fa-github");
var display = document.getElementById("display");
var label_github = document.getElementById("label_github");
var label_about = document.getElementById("label_about");
var label_contact = document.getElementById("label_contact");
var label_project = document.getElementById("label_project");
var content = document.getElementById("content");
var divider = document.getElementById("divider");
var caption = document.getElementById("caption");
var screenshot = document.getElementById("screenshot");
var welcome_img = document.getElementById("welcome_img");




// Event Listeners
left.addEventListener("click",function(){
    update_display("left");
});
right.addEventListener("click",function(){
    update_display("right");
});
right.addEventListener("mouseover",function(){
  animate_right();
  right.classList.remove("far");
    right.classList.add("fas");
});
right.addEventListener("mouseleave",function(){
  pause_animate_right();
  right.classList.remove("fas");
    right.classList.add("far");
});
left.addEventListener("mouseover",function(){
  animate_left();
    left.classList.remove("far");
    left.classList.add("fas");
});
left.addEventListener("mouseleave",function(){
  pause_animate_left();
    left.classList.remove("fas");
    left.classList.add("far");
});
coffee.addEventListener("click",function(){
    update_display("coffee");
});
list.addEventListener("click",function(){
    update_display("list");
});
paperplane.addEventListener("click",function(){
    update_display("paper-plane");
});
github.addEventListener("click",function(){
    update_display("github");
});
coffee.addEventListener("mouseover",function(){
  animate_opacity("mouseover", label_about);
});
coffee.addEventListener("mouseleave",function(){
  animate_opacity("mouseleave", label_about);
});
list.addEventListener("mouseover",function(){
    animate_opacity("mouseover", label_project);
});
list.addEventListener("mouseleave",function(){
    animate_opacity("mouseleave", label_project);
});
paperplane.addEventListener("mouseover",function(){
  animate_opacity("mouseover",label_contact);
});
paperplane.addEventListener("mouseleave",function(){
  animate_opacity("mouseleave",label_contact);
});
github.addEventListener("mouseover",function(){
  animate_opacity("mouseover",label_github);
});
github.addEventListener("mouseleave",function(){
  animate_opacity("mouseleave",label_github);
});



// Router
function update_display(value){
  //display.innerHTML = value
  switch(value){
    case "left":
          welcome_img.classList.add("d-none");
          image.classList.remove("d-none");
          counter--;
          console.log(counter);
        if(counter<1){
            counter = about_data.length-1;
            content.innerHTML = about_data[counter].content;
            caption.innerHTML = about_data[counter].caption;
            screenshot.src = about_data[counter].url;
        }else{
            content.innerHTML = about_data[counter].content;
            caption.innerHTML = about_data[counter].caption;
            screenshot.src = about_data[counter].url;
            console.log(screenshot.src);
        }
        $("#content").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
        $("#caption").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
        $("#image").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
      break;
    case "right":
          welcome_img.classList.add("d-none");
          image.classList.remove("d-none");
          counter++;
        if(counter>=about_data.length){
            counter = 1;
            content.innerHTML = about_data[counter].content;
            caption.innerHTML = about_data[counter].caption;
            screenshot.src = about_data[counter].url;
        }else{
            console.log(caption);
            content.innerHTML = about_data[counter].content;
            caption.innerHTML = about_data[counter].caption; 
            screenshot.src = about_data[counter].url;
        }
          $("#content").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
        $("#caption").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
        $("#image").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
      break;
    case "coffee":
      label.innerHTML = "SKILLS";
      content.innerHTML = about_data[0].content;
      caption.innerHTML = about_data[0].caption;
      welcome_img.classList.remove("d-none");
      image.classList.add("d-none");
      left.style.display = "none";
      right.style.display = "none";
      divider.style.display="none";
      caption.style.display="none";
          
             $("#content").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
        /*$("#caption").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );*/
        $("#image").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
      break;
    case "list":
      label.innerHTML = "PROJECT";
      content.innerHTML = about_data[1].content;
      divider.style.display="block";
      caption.innerHTML = about_data[1].caption;
      welcome_img.classList.add("d-none");
      image.classList.remove("d-none");
      screenshot.src = about_data[1].url;
      left.style.display = "block";
      right.style.display = "block";
             $("#content").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
        $("#caption").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
        $("#image").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
      break;
    case "paper-plane":
      label.innerHTML = "CONTACT";
      content.innerHTML= contact_data[0].content;
      divider.style.display="block";
      caption.innerHTML = contact_data[0].caption;
      welcome_img.classList.remove("d-none");
      image.classList.add("d-none");
      left.style.display = "none";
      right.style.display = "none";
             $("#content").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
        $("#caption").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
        $("#image").css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
      break;
    case "github":
      /*label.innerHTML = "GITHUB";
      left.style.display = "none";
      right.style.display = "none";
      content.style.marginTop = "15vh";
      caption.style.display = "none";
      content.innerHTML = github_data[0].description;*/
      window.open(github_data[0].url,"_blank");
      break;
      default:
      console.log("Error - event not recognized in function update_display");
    break;
  }
}

update_display("coffee");



// Controllers
function animate_right(){
  right.style.animationPlayState = "running";
}
function pause_animate_right(){
  right.style.animationPlayState = "paused";
}
function animate_left(){
  left.style.animationPlayState = "running";
}
function pause_animate_left(){
  left.style.animationPlayState = "paused";
}
function animate_opacity(event,element){
  if(event == "mouseover"){
    element.style.opacity = 1;
  }else{
        element.style.opacity = 0;
  }
}
/*function update_display(event){
    if(event == "coffee"){
        content.innerHTML = about_data[0].content;
        caption.innerHTML = about_data[0].caption;
    }else if(event == "paper-plane"){
        content.innerHTML= contact_data[0].name+"<br>"+contact_data[0].title+"<br>"+contact_data[0].location+"<br>"+contact_data[0].email;
    }else if(event == "github"){
        content.innerHTML = github_data[0].description+"<br>"+github_data[0].url;
    }else if(event == "left"){
        counter--;
        if(counter<0){
            counter = 0;
            content.innerHTML = about_data[counter].content;
            caption.innerHTML = about_data[counter].caption;
        }else{
            content.innerHTML = about_data[counter].content;
            caption.innerHTML = about_data[counter].caption;
        }
    }else if(event == "right"){
        counter++;
        if(counter>about_data.length){
            counter = 0;
            content.innerHTML = about_data[counter].content;
            caption.innerHTML = about_data[counter].caption;
        }else{
            console.log(caption);
            content.innerHTML = about_data[counter].content;
            caption.innerHTML = about_data[counter].caption;                              
        }
    }else{
        console.log("Error - event not recognized in function update_display");
    }
    
}*/