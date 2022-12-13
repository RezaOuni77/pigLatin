function toPigLatin(str) {
    const words = str.toLowerCase().split("ay ")
    const result = [];
    for (let i = 0; i < words.length; i += 1) {
        const word = words[i]
        const lastW = word.substr(word.length - 1);
        result.push(lastW + word.substring(0, word.length - 1));
    }
    return result.join(" ");
}

console.log(toPigLatin("hetay uickqay rownbay oxfay "));