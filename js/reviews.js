/* ========== REVIEWS PAGE — Web3Forms Integration ========== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('review-form');
  if (!form) return;

  // Star Rating Logic
  const stars = document.querySelectorAll('.star-rating i');
  const ratingInput = document.getElementById('rating-input');
  let currentRating = 5;

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const value = parseInt(star.getAttribute('data-value'));
      currentRating = value;
      ratingInput.value = value;
      
      stars.forEach(s => {
        if (parseInt(s.getAttribute('data-value')) <= value) {
          s.classList.remove('text-gray-300');
          s.classList.add('text-amber-500');
        } else {
          s.classList.remove('text-amber-500');
          s.classList.add('text-gray-300');
        }
      });
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('review-submit');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i><span>Submitting...</span>';
    submitBtn.disabled = true;

    const formData = new FormData(form);
    const rawData = Object.fromEntries(formData);

    // Create a beautifully formatted object for the email layout
    const data = {
      access_key: rawData.access_key,
      subject: "New Customer Review Submitted — Dremz Destination",
      from_name: "Dremz Destination Website",
      botcheck: rawData.botcheck,
      "Customer Name": rawData.name,
      "Email Address": rawData.email,
      "Tour/Destination": rawData.destination || 'Not provided',
      "Star Rating": rawData.rating + ' / 5 Stars',
      "Review Message": rawData.message
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        showToast('success', 'Review Submitted! ⭐', 'Thank you so much for your feedback!');
        form.reset();
        currentRating = 5;
        stars.forEach(s => {
          s.classList.remove('text-gray-300');
          s.classList.add('text-amber-500');
        });
        
        // Construct a clean WhatsApp message using the formatted data
        const waMessage = `*New Customer Review* ⭐
        
*Name:* ${data['Customer Name']}
*Rating:* ${data['Star Rating']}
*Destination:* ${data['Tour/Destination']}
*Review:* ${data['Review Message']}

This review has also been sent to your email.`;

        // SILENT WHATSAPP NOTIFICATION USING CALLMEBOT
        // To make this work, the owner must fill in their API key below.
        const CALLMEBOT_API_KEY = "YOUR_CALLMEBOT_API_KEY"; // <-- Add your key here
        const OWNER_PHONE = "918178390282"; // Your exact WhatsApp number
        
        if (CALLMEBOT_API_KEY !== "YOUR_CALLMEBOT_API_KEY") {
          const url = `https://api.callmebot.com/whatsapp.php?phone=${OWNER_PHONE}&text=${encodeURIComponent(waMessage)}&apikey=${CALLMEBOT_API_KEY}`;
          // Fire and forget fetch request
          fetch(url, { mode: 'no-cors' }).catch(err => console.error("WhatsApp notification failed", err));
        }

      } else {
        showToast('error', 'Oops!', 'Something went wrong submitting your review.');
      }
    } catch (error) {
      showToast('error', 'Connection Error', 'Please try submitting again later.');
    }

    submitBtn.innerHTML = originalHTML;
    submitBtn.disabled = false;
  });
});
