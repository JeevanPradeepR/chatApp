
async function GetKeyWord(file) {
    let myObject = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+file);
    let myText = await myObject.json();
    return myText;
}

export default GetKeyWord;