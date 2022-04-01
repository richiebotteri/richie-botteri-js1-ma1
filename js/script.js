// Question-1

const cat = {
   complain: function () {
      console.log("Meow!");
   },
};

cat.complain();

// Question-2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question-3

heading.style.fontSize = "2em";

// Question-4

heading.className = "subheading";

// Question-5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
   paragraphs[i].style.color = "red";
}

// Question-6

const resultContainer = document.querySelector(".results");

resultContainer.innerHTML = `<p style="background-color: yellow">New Paragraph</p>`;

// Question-7

const cats = [
   {
      name: "Blob",
      age: 10,
   },
   {
      name: "Harold",
   },
   {
      name: "Blurt",
      age: 21,
   },
];

function loopCatsNames(list) {
   for (let i = 0; i < list.length; i++) {
      console.log(list[i].name);
   }
}

loopCatsNames(cats);

// Question-8

function createCats(cats) {
   let htmlResult = "";

   for (let i = 0; i < cats.length; i++) {
      let defaultAge = "Age Unknown";

      if (cats[i].age) {
         defaultAge = cats[i].age;
      }

      htmlResult += `
        <div>
        <h5>Name: ${cats[i].name}</h5>
        </div>

        <div>
        <p>age: ${defaultAge}</p>
        </div>`;
   }

   return htmlResult;
}

const catsCreated = createCats(cats);

const catContainerDiv = document.querySelector(".cat-container");

catContainerDiv.innerHTML = catsCreated;
