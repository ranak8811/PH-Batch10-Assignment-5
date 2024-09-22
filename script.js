function getInputFieldValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function getHtmlElementById(id) {
  return document.getElementById(id);
}

const donationIdEl = getHtmlElementById("donationId");
// console.log(donationIdEl);
const historyIdEl = getHtmlElementById("historyId");
// console.log(historyIdEl);

const cardsPartIdEl = getHtmlElementById("cardsPartId");
const historyPartIdEl = getHtmlElementById("historyPartId");
// console.log(cardsPartIdEl);

const mainAmount = document.getElementById("mainAmount");
// console.log(mainAmount);
const donateBtn1 = document.getElementById("donateBtn1");
const donateBtn2 = document.getElementById("donateBtn2");
const donateBtn3 = document.getElementById("donateBtn3");
// console.log(donateBtn2, donateBtn3);

donateBtn1.addEventListener("click", function (e) {
  const inputAmountId1 = getInputFieldValueById("inputAmountId1");
  //   console.log(inputAmountId1);

  if (inputAmountId1 < 0 || isNaN(inputAmountId1)) {
    return alert("Invalid input");
  }

  const donateAmount1 = document.getElementById("donateAmount1");
  //   console.log(donateAmount1.innerText);
  donateAmount1.innerText = inputAmountId1;

  //   console.log(parseFloat(mainAmount.innerText));
  mainAmount.innerText -= inputAmountId1;

  const noakhaliFloodEl = getHtmlElementById("noakhaliFlood");

  const div = `<div class="border rounded-md p-6 space-y-4">
          <h5>${inputAmountId1} Taka is ${noakhaliFloodEl.innerText}</h5>
          <p class="font-extralight">Date: ${new Date().toString()}</p>
        </div>`;

  historyPartIdEl.innerHTML += div;
});

donateBtn2.addEventListener("click", function (e) {
  const inputAmountId2 = getInputFieldValueById("inputAmountId2");
  //   console.log(inputAmountId2);

  if (inputAmountId2 < 0 || isNaN(inputAmountId2)) {
    return alert("Invalid input");
  }

  const donateAmount2 = document.getElementById("donateAmount2");
  //   console.log(donateAmount2.innerText);
  donateAmount2.innerText = inputAmountId2;

  //   console.log(parseFloat(mainAmount.innerText));
  mainAmount.innerText -= inputAmountId2;

  const feniFloodEl = getHtmlElementById("feniFlood");

  const div = `<div class="border rounded-md p-6 space-y-4">
          <h5>${inputAmountId2} Taka is ${feniFloodEl.innerText}</h5>
          <p class="font-extralight">Date: ${new Date().toString()}</p>
        </div>`;

  historyPartIdEl.innerHTML += div;
});

donateBtn3.addEventListener("click", function (e) {
  const inputAmountId3 = getInputFieldValueById("inputAmountId3");
  //   console.log(inputAmountId3);

  if (inputAmountId3 < 0 || isNaN(inputAmountId3)) {
    return alert("Invalid input");
  }

  const donateAmount3 = document.getElementById("donateAmount3");
  //   console.log(donateAmount3.innerText);
  donateAmount3.innerText = inputAmountId3;

  //   console.log(parseFloat(mainAmount.innerText));
  mainAmount.innerText -= inputAmountId3;

  const quotaAidEl = getHtmlElementById("quotaAid");

  const div = `<div class="border rounded-md p-6 space-y-4">
          <h5>${inputAmountId3} Taka is ${quotaAidEl.innerText}</h5>
          <p class="font-extralight">Date: ${new Date().toString()}</p>
        </div>`;

  historyPartIdEl.innerHTML += div;
});

const blogIdEl = getHtmlElementById("blogId");
// console.log(blogIdEl);

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
