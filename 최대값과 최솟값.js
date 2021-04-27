function solution(s) {
    var answer = '';
    var arr = s.split(' ');
    
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    
    answer = min + ' ' + max;
    
    return answer;
}