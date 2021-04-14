function solution(n) {
    var answer = '';
    answer = '수박'.repeat(n).substring(0, n);
    return answer;
}

console.log(solution(3));
console.log(solution(4));