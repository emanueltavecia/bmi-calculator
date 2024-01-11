export function displayDescriptionMessage(result) {
  if (result < 17) {
    return results[0]
  } else if (result >= 17 && result < 18.5) {
    return results[1]
  } else if (result >= 18.5 && result < 25) {
    return results[2]
  } else if (result >= 25 && result < 30) {
    return results[3]
  } else if (result >= 30 && result < 35) {
    return results[4]
  } else if (result >= 35 && result < 40) {
    return results[5]
  } else if (result >= 40) {
    return results[6]
  }
}

const results = [
  'Você está muito abaixo do peso.',
  'Você está abaixo do peso.',
  'Você está com peso normal.',
  'Você está acima do peso.',
  'Você está muito acima do peso. Obesidade grau I.',
  'Você está muito acima do peso. Obesidade grau II.',
  'Você está muito acima do peso. Obesidade grau III.',
]
