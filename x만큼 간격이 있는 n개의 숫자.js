function solution(x, n) {
    var answer = [];
    var cnt = 0;
    while(cnt<n) {
        cnt++;
        answer.push(x*cnt);
    }
    return answer;
}

console.log(solution(2, 5));
console.log(solution(4, 2));
console.log(solution(-4, -2));