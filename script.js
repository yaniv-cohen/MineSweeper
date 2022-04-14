let cont = document.getElementById('cont');
let back = document.getElementById('back');



function choseBuiltDifficulty() {
    document.getElementById('bombInput').style.display = "none";
}

const manual = document.getElementById('dx');
function showManualDifficulty() {
    // console.log('click on radio manual');
    document.getElementById('bombInput').style.display = "inline";
}

// start();
function start() {
    let contCopy = document.getElementById('cont');
    let backCopy = document.getElementById('back');


    let height = 8;
    let width = 8;
    //set height
    if (document.getElementById("yInput").value > 0) {
        height = document.getElementById("yInput").value;

    }


    //set width
    if (document.getElementById("xInput").value > 0) {
        width = document.getElementById("xInput").value;

    }




    // let bombCount = Math.floor(height * width / 6);
    let bombCount = 5;
    if (document.getElementById('d1').checked == true) {
        bombCount = Math.floor(height * width / 12);
    }
    else if (document.getElementById('d2').checked==true) {
        bombCount = Math.floor(height * width / 8);
    }
    else if (document.getElementById('d3').checked ==true) {
        bombCount = Math.floor(height * width / 4);
    }




    if (document.getElementById('bombInput').style.display != "none") {
        bombCount = document.getElementById("bombInput").value;
        if (bombCount > height * width) {
            bombCount = height * width;


            alert('Invalid bomb number<br>The number of bombs was set to ' + bombCount);
        }
    }


    let startMenu = document.getElementById('startMenu');
    document.getElementById('startMenu').remove();

    let board = [];
    for (let i = 0; i < height; i++) {
        board.push([]);
        for (let k = 0; k < width; k++) {
            board[i].push('0');

        }
    }
    console.log(bombCount);
    for (let i = 0; i < bombCount; i++) {
        let y = Math.round(Math.random() * (height - 1));

        let x = Math.round(Math.random() * (width - 1));
        if (board[y][x] != "x") {
            board[y][x] = 'x';

        }
        else {
            i--;
        }
    }

    for (let k = 1; k < width - 1; k++) {
        if (board[0][k] == 0) { //first row middle

            board[0][k] =
                (board[0][k - 1] == "x") * 1 + (board[0][k + 1] == "x") * 1 +
                (board[1][k - 1] == "x") * 1 + (board[1][k] == "x") * 1 + (board[1][k + 1] == "x") * 1;
        }
        if (board[height - 1][k] == 0) { //bottom row middle
            board[height - 1][k] =
                (board[height - 2][k - 1] == "x") * 1 + (board[height - 2][k] == "x") * 1 + (board[height - 2][k + 1] == "x") * 1 +
                (board[height - 1][k - 1] == "x") * 1 + (board[height - 1][k + 1] == "x") * 1;
        }
    }
    for (let k = 1; k < height - 1; k++) {
        if (board[k][0] == 0) {//left column middle

            board[k][0] =
                (board[k - 1][0] == "x") * 1 + (board[k + 1][0] == "x") * 1 +
                (board[k - 1][1] == "x") * 1 + (board[k][1] == "x") * 1 + (board[k + 1][1] == "x") * 1;
        }
        if (board[k][width - 1] == 0) {//right column middle
            board[k][width - 1] =
                (board[k - 1][width - 1] == "x") * 1 + (board[k + 1][width - 1] == "x") * 1 +
                (board[k - 1][width - 2] == "x") * 1 + (board[k][width - 2] == "x") * 1 + (board[k + 1][width - 2] == "x") * 1;
        }
    }
    if (board[0][0] == 0) //top left
    {
        board[0][0] = (board[0][1] == "x") * 1 + (board[1][0] == "x") * 1 + (board[1][1] == "x") * 1;
    }
    if (board[0][width - 1] == 0) //top right
    {
        board[0][width - 1] = (board[0][width - 2] == "x") * 1 + (board[1][width - 2] == "x") * 1 + (board[1][width - 1] == "x") * 1;
    }
    if (board[height - 1][0] == 0) //bottom left
    {
        board[height - 1][0] = (board[height - 2][0] == "x") * 1 + (board[height - 2][1] == "x") * 1 + (board[height - 1][1] == "x") * 1;
    }
    if (board[height - 1][width - 1] == 0) //bottom left
    {
        board[height - 1][width - 1] = (board[height - 2][width - 2] == "x") * 1 + (board[height - 2][width - 1] == "x") * 1 + (board[height - 1][width - 2] == "x") * 1;
    }
    for (let i = 1; i < height - 1; i++) {
        for (let k = 1; k < width - 1; k++) {
            if (board[i][k] == 0) {

                board[i][k] =

                    (board[i - 1][k - 1] == "x") * 1 + (board[i - 1][k] == "x") * 1 + (board[i - 1][k + 1] == "x") * 1 +
                    (board[i][k - 1] == "x") * 1 + (board[i][k + 1] == "x") * 1 +
                    (board[i + 1][k - 1] == "x") * 1 + (board[i + 1][k] == "x") * 1 + (board[i + 1][k + 1] == "x") * 1;
            }
        }
    }

    console.log(board);
    for (let i = 0; i < height; i++)  //create back
    {
        var tag = document.createElement('div');
        tag.classList.add('row');
        back.appendChild(tag);
        for (let k = 0; k < width; k++) {
            var cell = document.createElement('div');

            if (board[i][k] == "x") {
                cell.classList.add('bomb');
            }

            else {
                cell.classList.add('back-default');
                var p = document.createElement('p');
                // p.style.margin="auto";
                p.innerHTML= board[i][k];
                cell.appendChild(p);
            }
            // cell.addEventListener('click', reveal);
            back.children[i].appendChild(cell);
        }
    }
    for (let i = 0; i < height; i++)  //create front
    {
        var tag = document.createElement('div');
        tag.classList.add('row');
        cont.appendChild(tag);
        for (let k = 0; k < width; k++) {
            var cell = document.createElement('div');
            cell.classList.add('defalut');
            cell.id = (i + "" + k);
            cell.addEventListener('click', reveal);
            cell.addEventListener('contextmenu', e => {
                e.preventDefault();
                console.log('right click' + cell);
                e.target.classList.toggle('flag');
            });
            cell.reveal = function () { console.log('hi'); };
            cont.children[i].appendChild(cell);
        }
    }

    function revealAt(y, x) {
        // console.log('is zeo '+y+" "+x);
        // console.log('should reveal ' +y+""+{x+1 );
        // let idHere=""+y+x;
        // console.log(idHere);
        // document.getElementById(y+""+(x+1)).innerText="hhhh";


    }


    function reveal() {

        let place = this.id;
        if (board[place[0]][place[1]] == "0") {
            revealAt(place[0], place[1]);
        }

        console.log(place[0] + ' ' + place[1]);
        this.classList.toggle("maxOpacity");
        if (board[place[0]][place[1]] == "x") //if hit a bomb
        {

            lose();
        }
        // let curX =[this.parentElement.children];
        // const index = [...this.parentElement.children];


    }
    function lose() {
        console.log('lost');
        let delayInMilliseconds = 1000; //1 second
        setTimeout(function () {
            //your code to be executed after 1 second
            document.getElementById('cont').remove();
            setTimeout(function () {
                for (let i = 0; i < height * width - bombCount; i++) {
                    document.getElementsByClassName('back-default')[i].classList.add("bomb");
                }
                setTimeout(function () {


                    window.location.replace('index.html');
                    return 0;
                }, 200);
            }, 1000);

        }, 1000);

        // setTimeout(function () {
        //     //your code to be executed after 1 second
        //     // alert('You Died!');
        //     document.getElementById('cont').remove();
        // }, delayInMilliseconds);

    }
}



