

function check()
{
    if (!doesConnectionExist()){
        // Code lưu trữ thông tin 
        // Code thông báo người dùng 
        // ..
        function doesConnectionExist() {
            var xhr = new XMLHttpRequest();
            var file = "http://127.0.0.1:5500/index.html";
            var randomNum = Math.round(Math.random() * 10000);
         
            xhr.open('HEAD', file + "?rand=" + randomNum, false);
         
            try {
                xhr.send();
         
                if (xhr.status >= 200 && xhr.status < 304) {
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                return false;
            }
        }
    }
}
 
setTimeout(function(){
    check();
}, 1000000);