// Events

// const button=document.createElement("button");
// button.setAttribute("type","button");
// button.classList.add("btn","btn-danger");
// button.innerHTML="Click here to move";
// document.body.append(button);



// const div12=document.getElementById("div1");
// div12.addEventListener("click",()=>div12.style.backgroundColor="yellow");
// div12.addEventListener("dblclick",()=>div12.style.backgroundColor="red");



// function foo()
// {
//   const res=document.getElementById("email").value;
//   if(res=="dineshmcm07@gmail.com")
//   {
//     console.log("Valid User");
//   }
//   else{
//     console.log("invalid user");
//   }
// }

// Tag

const label=document.createElement("label");
const input =document.createElement("input");
const button=document.createElement("button");

// Attributes

label.setAttribute("for","email");
input.setAttribute("id","email");
input.setAttribute("type","email");
button.setAttribute("type","submit");
button.setAttribute("id","button");

// // content

label.innerHTML="Email";
button.innerHTML="Submit";

document.body.append(label,input,button);

// // Event Listner


button.addEventListener("click",foo);

function foo()
{
    const res=document.getElementById("button").value;
    console.log(res);
    if(res=="dineshmcm07@gmail.com")
    {
        console.log("Valid user");
    }
    else
    {
        console.log("invalid user");
    }

}



// Prompt

// const button=document.createElement("button");
// button.innerHTML="Click here";
// button.className="btn";
// document.body.append(button);

// button.addEventListener("click",foo1)

// function foo1()
// {
//     const res1=parseInt(prompt("Enter the key value"));
//     // console.log(res1);
//     const span=document.createElement("span");
//     span.innerHTML=res1;
//     document.body.append(span);

// }