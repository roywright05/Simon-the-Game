var num = [1,2,3,4,5];
var inc = 0;
while (inc <=5){
console.log("Start of while loop");
    for(var i=0; i<num.length; i++){
        if(num[i] > 3){
            break;
        }
        console.log(`value of: ${num[i]}`);
        inc++;
    }
}

console.log("Congrats, you're finished.");
