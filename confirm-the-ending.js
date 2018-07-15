function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return str.split('').slice(-target.length).join('') === target;
  }

  function confirmEndingSubstr(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return str.substr(-target.length) === target;
  }
  

  confirmEnding("Bastian", "n");