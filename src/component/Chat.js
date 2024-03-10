import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const customStyle={
    textAlign: "center",
    marginTop: "20px",
    color:"aqua",
    border:"1px solid black",
    textTransform: "captalize"
}
export class Chat extends Component {
    componentDidMount() {
       
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"b75a22077e75c6b4670efc067bcfc993","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    }

    render() {
        return (
            <div>
                <button type="button" class="btn btn-outline-info btn-lg">STUDENT ASSISTANT</button>
            </div>
        );
    }
}

export default Chat;
