// document.addEventListener('DOMContentLoaded', init)

// var bs = burgerStack()

// function init () {
// userinput hamburger
  var u1 = document.getElementById('u1')
  var u2 = document.getElementById('u2')
  var u3 = document.getElementById('u3')
  var u4 = document.getElementById('u4')
  var u5 = document.getElementById('u5')
  var u6 = document.getElementById('u6')
  var u7 = document.getElementById('u7')
  var hamItem = document.querySelectorAll('.hamItem')
// generated hamburger
  var d1 = document.getElementById('d1')
  var d2 = document.getElementById('d2')
  var d3 = document.getElementById('d3')
  var d4 = document.getElementById('d4')
  var d5 = document.getElementById('d5')
  var d6 = document.getElementById('d6')
  var d7 = document.getElementById('d7')
  var hamObj = document.querySelectorAll('.hamObj')
  var gameStart = true
  var counter = 0
  var start = document.querySelector('.start')
  var reset = document.querySelector('.reset')

  document.addEventListener('keyup', onKeyUp)
  var index = 4
  // player chooses ingredients to the userinput screen
  function onKeyUp (event) {
    if (checkKeyCode(event.keyCode)) {
      if (event.keyCode === 81) {
        hamItem[index].classList.remove('hamItem')
        hamItem[index].classList.add('cucumber')
        index--
        console.log(index)
      }
      if (event.keyCode === 87) {
        hamItem[index].classList.remove('hamItem')
        hamItem[index].classList.add('meat')
        index--
        // console.log(index);
      }
      if (event.keyCode === 69) {
        hamItem[index].classList.add('onion')
        hamItem[index].classList.remove('hamItem')
        index--
      }
      if (event.keyCode === 82) {
        hamItem[index].classList.add('lettuce')
        hamItem[index].classList.remove('hamItem')
        index--
      }
      if (event.keyCode === 84) {
        hamItem[index].classList.add('cheese')
        hamItem[index].classList.remove('hamItem')
        index--
      }
      if (event.keyCode === 32) {
        u1.classList.add('topbun')
        if (checkIngredient) {
          setTimeout(function () {
            resetClassPlayer()
            resetClassDisplay()
          }, 800)
          gamePlay()
        } else {
          resetClassPlayer()
          resetClassDisplay()
          // gamePlay()
        }
        alert('wrong button pressed')
      }
    }
  }// closing for onKeyUp

  function resetClassPlayer () {
    u1.classList.remove('topbun')
    u2.classList = 'hamItem'
    u3.classList = 'hamItem'
    u4.classList = 'hamItem'
    u5.classList = 'hamItem'
    u6.classList = 'hamItem'
    index = 4
  }

  // for generating the hamburger display
  var count = 4
  function randomizeIngredient () {
    var creation = Math.floor(Math.random() * 5)
  // console.log(creation)
    if (creation === 0) {
      hamObj[count].classList.add('cucumber')
      hamObj[count].classList.remove('hamObj')
      count--
    // return 'cucumber'
    }
    if (creation === 1) {
      hamObj[count].classList.add('meat')
      hamObj[count].classList.remove('hamObj')
      count--
    // return 'meat'
    }
    if (creation === 2) {
      hamObj[count].classList.add('onion')
      hamObj[count].classList.remove('hamObj')
      count--
    // return 'onion'
    }
    if (creation === 3) {
      hamObj[count].classList.add('lettuce')
      hamObj[count].classList.remove('hamObj')
      count--
    // return 'lettuce'
    }
    if (creation === 4) {
      hamObj[count].classList.add('cheese')
      hamObj[count].classList.remove('hamObj')
      count--
    // return 'cheese'
    }
  }

  function resetClassDisplay () {
    d1.classList.remove('topbun')
    d2.classList = 'hamObj'
    d3.classList = 'hamObj'
    d4.classList = 'hamObj'
    d5.classList = 'hamObj'
    d6.classList = 'hamObj'
    count = 4
  }

  // Burger levels creation
  // 2 random ingredients
  function level1 () {
    for (var i = 0; i < 2; i++) {
      randomizeIngredient()
    } return true
  }
  // 3 random ingredients
  function level2 () {
    for (var i = 0; i < 3; i++) {
      randomizeIngredient()
    } return true
  }
  // 4 random ingredients
  function level3 () {
    for (var i = 0; i < 4; i++) {
      randomizeIngredient()
    } return true
  }
  // 5 random ingredients
  function level4 () {
    for (var i = 0; i < 5; i++) {
      randomizeIngredient()
    } return true
  }
  // end of Burger levels creation

    // function for startgame
  function gamePlay () {
    if (gameStart === true) {
      if (counter <= 3) {
        level1()
      }
      if (counter > 3 && counter <= 7) {
        level2()
      }
      if (counter > 7 && counter <= 11) {
        level3()
      }
      if (counter > 11) {
        level4()
      }
      counter++
    } else gameStart = false
  } // end of startgame

  function checkIngredient () {
    for (var i = 7; i > 2; i--) {
      if ('d[i]'.classList === 'u[i]'.classList) {
        return true
      }
    }
  }

  start.addEventListener('click', level1)

  function checkKeyCode (keycode) {
    if (keycode === 81 || keycode === 87 || keycode === 69 || keycode === 82 || keycode === 84 || keycode === 32) {
      return true
    }
    return false
  }// closing for checkKeyCode
// }// closing for init
