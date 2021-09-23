# algorithm
个人算法练习
# 基本算法

#### 算法比较



![img](https://img-blog.csdn.net/20180912224019565?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2NzcwNjQx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)


在不同数据量时的对比，可以看出快速排序的性能最优

![img](https://img-blog.csdn.net/20180912224347271?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2NzcwNjQx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)



### 希尔排序

图形解释

![img](https://img2018.cnblogs.com/blog/1230971/201906/1230971-20190610135909136-679000090.jpg)

将整个待排序分割成为若干个子序列分割直接插入排序





### 归并排序

![img](https://a.axihe.com/img/edu/ten-sorting/mergeSort.gif)

归并排序操作：

分和治的应用，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是 O(nlogn) 的时间复杂度。代价是需要额外的内存空间。

步骤：

1.申请空间，使得其大小为2个已经排序列之和，该空间来存放合并后的序列。

2.设定2个指针，最初位置分别为2个已经排序列的起始位置

3.比较2个指针所指的元素，选择行对小的元素放入到合并空间，并移动指针到下一个位置

4.重复3直到序列尾

5.将另一个序列剩下的所有元素直接复制到合并序列尾。



### 快速排序

快速排序,说白了就是给基准数据找其正确索引位置的过程。

![](E:\图片\121659127078460.jpg)





### 堆栈排序



堆是一颗顺序存储的完全二叉树

最后排序的结果是每个节点的关键字都不大于父节点

![](E:\图片\318837-20160422104522991-406805984.png)

