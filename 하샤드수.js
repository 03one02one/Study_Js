function solution(x) {
    var answer = true;
    var str_x = x.toString();
    var sum = 0;
    for(var i = 0; i < str_x.length; i++) {
        sum += Number(str_x.charAt(i));
    }
    if(x%sum != 0) {
        answer = false;
    }
    return answer;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));