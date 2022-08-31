// RGB To Hex Conversion

function rgb(r,g,b){
  let hexR = hex(r)
  let hexG = hex(g)
  let hexB = hex(b)
  console.log(hexR + hexG + hexB);
  return hexR + hexG + hexB
}
function hex(v){
  if(v<= 0)
    return "00"
  if(v>= 255)
    return "FF"
  return v.toString(16).length == 2 ? v.toString(16).toUpperCase():"0"+v.toString(16).toUpperCase()
}
rgb(0, 0, -20)
rgb(300,255,255)
rgb(173,255,47)
rgb(0, 0, 0)


