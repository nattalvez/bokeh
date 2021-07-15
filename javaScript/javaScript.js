function blurplaceholder(idvalue,placeholder) {
    var tag = document.getElementById(idvalue);
    if (tag.value=='') {
    	tag.placeholder=placeholder;
    }
}

function focusplaceholder(idvalue) {
    document.getElementById(idvalue).placeholder='';
}