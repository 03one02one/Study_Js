function solution(arr, divisor) {
    var answer = [];
    
    arr.sort(function(a, b)  {
      return a - b;
    });
    
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0 ) {
            answer.push(arr[i]);
        }
    }
    
    if(answer.length < 1) {
        answer.push(-1);
    }
    
    return answer;
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));