
        document.getElementById('copyNumber').addEventListener('click', function() {
          // Copying the contact number to the clipboard
          const phoneNumber = '1234567890'; // Replace with your actual phone number
          navigator.clipboard.writeText(phoneNumber)
            .then(() => alert('Phone number copied to clipboard'))
            .catch(err => console.error('Failed to copy:', err));
        });
    
        document.getElementById('sendEmail').addEventListener('click', function() {
          // Opening Gmail to compose an email
          window.location.href = 'mailto:recipient@example.com'; // Replace with your actual email address
        });
    document.getElementById('fb').addEventListener('click', function() {
          // Opening Gmail to compose an email
          window.location.href = 'https://www.facebook.com/originsite'; // Replace with your actual email address
        });