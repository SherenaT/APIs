console.log("test");

let buttonClick = document.querySelector("button");
let body = document.querySelector("body");
// let clear = body.getElementById("h2").innerHTML;

// function changeBackgound(event) {
//   clearElem.style.backgroundColor = "pink";
// }

const residents = () => {
  axios.get("https://swapi.dev/api/planets/2").then((res) => {
    for (let i = 0; i < res.data.residents.length; i++) {
      // console.log(res.data.residents[i]);
      let alderaanResidents = res.data.residents[i];
      axios.get(alderaanResidents).then((res) => {
        console.log(alderaanResidents);
        const newH2 = document.createElement("h2");
        newH2.textContent = res.data.name;
        document.querySelector("body").appendChild(newH2);
      });
    }
  });
};

buttonClick.addEventListener("click", residents);
