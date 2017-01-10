/**
 * Created by hasee on 2016/12/29.
 */


let Tools = {
    getUserID:function () {
        let id = window.sessionStorage.getItem("userID")||window.localStorage.getItem("userID");
        if(!id){
            window.localStorage = "#/login"
        }
        return id
    },
    setUserID:function(id){
        window.localStorage.setItem("userID",id);
    },
    setUsernameID:function(id){
        window.sessionStorage.setItem("userID",id);
    }
}

export  {Tools}
