function solution(a, b) {
    answer = '';
    var week = ['SUN', 'MON ', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var today = new Date('2016-'+a+'-'+b).getDay();
    answer = week[today];
    return answer;
}

console.log(solution(5, 24))