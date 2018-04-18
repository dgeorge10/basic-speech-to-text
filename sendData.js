
// api_save_phrase(request_queries)
// PHRASE SAVE API
// example: endpoint=phrase&action=save&data=hello%20world


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

    $(document).onload(function(){
    		$("submitButton").click(function(){
          var saveData = $('inputTextArea').val();
          console.log(saveData);
        		$.ajax({
        			type: 'GET',
        			url: 'http://uptalk.tech/Uptalk/api.py?endpoint=phrase&action=save',
              data: { }
        			success: function(result){

            			$("inputTextArea").html(result);
        		}});
    		});
		});
}


// window.onload = function() {
//     loadUptalkCharts();
// };
