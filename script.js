// Handle Upload button click
document.getElementById('upload-btn').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

// Handle Camera button click (opens camera)
document.getElementById('camera-btn').addEventListener('click', function() {
    alert('Camera functionality will be added here!');
    // You can use getUserMedia API here for camera access
});

// Handle file upload
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // Process the uploaded image or send it to backend for ML model
        alert(`Image ${file.name} uploaded successfully!`);
    }
});
