function chef() {
    let elem = document.getElementById('premium');
    let rect = elem.getBoundingClientRect();
    document.getElementById('chef').style.left = rect.left + 190 + "px";
}

chef();
