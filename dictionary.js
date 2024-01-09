function audf(data) {
        console.log(data[0]["phonetics"].length);
        adv = 0;
        for (let i = 0; i < data[0]["phonetics"].length; i++)
        {
                if (data[0]["phonetics"][i].hasOwnProperty("audio"))
                {
                        if (data[0]["phonetics"][i]["audio"].length == 0)
                                continue;
                        adv = new Audio(data[0]["phonetics"][i]["audio"]);
                        // ad.play();
                        break;
                }
        }
}

function subt()
{
        document.body.scrollIntoView({ behavior: "smooth", block: "start"});
}
function sdbt()
{
        document.body.scrollIntoView({ behavior: "smooth", block: "end" })
}
function audf1()
{
        if (adv == 0)
        {
                let pb1 = document.getElementById("popup2");
                pb1.classList.remove("invsbt");
                pb1.classList.add("active");
                return;
        }
        adv.play();
}
function at_popup3() {
        document.getElementById("popup3").classList.remove("invsbt");
        document.getElementById("popup3").classList.add("active");
}
function objprt(data) {
        let resct = document.getElementById("rc");
        resct.classList.remove("reload1");
        resct.classList.add("reload2");
        console.clear();
        noun.innerHTML = "";
        noundef.innerHTML = "";
        pronoun.innerHTML = "";
        pronoundef.innerHTML = "";
        verb.innerHTML = "";
        verbdef.innerHTML = "";
        adjective.innerHTML = "";
        adjectivedef.innerHTML = "";
        adverb.innerHTML = "";
        adverbdef.innerHTML = "";
        preposition.innerHTML = "";
        prepositiondef.innerHTML = "";
        conjunction.innerHTML = "";
        conjunctiondef.innerHTML = "";
        interjection.innerHTML = "";
        interjectiondef.innerHTML = "";
        synm.innerHTML = "";
        synmdf.innerHTML = "";
        antm.innerHTML = "";
        antmdf.innerHTML = "";
        console.log(data);
        let nbs = 1;
        let nba = 1;
        synd.style.display = "none";
        antd.style.display = "none";
        nounf.style.display = "none";
        pronounf.style.display = "none";
        verbf.style.display = "none";
        adjectivef.style.display = "none";
        adverbf.style.display = "none";
        prepositionf.style.display = "none";
        conjunctionf.style.display = "none";
        interjectionf.style.display = "none";
        phnt.style.display = "none";
        if (!data.hasOwnProperty(0))
        {
                word_info.style.display = "none";
                let pb = document.getElementById("popup");
                pb.classList.remove("invsbt");
                pb.classList.add("active");
                document.body.style.backgroundColor = "gray";
                document.body.style.transition = "0.4s";
                return;
        }
        word_info.style.display = "block";
        wordm.innerHTML = data[0]["word"];
        audf(data);
        if (data[0].hasOwnProperty("phonetic"))
        {
                phnt.innerHTML = "[" + data[0]["phonetic"].slice(1, data[0]["phonetic"].length-1) + "]";
                phnt.style.display = "block";
        }
        else if (data[0]["phonetics"].length != 0)
        {
                for (let i = 0; i < data[0]["phonetics"].length; i++)
                {
                        if (data[0]["phonetics"][i].hasOwnProperty("text") && data[0]["phonetics"][i]["text"] != "")
                                phnt.innerHTML = "[" + data[0]["phonetics"][i]["text"].slice(1, data[0]["phonetics"][i]["text"].length - 1) + "]";
                        phnt.style.display = "block";
                }
        }
        else
                phnt.style.display = "none";
        sac.style.display = "block";
        setTimeout(() => {
                resct.classList.add("reload1");
                resct.classList.remove("reload2");
        }, 100)
        for (let i = 0; i < data[0]["meanings"].length; i++) {
                let temp1 = data[0]["meanings"][i];
                if (temp1["synonyms"].length != 0) {
                        synm.innerHTML = "<h2 class = \"unselectable\" style=\"color: black;\">" + "Synonyms:" + "</h2><br>";
                        let n1 = temp1["synonyms"].length;
                        for (let j = 0; j < n1; j++)
                                synmdf.innerHTML += (nbs++) + ". " + temp1["synonyms"][j] + "<br>";
                        synd.style.display = "block";
                }
                if (temp1["antonyms"].length != 0) {
                        antm.innerHTML = "<h2 class = \"unselectable\" style=\"color: black;\">" + "Antonyms:" + "</h2><br>";
                        let n1 = temp1["antonyms"].length;
                        for (let j = 0; j < temp1["antonyms"].length; j++)
                                antmdf.innerHTML += (nba++) + ". " + temp1["antonyms"][j] + "<br>";
                        antd.style.display = "block";
                }
                console.log(temp1["partOfSpeech"] + ":");
                if (temp1["partOfSpeech"] == "noun") {
                        noun.innerHTML = "<h2 class = \"unselectable\" style=\"color: black;\">" + temp1["partOfSpeech"] + ":</h2><br>"
                        let n1 = temp1["definitions"].length;
                        let nb = 1;
                        for (let j = 0; j < n1; j++) {
                                noundef.innerHTML += (nb++) + ". " + temp1["definitions"][j]["definition"] + "<br>";
                                if (temp1["definitions"][j].hasOwnProperty("example") == true) {
                                        noundef.innerHTML += "<span style=\"color:gray;\"><i>Example: " + temp1["definitions"][j]["example"] + "</i><br>";
                                }
                        }
                        nounf.style.display = "block";
                }
                if (temp1["partOfSpeech"] == "pronoun") {
                        pronoun.innerHTML = "<h2 class = \"unselectable\" style=\"color: black;\">" + temp1["partOfSpeech"] + ":</h2><br>"
                        let n1 = temp1["definitions"].length;
                        let nb = 1;
                        for (let j = 0; j < n1; j++)
                        {
                                pronoundef.innerHTML += (nb++) + ". " + temp1["definitions"][j]["definition"] + "<br>";
                                if (temp1["definitions"][j].hasOwnProperty("example") == true)
                                {
                                        pronoundef.innerHTML += "<span style=\"color:gray;\"><i>Example: " + temp1["definitions"][j]["example"]+"</i><br>";
                                }
                        }
                pronounf.style.display = "block";
                }
                if (temp1["partOfSpeech"] == "verb") {
                        verb.innerHTML = "<h2 class = \"unselectable\" style=\"color: black;\">" + temp1["partOfSpeech"] + ":</h2><br>"
                        let n1 = temp1["definitions"].length;
                        let nb = 1;
                        for (let j = 0; j < n1; j++)
                        {
                                verbdef.innerHTML += (nb++) + ". " + temp1["definitions"][j]["definition"] + "<br>";
                                if (temp1["definitions"][j].hasOwnProperty("example") == true) {
                                        verbdef.innerHTML += "<span style=\"color:gray;\"><i>Example: " + temp1["definitions"][j]["example"] + "</i><br>";
                                }
                        }
                verbf.style.display = "block";
                }
                if (temp1["partOfSpeech"] == "adjective") {
                        adjective.innerHTML = "<h class = \"unselectable\"2 style=\"color: black;\">" + temp1["partOfSpeech"] + ":</h2><br>"
                        let n1 = temp1["definitions"].length;
                        let nb = 1;
                        for (let j = 0; j < n1; j++) {
                                adjectivedef.innerHTML += (nb++) + ". " + temp1["definitions"][j]["definition"] + "<br>";
                                if (temp1["definitions"][j].hasOwnProperty("example") == true) {
                                        adjectivedef.innerHTML += "<span style=\"color:gray;\"><i>Example: " + temp1["definitions"][j]["example"] + "</i><br>";
                                }
                        }
                adjectivef.style.display = "block";
                }
                if (temp1["partOfSpeech"] == "adverb") {
                        adverb.innerHTML = "<h2 class = \"unselectable\" style=\"color: black;\">" + temp1["partOfSpeech"] + ":</h2><br>"
                        let n1 = temp1["definitions"].length;
                        let nb = 1;
                        for (let j = 0; j < n1; j++)
                        {
                                adverbdef.innerHTML += (nb++) + ". " + temp1["definitions"][j]["definition"] + "<br>";
                                if (temp1["definitions"][j].hasOwnProperty("example") == true) {
                                        adverbdef.innerHTML += "<span style=\"color:gray;\"><i>Example: " + temp1["definitions"][j]["example"] + "</i><br>";
                                }
                        }
                adverbf.style.display = "block";
                }
                if (temp1["partOfSpeech"] == "preposition") {
                        preposition.innerHTML = "<h2 class = \"unselectable\" style=\"color: black;\">" + temp1["partOfSpeech"] + ":</h2><br>"
                        let n1 = temp1["definitions"].length;
                        let nb = 1;
                        for (let j = 0; j < n1; j++)
                        {
                                prepositiondef.innerHTML += (nb++) + ". " + temp1["definitions"][j]["definition"] + "<br>";
                                if (temp1["definitions"][j].hasOwnProperty("example") == true) {
                                        prepositiondef.innerHTML += "<span style=\"color:gray;\"><i>Example: " + temp1["definitions"][j]["example"] + "</i><br>";
                                }
                        }
                prepositionf.style.display = "block";
                }
                if (temp1["partOfSpeech"] == "conjunction") {
                        conjunction.innerHTML = "<h2 class = \"unselectable\" style=\"color: black;\">" + temp1["partOfSpeech"] + ":</h2><br>"
                        let n1 = temp1["definitions"].length;
                        let nb = 1;
                        for (let j = 0; j < n1; j++)
                        {
                                conjunctiondef.innerHTML += (nb++) + ". " + temp1["definitions"][j]["definition"] + "<br>";
                                if (temp1["definitions"][j].hasOwnProperty("example") == true) {
                                        conjunctiondef.innerHTML += "<span style=\"color:gray;\"><i>Example: " + temp1["definitions"][j]["example"] + "</i><br>";
                                }
                        }
                        conjunctionf.style.display = "block";
                }
                if (temp1["partOfSpeech"] == "interjection") {
                        interjection.innerHTML = "<h2 class = \"unselectable\" style=\"color: black;\">" + temp1["partOfSpeech"] + ":</h2><br>"
                        let n1 = temp1["definitions"].length;
                        let nb = 1;
                        for (let j = 0; j < n1; j++)
                        {
                                interjectiondef.innerHTML += (nb++) + ". " + temp1["definitions"][j]["definition"] + "<br>";
                                if (temp1["definitions"][j].hasOwnProperty("example") == true) {
                                        interjectiondef.innerHTML += "<span style=\"color:gray;\"><i>Example: " + temp1["definitions"][j]["example"] + "</i><br>";
                                }
                        }
                        interjectionf.style.display = "block";
                }
                let n = temp1["definitions"].length;
                for (let j = 0; j < n; j++) {
                        console.log(temp1["definitions"][j]["definition"]);
                }
        }
}
let nbr = document.getElementById("nb");
nbr.style.width = (screen.width - 35).toString() + "px";
var adv;
let nf = document.getElementById("ntfd");
phnt.style.display = "none";
word_info.style.display = "none";
synd.style.display = "none";
antd.style.display = "none";
nounf.style.display = "none";
pronounf.style.display = "none";
verbf.style.display = "none";
adjectivef.style.display = "none";
adverbf.style.display = "none";
prepositionf.style.display = "none";
conjunctionf.style.display = "none";
interjectionf.style.display = "none";

const srchcont = document.querySelector(".srch-cont");

console.log(window.getSelection().toString());
audb.addEventListener("click", (e) => {
        let word = document.getElementById("search_word").value;
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                .then(res => res.json())
                .then(data => audf1(data));
});
srbt.addEventListener("click", (e) => {
        let word = document.getElementById("search_word").value;
        const btnelem = document.getElementById("srbt");
        if (word.length == 0)
        {
                console.log("enter something");
                return;
        }
        else
        {
                fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                        .then(res => res.json())
                        .then(data => objprt(data));
                setTimeout(() => {
                        btnelem.blur();
                }, 100);
        }
});
wikibtrd.addEventListener("click", (e) => {
        let word = document.getElementById("search_word").value;
        window.open(`https://en.wikipedia.org//wiki/${word}`, "_blank");
        document.getElementById("popup").classList.add("invsbt");
        document.getElementById("popup").classList.remove("active");
        document.body.style.backgroundColor = "rgba(231,233,246,255)";
        document.body.style.transition = "0.4s";
});
wikibtcl.addEventListener("click", (e) => {
        document.getElementById("popup").classList.add("invsbt");
        document.getElementById("popup").classList.remove("active");
        document.body.style.backgroundColor = "rgba(231,233,246,255)";
        document.body.style.transition = "0.4s";
})
clbt.addEventListener("click", (e) => {
        document.getElementById("popup2").classList.add("invsbt");
        document.getElementById("popup2").classList.remove("active");
})
clbt2.addEventListener("click", (e) => {
        document.getElementById("popup3").classList.add("invsbt");
        document.getElementById("popup3").classList.remove("active");
})
addEventListener("dblclick", (e) => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${window.getSelection().toString()}`)
                .then(res => res.json())
                .then(data => objprt(data));
        let srchtxt = document.getElementById("search_word");
        srchtxt.value = window.getSelection().toString();
})