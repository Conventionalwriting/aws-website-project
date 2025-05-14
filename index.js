//Signup form and what to do with it (comming soon)

//Accountpage profile pic upload
let displayprofilepic = document.getElementById("display-profile-pic");
let uploadBtn = document.getElementById("uploadBtn");

uploadBtn.onchange = function(){
    displayprofilepic.src = URL.createObjectURL(uploadBtn.files[0])
}
//Accountpage
const ProfileBtn = document.querySelector("#ProfileBtn");
const ChaUsnBtn = document.querySelector("#ChaUsnBtn");
const ChaEmail = document.querySelector("#ChaEmail");
const ChaPass = document.querySelector("#ChaPass");
let isClicked1 = true;
let isClicked2 = true;
let isClicked3 = true;
let isClicked4 = true;

function showOrHide(id){
    if(id === ChaUsnBtn){
        if(isClicked2){
            id.style.display = "block";
            ProfileBtn.style.display = "none";
            ChaEmail.style.display = "none";
            ChaPass.style.display = "none";
            isClicked2 = false;
            isClicked1 = true;
            isClicked3 = true;
            isClicked4 = true;    
        }
    }
    else if(id === ChaEmail){
        if(isClicked3){
            id.style.display = "block";
            ProfileBtn.style.display = "none";
            ChaUsnBtn.style.display = "";
            ChaPass.style.display = "";
            isClicked3 = false;
            isClicked1 = true;
            isClicked2 = true;
            isClicked4 = true;
        }
    }
    else if(id === ChaPass){
        if(isClicked4){
            id.style.display = "block";
            ProfileBtn.style.display = "none"
            ChaUsnBtn.style.display = "none";
            ChaEmail.style.display = "none";
            isClicked4 = false;
            isClicked1 = true;
            isClicked2 = true;
            isClicked3 = true;
        }
    }
    else if(id === ProfileBtn){
        if(isClicked1){
            id.style.display ="block";
            ChaUsnBtn.style.display = "none";
            ChaEmail.style.display = "none";
            ChaPass.style.display = "none";
            isClicked1 = false;
            isClicked2 = true;
            isClicked3 = true;
            isClicked4 = true;
        }
    }
}  





