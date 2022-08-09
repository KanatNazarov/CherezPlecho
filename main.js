const yakor = document.querySelectorAll('a[href*="#"]')

for (let yak of yakor){
    yak.addEventListener("click", function(event){
        event.preventDefault();
        const BlockId = yak.getAttribute('href')
        document.querySelector(''+BlockId).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
}




//

