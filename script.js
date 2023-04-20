const labelsTriangle = [
  {
    name: "traingle-sides",
    labels: ["side .1", "side .2", "side .3"]
  },
  {
    name: "triangle-cords",
    labels: ["x1", "y1", "x2","y2", "x3", "y3"]
  },
  {
    name: "2siedes1angle",
    labels: ["side .1", "side .2", "angle between"]
  }
]
const labelsRectangle = [
  {
    name: "rectangle-sides",
    labels: ["side .1", "side .2"]
  },
  {
    name: "rectangle-cords",
    labels: ["x1", "y1", "x2", "y2", "x3","y3"]
  }
]
const labelsNgon = [
  {
    name: "ngon-sides",
    labels: ["n.sides", "length"]
  }
]
const labelsCircle = [
  {
    name: "circle-radius",
    labels: ["radius"]
  },
  {
    name: "circle-points",
    labels: ["x1", "y1","x2", "y2"]
  }
]
const types = [
  {
    name: "triangle",
    ways: ["sides","cords","2sides1angle"],
    nameLabels: labelsTriangle
  },
  {
    name: "rectangle",
    ways: ["sides(rectangle)","cords(paralleogram)"],
    nameLabels: labelsRectangle
  },
  {
    name: "ngon",
    ways: ["sides&length"],
    nameLabels: labelsNgon
  },
  {
    name: "circle",
    ways: ["radius","center&point"],
    nameLabels: labelsCircle
  }
];

let currentTypeIndex = 0;
let didAppend = false;

let currentWayIndex = "";
let didWayAppend = false;

function butt(n) {
 
  // Return early if the same type was clicked
  if(didAppend === true){
    if (currentTypeIndex === n) {
      return;
    }
  }
  //button colors
  const pinkButts = document.getElementsByClassName("gw")
  for(let i = 0; i < 4; i++){
    pinkButts[i].classList.remove('gray')
  }
  pinkButts[n].classList.add('gray')


  //appear eleements

  const butWraps2 = document.getElementsByClassName("buttonWrap2")

  for(let i = 0; i < butWraps2.length; i++){
    butWraps2[i].classList.add('move-left')
    butWraps2[i].classList.add('dis-non')
  }

  const inputs = document.getElementsByClassName('displayInput')
  for(let i = 0; i< inputs.length; i++){
    inputs[i].classList.add('hide-input')
  }

  const buttorButts = document.getElementsByClassName("buttor")
  for(let i = 0; i < buttorButts.length; i++){
    buttorButts[i].classList.remove('gray')
  }

    
  setTimeout(()=>{ 
    document.getElementsByClassName('area')[0].classList.remove('move-right');
    document.getElementsByClassName('area')[0].classList.remove('dis-non');
  },1000)

  const butwr = document.getElementsByClassName("buttonWrap")
  for(let i = 0; i < butwr.length; i++){
    butwr[i].classList.remove('gray')
  }



  // Update the current type index
  currentTypeIndex = n;
  
  
  // Clear the ways container
  const displays = document.getElementsByClassName("display2")
  const pickButtons = document.getElementsByClassName("pickWay")
  const pickWrapers = document.getElementsByClassName('buttonWrap')
  
  for(let i = 0; i < displays.length;i++){
    displays[i].innerHTML = ""
  }

  const displays3 =  document.getElementsByClassName("display3")
  for(let i = 0; i <displays3.length;i++){
    displays3[i].innerHTML = ""
  }
  //clear inputs
  for(let i=0; i < 6;i++){
    document.getElementsByClassName("displayInput")[i].value = ""
  }
 
  
  // Append the ways for the selected type
  const ways = types[n].ways;
  for (let i = 0; i < ways.length; i++) {
    setTimeout(()=>{
      displays[i].innerHTML = ways[i];
    },500)
  
   pickButtons[i].addEventListener('click',() => countWay(i))

  }


  appearElements(pickWrapers,ways)
  
  didAppend = true;
  currentWayIndex = "";
  
}

function countWay(m) {

  // Return early if the same type was clicked
  if(didWayAppend === true){
    if (currentWayIndex === m) {
      return;
    }
  }

  
  
  // Update the current type index
  currentWayIndex = m;
  
  // Clear the ways container
  const displays3 =  document.getElementsByClassName("display3")
  const displayInputs = document.getElementsByClassName("displayInput")
  for(let i = 0; i <displays3.length;i++){
    displays3[i].innerHTML = ""
  }
  //clear inputs ids and values
  for(let i=0; i < 6;i++){
    displayInputs[i].id = ""
    displayInputs[i].value = ""
  }
  
  // Append the ways for the selected type
  const countWays = types[currentTypeIndex].nameLabels[m].labels

  const butWraps2 = document.getElementsByClassName("buttonWrap2")

  appearElements(butWraps2,countWays)

  for (let i = 0; i < countWays.length; i++) {
    setTimeout(()=>{
      displays3[i].innerHTML = countWays[i]
    },500)
    
    displayInputs[i].id = countWays[i].split(" ").join("") + 'Input'
    
  }
  
  didWayAppend = true;
  
}

function calculate(){
  const figure = currentTypeIndex;
  const wayTo = currentWayIndex;
  
  
    switch(figure){
      case 0: //triangle
        switch(wayTo){
          case 0: //triangle sides done
          let a = parseInt(document.getElementById("side.1Input").value)
          let b = parseInt(document.getElementById("side.2Input").value)
          let c = parseInt(document.getElementById("side.3Input").value)
          if( (a>=c+b) || (b>=a+c) || (c>=b+a)){return (document.getElementById("score").innerHTML = "invalid triangle")}
          let p = (a+b+c)/2
          let area = Math.sqrt(p*(p-a)*(p-b)*(p-c))
          if(whatDo === "area"){output(area)}else{output(a+b+c)}
            break;
          case 1: //traingle cords
            let x1 = parseInt(document.getElementById("x1Input").value)
            let y1 = parseInt(document.getElementById("y1Input").value)
            let x2 = parseInt(document.getElementById("x2Input").value)
            let y2 = parseInt(document.getElementById("y2Input").value)
            let x3 = parseInt(document.getElementById("x3Input").value)
            let y3 = parseInt(document.getElementById("y3Input").value)
            let aa = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))
            let bb = Math.sqrt(Math.pow((x3-x1),2)+Math.pow((y3-y1),2))
            let cc = Math.sqrt(Math.pow((x2-x3),2)+Math.pow((y2-y3),2))
            let pp = (aa+bb+cc)/2
            let area2 = Math.sqrt(pp*(pp-aa)*(pp-bb)*(pp-cc))
            if(whatDo === "area"){output(area2)}else{output(aa+bb+cc)}
            break;
          case 2: //2sides1angle
            let s1 = parseInt(document.getElementById("side.1Input").value)
            let s2 = parseInt(document.getElementById("side.2Input").value)
            let angle = parseInt(document.getElementById("anglebetweenInput").value)
            if(angle === 180){return document.getElementById("score").innerHTML = "invalid triangle"}
            let s3 = Math.sqrt(Math.pow(s1,2)+Math.pow(s2,2)-2*s1*s2*Math.cos((angle*Math.PI)/180))
            let p3 = (s1+s2+s3)/2
            let area3 = Math.sqrt(p3*(p3-s1)*(p3-s2)*(p3-s3))
            if(whatDo === "area"){output(area3)}else{output(s1+s2+s3)}
            break
        }
        break;
      case 1://paralleogram
        switch(wayTo){
          case 0: //rectangle sides done
            let rs1 = parseInt(document.getElementById("side.1Input").value)
            let rs2 = parseInt(document.getElementById("side.2Input").value)
            let ra = rs1*rs2
            if(whatDo === "area"){output(ra)}else{output(2*(rs1+rs2))}
            break;
          case 1: //paralleogram cords
            let rx1 = parseInt(document.getElementById("x1Input").value)
            let ry1 = parseInt(document.getElementById("y1Input").value)
            let rx2 = parseInt(document.getElementById("x2Input").value)
            let ry2 = parseInt(document.getElementById("y2Input").value)
            let rx3 = parseInt(document.getElementById("x3Input").value)
            let ry3 = parseInt(document.getElementById("y3Input").value)

            let ps1 = Math.sqrt(Math.pow((rx2-rx1),2)+Math.pow((ry2-ry1),2))
            let ps2 = Math.sqrt(Math.pow((rx3-rx2),2)+Math.pow((ry3-ry2),2))
            let parallAngle = Math.acos(((rx2-rx1)*(rx3-rx2)+(ry2-ry1)*(ry3-ry2))/(ps1*ps2))
            let parrallArea = ps1 * ps2 * Math.sin(parallAngle);
            
            if(whatDo === "area"){output(parrallArea)}else{output((ps1+ps2) * 2)}
            
            break;
        }
        break;
      case 2://n-gon
          let nOfSides = parseInt(document.getElementById("n.sidesInput").value)
          let lenOfSide = parseInt(document.getElementById("lengthInput").value)
          let ngonArea = nOfSides * (Math.pow(lenOfSide,2)*Math.sqrt(3))/4
          document.getElementById("score").innerHTML = ngonArea
          if(whatDo === "area"){output(ngonArea)}else{output(nOfSides*lenOfSide)}
        break;
      case 3://circle
          switch(wayTo){
            case 0: //radius
              let radius = parseInt(document.getElementById("radiusInput").value)
              let circleArea = Math.PI*Math.pow(radius,2)             
              if(whatDo === "area"){output(circleArea)}else{output(radius*2*Math.PI)}
              break;
            case 1: //center point
              let cx1 = parseInt(document.getElementById("x1Input").value)
              let cy1 = parseInt(document.getElementById("y1Input").value)
              let cx2 = parseInt(document.getElementById("x2Input").value)
              let cy2 = parseInt(document.getElementById("y2Input").value)
              let circleRadius = Math.sqrt(Math.pow((cx2-cx1),2)+Math.pow((cy2-cy1),2))
              let circleArea2 = Math.PI*Math.pow(circleRadius,2)
              console.log(cx1, cy1, cx2, cy2, circleRadius)
              if(whatDo === "area"){output(circleArea2)}else{output(2*circleRadius*Math.PI)}
              break;
          }
        break;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  
}
function output(data){
  data = data.toFixed(5)
  document.getElementById("score").innerHTML = data

}

let whatDo = "area";    //area or circuit

function sliderFunction(n){
  if(n === whatDo){return}

  if(n === "area"){
    document.getElementById("s-left").classList.add('gray')
    document.getElementById("s-right").classList.remove('gray')
    whatDo = "area"
  }else{
    document.getElementById("s-right").classList.add('gray')
    document.getElementById("s-left").classList.remove('gray')
    whatDo = "circuit"
  }

}

let lastFocus;
function findFocus(){
lastFocus = document.activeElement
}

function numberFunction(number){
  if(typeof lastFocus == 'undefined'){return;}
  if(number === "C"){return (
    lastFocus.value = "",
    lastFocus.focus()
    );
  }
  if(number === "D"){
    for(let i = 0; i < 6; i++){
      document.getElementsByClassName("displayInput")[i].value = "";
    }
    return
  }
  lastFocus.focus()
  lastFocus.value = lastFocus.value + number
}
function setFocus(n){
  lastFocus = document.getElementsByClassName("displayInput")[0]
  lastFocus.focus()

  const butwr = document.getElementsByClassName("buttonWrap")
  for(let i = 0; i < butwr.length; i++){
    butwr[i].classList.remove('gray')
  }
  butwr[n].classList.add('gray')



  

  setTimeout(()=>{
    document.getElementsByClassName('numbers')[0].classList.remove('move-right')
    document.getElementsByClassName('numbers')[0].classList.remove('dis-non')
  },1000)
  
  document.getElementsByClassName('calculate')[0].classList.remove('move-right')

  setTimeout(()=>{
    scrollToBottom()
  },1000)
 

}
sliderFunction()


function appearElements(el, cw){
  ellen = el.length
  cwlen = cw.length

  setTimeout(()=>{
    for(let i = cwlen; i < ellen; i++){
      el[i].classList.add('dis-non')
      hideInput(el[i])
    }
    for(let i = 0; i < cwlen;i++){
      el[i].classList.remove('dis-non')
      showInput(el[i])
    }

  },500)
 

  for(let i = 0; i < ellen; i++){
    
    el[i].classList.add('move-left')    // 1. move item to left
    setTimeout(()=>{   
      el[i].classList.remove('move-left') //2.  -move left +move right
      el[i].classList.add('move-right') 
    },500)

    setTimeout(()=>{
      el[i].classList.remove('move-right')
    },1000)
  } 
}

function hideInput(n){
  const child = Array.from(n.children)
  if(child[1].type === "text"){
    child[1].classList.add('hide-input')
    }
}
function showInput(n){
  const child = Array.from(n.children)
  if(child[1].type === "text"){
    child[1].classList.remove('hide-input')
    }
}
function scrollToBottom(){
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
}