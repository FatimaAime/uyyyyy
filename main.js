canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=1;
ctx.rect(150,143,401,200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(240,210,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(340,210,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(440,210,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(290,250,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(390,250,40,0,2*Math.PI);
ctx.stroke();