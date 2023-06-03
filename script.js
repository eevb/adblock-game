function updateLocalStorage() {
    var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    var currentDate = new Date().toLocaleString("en-CA", options);
    localStorage.setItem("date", currentDate);
  }
  
  setInterval(updateLocalStorage, 1000);
  
// level1-----------------------------------------------------------
// Get references to the button and input elements
function level1() {
    var inputElement = document.querySelector('.input1');
    var text = inputElement.value;
    var placeholder = inputElement.getAttribute('placeholder');

    localStorage.setItem(placeholder, text);
}

// level2-----------------------------------------------------------
function level2() {
    var inputElement = document.querySelector('.input2');
    var text = inputElement.value;
    var placeholder = inputElement.getAttribute('placeholder');

    localStorage.setItem(placeholder, text);
}




// level3------------------------------------------------------------
function level3() {
    var inputElement = document.querySelector('.input3');
    var text = inputElement.value;
    var placeholder = inputElement.getAttribute('placeholder');

    localStorage.setItem(placeholder, text);
}


const element = document.querySelector('.level3 > div');
setInterval(() => {
    // Generate a random id
    const randomId = 'a' + Math.floor(Math.random() * 10000);

    // Set the new id to the element
    element.id = randomId;
}, 1000);

// level4------------------------------------------------------------
function level4() {
    var inputElement = document.querySelector('.input4');
    var text = inputElement.value;
    var placeholder = inputElement.getAttribute('placeholder');

    localStorage.setItem(placeholder, text);
}





// answer downloader------------------------------------------------

function handleDownload() {
    const localStorageContent = Object.entries(localStorage).reduce(
        (content, [key, value]) => ({ ...content, [key]: value }),
        {}
    );

    // Create a data URI for downloading the content
    const dataURI = `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(localStorageContent)
    )}`;

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = dataURI;
    link.download = 'Answers.json';

    // Trigger a click event on the link to initiate the download
    link.click();

    // Clean up the temporary link
    link.remove();
}
