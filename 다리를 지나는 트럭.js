function solution(bridge_length, weight, truck_weights) {
    // 첫 번째로 건널 트럭을 truck_weights배열에서 뽑아줌
    const truck = truck_weights.shift();
    
    // 다리의 길이 -1만큼 다리 배열을 만들어 준 후,
    let bridge = new Array(bridge_length - 1).fill(0);
    
    // 다리배열의 마지막에는 아까 뽑은 트럭을 마지막에 push해줌
    bridge.push(truck);
    
    // 현재 다리의 무게
    let bridgeWeight = truck;
    
    // 시간 
    let time = 1;
    
    // 다리의 무게가 0이 되면 모든 트럭이 건넜다고 봄
    while(bridgeWeight) {
        // 다리 배열의 첫번째 요소를 뽑아 현재 다리 무게에서 빼준다.
        bridgeWeight = bridgeWeight - bridge.shift();
        
        // 다음으로 올릴 트럭의 무게
        const nextTruckWeight = truck_weights[0];
        
        // 만약 현재 다리 무게 + 다음으로 올릴 트럭의 무게 <= 다리가 버틸 수 있는 무게인 경우
        if(bridgeWeight + nextTruckWeight <= weight) {
            // 다리배열의 마지막에 다음 트럭을 올려준다
            bridge.push(nextTruckWeight);
            
            // turck_weights배열에서는 위에 올린 트럭을 제거해준다
            truck_weights.shift();
            
            // 현재 다리 무게 = 기존 다리무게 + 다음 트럭 무게로 다시 계산
            bridgeWeight = bridgeWeight + nextTruckWeight;
        }else {
            // 위의 조건에 충족하지 못할 경우 while문 초반에 shift()로 
            // 맨 앞 요소를 제거해주었으니 마지막에 push(0)을 해줌
            bridge.push(0);
        }
        
        // 마지막으로 시간 증가
        time++;
    }
    return time;
}