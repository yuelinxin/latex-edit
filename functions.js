MathJax = {
    tex: {
      inlineMath: [['$', '$']], //行内公式
      displayMath: [['$$','$$']] //段内公式
    },
    tex2jax: {
        inlineMath: [ ['$','$'], ["\\(","\\)"] ],
        displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
    },
    svg: {
      fontCache: 'global'
    }
};

var click_count1 = 0;
var click_count2 = 0;
var click_count3 = 0;
var click_count4 = 0;

function show(obj)
{
    identifier = obj.getAttribute("data-id");
    switch (identifier)
    {
        case "a": click_count1++;show_more(click_count1, obj);break;
        case "b": click_count2++;show_more(click_count2, obj);break;
        case "c": click_count3++;show_more(click_count3, obj);break;
        case "d": click_count4++;show_more(click_count4, obj);break;
    }
}

function show_more(click, obj)
{
    if (click % 2 == 1)
    {obj.children[0].style.transform="rotate(90deg)";
    obj.nextElementSibling.style.height="fit-content";}
    else
    {obj.children[0].style.transform="rotate(0deg)";
    obj.nextElementSibling.style.height="0";}
}

function add(obj)
{  
    var tc = document.getElementById("wordbox");
    var tclen = tc.value.length;
    var pos = getPosition(tc);
    var str = obj.name;
    var strlen = str.length;
    tc.focus();
    if(typeof document.selection != "undefined")  
    {  
        document.selection.createRange().text = str;    
    }  
    else  
    {  
       tc.value = tc.value.substr(0,tc.selectionStart)+str+tc.value.substring(tc.selectionStart,tclen);  
    }
    setCaretPosition(tc, pos+strlen);
    render();
}

function add_double(obj)
{  
    var tc = document.getElementById("wordbox");
    var tclen = tc.value.length;
    var pos = getPosition(tc);
    var str = obj.name;
    var strlen = str.length;
    tc.focus();
    if(typeof document.selection != "undefined")  
    {  
        document.selection.createRange().text = str;    
    }  
    else  
    {  
       tc.value = tc.value.substr(0,tc.selectionStart)+str+tc.value.substring(tc.selectionStart,tclen);  
    }
    setCaretPosition(tc, pos+(strlen / 2));
    render();
}

function copy()
{
    let input = document.getElementById('wordbox');
    input.select();
    if(document.execCommand('copy')){
      document.execCommand('copy');
      document.getElementById('copy').innerHTML = "<font style='color: #43cea2;'>Copied!</font>";
    }
    else{
      document.getElementById('copy').innerHTML = "<font style='color: red;'>Failed</font>";
    }
}

function focus_()
{
    $("#wordbox").focus();
}

window.onload = function()
{
    var text = document.querySelector("#wordbox");
    var out = document.querySelector("#outputBox");
    $("#clear").click(function(){
        text.value = "";
        out.innerHTML = "";
        setCaretPosition(text, 0);
        $("#copy").html("Copy");
    });
    $("#wordbox").focus();
}

function render()
{
    if (AutoRender == true)
    {
        var out = document.querySelector("#outputBox");
        out.innerHTML = document.querySelector("#wordbox").value;
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,out]);
    }
    else
    {
        if (event.keyCode == 91 || event.keyCode == 93 || event.keyCode == 17 || event.keyCode == 224)
        {
            var out = document.querySelector("#outputBox");
            out.innerHTML = document.querySelector("#wordbox").value;
            MathJax.Hub.Queue(["Typeset",MathJax.Hub,out]);
        }
    }
}

const getPosition = function (element) {
    let cursorPos = 0;
    if (document.selection) {
        var selectRange = document.selection.createRange();
        selectRange.moveStart('character', -element.value.length);
        cursorPos = selectRange.text.length;
    } else if (element.selectionStart || element.selectionStart == '0') {
        cursorPos = element.selectionStart;
    }
    return cursorPos;
}

function setCaretPosition(textDom, pos) {
    if (textDom.setSelectionRange)
    {
        // IE Support
        textDom.focus();
        textDom.setSelectionRange(pos, pos);
    }
    else if (textDom.createTextRange)
    {
        // Firefox support
        var range = textDom.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

var AutoRender = true;
function change_render_mode(obj)
{
    if (AutoRender == true)
    {
        AutoRender = false;
        obj.innerHTML = "ManualRender";
        obj.style.backgroundColor = "rgba(232, 232, 232, 0.678)";
        obj.style.color = "black";
    }
    else
    {
        AutoRender = true;
        obj.innerHTML = "AutoRender";
        obj.style.backgroundColor = "rgba(76, 0, 130, 0.5)";
        obj.style.color = "whitesmoke";
    }
}
