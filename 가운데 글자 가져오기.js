function solution(s) {
    var answer = '';
    var len = s.length;
    
    len % 2 == 0 ? answer = s.charAt((len/2)-1) + s.charAt(len/2) : answer = s.charAt(len/2);
    return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));