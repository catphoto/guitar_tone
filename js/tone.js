var tone = [
'C' ,
'C<sup>#</sup>=D<sup>b</sup>' ,
'D' ,
'D<sup>#</sup>=E<sup>b</sup>' ,
'E' ,
'F' ,
'F<sup>#</sup>=G<sup>b</sup>' ,
'G' ,
'G<sup>#</sup>=A<sup>b</sup>' ,
'A' ,
'A<sup>#</sup>=B<sup>b</sup>' ,
'B'
]

//var Ebefore = tone.slice(tone.indexOf('E'));
//var Eafter = tone.slice(0,tone.indexOf('E'));

//console.log('beforeは',Ebefore);
//console.log('afterは',Eafter);

var tuningE_6 = tone.slice(tone.indexOf('E')).concat(tone.slice(0,tone.indexOf('E')));

console.log('tuningE_6は',tuningE_6);
//console.log('toneは',tone);
for (var j = 0; j < 2; j++){
  for (var i = 0; i < tone.length; i++) {
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.innerHTML = tuningE_6[i];
  document.querySelector('.main #string_6 ul').appendChild(li);
  li.appendChild(span);
}
}

var tuningE_5 = tone.slice(tone.indexOf('A')).concat(tone.slice(0,tone.indexOf('A')));

console.log('tuningE_5は',tuningE_5);
//console.log('toneは',tone);
for (var j = 0; j < 2; j++){
  for (var i = 0; i < tone.length; i++) {
  	var li = document.createElement('li');
    var span = document.createElement('span');
  	span.innerHTML = tuningE_5[i];
  document.querySelector('.main #string_5 ul').appendChild(li);
  li.appendChild(span);
}
}

var tuningE_4 = tone.slice(tone.indexOf('D')).concat(tone.slice(0,tone.indexOf('D')));

console.log('tuningE_4は',tuningE_4);
//console.log('toneは',tone);
for (var j = 0; j < 2; j++){
  for (var i = 0; i < tone.length; i++) {
  	var li = document.createElement('li');
    var span = document.createElement('span');
  	span.innerHTML = tuningE_4[i];
  document.querySelector('.main #string_4 ul').appendChild(li);
  li.appendChild(span);
}
}

var tuningE_3 = tone.slice(tone.indexOf('G')).concat(tone.slice(0,tone.indexOf('G')));

console.log('tuningE_3は',tuningE_3);
//console.log('toneは',tone);
for (var j = 0; j < 2; j++){
  for (var i = 0; i < tone.length; i++) {
  	var li = document.createElement('li');
    var span = document.createElement('span');
  	span.innerHTML = tuningE_3[i];
  document.querySelector('.main #string_3 ul').appendChild(li);
  li.appendChild(span);
}
}

var tuningE_2 = tone.slice(tone.indexOf('B')).concat(tone.slice(0,tone.indexOf('B')));

console.log('tuningE_2は',tuningE_2);
//console.log('toneは',tone);
for (var j = 0; j < 2; j++){
  for (var i = 0; i < tone.length; i++) {
  	var li = document.createElement('li');
    var span = document.createElement('span');
  	span.innerHTML = tuningE_2[i];
  document.querySelector('.main #string_2 ul').appendChild(li);
  li.appendChild(span);
}
}

var tuningE_1 = tone.slice(tone.indexOf('E')).concat(tone.slice(0,tone.indexOf('E')));

console.log('tuningE_1は',tuningE_1);
//console.log('toneは',tone);
for (var j = 0; j < 2; j++){
  for (var i = 0; i < tone.length; i++) {
  	var li = document.createElement('li');
    var span = document.createElement('span');
  	span.innerHTML = tuningE_1[i];
  document.querySelector('.main #string_1 ul').appendChild(li);
  li.appendChild(span);
}
}
