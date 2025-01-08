function printString(str: string): void {
  console.log(str);
}

function printNumber(num: number): void {
  console.log(num);
}

function processData(data: string | number): void {
  if (typeof data === 'string') {
    printString(data);
  } else {
    printNumber(data);
  }
}

processData('hello');
processData(123);