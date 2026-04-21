const allStyles = getComputedStyle(document.documentElement);
const primaryTextFromGlobal = allStyles.getPropertyValue("--primary-text");
console.log("Primary Text Global:", primaryTextFromGlobal);

const sectionTwoStyles = getComputedStyle(document.querySelector("#section-two"));
const primaryTextFromLocal = sectionTwoStyles.getPropertyValue("--primary-text");
console.log("Primary Text from Section Two:", primaryTextFromLocal);