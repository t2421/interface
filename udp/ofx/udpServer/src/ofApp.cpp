#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup() {

	ofSetLogLevel(OF_LOG_VERBOSE);
	udpConnection.Create();
	udpConnection.Bind(41234);
	udpConnection.SetNonBlocking(true);
}

//--------------------------------------------------------------
void ofApp::update() {
	char udpMessage[1000];
	udpConnection.Receive(udpMessage, 1000);
	string message = udpMessage;

	if (!message.empty()) {
		ofLogVerbose() << "message:" << message;
	}

}

//--------------------------------------------------------------
void ofApp::draw() {

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key) {

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key) {

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y) {

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button) {

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button) {

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button) {

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y) {

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y) {

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h) {

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg) {

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo) {

}
