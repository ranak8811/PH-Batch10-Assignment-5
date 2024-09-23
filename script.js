function getInputFieldValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function getHtmlElementById(id) {
  return document.getElementById(id);
}

const donationIdEl = getHtmlElementById("donationId");
const historyIdEl = getHtmlElementById("historyId");

const cardsPartIdEl = getHtmlElementById("cardsPartId");
const historyPartIdEl = getHtmlElementById("historyPartId");

const mainAmount = document.getElementById("mainAmount");
const donateBtn1 = document.getElementById("donateBtn1");
const donateBtn2 = document.getElementById("donateBtn2");
const donateBtn3 = document.getElementById("donateBtn3");

donateBtn1.addEventListener("click", function (e) {
  const inputAmountId1 = getInputFieldValueById("inputAmountId1");

  if (inputAmountId1 < 0 || isNaN(inputAmountId1)) {
    return alert("Invalid input");
  }

  if (mainAmount.innerText < inputAmountId1) {
    return alert(`You cannot donate more than ${mainAmount.innerText} tk.`);
  }

  const donateAmount1 = document.getElementById("donateAmount1");
  donateAmount1.innerText = (
    parseFloat(donateAmount1.innerText) + inputAmountId1
  ).toFixed(2);

  mainAmount.innerText -= inputAmountId1.toFixed(2);

  my_modal_5.showModal();

  const noakhaliFloodEl = getHtmlElementById("noakhaliFlood");

  const div = `<div class="border rounded-md p-6 space-y-4">
          <h5>${inputAmountId1.toFixed(2)} Taka is ${
    noakhaliFloodEl.innerText
  }</h5>
          <p class="font-extralight">Date: ${new Date().toString()}</p>
        </div>`;

  historyPartIdEl.innerHTML += div;
  document.getElementById("inputAmountId1").value = "";
});

donateBtn2.addEventListener("click", function (e) {
  const inputAmountId2 = getInputFieldValueById("inputAmountId2");

  if (inputAmountId2 < 0 || isNaN(inputAmountId2)) {
    return alert("Invalid input");
  }

  if (mainAmount.innerText < inputAmountId2) {
    return alert(`You cannot donate more than ${mainAmount.innerText} tk.`);
  }

  const donateAmount2 = document.getElementById("donateAmount2");
  donateAmount2.innerText = (
    parseFloat(donateAmount2.innerText) + inputAmountId2
  ).toFixed(2);

  mainAmount.innerText -= inputAmountId2.toFixed(2);

  my_modal_5.showModal();

  const feniFloodEl = getHtmlElementById("feniFlood");

  const div = `<div class="border rounded-md p-6 space-y-4">
          <h5>${inputAmountId2.toFixed(2)} Taka is ${feniFloodEl.innerText}</h5>
          <p class="font-extralight">Date: ${new Date().toString()}</p>
        </div>`;

  historyPartIdEl.innerHTML += div;
  document.getElementById("inputAmountId2").value = "";
});

donateBtn3.addEventListener("click", function (e) {
  const inputAmountId3 = getInputFieldValueById("inputAmountId3");

  if (inputAmountId3 < 0 || isNaN(inputAmountId3)) {
    return alert("Invalid input");
  }

  if (mainAmount.innerText < inputAmountId3) {
    return alert(`You cannot donate more than ${mainAmount.innerText} tk.`);
  }

  const donateAmount3 = document.getElementById("donateAmount3");

  donateAmount3.innerText = (
    parseFloat(donateAmount3.innerText) + inputAmountId3
  ).toFixed(2);

  mainAmount.innerText -= inputAmountId3.toFixed(2);

  my_modal_5.showModal();

  const quotaAidEl = getHtmlElementById("quotaAid");

  const div = `<div class="border rounded-md p-6 space-y-4">
          <h5>${inputAmountId3.toFixed(2)} Taka is ${quotaAidEl.innerText}</h5>
          <p class="font-extralight">Date: ${new Date().toString()}</p>
        </div>`;

  historyPartIdEl.innerHTML += div;
  document.getElementById("inputAmountId3").value = "";
});

const blogIdEl = getHtmlElementById("blogId");

blogIdEl.addEventListener("click", function (e) {
  window.location.href = "blog.html";
});

historyIdEl.addEventListener("click", function (e) {
  historyIdEl.classList.add("bg-[#B4F461]", "px-5", "py-2", "rounded-md");
  donationIdEl.classList.remove("bg-[#B4F461]", "px-5", "py-2", "rounded-md");
  donationIdEl.classList.add("border", "px-5", "py-2", "rounded-md");

  cardsPartIdEl.classList.add("hidden");
  historyPartIdEl.classList.remove("hidden");
});

donationIdEl.addEventListener("click", function (e) {
  donationIdEl.classList.add("bg-[#B4F461]", "px-5", "py-2", "rounded-md");
  historyIdEl.classList.remove("bg-[#B4F461]", "px-5", "py-2", "rounded-md");
  historyIdEl.classList.add("border", "px-5", "py-2", "rounded-md");

  historyPartIdEl.classList.add("hidden");
  cardsPartIdEl.classList.remove("hidden");
});
