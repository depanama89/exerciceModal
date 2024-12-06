// let now = new Date();
// console.log(now);
// // let jan01 = new Date(1);
// // let jan01 = new Date(24 * 3600 * 1000);
// let jan01 = new Date();
// console.log(jan01.getFullYear());
// console.log(jan01.getDay());
// console.log(jan01.getMonth());
// const currentDate =
//   jan01.getFullYear() + "-" + jan01.getDay() + "-" + jan01.getMonth();
// console.log(currentDate);
const tache = document.getElementById("tache");
const datej = document.getElementById("datej");
const datejn = document.getElementById("datejn");
const envoyer = document.getElementById("envoyer");

envoyer.addEventListener("click", submit);
function addDate(tache, datej, datejn) {
  const saveDate = getFromLocalStorage("dates");
  saveDate.push({ tache, datej, datejn });
  localStorage.setItem("dates", JSON.stringify(saveDate));
}
function submit() {
  //   console.log(datej.value, datejn.value);
  addDate(tache.value, datej.value, datejn.value);
  tache.value = "";
  datej.value = "";
  datejn.value = "";
}

function getFromLocalStorage(key, defaultValue = []) {
  if (JSON.parse(localStorage.getItem(key)) == null) {
    return defaultValue;
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
}
function diffdate(date1, date2) {}
function diffdate(date1, date2) {}
