
function change_background_color() {
    var list = [];
    for (var i = 1; i <= 3; i++){
        let num_random = Math.random()*256;
        let num = Math.floor(num_random)
        list.push(num);
    }
    let c1 = list[0];
    let c2 = list[1];
    let c3 = list[2];

    return document.body.style.backgroundColor = `rgb(${c1},${c2},${c3})`
}

