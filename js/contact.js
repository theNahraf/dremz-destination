/* ========== CONTACT PAGE — Web3Forms Integration ========== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('contact-submit');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i><span>Sending...</span>';
    submitBtn.disabled = true;

    const formData = new FormData(form);
    const rawData = Object.fromEntries(formData);

    // Create a beautifully formatted object for the email layout
    const data = {
      access_key: rawData.access_key,
      subject: rawData.subject,
      from_name: rawData.from_name,
      botcheck: rawData.botcheck,
      "Full Name": rawData.name,
      "Email Address": rawData.email,
      "Phone Number": rawData.phone,
      "Destination": rawData.destination || 'Not selected',
      "Travel Dates": rawData.travel_dates || 'Not selected',
      "Number of Travelers": rawData.travelers || 'Not selected',
      "Message": rawData.message || 'No message provided'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        showToast('success', 'Message Sent! ✈️', 'Our travel expert will reach out within 2 hours!');
        form.reset();
      } else {
        showToast('error', 'Oops!', 'Something went wrong. Please try WhatsApp instead.');
      }
    } catch (error) {
      showToast('error', 'Connection Error', 'Please try WhatsApp or call us directly.');
    }

    submitBtn.innerHTML = originalHTML;
    submitBtn.disabled = false;
  });
});
