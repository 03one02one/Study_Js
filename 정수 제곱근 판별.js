function solution(n) {
    var answer = 0;
    var x = Math.sqrt(n);
    return Number.isInteger(x) ? Math.pow(x+1, 2) : -1
}

console.log(solution(121));
console.log(solution(3));