function MusicVisualizer(obj) {
	// body...
	this.source = null;

	this.count = 0;
    
    this.analyser = MusicVisualizer.ac.createAnalyser();
    this.size = obj.size = this.size * 2 ;

}

MusicVisualizer.ac = new(window.AudioContext || window.webkitAudioContext);
