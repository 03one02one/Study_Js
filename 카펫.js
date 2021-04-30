function solution(brown, yellow) {
    var answer = [];
    var div_arr = []; // yellow 약수의 배열 초기화
    var div = 0;  // yellow 약수 
    var area = 0;  // 카펫 전체 넓이 초기화
    
    for(let i = 1; i <= yellow; i++) {
        if(yellow % i == 0) {  // 1 ~ yellow까지 yellow랑 나뉘었을 때 나머지가 0이면
            div_arr.push(i)  // div_arr에 해당 값 넣어주기
        }
    }  // yellow 약수 구하는 함수
    
    for(let i = 0; i < div_arr.length; i++) {
        var last = div_arr[div_arr.length-1]  // div_arr의 마지막 값 요소 접근
        div =  last / div_arr[i]  // yellow 약수 하나의 다른 한 짝의 약수 구하기
																  // ex. 24의 약수인 경우 div_arr[i]가 12이면 div는 2 
        area = (div+2) * (div_arr[i] + 2)  // 카펫 전체 넓이 구하기
        if(area-yellow == brown) {  // 카펫 전체 넓이에서 yellow를 빼면 테두리인 brown이 나오니 그것이 참이면
            answer[0] = div_arr[i] + 2  // answer 0번째의 카펫 가로 넣기
            answer[1] = div +2  // answer 1번째의 카펫 세로 넣기
        }
    }
    return answer;
}

