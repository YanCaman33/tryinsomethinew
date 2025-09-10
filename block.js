window.onload = function() {
  let min = 1;
  let max = 9;
  let num = Math.floor(Math.random() * (max - min +1)) + min;

  document.getElementById("num1").textContent = num;
  let answer = num.toString();
  console.log(answer)

  for (let i = 1; i <=9; i++) {
    document.getElementById(i.toString()).addEventListener("click" ,function() {
      if (this.id === answer) {
        location.replace("index.html");
      } else {
        result.textContent ="Wrong answer, new page opening in 3 seconds..."
        setTimeout(() => {
          location.reload();
        }, 3000);
      }
    })
  }
}



