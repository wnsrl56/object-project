
const isType = (v: any, type: any) => {
  return typeof v === type;
}

const isNumberType  = (v: any) => {
  return !undefinedError(v) && isType(v, 'number');
}

const undefinedError = (v: any) => {
  return v === undefined ? new Error('current value is undefined') : false;
}

const parseCode = (code: object) => {
  let stack:string[] = [];
  let v = JSON.stringify(code).split(/([{}])/g);
  return v.reduce((a,c) => {
    let res;
    let space = ``;
    if(c === '{') {
      stack.push('{');
      let braceCount = stack.length;
      while(braceCount--) {
        space = space + ' ';
      }
      res = `\n${space}${c}\n${space}`;
    } else if(c === '}') {
      let braceCount = stack.length;
      while(braceCount--) {
        space = space + ' ';
      }
      res = `\n${space}${c}`;
      stack.pop();
    } else {
      res = c;
    }
    return `${a}${res}`;
  }, '');
}

const _ =  {
  isNumberType,
  parseCode
};

export default _;
