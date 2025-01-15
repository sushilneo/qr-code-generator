import qrcode

# Ask the user to input a website URL
website_url = input("Enter the website URL to generate the QR code: ")

# Generate the QR code
qr = qrcode.QRCode(
    version=1,  # controls the size of the QR code (1 is the smallest)
    error_correction=qrcode.constants.ERROR_CORRECT_L,  # error correction level
    box_size=10,  # size of each box in the QR code grid
    border=4,  # width of the border (in boxes)
)

# Add the website URL to the QR code
qr.add_data(website_url)
qr.make(fit=True)

# Create an image from the QR code
img = qr.make_image(fill="black", back_color="white")

# Save the QR code image as a PNG file
img.save("website_qr_code.png")

# Inform the user that the QR code has been saved
print("QR code has been generated and saved as 'website_qr_code.png'.")
