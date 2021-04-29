
it('should calculate the monthly rate correctly', function () {
    const vals = {
      amount: 20000,
      years: 7,
      rate: 5
    }
    expect(calculateMonthlyPayment(vals)).toEqual('282.68')
  })
  
  
  it("should return a result with 2 decimal places", function() {
    const vals = {
      amount: 50000,
      years: 10,
      rate: 8
    }
    expect(calculateMonthlyPayment(vals)).toEqual('606.64')
  })
  
  /// etc
  