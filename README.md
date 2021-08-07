# get-yolo-recognize-result
Get yolo object detection results using node.js  
Perform object detection with darknet and retrieve the results in node.js (json)

### Prerequisites
* ./darknet command must be executable.
* GPU is recommended to run darknet command.
* Use the RTP protocol for data acquisition.
* The operation was confirmed by JesonNano.
* Confirmed：yolov3,tinyyolov3,yolov4,tinyyolov4
```
JetsonNano Version:# R32 (release), REVISION: 5.1, GCID: 27362550, BOARD: t210ref, EABI: aarch64, DATE: Wed May 19 18:07:59 UTC 2021
```
* Object detection results (json) are done via http

### Install  
* install request module and JSONstream module
```
npm install
```

### Usage
* node.js is . /darknet and run it after starting object detection.
#### RTP output
* OBS is used to output video via RTP protocol.
* The details are not described here, but please DL it according to the OS you use.(DL:https://obsproject.com/download)
* The settings are configured as follows.
![OBS_Settings](https://user-images.githubusercontent.com/33836132/128598900-4ec94a66-0d53-47aa-b427-408537e60da3.jpg)
#### RTP input 
* Input the RTP and start darknet(ex:JetsonNano)
* Manual: https://github.com/AlexeyAB/darknet/wiki)
```
example:
./darknet detector demo cfg/coco.data cfg/yolov4-tiny.cfg weight/yolov4-tiny.weights rtp://@239.1.1.5:8004 -json_port 5000
```
* When an object is detected, "JSON-stream sent." is output.
#### Node.js
```
node yolo_get_outputjson.js
```
* Outputs frame_id, name, and confidence when the variable is empty. Add more output targets as needed.
