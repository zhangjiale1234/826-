/* 
  我们将来在开发的时候，肯定会有很多重复使用的代码
  这些代码我们应该封装起来，以提高工作效率

  怎么封装呢？
    通常我们喜欢把方法封装到对象身上
*/
var kits = {};

kits.dispatchZero = function(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
};

// 把方法都放到对象的身上
kits.formatDate = function() {
  var date = new Date();
  // 把年月日时分秒获取
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = this.dispatchZero(month);
  var day = date.getDate();
  day = this.dispatchZero(day);
  var hour = date.getHours();
  hour = this.dispatchZero(hour);
  var minute = this.dispatchZero(date.getMinutes());
  var second = this.dispatchZero(date.getSeconds());
  return (
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
  );
};

kits.randomInt = function(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};

// 常见的给id的方式1
// 当前时间戳 + 大的随机数
kits.getId = function() {
  // 返回一个不容易重复的id
  let date = new Date();
  let time = date.getTime(); // 得到的是从1970年1月1日到现在为止的毫秒总数
  // 然后在得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
  let r = this.randomInt(100000, 999999);
  // 把两个数字连起来
  let id = time + "" + r;
  return id;
};
//获取一个随机数
kits.random = function(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};
console.log(kits.random(3600, 9600));

//获取一个随机颜色
kits.randomRgbColor = function() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb" + "(" + r + "," + g + "," + b + ")";
};
console.log(kits.randomRgbColor());

//获取16进制的随机数
kits.randomHexColor = function() {
  let arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ];
  var str = "";
  for (let i = 0; i < 6; i++) {
    var r = Math.floor(Math.random() * 15);
    //  var sum = r + arr[r];
    str = arr[r] + str;
    //  str.unshift(sum)
    // randomArr = arr[r]
  }
  return "#" + str;
  // return randomArr
};

//获取当前时间
kits.date = function() {
  let date = new Date();
  //   console.log(date)
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let seconds = date.getSeconds();
  return (
    year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + seconds
  );
};

//   6. saveLocalDataArray(key,arr)   将一个数组(arr)以指定的键(key)存储到localStorage里面

// 参数

// key：localStorage里面根据根据key存储的数据

// arr:    要存入localStorage的key里面的数据{id=1,content=a}

let arr = [
  { id: 1, content: "a" },
  { id: 2, content: "b" },
  { id: 3, content: "c" },
  { id: 4, content: "d" }
];
kits.saveLocalDataArray = function(key, arr) {
  let json = JSON.stringify(arr);
  localStorage.setItem(key, json);
};

// 7. appendDataIntoArray(key,data)  向localStorage里面指定键(key)的数组数据追加一个数据对象（data）

//    参数

//    key：localStorage里面根据根据key存储的数据

//    data:    你要追加到localstorage的数据
kits.appendDataIntoArray = function(key, data) {
  //
  let json = localStorage.getItem(key);
  let arr = JSON.parse(json);
  arr = arr || [];
  // console.log(arr)
  arr.unshift(data);
  // console.log(arr)
  let jsonStr = JSON.stringify(arr);
  localStorage.setItem(key, jsonStr);
};

// 8. deleteLocalDataById(key,id)   根据对应的id从localStorage中指定键(key)的数组中删除一条数据

//    参数

//    key：localStorage里面根据根据key存储的数据

//    id:    根据你传入的id，找到localStorage里面的key对应的数据，删除掉

kits.deleteLocalDataById = function(key, id) {
  let json = localStorage.getItem(key);
  let arr = JSON.parse(json);
  arr = arr || [];
  arr.forEach(function(e, i) {
    console.log(e.id);
    // console.log(arr)
    if (e.id == id) {
      arr.splice(i, 1);
    }
  });
  let jsonStr = JSON.stringify(arr);
  localStorage.setItem(key, jsonStr);
};

// 9. modifyLocalDataById(key,id,data)  根据id修改localStorage里面的指定键(key)的数组数据

//    参数

//    key：localStorage里面根据根据key存储的数据

//    id:    根据你传入的id，找到localStorage里面的key对应的数据

//    data: 把通过id找到的数据，修改为你传入的data

kits.modifyLocalDataById = function(key, id, data) {
  let json = localStorage.getItem(key);
  let arr = JSON.parse(json);
  arr = arr || [];
  arr.forEach((e, i) => {
    console.log(e.id);
    if (e.id == id) {
      arr[i] = data;
    }
  });
  let jsonStr = JSON.stringify(arr);
  localStorage.getItem(jsonStr);
  // return arr
};
