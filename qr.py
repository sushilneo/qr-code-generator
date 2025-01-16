import qrcode

# Ask the user for the website URL.
website_url = input("Entesr the website URL: ")

# Generate the QR code for the URL
qr_code = qrcode.make(website_url)

# Save the QR code as an image file
qr_code.save("website_qr_code.png")

print("QR code generated and saved as 'website_qr_code.png'.")
