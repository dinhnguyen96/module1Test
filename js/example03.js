function stringCheck(str1, str2)
{
    let oneArray = str1.split(" ");
    let twoArray = str2.split(" ");
    let count = 0;

    for (let i = 0; i < oneArray.length;i++)
    {
       for (let j = 0; j < twoArray.length;j++)
       {
           if (oneArray[i] == twoArray[j])
           {
               count++;
               break;
           }
       }
       if (count == oneArray.length)
       {
           return true;
       }
    }
    return false;

}

let strCheck = stringCheck("Nguyen Dat", "DatNguyen");
alert(strCheck);