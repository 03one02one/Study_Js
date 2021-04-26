function solution(arr)
{
    var answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != arr[i+1]) answer.push(arr[i]);
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}

console.log(solution[1, 1, 3, 3, 0, 1, 1]);
console.log(solution(4, 4, 4, 3, 3));