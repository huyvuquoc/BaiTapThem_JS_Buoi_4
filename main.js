//BÀI 1
/**
 * Input: Nhập vào ngày tháng năm
 * Handle: - tạo biến ngay, thang, nam, soNgayTrongThang
 *         - tìm số ngày trong tháng (như bài 2)
 *         - Tìm ngày tiếp theo:
 *          + nếu tháng là 12 và ngày là 31 thì set ngày về 1, tháng về 1, năm +1
 *          + nếu tháng <12 và ngày == soNgayTrongThang thì set ngày về 1, tháng +1
 *          + còn lại là set ngày +1
 *         - Tìm ngày trước đó:
 *          + nếu tháng là 1 và ngày là 1 thì set ngày về 31, tháng về 12, năm -1
 *          + nếu tháng >1 và ngày 1 thì set tháng -1, sau đó tìm soNgayTrongThang của tháng -1 và gán cho ngày.
 *          + còn lại là lấy ngày -1
 * Output: xuất ra ngày tháng năm kế tiếp và trước đó
 */
var btnNgayTiepTheo = document.getElementById('btnNgayTiepTheo');
var btnNgayTruocDo = document.getElementById('btnNgayTruocDo');

// NÚT TÌM NGÀY TIẾP THEO
btnNgayTiepTheo.onclick = function() {
    var ngay = parseInt(document.getElementById('ipNgay').value);
    var thang = parseInt(document.getElementById('ipThang').value);
    var nam = parseInt(document.getElementById('ipNam').value);
    var soNgayTrongThang;

    // tìm số ngày trong tháng
    switch(thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            soNgayTrongThang = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            soNgayTrongThang = 30;
            break;
       case 2:
           if(nam%4==0 && nam%100!=0 || nam%400==0) {
            soNgayTrongThang = 29;
           } else {
            soNgayTrongThang = 28;
           }
           break;
        default:
           document.getElementById('xuatBaoLoi1').innerHTML = 'Tháng nhập không đúng';
           break;
    }

    if(thang==12 && ngay==31) {
        ngay = 1;
        thang = 1;
        nam+=1;
    } else if(thang>=1 && thang<12 && ngay==soNgayTrongThang) {
        ngay = 1;
        thang+=1;
    } else {
        ngay+=1;
    }

    document.getElementById('xuatNgayTiepTheo').innerHTML = 'Ngày tiếp theo là ' + ngay + '-' + thang + '-' + nam;
}
// NÚT TÌM NGÀY TRƯỚC ĐÓ
btnNgayTruocDo.onclick = function() {
    var ngay = parseInt(document.getElementById('ipNgay').value);
    var thang = parseInt(document.getElementById('ipThang').value);
    var nam = parseInt(document.getElementById('ipNam').value);
    var soNgayTrongThang;

    // tìm số ngày trong tháng
    switch(thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            soNgayTrongThang = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            soNgayTrongThang = 30;
            break;
       case 2:
           if(nam%4==0 && nam%100!=0 || nam%400==0) {
            soNgayTrongThang = 29;
           } else {
            soNgayTrongThang = 28;
           }
           break;
        default:
           document.getElementById('xuatBaoLoi2').innerHTML = 'Tháng nhập không đúng';
           break;
    }

    if(thang==1 && ngay==1) {
        ngay = 31;
        thang = 12;
        nam-=1;
    } else if(thang>1 && ngay==1) {
        thang-=1;
        switch(thang) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                ngay = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                ngay = 30;
                break;
           case 2:
               if(nam%4==0 && nam%100!=0 || nam%400==0) {
                ngay = 29;
               } else {
                ngay = 28;
               }
               break;
        }
    } else {
        ngay-=1;
    }

    document.getElementById('xuatNgayTruocDo').innerHTML = 'Ngày trước đó là ' + ngay + '-' + thang + '-' + nam;
}



//BÀI 2
/**
 * Input: Nhập vào tháng năm
 * Handle: - tạo biến month, year, soNgayTrongThang
 *         - trường hợp tháng 1,3,5,7,8,10,12 thì có 31 ngày
 *         - trường hợp tháng 4,6,9,11 thì có 30 ngày
 *         - trường hợp tháng 2 thì xét năm
 *          + nếu năm chia hết cho 4 và ko chia hết cho 100 HOẶC năm chia hết cho 400 thì có 29 ngày
 *          + còn lại có 28 ngày
 * Output: xuất ra số ngày trong tháng
 */
 var btnSoNgay = document.getElementById('btnSoNgay');

 btnSoNgay.onclick = function() {
     var month = parseInt(document.getElementById('ipMonth').value);
     var year = parseInt(document.getElementById('ipYear').value);
     var dateInMonth;
    //  console.log(month);
    //  console.log(year);

     switch(month) {
         case 1:
         case 3:
         case 5:
         case 7:
         case 8:
         case 10:
         case 12:
        //  default:
            document.getElementById('xuatSoNgayTrongThang').innerHTML = 'Tháng ' + month +'/' + year + ' có 31 ngày';
             break;
         case 4:
         case 6:
         case 9:
         case 11:
            document.getElementById('xuatSoNgayTrongThang').innerHTML = 'Tháng ' + month +'/' + year + ' có 30 ngày';
             break;
        case 2:
            if(year%4==0 && year%100!=0 || year%400==0) {
                document.getElementById('xuatSoNgayTrongThang').innerHTML = 'Tháng ' + month +'/' + year + ' có 29 ngày';
            } else {
                document.getElementById('xuatSoNgayTrongThang').innerHTML = 'Tháng ' + month +'/' + year + ' có 28 ngày';
            }
            break;
        default:
            document.getElementById('xuatSoNgayTrongThang').innerHTML = 'Tháng nhập không đúng';
            break;
     }
 }

 
//BÀI 3
/**
 * Input: Nhập vào số nguyên có 3 chữ số
 * Handle: - tạo biến so3ChuSo, soHangTram, docHangTram, soHangChuc, docHangChuc, soHangDonVi, docHangDonVi
 *         - nếu 100<=so3ChuSo<=999 và -999<=so3ChuSo<=-100 thì tiếp tục, còn ko in ra đây ko phải là số nguyên có 3 chữ số.
 *         - tTTso3ChuSo = trị tuyệt đối của so3ChuSo
 *         - tính soHangTram = tTTso3ChuSo/100 lấy phần nguyên
 *         - tính soHangChuc = (tTTso3ChuSo - soHangTram*100)/10 lấy phần nguyên
 *         - tính soHangDonVi = (tTTso3ChuSo - soHangTram*100)%10
 *         - đọc số hàng trăm
 *              + TH soHangTram=1 => docHangTram = 'Một trăm'
 *              + TH soHangTram=2 => docHangTram = 'Hai trăm'
 *              + v.v...
 *         - đọc số hàng chục
 *              + TH soHangChuc=0 => docHangChuc = ''
 *              + TH soHangChuc=1 => docHangChuc = 'mười'
 *              + TH soHangChuc=2 => docHangChuc = 'hai mươi'
 *              + TH soHangChuc=3 => docHangChuc = 'ba mươi'
 *              + v.v...
 *         - đọc số hàng đơn vị
 *              + TH soHangDonVi=0 => docHangDonVi = ''
 *              + TH soHangDonVi=1 => docHangDonVi = 'một'
 *              + TH soHangDonVi=2 => docHangDonVi = 'hai'
 *              + TH soHangDonVi=3 => docHangDonVi = 'ba'
 *              + v.v...
 *              + TH soHangDonVi=5 => docHangDonVi = 'lăm'
 *              + TH soHangDonVi=6 => docHangDonVi = 'sáu'
 *              + v.v...
 * Output: xuất ra cách đọc = docHangTram + docHangChuc + docHangDonVi
 */
 var btnCachDoc = document.getElementById('btnCachDoc');

 btnCachDoc.onclick = function() {
     var so3ChuSo = document.getElementById('so3ChuSo').value;
     var soHangTram;
     var soHangChuc;
     var soHangDonVi;

     if ((so3ChuSo >=-99 && so3ChuSo<=99) || so3ChuSo >=1000 || so3ChuSo <= -1000) {
         document.getElementById('inCachDoc').innerHTML = so3ChuSo +' không phải số nguyên có 3 chữ số';
     } else {
         //lấy trị tuyệt đối của số nguyên có 3 chữ số
        var tTTso3ChuSo = Math.abs(so3ChuSo);

        // lấy chữ số hàng trăm, chục và đơn vị
        soHangTram = Math.floor(tTTso3ChuSo/100);
        soHangChuc = Math.floor((tTTso3ChuSo - soHangTram*100)/10);
        soHangDonVi = (tTTso3ChuSo - soHangTram*100)%10;

        // cách đọc số hàng trăm
        switch(soHangTram) {
            case 1:
                docHangTram = 'một trăm ';
                break;
            case 2:
                docHangTram = 'hai trăm ';
                break;
            case 3:
                docHangTram = 'ba trăm ';
                break;
            case 4:
                docHangTram = 'bốn trăm ';
                break;
            case 5:
                docHangTram = 'năm trăm ';
                break;
            case 6:
                docHangTram = 'sáu trăm ';
                break;
            case 7:
                docHangTram = 'bảy trăm ';
                break;
            case 8:
                docHangTram = 'tám trăm ';
                break;
            case 9:
                docHangTram = 'chín trăm ';
                break;
        }

        // cách đọc số hàng chục
        switch(soHangChuc) {
            case 0:
                docHangChuc = ' ';
                break;
            case 1:
                docHangChuc = 'mười ';
                break;
            case 2:
                docHangChuc = 'hai mươi ';
                break;
            case 3:
                docHangChuc = 'ba mươi ';
                break;
            case 4:
                docHangChuc = 'bốn mươi ';
                break;
            case 5:
                docHangChuc = 'năm mươi ';
                break;
            case 6:
                docHangChuc = 'sáu mươi ';
                break;
            case 7:
                docHangChuc = 'bảy mươi ';
                break;
            case 8:
                docHangChuc = 'tám mươi ';
                break;
            case 9:
                docHangChuc = 'chín mươi ';
                break;
        }

        // cách đọc số hàng đơn vị
        switch(soHangDonVi) {
            case 0:
                docHangDonVi = '';
                break;
            case 1:
                docHangDonVi = 'mốt';
                break;
            case 2:
                docHangDonVi = 'hai';
                break;
            case 3:
                docHangDonVi = 'ba';
                break;
            case 4:
                docHangDonVi = 'bốn';
                break;
            case 5:
                docHangDonVi = 'lăm';
                break;
            case 6:
                docHangDonVi = 'sáu';
                break;
            case 7:
                docHangDonVi = 'bảy';
                break;
            case 8:
                docHangDonVi = 'tám';
                break;
            case 9:
                docHangDonVi = 'chín';
                break;
        }
        // console.log(docHangTram);
        // console.log(docHangChuc);
        // console.log(docHangDonVi);
        if (so3ChuSo > 0) {
            document.getElementById('inCachDoc').innerHTML = docHangTram + docHangChuc + docHangDonVi;
        } else {
            document.getElementById('inCachDoc').innerHTML = 'âm ' + docHangTram + docHangChuc + docHangDonVi;
        }
     }
 }


 
//BÀI 4
/**
 * Input: Nhập vào tên và tọa độ x, y của cả 3 sinh viên
 * Handle: - tạo biến tenSV1, x1, y1, tenSV2, x2, y2, tenSV3, x3, y3, khoangCachSV1, khoangCachSV2, khoangCachSV3
 *         - tính khoảng cách từ nhà sinh viên đên trường tọa độ (0,0) = cách lấy căn bậc 2 của tổng bình phương 2 tọa độ x, y của nhà sinh viên.
 *         - so sánh khoảng cách từ nhà đến trường của 3 sinh viên để tìm nhà sinh vên xa nhất
 * Output: xuất ra tên sinh viên có nhà xa nhất
 */
var btnTinhNhaXaNhat = document.getElementById('btnTinhNhaXaNhat');

btnTinhNhaXaNhat.onclick = function() {
    var tenSV1 = document.getElementById('tenSV1').value;
    var x1 = document.getElementById('x1').value;
    var y1 = document.getElementById('y1').value;
    var tenSV2 = document.getElementById('tenSV2').value;
    var x2 = document.getElementById('x2').value;
    var y2 = document.getElementById('y2').value;
    var tenSV3 = document.getElementById('tenSV3').value;
    var x3 = document.getElementById('x3').value;
    var y3 = document.getElementById('y3').value;
    // console.log(x1+y1+'-'+x2+y2+'-'+x3+y3);

    var khoangCachSV1 = Math.sqrt(x1*x1 + y1*y1);
    var khoangCachSV2 = Math.sqrt(x2*x2 + y2*y2);
    var khoangCachSV3 = Math.sqrt(x3*x3 + y3*y3);
    // console.log(khoangCachSV1);
    // console.log(khoangCachSV2);
    // console.log(khoangCachSV3);

    if(khoangCachSV1>khoangCachSV2 && khoangCachSV1>khoangCachSV3) {
        document.getElementById('inSVNhaXaNhat').innerHTML = 'Sinh viên nhà xa nhất là: ' + tenSV1;
    } else if(khoangCachSV2>khoangCachSV1 && khoangCachSV2>khoangCachSV3) {
        document.getElementById('inSVNhaXaNhat').innerHTML = 'Sinh viên nhà xa nhất là: ' + tenSV2;
    } else {
        document.getElementById('inSVNhaXaNhat').innerHTML = 'Sinh viên nhà xa nhất là: ' + tenSV3;
    }

}

var tenSV1 = document.getElementById('tenSV1');
