function solution(S, K) {
    
    
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  
  let start = 0
  
  for ( let i = 0; i < days.length; i++) {
      if (S === days[i]) {
          start = i
      }
  }
  
  
  while (K) {
      if (start === 6) {
          start = 0
      } else {
          start++
      }
      
      K--
  }
  
  return (days[start])

}

console.log(solution("Sat", 23))
console.log(solution("Mon", 5))