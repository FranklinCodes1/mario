const balloon = document.getElementById('air-balloon')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')
const javascript = document.getElementById('javascript')
const react = document.getElementById('react')
const graphql = document.getElementById('graphql')


function move() {
  const incrementer = window.scrollY

  
  balloon.style.bottom = 5 + incrementer * 0.03 + '%'

  cloudOne.style.bottom = 40 + incrementer * 0.05 + '%'
  cloudOne.style.left = 75 + incrementer * 0.03 + '%'
  cloudTwo.style.bottom = 80 + incrementer * 0.07 + '%'
  cloudTwo.style.left = 70 + incrementer * 0.05 + '%'
  cloudThree.style.bottom = 60 + incrementer * 0.04 + '%'
  cloudThree.style.left = 0 + incrementer * -0.05 + '%'
  cloudFour.style.bottom = 70 + incrementer * 0.06 + '%'
  cloudFour.style.left = 20 + incrementer * -0.05 + '%'
  cloudFive.style.bottom = 60 + incrementer * 0.06 + '%'
  cloudFive.style.left = 60 + incrementer * 0.06 + '%'
  javascript.style.left = 20 + incrementer * -2.2 + '%'
  react.style.left = 26 + incrementer * -1.5 + '%'
  graphql.style.left = 32 + incrementer * -1 + '%'
}

window.addEventListener('scroll', move)