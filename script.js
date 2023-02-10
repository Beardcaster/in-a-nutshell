const loadedText = document.getElementById("visible-text");
const loadedImage = document.getElementById("visible-image")
const profButton = document.getElementById("prof-btn");
const chessButton = document.getElementById("chess-btn");
const solutionBtn = document.getElementById("solution-btn")

profButton.addEventListener('mouseover', e => {
    profButton.src = profileData.hltImg;
})

profButton.addEventListener('mouseleave', e => {
    profButton.src = profileData.standImg;
})

chessButton.addEventListener('mouseover', e => {
    chessButton.src = chessData.hltImg;
})

chessButton.addEventListener('mouseleave', e => {
    chessButton.src = chessData.standImg
})

profButton.addEventListener('click', renderProfileContent);
chessButton.addEventListener('click', renderChessContent);



function renderProfileContent () {

    profButton.style.scale = "80%"
    setTimeout(() => profButton.style.scale = "100%", 50)

    loadedText.innerHTML = "";
    loadedImage.innerHTML = "";
    solutionBtn.innerHTML = "";

    const p = document.createElement('p')
    p.innerText = profileData.profileText;
    loadedText.appendChild(p);

    loadedImage.innerHTML = "";
    const img = document.createElement("img")
    img.src = profileData.profileImg;
    loadedImage.appendChild(img)  

}

function renderChessContent () {    

    chessButton.style.scale = "80%"
    setTimeout(() => chessButton.style.scale = "100%", 50) 

    loadedText.innerHTML = "";
    loadedImage.textContent = "";
    solutionBtn.innerHTML = "";

    const p = document.createElement('p')
    p.innerText = chessData.chessText;
    loadedText.appendChild(p);

    const img = document.createElement("img")
    img.src = chessData.chessPuzzleImg;
    loadedImage.appendChild(img)
    
    const btn = document.createElement("img")
    btn.src = chessData.solutionBtnImg
    btn.setAttribute("id","solution")
    solutionBtn.appendChild(btn);
}
    

