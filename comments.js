        var c=0;
		var ct=0;
		var l=0;
		var p=0;
		var pct=0;
		var chk=0;
		var i=1,j=1;
		var delct=0;
		var m=document.getElementById("pid");
		function func(e){
			e.preventDefault();
			if(document.getElementById('id02').value!=""&&document.getElementById('id03').value!="")
			{
			c++;
			if(c==1)
			{
				var k=document.createElement("h2");
				k.setAttribute("style","display:table;margin:auto;color:green;");
				k.innerHTML="COMMENTS";
				m.appendChild(k);
			}
			var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1;
            var yyyy = today.getFullYear();
            var hr = today.getHours();
            var mn = today.getMinutes();
            var sec=today.getSeconds();
            if(dd<10){
               dd='0'+dd;
             } 
            if(mm<10){
               mm='0'+mm;
             } 
             if(mn<10){
               mn='0'+mn;
             }
              if(hr<10){
               hr='0'+hr;
             }
              if(sec<10){
               sec='0'+sec;
             }
            var today = [dd,mm,yyyy].join('-')+' , '+[hr,mn,sec].join(':')+'&nbsp&nbsp';
			var x=document.createElement("em");
			x.setAttribute("id",c);
			var intex1=document.getElementById('id03').value;
			var intex2=document.getElementById('id02').value;
			x.innerHTML="&nbsp&nbsp<strong id='g'> </strong>\
			 <em id='ed'></em><strong style='float:right;color:green;'>"+today+"</strong><br>";
			document.getElementById('id02').value="";
			document.getElementById('id03').value="";
			x.innerHTML+='<div style="text-align:center;">\
			<input id="i" style="display:none;" class="form-control" type="text" placeholder="Enter new comment..">\
			<button class="btn btn-default" style="margin:10px;" onclick="editfunc('+c+',event)">EDIT</button><button class="btn btn-default" style="margin:10px;" onclick="delfunc('+c+',event)">DELETE</button></div><hr>'
			if(c==1)
			m.appendChild(x);
		    else
		    m.insertBefore(x,m.childNodes[2]);
		    document.getElementById("g").innerText=intex1.toUpperCase()+" : ";
			document.getElementById("ed").innerText=intex2;
		    console.log(m.childNodes);
			if((c-delct)>5)
			 {
			 	j=c-delct-5;
			 	i=1;
			 	while(j>0)
			 	{
			 		if(document.getElementById(i)!=null)
			 		{
			 			document.getElementById(i).setAttribute("style","display:none");
			 			j--;
			 		}
			 	    	i++;
			 	}
			 }
			 if((c-delct)>5&&l==0)
			 {
			 	if(chk==0)
			 	{
			 	l=1;
			 	chk=1;
				var s=document.createElement("button");
				s.setAttribute("class","btn btn-default");
				s.setAttribute("id","buttonid");
				s.setAttribute("onclick","funcbut(event)");
				s.setAttribute("style","display: table;margin: auto;");
				s.innerHTML="MORE";
				m.appendChild(s);
			    }
			    else
			    {
			    	document.getElementById("buttonid").setAttribute("style","display:table;margin:auto;");
			    	l=1;
			    }
			 }
		    }
		    p=c;
		}
		function funcbut(e)
		{
			e.preventDefault();
			j=5;
			i=p-5;
			while(j>0&&i>=1)
			{
				if(document.getElementById(i)!=null)
				{
					document.getElementById(i).setAttribute("style","display:block;");
					j--;
				}
				if(i==1)
            	{
            		document.getElementById("buttonid").setAttribute("style","display:none;");
            		l=0;
            	}
				i--;
			}
			// for(i=p-5;i>p-10&&i>=1;i--)
			// {
			// 	document.getElementById(i).setAttribute("style","display:block;");
			// 	ct++;
			// 	 if(i==1)
   //          	{
   //          		document.getElementById("buttonid").setAttribute("style","display:none;");
   //          		l=0;
   //          	}
			// }
			p=i;
		}
		function delfunc(ci,event)
		{
			event.preventDefault();
			var ei=document.getElementById(ci);
			ei.parentNode.removeChild(ei);
			delct++;
		}
		function editfunc(ci,event)
		{
			event.preventDefault();
			var ei=document.getElementById(ci);
			ei.childNodes[6].childNodes[1].setAttribute("style","width: 50%;display: table;margin: auto;");//check req
			//console.log(ei.childNodes);
			ei.childNodes[6].childNodes[1].value=ei.childNodes[3].innerHTML;
			ei.childNodes[6].childNodes[3].innerHTML="UPDATE";
			ei.childNodes[6].childNodes[3].setAttribute("onclick","updfunc("+ci+",event)");
		}
		function updfunc(ci,event)
		{
			event.preventDefault();
			var ei=document.getElementById(ci);
			if(ei.childNodes[6].childNodes[1].value!="")
			ei.childNodes[3].innerText=ei.childNodes[6].childNodes[1].value;
			ei.childNodes[6].childNodes[1].value="";
			ei.childNodes[6].childNodes[1].setAttribute("style","display: none;");
			ei.childNodes[6].childNodes[3].innerHTML="EDIT";
			ei.childNodes[6].childNodes[3].setAttribute("onclick","editfunc("+ci+",event)");
		}
		function func1(e)
		{
			e.preventDefault();
			for(i=1;i<=c;i++)
				for(j=i+1;j<=c;j++)
				{
					var fe=document.getElementById(i);
					var se=document.getElementById(j);
					//console.log(fe);
					//console.log(se);
					if(fe!=""&&se!=""&&fe!=null&&se!=null)
					{
						var fn=fe.childNodes[1].innerHTML;
						var sn=se.childNodes[1].innerHTML;
						var num=fn.localeCompare(sn);
						//console.log(num);
						if(num==-1)
						{
							var temp1_1=fe.childNodes[1].innerHTML;
							fe.childNodes[1].innerHTML=se.childNodes[1].innerHTML;
							se.childNodes[1].innerHTML=temp1_1;
							var temp1_2=fe.childNodes[3].innerHTML;
							fe.childNodes[3].innerHTML=se.childNodes[3].innerHTML;
							se.childNodes[3].innerHTML=temp1_2;
							var temp1_3=fe.childNodes[4].innerHTML;
							fe.childNodes[4].innerHTML=se.childNodes[4].innerHTML;
							se.childNodes[4].innerHTML=temp1_3;
							// var temp1_1=fe.innerHTML;
							// fe.innerHTML=se.innerHTML;
							// se.innerHTML=temp1_1;
							// var temp1_2=fe.childNodes[6].childNodes[3].onclick;
							// fe.childNodes[6].childNodes[3].onclick=se.childNodes[6].childNodes[3].onclick;
							// se.childNodes[6].childNodes[3].onclick=temp1_2;
							// var temp1_3=fe.childNodes[6].childNodes[4].onclick;
							// fe.childNodes[6].childNodes[4].onclick=se.childNodes[6].childNodes[4].onclick;
							// se.childNodes[6].childNodes[4].onclick=temp1_3;
							// var temp1_2=fe.id;
							// fe.id=se.id;
							// se.id=temp1_2;
						}
					}
				}
		}
		function func2(e)
		{
			e.preventDefault();
			for(i=1;i<=c;i++)
				for(j=i+1;j<=c;j++)
				{
					var fe=document.getElementById(i);
					var se=document.getElementById(j);
					//console.log(fe);
					//console.log(se);
					if(fe!=""&&se!=""&&fe!=null&&se!=null)
					{
						var fn=fe.childNodes[1].innerHTML;
						var sn=se.childNodes[1].innerHTML;
						var num=fn.localeCompare(sn);
						//console.log(num);
						if(num==1)
						{
							var temp1_1=fe.childNodes[1].innerHTML;
							fe.childNodes[1].innerHTML=se.childNodes[1].innerHTML;
							se.childNodes[1].innerHTML=temp1_1;
							var temp1_2=fe.childNodes[3].innerHTML;
							fe.childNodes[3].innerHTML=se.childNodes[3].innerHTML;
							se.childNodes[3].innerHTML=temp1_2;
							var temp1_3=fe.childNodes[4].innerHTML;
							fe.childNodes[4].innerHTML=se.childNodes[4].innerHTML;
							se.childNodes[4].innerHTML=temp1_3;
							// var temp1_1=fe.innerHTML;
							// fe.innerHTML=se.innerHTML;
							// se.innerHTML=temp1_1;
							// var temp1_2=fe.childNodes[6].childNodes[3].onclick;
							// fe.childNodes[6].childNodes[3].onclick=se.childNodes[6].childNodes[3].onclick;
							// se.childNodes[6].childNodes[3].onclick=temp1_2;
							// var temp1_3=fe.childNodes[6].childNodes[4].onclick;
							// fe.childNodes[6].childNodes[4].onclick=se.childNodes[6].childNodes[4].onclick;
							// se.childNodes[6].childNodes[4].onclick=temp1_3;
							// var temp1_2=fe.id;
							// fe.id=se.id;
							// se.id=temp1_2;
						}
					}
				}
		}
		function func3(e)
		{
			e.preventDefault();
			for(i=1;i<=c;i++)
				for(j=i+1;j<=c;j++)
				{
					var fe=document.getElementById(i);
					var se=document.getElementById(j);
					//console.log(fe);
					//console.log(se);
					if(fe!=""&&se!=""&&fe!=null&&se!=null)
					{
						var fn=fe.childNodes[4].innerHTML;
						var sn=se.childNodes[4].innerHTML;
						var num=fn.localeCompare(sn);
						//console.log(num);
						if(num==-1)
						{
							var temp1_1=fe.childNodes[1].innerHTML;
							fe.childNodes[1].innerHTML=se.childNodes[1].innerHTML;
							se.childNodes[1].innerHTML=temp1_1;
							var temp1_2=fe.childNodes[3].innerHTML;
							fe.childNodes[3].innerHTML=se.childNodes[3].innerHTML;
							se.childNodes[3].innerHTML=temp1_2;
							var temp1_3=fe.childNodes[4].innerHTML;
							fe.childNodes[4].innerHTML=se.childNodes[4].innerHTML;
							se.childNodes[4].innerHTML=temp1_3;
							// var temp1_1=fe.innerHTML;
							// fe.innerHTML=se.innerHTML;
							// se.innerHTML=temp1_1;
							// var temp1_2=fe.childNodes[6].childNodes[3].onclick;
							// fe.childNodes[6].childNodes[3].onclick=se.childNodes[6].childNodes[3].onclick;
							// se.childNodes[6].childNodes[3].onclick=temp1_2;
							// var temp1_3=fe.childNodes[6].childNodes[4].onclick;
							// fe.childNodes[6].childNodes[4].onclick=se.childNodes[6].childNodes[4].onclick;
							// se.childNodes[6].childNodes[4].onclick=temp1_3;
							// var temp1_2=fe.id;
							// fe.id=se.id;
							// se.id=temp1_2;
						}
					}
				}
		}
		function func4(e)
		{
			e.preventDefault();
		 	for(i=1;i<=c;i++)
				for(j=i+1;j<=c;j++)
				{
					var fe=document.getElementById(i);
					var se=document.getElementById(j);
					//console.log(fe);
					//console.log(se);
					if(fe!=""&&se!=""&&fe!=null&&se!=null)
					{
						var fn=fe.childNodes[4].innerHTML;
						var sn=se.childNodes[4].innerHTML;
						var num=fn.localeCompare(sn);
						//console.log(num);
						if(num==1)
						{
							var temp1_1=fe.childNodes[1].innerHTML;
							fe.childNodes[1].innerHTML=se.childNodes[1].innerHTML;
							se.childNodes[1].innerHTML=temp1_1;
							var temp1_2=fe.childNodes[3].innerHTML;
							fe.childNodes[3].innerHTML=se.childNodes[3].innerHTML;
							se.childNodes[3].innerHTML=temp1_2;
							var temp1_3=fe.childNodes[4].innerHTML;
							fe.childNodes[4].innerHTML=se.childNodes[4].innerHTML;
							se.childNodes[4].innerHTML=temp1_3;
							// var temp1_1=fe.innerHTML;
							// fe.innerHTML=se.innerHTML;
							// se.innerHTML=temp1_1;
							// var temp1_2=fe.childNodes[6].childNodes[3].onclick;
							// fe.childNodes[6].childNodes[3].onclick=se.childNodes[6].childNodes[3].onclick;
							// se.childNodes[6].childNodes[3].onclick=temp1_2;
							// var temp1_3=fe.childNodes[6].childNodes[4].onclick;
							// fe.childNodes[6].childNodes[4].onclick=se.childNodes[6].childNodes[4].onclick;
							// se.childNodes[6].childNodes[4].onclick=temp1_3;
							// var temp1_2=fe.id;
							// fe.id=se.id;
							// se.id=temp1_2;
						}
					}
				}	
		}
