function iniFunc() {
    loadSound1(0);
    loadSound1(1);
}

//// Play/Pause�{�^���������ƍĐ��C�ꎞ��~�̂Ƃ��ɂ�selectAns�ɋL�^
//function AudioButtonFunc() {
//    if (audioPlaying0 == false) {
//        for (var i = 0; i < array.length; ++i) {
//            array[i].loop = true;
//            array[i].play();
//        }
//        for (var i = 0; i < array.length; ++i) {
//            array[i].volume = 0;
//        }
//        array[playNum].volume = 1.0;
//        audioPlaying0 = true;
//        ptnAsking = ptnPlaying + 1;
//    } else {
//        for (var i = 0; i < array.length; ++i) {
//            array[i].pause();
//        }
//        audioPlaying0 = false;
//        // �O�̂��ߋL�^
//        selectAns[filePlaying][ptnPlaying] = point[filePlaying][ptnPlaying][playNum];
//    }   // END if audioPlaying0
//}   // END AudioButtonFunc

// Play/Pause�{�^���������ƍĐ��C�ꎞ��~�̂Ƃ��ɂ�selectAns�ɋL�^
function AudioButtonFunc1(n_audio) {
    if (audioPlaying[n_audio] == false) {
        audioArray1[n_audio].loop = true;
        audioArray1[n_audio].play();
        audioArray1[n_audio].volume = 1.0;
        audioPlaying[n_audio] = true;
    } else {
        audioArray1[n_audio].pause();
        audioPlaying[n_audio] = false;
    }
    debugShowLog(audioPlaying);
    // END if audioPlaying
}   // END AudioButtonFunc

// �J�[�\���ʒu�ύX => ���t�@�C���؂�ւ�
function ChangeVolume() {
    /* playNum: �Đ�����t�@�C���ԍ� */
    for (var i = 0; i < array.length; ++i) {
        if (i == playNum) {
            array[i].volume = 1.0;
            console.log(i)
        } else {
            array[i].volume = 0.0;
        }
    }
}

// �����t�@�C���̓ǂݍ���
//function loadSound() {
//    readFile = audioFile[filePlaying];
//    for (var i = 0; i < 8; ++i) {
//        var audioname = readFile + point[filePlaying][ptnPlaying][i] + ".wav";
//        array[i] = new Audio(audioname);
//    }
//    console.log(audioname);
//    for (var i = 0; i < array.length; ++i) {
//        array[i].load();
//    }
//    audioPlaying0 = false;
//}

function loadSound1(n_audio) {
    readFile = audioFile1[n_audio][filePlaying];
    var audioname = readFile + ".wav";
    audioArray1[n_audio] = new Audio(audioname);
    audioArray1[n_audio].load();
}

// ���L�[�ōĐ��t�@�C����؂�ւ�
function KeyDownFunc(inEvent) {
    //    if (inEvent.keyCode == 37) {   // "��"�������ꂽ�Ƃ�
    //        playNum = playNum - 1;
    //        if (playNum < 0) {
    //            playNum = 0;
    //        }
    //        ChangeVolume();
    //    }   // if (inEvent.keyCode == 37) END
    //    else if (inEvent.keyCode == 39) {   // "��"�������ꂽ�Ƃ�
    //        playNum = playNum + 1;
    //        if (playNum > array.length - 1) {
    //            playNum = array.length - 1;
    //        }   // if (playNum > array.length-1) END
    //        ChangeVolume();
    //    }   // else if (inEvent.keyCode == 39) END
}   // END function KeyDownFunc

// OK�{�^���������ƑI�񂾑I�������ۑ�����CptnPlaying���؂�ւ��
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

// �I�������I�΂ꂽ��񓚂��L�^
//function saveAnsFunc(n_q) {
//    var n_q;
//    var fileAns = filePlaying + 1;
//    if (fileAns < 10) {
//        var nameEf = "selectEf0" + fileAns;
//        //var nameMv = "selectMv0" + fileAns;
//    } else {
//        var nameEf = "selectEf" + fileAns;
//        //var nameMv = "selectMv" + fileAns;
//    }
//    //nameMv = nameMv + "_" + ptnAsking;
//    var idEf = document.getElementById(nameEf);
//    //var idMv = document.getElementById(nameMv);
//    if (n_q == 1) {
//        selectAns[filePlaying][2] = idEf.options[idEf.selectedIndex].value;
//        //} else if (n_q == 2) {
//        //    selectAns[filePlaying][3 + ptnPlaying] = idMv.options[idMv.selectedIndex].value;
//    }
//}   // END saveAnsFunc

// Save answers in array
function saveAns2Array1() {
    var n_q = 1;
    var fileAns = filePlaying + 1;
    if (fileAns < 10) {
        var nameNtr = "selectNtr0" + fileAns;
    } else {
        var nameNtr = "selectNtr" + fileAns;
    }
    debugShowLog(n_q);

    var idNtr = document.getElementById(nameNtr);
    if (n_q == 1) {
        debugShowLog(nameNtr);
        selectAns[filePlaying][0] = idNtr.options[idNtr.selectedIndex].value;
    }
    for (var n = 0; n < 1; ++n) {
        if (selectAns[filePlaying][n] != null) {
            AnsFill = AnsFill + 1;
        }
    }
    if (AnsFill == 1) {
        filePlaying = filePlaying + 1;
        if (filePlaying < trialNum[0]) {
            loadSound1(0);
            loadSound1(1);
        }
    } else {
        alert("�񓚂��ς�ł��܂���!");
    }
    AnsFill = 0;
}   // END saveAnsFunc

// �e�t�@�C�����I�������񓚘R�ꂪ�Ȃ����m�F�C�Ȃ���Ύ��̉��f�[�^��ǂݍ���
//function saveArrayFunc() {
//    console.log(filePlaying);
//    console.log(ptnPlaying);
//    console.log(selectAns[filePlaying]);
//    console.log(selectAns);
//    for (var i = 0; i < 3; ++i) {
//        if (selectAns[filePlaying][i] != null) {
//            AnsFill = AnsFill + 1;
//        }
//    }
//    if (AnsFill == 3) {
//        filePlaying = filePlaying + 1;
//        if (filePlaying < 12) {
//            loadSound();
//        }
//    } else {
//        alert("�񓚂��ς�ł��܂���!");
//    }
//    AnsFill = 0;
//}   // END saveAnsFunc

// �e�t�@�C�����I�������񓚘R�ꂪ�Ȃ����m�F�C�Ȃ���Ύ��̉��f�[�^��ǂݍ���
function saveArrayVal1() {
    for (var n = 0; n < 3; ++n) {
        if (selectAns[filePlaying][n] != null) {
            AnsFill = AnsFill + 1;
        }
    }
    if (AnsFill == 1) {
        filePlaying = filePlaying + 1;
        if (filePlaying < trialNum[0]) {
            loadSound1(0);
            loadSound1(1);
        }
    } else {
        alert("�񓚂��ς�ł��܂���!");
    }
    AnsFill = 0;
}   // END saveAnsFunc

// �񓚂��t�@�C���ɂ��ĕۑ�
function saveFunc() {
    var data = selectAns;
    if (data.length) {
        var obj = document.getElementById("anchor");
        obj.href = "data:application/octet-stream," +
                   encodeURIComponent(data);
        obj.innerHTML = "�E�N���b�N�Ń����N���ۑ����ĉ�����";
    }
}   // END saveFunc

// �X���C�_�[���������ꂽ��I��ł���ꏊ��\��
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