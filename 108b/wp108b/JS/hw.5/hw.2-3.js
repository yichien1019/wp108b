function transpose(arry1){
    var array2=[];
    for(i=0;i<3;i++){
        array2[i]=[];
        for(j=0;j<2;j++){
            array2[i][j]=array1[j][i];
        }
    }
    return array2;
}
var array1=[[1,2,3],[3,2,1]];
console.log(transpose(array1));
