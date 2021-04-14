function solution(s) {
    var answer = true;
    if(s.length != 4 || s.length != 6 && isNaN(s) == true) {
        answer = false;
    }
    return answer;
}

console.log(solution("a234"));
console.log(solution("1234"));