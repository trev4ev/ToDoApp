var count = 0;
            function add()
            {
                var string = document.getElementById('input').value;
                string = string.trim();
                if(string == "")
                {
                    return;
                }
                string = "• " + string;
                var x = document.createElement("P");
                string = string.replace(/\s/g, '\xa0');
                var y = document.createTextNode(string);
                x.appendChild(y);
                x.style.color = "rgb(0, 226, 17)";
                x.style.border = "2px solid white";
                document.getElementById('main').appendChild(x);
                count++;
                checkCount();
                x.addEventListener('click',function(){
                    setTimeout(function(){
                        if(x.style.color == "rgb(75, 75, 75)")
                        {
                            x.style.color = "rgb(0, 226, 17)";
                            x.style.borderColor = "white";
                        }
                        else
                        {
                            x.style.color = "rgb(75, 75, 75)";
                            x.style.borderColor = "rgb(75, 75, 75)";
                        }
                    },170);
                    
                },false);
                x.addEventListener('dblclick',function(){
                    document.getElementById('main').removeChild(x);
                    count--;
                    checkCount();
                },false);
                x.addEventListener('mouseenter',function(){
                    if(x.style.color == "rgb(0, 226, 17)")
                    {
                        x.style.borderColor = "rgb(0, 226, 17)";
                    }
                },false);
                x.addEventListener('mouseleave',function(){
                    if(x.style.color == "rgb(0, 226, 17)")
                    {
                        x.style.borderColor = "white";
                    }
                },false);
                document.getElementById('input').value = "";
            }
            
            window.addEventListener("keydown", checkKeyPressed, false);
 
            function checkKeyPressed(e) {
                if (e.keyCode == 13) {
                    add();
                }
            }
            
            function checkCount() {
                if (count == 0)
                {
                    document.getElementById('main').getElementsByTagName('h1')[0].innerHTML = '"Working hard or hardly working?';
                }
                else
                {
                    document.getElementById('main').getElementsByTagName('h1')[0].innerHTML = "";
                }
            }