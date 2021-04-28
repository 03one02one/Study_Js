function solution(s){
    var answer = true;
    var sum = 0;
    
    for(let i = 0; i < s.length; i++) {
        s[i] === "(" ? sum++ : sum--
        if(sum < 0) break
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return sum === 0;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));