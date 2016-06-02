function iniFunc() {
    loadSound();
}
var audioPlaying = false;

// Play/Pauseボタンを押すと再生，一時停止のときにはselectAnsに記録
function AudioButtonFunc() {
    if (audioPlaying == false) {
        for (var i = 0; i < array.length; ++i) {
            array[i].loop = true;
            array[i].play();
        }
        for (var i = 0; i < array.length; ++i) {
            array[i].volume = 0;
        }
        array[playNum].volume = 1.0;
        audioPlaying = true;
        ptnAsking = ptnPlaying + 1;
    } else {
        for (var i = 0; i < array.length; ++i) {
            array[i].pause();
        }
        audioPlaying = false;
        // 念のため記録
        selectAns[filePlaying][ptnPlaying] = point[filePlaying][ptnPlaying][playNum];
    }   // END if audioPlaying
}   // END AudioButtonFunc

// カーソル位置変更 => 音ファイル切り替え
function ChangeVolume() {
    /* playNum: 再生するファイル番号 */
    for (var i = 0; i < array.length; ++i) {
        if (i == playNum) {
            array[i].volume = 1.0;
            console.log(i)
        } else {
            array[i].volume = 0.0;
        }
    }
}

// 音声ファイルの読み込み
function loadSound() {
    readFile = audioFile[filePlaying];
    for (var i = 0; i < 8; ++i) {
        var audioname = readFile + point[filePlaying][ptnPlaying][i] + ".wav";
        array[i] = new Audio(audioname);
    }
    console.log(audioname);
    for (var i = 0; i < array.length; ++i) {
        array[i].load();
    }
    audioPlaying = false;
}

// 矢印キーで再生ファイルを切り替え
function KeyDownFunc(inEvent) {
    //    if (inEvent.keyCode == 37) {   // "←"が押されたとき
    //        playNum = playNum - 1;
    //        if (playNum < 0) {
    //            playNum = 0;
    //        }
    //        ChangeVolume();
    //    }   // if (inEvent.keyCode == 37) END
    //    else if (inEvent.keyCode == 39) {   // "→"が押されたとき
    //        playNum = playNum + 1;
    //        if (playNum > array.length - 1) {
    //            playNum = array.length - 1;
    //        }   // if (playNum > array.length-1) END
    //        ChangeVolume();
    //    }   // else if (inEvent.keyCode == 39) END
}   // END function KeyDownFunc

// OKボタンを押すと選んだ選択肢が保存され，ptnPlayingが切り替わる
function OkButtonFunc() {
    for (var i = 0; i < array.length; ++i) {
        array[i].pause();
    }
    selectAns[filePlaying][ptnPlaying] = point[filePlaying][ptnPlaying][playNum];
    if (ptnPlaying == 0) {
        ptnPlaying = 1;
        if (selectAns[filePlaying][ptnPlaying] == null) {
            playNum = 0;
            loadSound();
        }
    } else if (ptnPlaying == 1) {
        ptnPlaying = 0;
        if (selectAns[filePlaying][ptnPlaying] == null) {
            playNum = 0;
            loadSound();
        }
    }   // END if ptnPlaying

}   // END OkButtonFunc

// 選択肢が選ばれたら回答を記録
function saveAnsFunc(n_q) {
    var n_q;
    var fileAns = filePlaying + 1;
    if (fileAns < 10) {
        var nameEf = "selectEf0" + fileAns;
        //var nameMv = "selectMv0" + fileAns;
    } else {
        var nameEf = "selectEf" + fileAns;
        //var nameMv = "selectMv" + fileAns;
    }
    //nameMv = nameMv + "_" + ptnAsking;
    var idEf = document.getElementById(nameEf);
    //var idMv = document.getElementById(nameMv);
    if (n_q == 1) {
        selectAns[filePlaying][2] = idEf.options[idEf.selectedIndex].value;
    //} else if (n_q == 2) {
    //    selectAns[filePlaying][3 + ptnPlaying] = idMv.options[idMv.selectedIndex].value;
    }
}   // END saveAnsFunc

// スライダーが動かされたら選んでいる場所を表示
function showValue() {
    var fileNum = filePlaying + 1;
    var ptnNum = ptnPlaying + 1;
    if (fileNum < 10) {
        var nameSld = "slider0" + fileNum;
    } else {
        var nameSld = "slider" + fileNum;
    }
    nameSld = nameSld + "_" + ptnNum;
    var idSld = document.getElementById(nameSld);
    playNum = idSld.value;
    console.log(idSld.value);
    ChangeVolume();
}