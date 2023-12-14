let box = document.querySelector(".box");
let searchInput = document.querySelector("input");
let form=document.querySelector("form")

async function getData(word) {
  const res = await axios(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  console.log(res.data)
  drawCard(res.data);
}

function drawCard(arr) {
//   box.innerHTML = "";
    let word = document.createElement("div");
    word.innerHTML += `
        <div class="text">
            <span>${arr[0].word}</span>
             <i onclick="playAudio(this)" class="fa-solid fa-volume-xmark">
                 <audio class="audio" src="${arr[0].phonetics[0].audio}"></audio>
             </i>
        </div>
         <div class="textmean">
                <h4>Definition(${arr[0].meanings[0].partOfSpeech})</h4>
                <p>${arr[0].meanings[0].definitions[0].definition}</p>
         </div>
    `;
    box.append(word)
}



form.addEventListener("submit", function (e) {
  e.preventDefault();
  getData(searchInput.value);
});


function playAudio(icon){
    console.log(icon.className);
    icon.className="fa-solid fa-volume-high"
    icon.querySelector("audio").play()
}