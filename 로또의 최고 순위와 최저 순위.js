function solution(lottos, win_nums) {
    var answer = [];
    
    answer[0] = best(lottos, win_nums);
    answer[1] = loser(lottos, win_nums);
    
    return answer;
}

function best(lottos, win_nums) {
    var cnt = 0;
    var b_cnt = 0;
    var result = 0;
    
    for(let i = 0; i < lottos.length; i++) {
        if(win_nums.includes(lottos[i])) cnt++;
        if(lottos[i] == 0) b_cnt++;
    }
    result = cnt + b_cnt;
    
    if(result == 6) return 1;
    else if(result == 5) return 2;
    else if(result == 4) return 3;
    else if(result == 3) return 4;
    else if(result == 2) return 5;
    else return 6;
}

function loser(lottos, win_nums) {
    var cnt = 0;
    var l_cnt = 0;
    
    for(let i = 0; i < lottos.length; i++) {
        if(win_nums.includes(lottos[i])) cnt++;
    }
    if(cnt == 6) return 1;
    else if(cnt == 5) return 2;
    else if(cnt == 4) return 3;
    else if(cnt == 3) return 4;
    else if(cnt == 2) return 5;
    else return 6;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])) ;
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));