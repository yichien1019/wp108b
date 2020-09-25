function average(n)
{
    ans=0;
    for(i=0;i<n.length;i++)
    {
        ans=n[i]+ans;
    }
    ans=ans/n.length;
    return ans;
}

var a=[1,2,3,4,5];
console.log(average(a));
console.log("%s 的平均值 = %d",mean,average);