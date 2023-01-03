function scoreArraySort(arr)
{
    for (let i = 0; i < arr.length - 1; i++)
    {
        for (let j = i + 1; j < arr.length; j++)
        {
            if (arr[i] > arr[j])
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
function arrayOfThreeScore(arr)
{
   arr = scoreArraySort(arr);

   if (arr.length <= 2)
   {
       return -1;
   }
   return arr[arr.length-3];
}

let arr = [10,7,17,185,106,195];

let threeScore = arrayOfThreeScore(arr);

if (threeScore === -1)
{
    alert("Không có phần tử lớn thứ 3 trong mảng");
}
else
{
    alert("Phần tử lớn thứ 3 trong mảng là " + threeScore);
}