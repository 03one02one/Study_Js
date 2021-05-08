function solution(A,B){
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    // A 배열 오름차순으로 정렬
    A.sort(function(a, b)  {
        return a - b;
    });
    
    // B 배열 내림차순으로 정렬
    B.sort(function(a, b) {
        return b - a
    })
    
    for(let i = 0; i < A.length; i++) {
        answer += A[i] * B[i]
    }
    
    return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]))
console.log(solution([1, 2], [3, 4]))