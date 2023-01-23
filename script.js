const inputButton = document.getElementById('puzzle-button');
const mouseoverHighlight = document.getElementById('profile-pic');

inputButton.addEventListener('click', function() {
    alert('Puzzle Solution: ...Rg6+ Kh3, Rg4. White must sacrifice their queen or lose the game immediately.');
});

mouseoverHighlight.addEventListener('mouseover', function(event){
    if (event = true) {        
        mouseoverHighlight.style.scale = "110%"}        
});

mouseoverHighlight.addEventListener('mouseleave', function(event){
    if (event=true) {
        mouseoverHighlight.style.scale = "100%"}    
})



