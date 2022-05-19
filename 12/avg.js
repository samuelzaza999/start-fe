function avg(...param) {
  if (Array.isArray(param)) {
    var filtered = param.flat().filter((e) => isNaN(e) === false);
  } else {
    var filtered = param.filter((e) => isNaN(e) === false);
  }

  let base = 0;
  for (let i = 0; i < filtered.length; i++) {
    base += filtered[i];
  }
  const result = base / filtered.length;

  return result;
}

export default avg;
