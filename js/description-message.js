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
  'You are very underweight.',
  'You are underweight.',
  'You are of normal weight.',
  'Are you overweight.',
  'You are very overweight. Grade I obesity.',
  'You are very overweight. Grade II obesity.',
  'You are very overweight. Grade III obesity.',
]
