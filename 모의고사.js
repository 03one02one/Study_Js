function solution(answers) {
    var answer = [];
    var p1 = [1, 2, 3, 4, 5];
    var p2 = [2, 1, 2, 3, 2, 4, 2, 5, 2];
    var p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    function max(a,b){//최대값 함수
        if(a>b) return a;
        else return b;
    }
   let value =0;
    let cnt=[0,0,0]; //수포자들의 점수
    for(var i=0; i<answers.length;i++){
        if(p1[i%5] === answers[i]) cnt[0]++;
        if(p2[i%8] === answers[i]) cnt[1]++;
        if(p3[i%10] === answers[i]) cnt[2]++;
    }
    value = max(max(cnt[0],cnt[1]),cnt[2]); //최대값 입력
    var idx = 0;
    for(var i = 0; i < 3; i++){//최대점수를 가진 수포자 찾기 
       if(cnt[i] === value){
           answer[idx] = i+1;
           idx +=1;
       }
    }      
    
    return answer;
}

console.log(solution[1, 2, 3, 4, 5]);
console.log(solution[1, 3, 2, 4, 2]);