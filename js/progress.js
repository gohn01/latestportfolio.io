// window.onload = function () {
//     let skillsPercent = document.querySelectorAll(".skills-percent");
//     skillsPercent.forEach((progress) => {
//       let value = progress.getAttribute('data-value');
//       progress.style.width = `${value}%`;
//       let count = 0 ;
//       let progressAnimation = setInterval(() => {
//         count++; 
//         progress.setAttribute('data-text', `${count}%`);
//         if (count >= value) {
//           clearInterval(progressAnimation);
//         }
//       }, 15)
//     })
//   }

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval( function () {
        startValue += 1;
        valueDisplay.textContent = startValue + "%";
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
})