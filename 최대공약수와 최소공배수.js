function solution(n, m) {
    var answer = [];
    var minNum = Math.min(n, m);
    var maxNum = Math.max(n, m);
    answer[0] = gcd(minNum, maxNum);
    answer[1] = lcm(minNum, maxNum);
    
    return answer;
}

function gcd(minNum, maxNum) {
    return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum%maxNum)
}

function lcm(minNum, maxNum) {
    return minNum * maxNum / gcd(minNum, maxNum);
}

console.log(solution(3, 12));
console.log(solution(2, 5));