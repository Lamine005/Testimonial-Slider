const testimonial = [ {
    name: "Momar",
    photoUrl:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEh1bWFpbnxlbnwwfHwwfHx8MA%3D%3D",
    text:"I recently had the pleasure of working with Apple and their customer service team. From start to finish, their support was outstanding. They were always available to answer my questions and provide assistance when needed. Their customer service was top-notch and I am very pleased with the outcome. I highly recommend Apple for anyone looking for great customer service and support."
},

{
    name: "Harry",
    photoUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I recently took an online course with Harry and I can confidently say that he provided great customer service and support. He was always available to answer any questions I had and was very patient with me. I highly recommend Harry's online course!"
},
{
    name: "Kolo",
    photoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SHVtYWlufGVufDB8fDB8fHww",
    text: "Kolo is an amazing instructor for the online course I took. He was always available to answer questions and provide support when needed. He was also very kind and patient with all of us. I highly recommend taking a course with Kolo!"
}


]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");

const usernameEl = document.querySelector(".username");

let idx = 0;

randomTestimonial();

 function randomTestimonial(){
    const {name,photoUrl,text} = 
    testimonial[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if(idx === testimonial.length){
        idx=0;
    }
    setTimeout(() => 
    {randomTestimonial();
    }, 2000);
}