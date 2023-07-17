// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
window.onload = function() {
  var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
 
var event = document.querySelector("#eventdescription").value;
var button = document.querySelector("#button")
button.addEventListener("click", function(){
  localStorage.setItem("event", event);
})

  loadEvent = function(){
    var savedEvent = localStorage.getItem("event")
    event.textcontent = savedEvent
  }
  
  var nine = document.getElementById("9")
  var ten = document.getElementById("10")
  var eleven = document.getElementById("11")
  var twelve = document.getElementById("12")
  var thirteen = document.getElementById("13")
  var fourteen = document.getElementById("14")
  var fifteen = document.getElementById("15")
  var sixteen = document.getElementById("16")
  var seventeen = document.getElementById("17")
  var currentTime = dayjs().hour()
  console.log(currentTime)
  function setColor(){
    if (currentTime.value <= 9){
      nine.classList.add(".future")
    }
    else if (currentTime.value == 9){
      nine.classList.add("present")
    }
      else{
        nine.classList.add("past")
      }
    
    if (currentTime.value <= 10){
      ten.classList.add("future")
    }
    else if (currentTime.value == 10){
      ten.classList.add("present")
    }
      else{
        ten.classList.add("past")
      }
      
    if (currentTime.value <= 11){
      eleven.classList.add("future")
    }
    else if (currentTime.value == 11){
      eleven.classList.add("present")
    }
      else{
        eleven.classList.add("past")
      }
      if (currentTime.value <= 12){
        twelve.classList.add("future")
      }
      else if (currentTime.value == 12){
        twelve.classList.add("present")
      }
        else{
          twelve.classList.add("past")
        }
        if (currentTime.value <= 13){
          thirteen.classList.add("future")
        }
        else if (currentTime.value == 13){
          thirteen.classList.add("present")
        }
          else{
            thirteen.classList.add("past")
          }
          if (currentTime.value <= 14){
            fourteen.classList.add("future")
          }
          else if (currentTime.value == 14){
            fourteen.classList.add("present")
          }
            else{
              fourteen.classList.add("past")
            }
            if (currentTime.value <= 15){
              fifteen.classList.add("future")
            }
            else if (currentTime.value == 15){
              fifteen.classList.add("present")
            }
              else{
                fifteen.classList.add("past")
              }
              if (currentTime.value <= 16){
                sixteen.classList.add("future")
              }
              else if (currentTime.value == 16){
                sixteen.classList.add("present")
              }
                else{
                  sixteen.classList.add("past")
                }
                if (currentTime.value <= 17){
                  seventeen.classList.add("future")
                }
                else if (currentTime.value == 17){
                  seventeen.classList.add("present")
                }
                  else{
                    seventeen.classList.add("past")
                  }
  }
  setColor()
}
