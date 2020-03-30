
function submit()
{
  let red = document.getElementById("backgroundRed").value;
  let blue = document.getElementById("backgroundBlue").value;
  let green = document.getElementById("backgroundGreen").value;
  let color = 'rgb(' +red+ ',' +green+ ',' +blue+ ')';
  document.getElementById('p').style.backgroundColor=color;
  document.getElementById('p').style.borderWidth=document.getElementId('borderwidth').value;
  let borderred = document.getElementById("borderRed").value;
  let borderblue = document.getElementById("borderBlue").value;
  let bordergreen = document.getElementById("borderGreen").value;
  let bordercolor = 'rgb(' +borderred+ ',' +bordergreen+ ',' +borderblue+ ')';
  document.getElementById('p').style.borderColor= bordercolor;
  console.log('color')
}
