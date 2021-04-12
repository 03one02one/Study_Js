function solution(n) {
    var answer = 0;
    var decimal = 0
    for(var i = 2; i < n; i++ ) {
        if(n % i == 0) {
            answer += 1;
        }
    }
    return answer;
}

console.log('10까지 소수 찾기 : ', solution(10))
console.log('5까지 소수 찾기 : ', solution(5))