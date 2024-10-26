// List of Houses
const houses =["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

// List of Students
const students =[
  {
    id: 1,
    name: "Harry Potter",
    imageUrl: "https://static.wikia.nocookie.net/universo-compartilhado/images/1/19/HP.webp/revision/latest?cb=20230425221506&path-prefix=pt-br" 
  },
  {
    id: 2,
    name: "Hermione Granger",
    imageUrl: "https://i0.wp.com/the-art-of-autism.com/wp-content/uploads/2022/12/Hermione-Granger.jpg?fit=450%2C600&ssl=1",
  },
  {
    id: 3,
    name: "Draco Malfroy",
    imageUrl: "https://i.pinimg.com/736x/11/c5/a3/11c5a3dc93a313731e411fc0baf3e109.jpg",
  },
  {    
    id: 4,
    name: "Ron Weasley",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg", 
  },
  {
    id: 5, 
    name: "Luna Lovegood",
    imageUrl: "https://media.harrypotterfanzone.com/luna-lovegood-half-blood-prince-portrait.jpg",
  }
    
]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// Form appears for entering student and clears once submit button is clicked //
    const cardsOnDom = (students) => {
            let domString = "";
            for (const student of students) {
                domString += `<div class="card" style="width: 18rem;">
                <img src="${student.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">${student.name}</p>
                  <button class="btn btn-danger" id="delete--${student.id}">EXPEL</button>
                </div>
              </div>`;
              
              
            };
            renderToDom("#app", domString);
          }

// Homepage button function //
document.getElementById("main-btn").addEventListener("click", () => {
  const formString = `<form id="myForm">  
  <div class="mb-3">
  <label for="studentName" class="form-label">Enter First Year's Name</label>
  <input type="name" class="form-control" id="studentName" aria-describedby="studentName">
  <button type ="submit" id="sort-btn" onclick = "cardsOnDom(students)">Submit</button>
  </form>`
  document.getElementById("place-form").innerHTML = formString 
  const introCard = document.getElementById("intro-card");
  introCard.style.display = "none";
  myForm.style.display = "block";
});
