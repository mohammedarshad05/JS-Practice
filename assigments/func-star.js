function generatesPattern(patternChar,numLines){
    let pattern = '';
for (let i = 1; i < numLines; i++) {
  console.log(pattern);
  pattern = pattern + '' + patternChar;
  }
}
generatesPattern("#",8);

