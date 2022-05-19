function random(a = 0, b = 0) {
  if (isNaN(a) || isNaN(b)) return -1;
  const result = Math.floor(Math.random() * Math.abs(a - b) + Math.min(a, b));
  return result;
}

export default random;
