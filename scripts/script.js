function changeNoun() {
    const wordArray = ["a leader", "an artist", "a wordsmith", 
                        "a mentor", "a learner", "a linguist", 
                        "a programmer", "a trailblazer", "a friend",
                        "an empath", "a Libra", "a poet", "a builder",
                        "a DIY-er", "a creative", "an editor", "a doer"];
    const colorArray = [];
    let randomIndex = Math.floor(Math.random() * wordArray.length);
    document.getElementById("button-text").innerHTML = wordArray[randomIndex];
}

// This function changes the background color of the button to a color in the palette
function changeColor() {
    let dustyBlue = "#BCCBDE";
    let midBlue = "#C2DDE6";
    let lightBlue = "#E6E9F0";
    let darkPurple = "#431C5D";
    let orange = "#E05915";
    let yellow = "#CDD422";
    const colorArray = [dustyBlue, midBlue, lightBlue, darkPurple, orange, yellow];
    let randomColor = Math.floor(Math.random() * colorArray.length);

    document.getElementById("my-button").style.backgroundColor = colorArray[randomColor];

    if (colorArray[randomColor] == "#431C5D" || colorArray[randomColor] == "#E05915") {
        document.getElementById("my-button").style.color = 'white';
    } else {
        document.getElementById("my-button").style.color = 'black';
    }

}