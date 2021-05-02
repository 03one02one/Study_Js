function solution(n, words) { // O
    var answer = [0,0];
    var lastChar;
    var remember = [];
    
    for(var i = 0; i < words.length; i++){
        if(i > 0){
            var tmp = words[i].split("");
            if(tmp[0] == lastChar){
				// 이미 말했던 단어 중복 사용
                if(remember.includes(words[i])){ 
                    answer[0] = (i % n) + 1;
                    answer[1] = Number.parseInt(i / n) + 1;
					return answer;
                }else{
		            lastChar = tmp[words[i].length - 1];
		            remember.push(words[i]);
				}
            }else{ //끝말잇기 실패
                answer[0] = (i % n) + 1;
                answer[1] = Number.parseInt(i / n) + 1;
				return answer;
            }
        }else{// 첫번째 단어는 끝말잇기 검사안하고 맨끝단어가 무엇인지만 확인
            var tmp = words[0].split("");
            lastChar = tmp[words[0].length - 1];
            remember.push(words[0]);
        }
    }
	
	//모두 끝말잇기 성공 시 return
	return answer;
} 

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]))