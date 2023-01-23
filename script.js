//const h2 = document.createElement("h2");
//h2.textContent = "This content added by JavaScript";
//document.querySelector("body").appendChild(h2);

const inputButton = document.getElementById('puzzle-button');
const mouseoverHighlight = document.getElementById('profile-pic');

inputButton.addEventListener('click', function() {
    alert('Puzzle Solution: ...Rg6+ Kh3, Rg4. White must sacrifice their queen or lose the game immediately.');
});

mouseoverHighlight.addEventListener('mouseover', function(event){
    if (event = true) {
        console.log("ITS HAPPENING");
        mouseoverHighlight.style.scale = "150%"}        
});

mouseoverHighlight.addEventListener('mouseleave', function(event){
    if (event=true) {
        mouseoverHighlight.style.scale = "100%"}    
})



