function solution(n) {
    var answer = 0;
    answer = Number(n.toString().split('').sort().reverse().join(''));

    return answer;
}

console.log(solution(118372));