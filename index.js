const barContainer = document.querySelector('.bar-container');
const bars = document.querySelectorAll('.bars')
const chartDays = document.querySelectorAll('.bar-text')
const hoverInfo = document.querySelectorAll('.hover-info')
let today = new Date()
let currentDayOfWeek = today.toDateString().toLowerCase().split(' ')[0]

/*declaring data to dynamically set the height of each bar*/
const data = [
    {
      day: "mon",
      amount: 17.45
    },
    {
      day: "tue",
      amount: 34.91
    },
    {
      day: "wed",
      amount: 52.36
    },
    {
      day: "thu",
      amount: 31.07
    },
    {
      day: "fri",
      amount: 23.39
    },
    {
      day: "sat",
      amount: 43.28
    },
    {
      day: "sun",
      amount: 25.48
    }
]

let sum = 0

//Bar height assignment

for (let i = 0; i < data.length; i++) {
    sum += data[i].amount;
}

for (let i = 0; i < data.length; i++) {
    bars[i].style.height = `${data[i].amount / 52.36 * 72}%`
}

// Present day bar color change

for (let i = 0; i < chartDays.length; i++) {
    if (chartDays[i].innerText == currentDayOfWeek) {
        chartDays[i].previousElementSibling.style.backgroundColor = 'hsl(186, 34%, 60%)'
    }
}

//Hover text content assignment

for (let i = 0; i < hoverInfo.length; i++) {
    hoverInfo[i].firstElementChild.innerText = "$" + data[i].amount
}

//Mouseover Action
for (let i = 0; i < bars.length; i++) {
  bars[i].addEventListener('mouseenter', function(e) {
    e.target.previousElementSibling.style.display = "block"
    e.target.style.opacity = "70%"
    e.target.style.transition = "0.1s"
  })

  bars[i].addEventListener('mouseleave', function(e) {
    e.target.previousElementSibling.style.display = "none"
    e.target.style.opacity = "100%"
  })
}

