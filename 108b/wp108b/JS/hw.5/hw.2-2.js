function neg(a){
    for(i = 0;i < a.length; i++){
        for(j = 0; j < a[i].length; j++){
            a[i][j]= 0-a[i][j];
        }
    }
} 
a = [[1,2],[3,4]];
neg(a);
console.log(a);