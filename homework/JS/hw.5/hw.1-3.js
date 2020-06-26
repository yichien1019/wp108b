n = 45;
N = n;
var x = [0]
while(n != 1){
    for(i = 2; i <= n; i++){
        if( n % i == 0){
            x.push(i);
            n /= i;
            break;
        }
    }
}
x.shift();
console.log("factor("+ N +") => [" + x + "]");