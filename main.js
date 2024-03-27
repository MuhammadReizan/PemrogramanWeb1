function addDeleteButton(idx) {
  return "<button onclick='deleteMhs(" + idx + ")'>Delete</button>";
}

function deleteMhs(idx) {
  let listmhs = JSON.parse(localStorage.getItem("mhs"));
  listmhs.splice(idx, 1); 
  localStorage.setItem("mhs", JSON.stringify(listmhs));

  let data = "";
  for (const [idx, dt] of listmhs.entries()) {
    data +=
      "<tr>" +
      "<th scope='row'>" +
      (idx + 1) +
      "</th>" +
      "<td>" +
      dt.npm +
      "</td>" +
      "<td>" +
      dt.nama +
      "</td>" +
      "<td>" +
      addDeleteButton(idx) + 
      "</td>" +
      "</tr>";
  }
  document.getElementById("data").innerHTML = data;
}

document.getElementById("simpan").addEventListener(
  "click",
  function () {
    let nama = document.getElementById("nama").value;
    let npm = document.getElementById("npm").value;
    let mhs = { nama: nama, npm: npm };
    let listmhs = [];
    if (localStorage.getItem("mhs")) {
      listmhs = JSON.parse(localStorage.getItem("mhs"));
      listmhs.push(mhs);
    } else {
      listmhs.push(mhs);
    }
    localStorage.setItem("mhs", JSON.stringify(listmhs));
    let data = "";
    for (const [idx, dt] of listmhs.entries()) {
      data +=
        "<tr>" +
        "<th scope='row'>" +
        (idx + 1) +
        "</th>" +
        "<td>" +
        dt.npm +
        "</td>" +
        "<td>" +
        dt.nama +
        "</td>" +
        "<td>" +
        addDeleteButton(idx) + 
        "</td>" +
        "</tr>";
    }
    document.getElementById("data").innerHTML = data;
  },
  true
);
