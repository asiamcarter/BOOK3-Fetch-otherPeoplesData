


function foodHTML(name, type, ethnicity, barcode) {
    const section = document.createElement("section")
    const headSection = document.querySelector(".foodList");
    headSection.appendChild(section).classList.add("sec"); 
    
    const h1 = document.createElement("h1")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")
   
    
    section.appendChild(h1)
    section.appendChild(p1)
    section.appendChild(p2)
    section.appendChild(p3)
  
    
    h1.textContent = name
    p1.textContent = type
    p2.textContent = ethnicity
    p3.textContent = ""

    

let list = (ingredient) => {
    p3.textContent += `${ingredient}, `; 
}

fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
.then(foods => foods.json())
.then(parsedFoods => {
    for (var prop in parsedFoods) {
        let ingredients = parsedFoods[prop].ingredients;
        if (ingredients !== undefined) {
        ingredients.forEach(i => {
          list(i.text);
        })
        }
      } 
});
}; 

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodHTML(food.name, food.type, food.ethnicity, food.barcode)
        
        })
    });


                
