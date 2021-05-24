function handleSubmit(event) {
    event.preventDefault()
    const formdata = createFormData();
    
    

    // check what text was put into the form field
    let formUrl = document.getElementById('url').value;
    
    if(Client.checkForUrl(formUrl)){
       console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/test', {headers: {formUrl}})
        .then(res => res.json())
        .then((json) => {
            console.log(json);
            formdata.append("key", json["body"]["key"]);
            formdata.append("url", formUrl);
            formdata.append("lang", "en");
            json['body']=formdata;
            fetch("https://api.meaningcloud.com/sentiment-2.1", json)
              .then(response => response.json())
              .then((json) => {
                console.log(json);
                document.getElementById('agreement').innerHTML = json.agreement;
                document.getElementById('confidence').innerHTML = json.confidence;
                document.getElementById('irony').innerHTML = json.irony;
                document.getElementById('model').innerHTML = json.model;
                document.getElementById('score').innerHTML = json.score_tag;
                document.getElementById('subjectivity').innerHTML = json.subjectivity;
              })
              .catch(error => console.log('error', error));

        })
       }else{
           alert("Url is invalid");
       }
    

    
}

function createFormData(){
    return new FormData();
}

export { createFormData,
    handleSubmit }
