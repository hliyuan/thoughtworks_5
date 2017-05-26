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
    var array = new Array();
    array.push(input);
    return array;
  }

  this.minimum()=function(){
    // Write your code here
    array.sort();
    return array[0];
  }

  // Write your code here
  this.maxnum()=function{
	array.sort();
    return array[array.length-1];
  }
  this.size()=function{
  	return array.length;
  }
  this.avg()=function{
  	var sum = 0;
  	for (var i = 0; i < array.length; i++) {
  		sum += array[i]
  	}
  	return (sum/array.length).toFixed(2);
  }
}
