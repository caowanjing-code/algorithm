 //归并排序

        //判断 合并 
        function merge(left,right){
            let result = [];
            while(left.length >0 && right.length > 0){
                if(left[0]<right[0]){
                    result.push(left.shift());
                }else{
                    result.push(right.shift());
                }
            }

            // concat连接
            return result.concat(left).concat(right);
        }

        //拆分
        function mergeSort(arr){
            if(arr.length == 1){
                return arr;
            }
            let mid = Math.floor(arr.length/2);
            // 0~mid
            let left_arr = arr.slice(0,mid);
            // mid之后的
            let right_arr = arr.slice(mid);

            return merge(mergeSort(left_arr),mergeSort(right_arr));
        }

        var arr = [2,32,7,24,52,1,9,5,3,4];
        console.log(mergeSort(arr))
