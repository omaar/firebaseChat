var firebase = new Firebase('https://chat-omaar.firebaseio.com/');
		$('#message').keypress(function(e){
			if (e.keyCode == 13) {
				var name = $('#name').val();
				var text = $('#message').val();
				$('#message').text('');
				firebase.push({
					name: name, text:text
				});
			}
		});

		firebase.on('child_added', function(snapshot){
			var message = snapshot.val();
			displayMessages(message.name, message.text);
		});

function displayMessages(name, text){
	$('<div>').text(text).prepend($('<span class="label label-info">').text(name + ': ')).appendTo($('#messages'));
	$('#messages')[0].scrollTop = $('#messages')[0].scrollHeight;
};