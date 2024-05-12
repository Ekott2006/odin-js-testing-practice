export default function reverseString(text) {
    let newValue = ""
    for (let index = text.length - 1; index >= 0; index--) {
        const element = text[index];
        newValue += element
    }
    return newValue
}
