export function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

export function LinefeedToBr(str) {
    return str.split("\n").join("<br>");
}