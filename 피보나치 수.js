function solution(n) {
    var fibonacci = [0,1];

    for(var i = 2; i <= n; i++){
        fibonacci.push((fibonacci[0] + fibonacci[1]) % 1234567);
        fibonacci.shift();
    }

    var answer = fibonacci[1];
    return answer;
}

console.log(solution(3));
console.log(solution(5));