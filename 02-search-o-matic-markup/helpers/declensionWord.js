export function declensionWord(count){
    count %= 100;
    let five = "фильмов";
    if (count >= 5 && count <= 20) {
        return five;
    }

    count %= 10;
    if (count === 1) {
        let one = "фильм";
        return one;
    }

    if (count >= 2 && count <= 4) {
        let two = "фильма";
        return two;
    }

    return five;
}