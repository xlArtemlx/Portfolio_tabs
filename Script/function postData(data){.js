function sendForm(elem){
    elem.addEventListener('submit',function(){
        event.preventDefault();
        elem.appendChild(statusMessage);
        let formData = new FormData(elem);

        function postData(form){
            return new Promise (function (resolve,reject){
                let request = new XMLHttpRequest();
                request.open('POST','serever.php');
                request.setRequestHeader('Content-type','aplication/json; charset=utf-8');
                
            
    
                request.onreadystatechange = function(){
                    if(request.readyState < 4){
                        resolve();
                        
                    } else if(request.readyState === 4 && request.readyState === 200) {
                        resolve();
                        
                    } else {
                        reject();
                    }
                };
                request.send(form);
    
            })
    
            function clearInput() {
                for(let i = 0; i < input.length;i++){
                    input[i]= '';
                };
            }  
        };

        postData(formData)
                        .then(() => statusMessage.innerHTML = message.loading)
                        .then(() => statusMessage.innerHTML = message.success)
                        .catch(() => statusMessage.innerHTML = message.failure)
                        .then(clearInput)

    })
    sendForm(form);
    sendForm(formBottom)
}

   

