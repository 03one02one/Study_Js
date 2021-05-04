function solution(people, limit) {
    var answer = 0;
    
    // 내림차순 정렬
    people.sort((a,b)=>b-a);

    for(let i = 0, j = people.length - 1; i <= j; i++) {
        if(people[i] + people[j] <= limit) j--;
        answer ++;
    }

    return answer;
}

console.log(solution([70, 50, 80, 50]));
console.log(solution([70, 80, 50]));