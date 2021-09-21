// 插入排序是通过构建有序序列，对于未排列的数据，从已排列序列中从后往前扫描
// 找到相对于的位置插入
// 它也叫做半插入法
// 步骤：将第一待排序序列看成是一个有序序列，第二个元素当作是未排序列
// 从头到脚扫描未排列序列,将扫描到的每个元素插入到有序序列中


function insertionSort(arr){
    var len=arr.length;
    var preIndex,current;
    for(var i=1;i<len;i++ ){
        preIndex=i-1;
        current=arr[i];
        while(preIndex >=0&&arr[preIndex]>current){
            arr[preIndex+1]=arr[preIndex];

            // 查找下一位
            preIndex--;
        }
        // 直到循环结束再到新一轮的循环
        arr[preIndex+1]=current;
    }
    return arr;
}

// 平均时间复杂度O(n ^2)