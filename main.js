var fb = new Firebase('https://todo-list-trev4ev.firebaseio.com');
var count = 0;
fb.once('value', function(snapshot) 
{
    for(var k in snapshot.val())
    {
        addString(k, snapshot.val()[k]);
    }
});

function addString(k, val)
{
    var x = document.createElement("P");
    x.id = k;
    k = "• " + k; 
    k = k.replace(/\s/g, '\xa0');
    var y = document.createTextNode(k);
    x.appendChild(y);
    x.style.border = "2px solid white";
    if(val == 'i')
    {
        x.style.color = "rgb(75, 75, 75)";        
        x.style.borderColor = "rgb(75, 75, 75)";
    }
    else 
    {
        x.style.color = "rgb(0, 226, 17)";
        
    }
    document.getElementById('main').appendChild(x);
    count++;
    checkCount();
    x.addEventListener('click',function(){
        setTimeout(function(){
            console.log(fb.child(x.id).val());
            if(x.style.color == "rgb(75, 75, 75)")
            {
                x.style.color = "rgb(0, 226, 17)";
                x.style.borderColor = "white";
                if(fb.child(x.id).val() == 'i')
                    fb.child(x.id).set('a');
            }
            else
            {
                x.style.color = "rgb(75, 75, 75)";
                x.style.borderColor = "rgb(75, 75, 75)";
                if(fb.child(x.id).val() == 'a')
                    fb.child(x.id).set('i');
            }
        },170);

    },false);
    x.addEventListener('dblclick',function(){
        document.getElementById('main').removeChild(x);
        fb.child(x.id).remove();
        count--;
        checkCount();
        console.log(count);
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
};

function add()
{
    var string = document.getElementById('input').value;
    string = string.trim();
    if(string == "")
    {
        return;
    }
    fb.child(string).set('a');
    var x = document.createElement("P");
    x.id = string;
    string = "• " + string; 
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
                if(fb.child(x.id).val() == 'i')
                    fb.child(x.id).set('a');
            }
            else
            {
                x.style.color = "rgb(75, 75, 75)";
                x.style.borderColor = "rgb(75, 75, 75)";
                if(fb.child(x.id).val() == 'a')
                    fb.child(x.id).set('i');
            }
        },170);

    },false);
    x.addEventListener('dblclick',function(){
        document.getElementById('main').removeChild(x);
        fb.child(x.id).remove();
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
};

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.keyCode == 13) {
        add();
    }
}

function checkCount() {
    if (count == 0)
    {
        document.getElementById('main').getElementsByTagName('h1')[0].innerHTML = 'Working hard or hardly working?';
    }
    else
    {
        document.getElementById('main').getElementsByTagName('h1')[0].innerHTML = "";
    }
}