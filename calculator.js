window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form")
    if (form) {
      setupIntialValues()
      form.addEventListener("submit", function(e) {
        e.preventDefault()
        update()
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  function setupIntialValues() {
    const loanAmount = document.getElementById("loan-amount");
    const loanYears = document.getElementById("loan-years")
    const loanRate = document.getElementById("loan-rate")
    loanAmount.value = 20000
    loanYears.value = 7
    loanRate.value = 5
    update()
  }
  
  function update() {
    updateMonthly(calculateMonthlyPayment(getCurrentUIValues()))
  }
  
  function calculateMonthlyPayment(inputVals) {
    const monthlyRate = (inputVals.rate / 100) / 12
    const numOfPayments = Math.floor(inputVals.years * 12)
    return ((inputVals.amount * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -numOfPayments))).toFixed(2)
  }  
  
  function updateMonthly(monthly) {
    const monthlyPayement = document.getElementById("monthly-payment")
    monthlyPayement.innerText = `$ ${monthly}`
  }
  