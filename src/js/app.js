export default class Validator {
  validateUsername(str) {
    this.str = str;

    const beginWords = new RegExp('^[^\\d-_]', 'g');
    const endWords = new RegExp('[^\\d-_]$', 'g');
    const rusChar = new RegExp('[А-Яа-я]+', 'g');
    const checkNum = new RegExp('\\d{4,}', 'g');
    const checkCurrectChar = new RegExp('[a-zA-Z0-9-_]+', 'g');
    const checkWrongChar = new RegExp('[^A-Za-z0-9-_]+', 'g');

    return beginWords.test(this.str)
        && endWords.test(this.str)
        && (!rusChar.test(this.str))
        && (!checkNum.test(this.str))
        && checkCurrectChar.test(this.str)
        && (!checkWrongChar.test(this.str));
  }
}
