// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // regex matching sequence x(?=y)
  // use string interpolation in the first group
  // https://stackoverflow.com/questions/3954927/js-regex-how-to-replace-the-captured-groups-only
  let camelToSpace = str.replace(/([a-z](?=[A-Z]))/g, "$1-");
  return camelToSpace.toLowerCase().replace(/ |_/gi, "-"); // use the | for or matching
}

spinalCase("This Is Spinal Tap");

console.log(spinalCase("AllThe-small Things"));
