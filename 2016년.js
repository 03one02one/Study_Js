function solution(a, b) {
    var answer = '';
    var date = new Date(2016, (a-1), b);
    answer = date.toString().slice(0, 3).toUpperCase();
    return answer;
}

console.log(solution(5, 24))