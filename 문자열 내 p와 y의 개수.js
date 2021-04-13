function solution(s) {
    var answer = true;
    s.toLowerCase();
    var p_result = s.match(/p/g);
    var y_result = s.match(/y/g);
    if(p_result != null && y_result != null) {
        if(p_result.length != y_result.length) {
            answer = false;
        }
    }
    return answer;
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));