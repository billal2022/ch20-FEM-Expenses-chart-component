const json = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

const months = document.querySelectorAll(".months")
const chart = document.querySelectorAll(".chart")


  for (let i = 0; i < json.length; i++) {
    const month = json[i].day;
    const chartL= json[i].amount;

    months[i].innerText=month
    chart[i].style.height=3*chartL+"px"
  }
