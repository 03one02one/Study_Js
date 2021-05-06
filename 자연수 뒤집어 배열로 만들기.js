function solution(n) { 
    var answer = []; 
    
    n = n.toString(); 
    var len = n.length-1; 
    for(let i=len; i>=0; i--){ 
        answer.push(parseInt(n.charAt(i))); 
    } 
    return answer; 
}

console.log(solution(12345))