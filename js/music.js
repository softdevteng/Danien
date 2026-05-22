document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const progressFill = document.getElementById('progressFill');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const volumeSlider = document.getElementById('volumeSlider');

    // Play button
    playBtn.addEventListener('click', function() {
        audio.play();
        playBtn.style.opacity = '0.5';
        pauseBtn.style.opacity = '1';
    });

    // Pause button
    pauseBtn.addEventListener('click', function() {
        audio.pause();
        pauseBtn.style.opacity = '0.5';
        playBtn.style.opacity = '1';
    });

    // Update duration when metadata loads
    audio.addEventListener('loadedmetadata', function() {
        durationEl.textContent = formatTime(audio.duration);
    });

    // Update progress bar and current time
    audio.addEventListener('timeupdate', function() {
        currentTimeEl.textContent = formatTime(audio.currentTime);
        const percent = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = percent + '%';
    });

    // Volume control
    volumeSlider.addEventListener('input', function() {
        audio.volume = this.value / 100;
    });

    // Click on progress bar to seek
    document.querySelector('.progress-bar').addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });

    // Format time helper
    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
});
