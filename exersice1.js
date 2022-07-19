let data = [
  ["The", "red", "horse"],
  ["Plane", "over", "the", "ocean"],
  ["Chocolate", "ice", "cream", "is", "awesome"],
  ["this", "is", "a", "long", "sentence"],
];

function groupeWords(array) {
  return array.map((item) => {
    return item.join(" ");
  });
}
console.log(groupeWords(data));
