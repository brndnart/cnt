// COMPONENT NAME TRANSPILER

const STR = '<MainFormInput />'

function findUppercaseStr(str: string) {
  const uppercaseStr = str.match(/[A-Z]/g)

  if (uppercaseStr) {
    return uppercaseStr
  }

  return str
}
const uppercaseStr = findUppercaseStr(STR)

let newArr = ''
let uppercaseStrCount = 0

for (let i = 0; i < STR.length; i++) {
  if (STR[i] === uppercaseStr[uppercaseStrCount]) {
    if (STR[i] === uppercaseStr[uppercaseStrCount] && uppercaseStrCount > 0) {
      newArr += '-'
    }

    newArr += STR.slice(i, i + 1).toLowerCase()
    uppercaseStrCount++
    continue
  }

  newArr += STR[i]
}
