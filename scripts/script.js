function changeNoun() {
    const wordArray = ["a leader", "an artist", "a designer", 
                        "a mentor", "a coder", "a linguist", "an innovator", 
                        "a programmer", "a trailblazer", "a writer",
                        "a poet", "a builder", "a researcher", 
                        "a DIY-er", "a creator", "an editor", "a doer", 
                        "an advocate", "a strategist", "an engineer", 
                        "a developer", "a producer", "a maker", "a teacher"];
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