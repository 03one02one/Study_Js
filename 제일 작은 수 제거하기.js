function solution(arr) {
    var answer = [];
    if(arr.length != 1) {
        const idx = arr.indexOf(Math.min.apply(null, arr));
        arr.splice(idx);
        answer = arr;
    }else {
        answer.push(-1);
    }
    
    return answer;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));