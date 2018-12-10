// var arraysongs =[
//     {
//         thumbnail: 'http://www.24ourmusic.net/wp-content/uploads/2018/02/DWk4tefW0AcrVU1-830x502.jpg',
//             name: under,
//             singer: 'alex hepburn',
//             author: '...',
//             link: 'http://data02.chiasenhac.com/downloads/1331/1/1330854-22cc5608/128/Under%20-%20Alex%20Hepburn%20(NhacPro.net).mp3'
//     },
//     {
//         thumbnail: 'https://avatar-nct.nixcdn.com/song/2018/11/15/f/e/7/1/1542250577447_300.jpg',
//         name: take me hand,
//         singer: '...',
//         author: '...',
//         link: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui971/TakeMeHand-DAISHIDANCECecileCorbel-5385190.mp3?st=XjI8XJRv6ekjas7ES4chDg&e=1542888318'
//     }
// ]
// document.getElementById('load-more').onclick=function () {
function savesong() {
    var name = document.forms['song-form']['name'].value;
    var thumbnail = document.forms['song-form']['thumbnail'].value;
    var singer = document.forms['song-form']['singer'].value;
    var author = document.forms['song-form']['author'].value;
    var link = document.forms['song-form']['link'].value;
    var song = {
        thumbnail: thumbnail,
        name: name,
        singer: singer,
        author: author,
        link: link
    };
    var sendData = JSON.stringify(song);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            alert('save success');
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/post-free', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendData);
}

function playSong(link) {
    var audioPlayer = document.getElementsByTagName('audio')[0];
    audioPlayer.scr = link;
    audioPlayer.play();
}

function loadSong() {
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert('evrything í ok!');
            var arraySongs = JSON.parse(xhr.responseText);
            var htmlContent = '';
            for (var i = 0; i < arraySongs.length; i++) {
                var song = arraySongs[i];
                htmlContent += '<div class="song-item ">';
                htmlContent += '<div class="song-index ">' + (i + 1) + '</div>';
                htmlContent += '<div class="song-thumbnail">';
                htmlContent += '<img src="' + song.thumbnail + '" alt="" >';
                htmlContent += '</div>';
                htmlContent += '<div class="song-infor ">';
                htmlContent += '<div class="song-name">' + song.name + '</div>';
                htmlContent += '<div class="song-singer">' + song.singer + '</div>';
                htmlContent += '</div>';
                htmlContent += '<div class="song-control " onclick="playSong(\'' + song.link + '\')">Play</div>';
                htmlContent += `<div class="song-control" onclick="playSong('${song.link}')">Play</div>`;
                htmlContent += '<div class="song-control "><a href="#">Detail</a></div>';
                htmlContent += '</div>';
            }
            document.getElementById('list-song').innerHTML += htmlContent;
        }
    };
    xhr.open('GET', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs', true);
    xhr.send();
}

document.getElementById('load-more').onclick = function () {
    loadSong();
};
document.getElementById('save-song').onclick = function () {
    savesong();
};