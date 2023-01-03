function elementElement(array, index)
{
    for (let i = index; i < array.length-1;i++)
    {
        array[i] = array[i+1];
    }
    array.length--;
}
function tryRemoveFromIndex(array, index)
{
    if (index < 0)
    {
        return array;
    }
    elementElement(array, index);

    let arrNew = [];

    for (let i = 0; i < array.length;i++)
    {
        arrNew[i] = array[i];
    }
    return arrNew;
}
let arr = [5,7,2,10,12,56];
let newArr = tryRemoveFromIndex(arr, 5);

alert("Sau khi xoa vi tri phan tu " + newArr);


