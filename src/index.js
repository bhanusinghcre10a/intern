const form = document.querySelector(".form");
const list = document.querySelector(".list");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("inputname").value;
    const country = document.getElementById("inputcountry").value;
    add(name, country);
  });
}
const add = async (name, country) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/addstartup",
      data: {
        name,
        country
      }
    });
  } catch (err) {
    console.log("error");
  }
};
const renderlist = obj => {
  var markup = `<ol>`;
  obj.forEach(element => {
    markup =
      markup +
      `
     <li style="font-weight:bold;padding-left:5rem;">${element.name},${element.country}</li>
        `;
  });
  markup = markup + `</ol>`;
  list.insertAdjacentHTML("beforeend", markup);
};
const getlist = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/getlist"
    });
    if (res.data.status === "success") {
      renderlist(res.data.data.list);
    }
  } catch (err) {
    console.log("error");
  }
};
if (list) {
  getlist();
}
