// var numArray = [2, 0, 5, -5, -9, 21, 65];
var numArray = [];
function InputArray() {
  var inputArray = Number(document.getElementById("inputNum").value);
  numArray.push(inputArray);
  document.getElementById("txtArray").innerHTML = numArray;
}
document.getElementById("btnAddArray").onclick = function () {
  InputArray();
};

function submitArray() {
  var arrayPositive = "";
  var sumArray = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      sumArray += numArray[i];
    }
  }
  document.getElementById("txtSum").innerHTML = "Tổng số dương: " + sumArray;
}

//tim min

function countArray() {
  var arrayPositive = [];
  var count = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      count++;
      arrayPositive.push(numArray[i]);
    }
  }
  document.getElementById("txtCount").innerHTML = count;
  return arrayPositive;
}

function minArray(arr) {
  var min = numArray[0];
  var newArr = [];
  if (arr) {
    newArr = arr;
  } else {
    newArr = numArray;
  }

  for (var i = 1; i < newArr.length; i++) {
    if (newArr[i] < min) {
      min = newArr[i];
    }
  }
  document.getElementById("txtMin").innerHTML = "Số nhỏ nhất: " + min;
  return min;
}

function minArraySmallest() {
  var minlest = minArray(countArray());
  if (minlest == undefined) {
    document.getElementById("txtMinPos").innerHTML =
      "Không có số dương trong mảng";
  } else {
    document.getElementById("txtMinPos").innerHTML = minlest;
  }
}
function findBarelyLast() {
  var barely = [];
  var barelyLast = "";
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      barely.push(numArray[i]);
    }
  }
  barelyLast = barely[barely.length - 1];
  document.getElementById("txtBarelyLast").innerHTML = barelyLast;
}
function swap(arr, a, b) {
  var b = arr[b];
  arr[a] = arr[b];
  arr[b] = a;
  return arr;
}
function swapArray() {
  var num1 = Number(document.getElementById("inputIndex1").value);
  var num2 = Number(document.getElementById("inputIndex2").value);

  var valueNum2 = numArray[num2];
  numArray[num2] = numArray[num1];
  numArray[num1] = valueNum2;

  document.getElementById("txtswapArray").innerHTML =
    "Mảng sau khi đổi: " + numArray;
}

function raiseArray() {
  numArray.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("txtraiseArray").innerHTML =
    "Mảng sau khi sắp xếp: " + numArray;
}
function primeArray() {
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] % 1 === 0 && numArray[i] % numArray[i] === 0) {
      document.getElementById("txtPrime").innerHTML =
        "Số nguyên tố đầu tiên là: " + numArray[i];
      break;
    }
  }
}

var newArray2 = [];

function newArray() {
  var inputnewArray = Number(document.getElementById("inputNewArray").value);
  newArray2.push(inputnewArray);
  document.getElementById("txtNewArray").innerHTML = newArray2;
}
function checkNewArray() {
  var count = 0;
  if (newArray2.length !== 0) {
    for (var i = 0; i < newArray2.length; i++) {
      if (Number.isInteger(newArray2[i])) {
        count++;
      }
      document.getElementById("txtInt").innerHTML = "Số nguyên: " + count;
    }
  } else {
    document.getElementById("txtInt").innerHTML = "Số nguyên: 0";
  }
}
function compareAray() {
  var minus = 0;
  var plus = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      plus++;
    } else if (numArray[i] < 0) {
      minus++;
    }
  }
  if (plus > minus) {
    document.getElementById("txtCompare").innerHTML = "Số dương > Số âm";
  } else if (plus < minus) {
    document.getElementById("txtCompare").innerHTML = "Số dương < Số âm";
  } else {
    document.getElementById("txtCompare").innerHTML = "Số dương = Số âm";
  }
}
