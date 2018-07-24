document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR object 
    const xhr = new XMLHttpRequest();

    //OPEN 
    //GET request- basically means u want to read the file or url
    xhr.open('GET', 'data.txt', true);

    //optional - used for spinners / loader
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);
    }
    xhr.onload = function() {
            console.log('READYSTATE', xhr.readyState);
            if (this.status === 200) {

                document.getElementById('output').innerHTML = `<h1> ${this.responseText} </h1>`
                console.log(this.responseText);

            }
        }
        // *****************
        // old way of doing using onreadyStateChange
        // *****************
        // xhr.onreadystatechange = function() {
        //     console.log('READYSTATE', xhr.readyState);
        //     if (this.status === 200 && this.readyState === 4) {
        //         console.log(this.responseText);
        //     }
        // }

    xhr.onerror = function() {
        console.log('Request Error..');

    }
    xhr.send();

    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready


    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}