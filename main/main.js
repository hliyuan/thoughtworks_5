module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
// Write your code here
`);
    console.log(`o) 最大值 = ${sequence.maxnum()}
// Write your code here
`);
    console.log(`o) 元素数量 = ${sequence.size()}
// Write your code here
`);
    console.log(`o) 平均值 = ${sequence.avg()}
// Write your code here
`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.input = input;
  }

  minimum(){
    // Write your code here
    let array = this.input;
    array.sort();
    return array[0];
  }

  // Write your code here
  maxnum(){
	let array = this.input.sort();
    return input[input.length-1];
  }
  size(){
  	return input.length;
  }
  avg(){
  	var sum = 0;
  	let array = this.input;
  	for (var i = 0; i < array.length; i++) {
  		sum += array[i]
  	}
  	return (sum/array.length).toFixed(2);
  }
}
