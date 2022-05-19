function random(a) {
  if (isNaN(a)) return -1;
}

function random(a, b) {
  if (isNaN(a) && isNaN(b)) return -1;
}

export default random;
