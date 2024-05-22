// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: May 2024
// This file contains the JS functions for index.html

function checking() {
  const divisor = parseInt(document.getElementById("divisor").value)
  const divided = parseInt(document.getElementById("divided").value)
  let counter = 0
  let answer = divisor
  let steps = divisor + ""
  while (true) {

    answer -= divided
    steps +=  "-" + divided + "=" + answer + '<br>'
    counter++

    if(answer < divided) {
      break
    }
  }
  document.getElementById("result").innerHTML = steps
  document.getElementById("result2").innerHTML = "The answer is " + counter + " remain: " + answer
}