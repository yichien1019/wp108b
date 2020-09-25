function SD(n){
    ans=0;
    average=0;
    s=0;
    for(i=0;i<n.length;i++){
        average=n[i]+average;
    }
    average=average/n.length;
    average=average*average;
    for(j=0;j<n.length;j++){
        s+=n[j]*n[j];
    }
    s=s/n.length;
    ans=Math.sqrt(s-average);
    return ans;
}
var a=[1,2,3,4,5];
console.log(SD(a));