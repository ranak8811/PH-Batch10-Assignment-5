function getInputFieldValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function getHtmlElementById(id) {
  return document.getElementById(id);
}

const mainAmount = document.getElementById("mainAmount");
// console.log(mainAmount);
const donateBtn1 = document.getElementById("donateBtn1");

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
});

const blogIdEl = getHtmlElementById("blogId");
// console.log(blogIdEl);

blogIdEl.addEventListener("click", function (e) {
  window.location.href = "blog.html";
});
