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

  minimum()=function(){
    // Write your code here
    input.sort();
    return input[0];
  }

  // Write your code here
  maxnum()=function{
	input.sort();
    return input[input.length-1];
  }
  size()=function{
  	return input.length;
  }
  avg()=function{
  	var sum = 0;
  	for (var i = 0; i < input.length; i++) {
  		sum += input[i]
  	}
  	return (sum/input.length).toFixed(2);
  }
}
