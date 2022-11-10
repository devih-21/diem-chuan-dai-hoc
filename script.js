let result = [];
const listTagName = document
  .getElementsByClassName("resul-seah")[0]
  .getElementsByTagName("table")[0]
  .getElementsByClassName("bg_white");

for (let i = 0; i < listTagName.length; i++) {
  let objectResult = {};
  objectResult.code = listTagName[i].getElementsByTagName("td")[1].textContent;
  objectResult.nganh = listTagName[i].getElementsByTagName("td")[2].textContent;
  objectResult.khoi = listTagName[i].getElementsByTagName("td")[3].textContent;
  objectResult.diem = listTagName[i].getElementsByTagName("td")[4].textContent;
  result.push(objectResult);
}

result;
