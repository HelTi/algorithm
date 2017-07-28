/**
 * by helti
 * date：2017.07.28
 */

function insertSort(arr) {
    var tmp;
    for (var i = 1; i < arr.length; i++) {
        tmp = arr[i];
        for (var j = i; j >= 0; j--) {
            if (arr[j - 1] > tmp) {
                arr[j] = arr[j - 1];
            } else {
                arr[j] = tmp;
                break;
            }
        }
    }
    return arr;
}
function insertSort1(arr){
    var len=arr.length,
    i,j,tmp,result;

    result=arr.slice(0);
    for(var i=1;i<len;i++){
         tmp=result[i];
         j=i-1;
         while(j>0&&tmp<result[j]){
             result[j+1]=result[j];
             j--;
         }
        result[j+1]=tmp;
    }
    return result;
}
var testarr=[3,2,11,22,12,11];
console.log(insertSort(testarr));
console.log(insertSort1(testarr));
console.log(testarr.sort(function(i,j){
    return i-j>0
}))