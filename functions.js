
var click_count1 = 0;
function show_1(obj)
{
    click_count1++;
    if (click_count1 % 2 == 1)
    {obj.children[0].style.transform="rotate(90deg)";
    obj.nextElementSibling.style.height="fit-content";}
    else
    {obj.children[0].style.transform="rotate(0deg)";
    obj.nextElementSibling.style.height="0";}
}

var click_count2 = 0;
function show_2(obj)
{
    click_count2++;
    if (click_count2 % 2 == 1)
    {obj.children[0].style.transform="rotate(90deg)";
    obj.nextElementSibling.style.height="fit-content";}
    else
    {obj.children[0].style.transform="rotate(0deg)";
    obj.nextElementSibling.style.height="0";}
}

var click_count3 = 0;
function show_3(obj)
{
    click_count3++;
    if (click_count3 % 2 == 1)
    {obj.children[0].style.transform="rotate(90deg)";
    obj.nextElementSibling.style.height="fit-content";}
    else
    {obj.children[0].style.transform="rotate(0deg)";
    obj.nextElementSibling.style.height="0";}
}

var click_count4 = 0;
function show_4(obj)
{
    click_count4++;
    if (click_count4 % 2 == 1)
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
    var div = document.querySelector("#outputBox")
    text.addEventListener("keyup", function(e) {
        div.innerHTML = text.value;
    });
    $("#clear").click(function(){
        text.value = "";
        out.innerHTML = "";
        $("#copy").html("Copy");
    });
    $("#wordbox").focus();
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

MathJax = {
    tex: {
      inlineMath: [['$', '$']], //行内公式
      displayMath: [['$$','$$']] //段内公式
    },
    svg: {
      fontCache: 'global'
    }
};