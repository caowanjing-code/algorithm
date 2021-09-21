// 现一个函数，完成超过范围的两个大整数相加功能
// 主要思路是通过将数字转换为字符串，然后每个字符串在按位相加。


function bigNumberAdd(number1,number2){
    let result=" ";//// 保存最后结果
    carry=false;//保留进位结果
    // 将字符串转化为数组
    number1=number1.split("");
    number2=number2.split("");


    // 当数组长度都变为0时，且不再进位时，就结束循环
    while (number1.length ||number2.length||carry){

        // ~时按位运算，~~就是取反2次
        // ~~作用是去除掉小数部分，位次运算要求必须是整数，结果也是整数。
        carry+=~~number1.pop()+~~number2.pop();

        // 加法结果的个位数加入最终结果
        result=carry%10 +result;

        // 判断是否需要进位，利用true和false
        carry=carry>9;
    }
    
    console.log(result);
}
bigNumberAdd('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111','56555156555665651655519')