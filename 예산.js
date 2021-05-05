function solution(d, budget) {
    var answer = 0;
    var len = d.length;
    var remain = budget;
    
    d.sort((a,b)=>a-b);

    if(d[0] > budget){
      return answer;
    } else {
        for (var i =0; i<len; i++){
            remain = remain - d[i];
            if(remain < 0){
              answer = i;
                break;
            }
        } 
        if(answer === 0){
          answer = len;
        }

        return answer;
    }
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));