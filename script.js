function generateQRCode() {
    const urlInput = document.getElementById("website-url").value;
    const qrCodeContainer = document.getElementById("qr-code");
    const downloadButton = document.getElementById("download-btn");

    if (urlInput) {
        // Clear previous QR code and show new QR code
        qrCodeContainer.innerHTML = '';

        // Generate QR code
        QRCode.toDataURL(urlInput, { errorCorrectionLevel: 'H' }, function (err, url) {
            if (err) {
                alert("Error generating QR code.");
                return;
            }

            // Set the QR code image to the container
            const qrImage = new Image();
            qrImage.src = url;
            qrImage.alt = "QR Code";
            qrCodeContainer.appendChild(qrImage);

            // Show download button
            downloadButton.style.display = 'inline-block';

            // Set up download functionality
            downloadButton.onclick = function () {
                const a = document.createElement('a');
                a.href = url;
                a.download = 'qr-code.png';
                a.click();
            };

            // Display QR code container
            qrCodeContainer.parentElement.style.display = 'block';
        });
    } else {
        alert("Please enter a valid website URL.");
    }
}
