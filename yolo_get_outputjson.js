const request = require('request')
const JSONStream = require('JSONStream')

// YOLO:Real-Time Objection Dection output json
var YOLO_HOST = // ./darknet ip adress
var YOLO_PORT = 5000 // ./darknet json_port

function yolo_json_output(){
	console.log('yolo : ' + YOLO_HOST + " : " + YOLO_PORT)
	const stream = request('http://' + YOLO_HOST + ':' + YOLO_PORT).pipe(JSONStream.parse('$*'))
	stream.on('data', (data) => {
		var fid  = data.value.frame_id
		var objs = data.value.objects
		objs.forEach(v => {
			if (!(v.name === '')) {
				console.log('------------------------------');
				console.log('frame_id:',fid)
				console.log('name:',v.name)
				console.log('confidence:',v.confidence)
			}
		}); // end of objs.forEach
	}); // end of stream.on
}

yolo_json_output();
