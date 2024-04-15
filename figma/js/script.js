fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`).then(reponse => reponse.json())
    .then(data => {
        const wrap = document.querySelector(".container");
        const slide = document.querySelector("swiper-slide")

            data.drinks.forEach((element)=>{
                const div = document.createElement("div")
                const coctailImg = element.strDrinkThumb
                console.log(coctailImg );

                slide.innerHTML = `<img src ="${coctailImg}"/>`
                
                slide.appendChild(div)
            })
            
            
      
    });  
      
    