export function getUnique(input) {
    return input.filter((item, pos) => input.indexOf(item) === pos);
};