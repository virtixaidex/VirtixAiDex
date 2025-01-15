// Fungsi untuk mengkonversi waktu dari detik ke format jam:menit:detik
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes}:${remainingSeconds}`;
}

module.exports = { formatTime };
