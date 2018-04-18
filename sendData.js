
// api_save_phrase(request_queries)
// PHRASE SAVE API
// example: endpoint=phrase&action=save&data=hello%20world






function addParams() {
    var url = "http://uptalk.tech/Uptalk/api.py?endpoint=phrase&action=save&data=";
    var x = document.getElementById("inputTextArea").value;
    var arr = x.split(" ");
    var params = arr.join("%20");

    return params;
    // http.open("GET", url, true);


    // http.send(params);
}



function sendNewUptalkPhrases(completionBlock) {
	console.log("Hello World");
    var phraseDataEndpoint = "http://uptalk.tech/Uptalk/api.py?endpoint=phrase&action=save&data=";
    var phraseDataEndpointWithParams = phraseDataEndpoint + addParams();

    console.log("sendNewUptalkPhrase phraseDataEndpoint = " + phraseDataEndpoint);

    $.get(phraseDataEndpoint, function(data) {
        completionBlock(data);
    }).fail(function(jqXHR, textStatus) {
        completionBlock(null);
    });
}


// window.onload = function() {
//     loadUptalkCharts();
// };