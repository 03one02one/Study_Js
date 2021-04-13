function solution(n)
{
    var answer = 0;
    var str_n = n.toString();
    
    for(let i=0; i<str_n.length; i++) {
        answer += Number(str_n.charAt(i));
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

console.log(solution(123));
console.log(solution(987));