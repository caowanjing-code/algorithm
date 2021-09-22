// 希尔排序缩小增量排序
// 希尔排序 时间复杂度 o（nlog2n）
// 将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序
// 选择一个增量序列t1，t2，…，tk，其中t1>t2>...，tk=1；
// 按增量序列个数k，对序列进行k 趟排序；
// 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列
// 分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
function shellSort(arr){
    let len=arr.length;
    // gap为增量
    // 2个为一组,生成N组
    for(let gap=Math.floor(len/2);gap>0;gap=Math.floor(gap/2)){
        // 开始拆分
        for(let i=gap;i<len;i++){
            let j=i;
            let current=arr[i];
            while(j-gap>0 && current<arr[j-gap]){
                arr[j]=arr[j-gap];
                j=j-gap;
            }
            arr[j]=current;
            
        }
    }
    console.log(arr);
}

var arr=[1,8,6,2,4,7,14,25,3,11,9,5];
