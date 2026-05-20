const allHotels = [
  // Taj Group
  {
    id: 1,
    brand: 'Taj Group',
    name: 'Taj Rambagh, Sawai Man Mahal, Jai Mahal Palace, Taj Amer, Devi Ratn, Ramgarh Lodge',
    location: 'Jaipur',
    image: 'https://images.unsplash.com/photo-1542314831-c6a4d142104d?w=600&q=80'
  },
  {
    id: 2,
    brand: 'Taj Group',
    name: 'Taj Lake Palace, Taj Aravali Resort, Spa Taj Fateh Prakash Palace',
    location: 'Udaipur',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80'
  },
  {
    id: 3,
    brand: 'Taj Group',
    name: 'Umaid Bhawan Palace, Taj Hari Mahal',
    location: 'Jodhpur',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80'
  },
  {
    id: 4,
    brand: 'Taj Group',
    name: 'Taj Rishikesh resort, spa Anand Kashi by the ganges',
    location: 'Rishikesh',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'
  },
  {
    id: 5,
    brand: 'Taj Group',
    name: 'Taj Lake Palace, Taj Aravali Resort, Spa Taj Fateh Prakash Palace',
    location: 'Haridwar',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80'
  },
  
  // The Oberoi Group
  {
    id: 6,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Amarvilas- Agra',
    location: 'The Oberoi Amarvilas- Agra', // Screenshot shows "Travel To The Oberoi Amarvilas- Agra"
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80'
  },
  {
    id: 7,
    brand: 'The Oberoi Group',
    name: 'The Oberoi- Bengaluru',
    location: 'The Oberoi- Bengaluru',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c0d5e9af?w=600&q=80'
  },
  {
    id: 8,
    brand: 'The Oberoi Group',
    name: 'The Oberoi- Gurgaon',
    location: 'The Oberoi- Gurgaon',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80'
  },
  {
    id: 9,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Rajvilas- Jaipur',
    location: 'The Oberoi Rajvilas- Jaipur',
    image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&q=80'
  },
  {
    id: 10,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Vrinda- Luxuary Kerala...',
    location: 'The Oberoi Vrinda- Luxuary Kerala...',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80'
  },
  {
    id: 11,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Grand- Kolkata',
    location: 'The Oberoi Grand- Kolkata',
    image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=600&q=80'
  },
  {
    id: 12,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Grand- Mumbai',
    location: 'The Oberoi Grand- Mumbai',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80'
  },
  {
    id: 13,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Sukhvilas Spa Resort- New Chandigarh',
    location: 'The Oberoi Sukhvilas Spa Resort- New Chandigarh',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80'
  },
  {
    id: 14,
    brand: 'The Oberoi Group',
    name: 'The Oberoi- New Delhi',
    location: 'The Oberoi- New Delhi',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'
  },
  {
    id: 15,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Vanyavilas Wildlife Resort - Ranthambhore',
    location: 'The Oberoi Vanyavilas Wildlife Resort - Ranthambhore',
    image: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=600&q=80'
  },
  {
    id: 16,
    brand: 'The Oberoi Group',
    name: 'Wildflower Hall, An Oberoi Resort - Shimla',
    location: 'Wildflower Hall, An Oberoi Resort - Shimla',
    image: 'https://images.unsplash.com/photo-1542314831-c6a4d142104d?w=600&q=80'
  },
  {
    id: 17,
    brand: 'The Oberoi Group',
    name: 'The Oberoi Udaivilas - Udaipur',
    location: 'The Oberoi Udaivilas - Udaipur',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80'
  },
  
  // Antalya Rishikesh
 
  
  // SUJAN GROUP
  {
    id: 19,
    brand: 'SUJAN GROUP',
    name: 'SUJAN Sher Bagh',
    location: 'SUJAN Sher Bagh',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=80'
  },
  {
    id: 20,
    brand: 'SUJAN GROUP',
    name: 'SUJAN Jawai',
    location: 'SUJAN Jawai',
    image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&q=80'
  },
  {
    id: 21,
    brand: 'SUJAN GROUP',
    name: 'SUJAN The Serai',
    location: 'SUJAN The Serai',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80'
  },

  // LUXURY CAMPS IN JAISALMER
  {
    id: 22,
    brand: 'LUXURY CAMPS IN JAISALMER',
    name: 'Kanak Jaisalmer',
    location: 'Kanak Jaisalmer',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&q=80'
  },
  {
    id: 23,
    brand: 'LUXURY CAMPS IN JAISALMER',
    name: 'Kafila Desert Camp, Jaisalmer',
    location: 'Kafila Desert Camp, Jaisalmer',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80'
  },
  {
    id: 24,
    brand: 'LUXURY CAMPS IN JAISALMER',
    name: 'Tao\'s Lakhmana, Jaisalmer',
    location: 'Tao\'s Lakhmana, Jaisalmer',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80'
  }
];

function renderHotels() {
  const grid = document.getElementById('hotels-grid');
  
  // Group hotels by brand
  const grouped = {};
  allHotels.forEach(h => {
    if (!grouped[h.brand]) grouped[h.brand] = [];
    grouped[h.brand].push(h);
  });
  
  let html = '';
  
  // Order of sections
  const brandOrder = ['Taj Group', 'The Oberoi Group', 'Antalya Rishikesh', 'SUJAN GROUP', 'LUXURY CAMPS IN JAISALMER'];
  
  brandOrder.forEach(brand => {
    if (grouped[brand] && grouped[brand].length > 0) {
      html += `
        <div class="w-full mb-16">
          <h2 class="text-3xl font-bold text-center mb-8" style="color: #2D2D2D;">${brand}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${grouped[brand].map(h => `
              <div class="flex flex-col h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div class="relative w-full h-56">
                  <img src="${h.image}" class="w-full h-full object-cover" alt="${h.name}" loading="lazy">
                  <!-- Travel To Overlay -->
                  <div class="absolute bottom-4 left-4 z-10" style="text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">
                    <div class="text-white text-xs font-bold uppercase tracking-wider mb-0.5">Travel To</div>
                    <div class="text-yellow-400 text-sm font-semibold">${h.location}</div>
                  </div>
                  <!-- Gradient overlay for text readability -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                <div class="p-4 flex flex-col items-center flex-grow">
                  <h3 class="text-xs font-bold text-center text-gray-800 mb-4 px-2" style="font-family: 'Inter', sans-serif;">${h.name}</h3>
                  <div class="mt-auto pt-2">
                    <button onclick="openHotelModal(${h.id})" class="text-white text-sm font-semibold px-6 py-1.5 rounded" style="background-color: #f26f28; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#e35d15'" onmouseout="this.style.backgroundColor='#f26f28'">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  });

  grid.innerHTML = html;
}

function openHotelModal(id) {
  const hotel = allHotels.find(h => h.id === id);
  if(!hotel) return;

  const modal = document.getElementById('hotel-modal');
  const content = document.getElementById('modal-content-area');
  
  content.innerHTML = `
    <div class="p-6 md:p-8">
      <div class="flex justify-between items-start mb-6">
        <div>
          <h3 class="text-2xl font-bold font-heading text-navy-900">${hotel.name}</h3>
          <p class="text-teal-500 font-medium">${hotel.brand} - ${hotel.location}</p>
        </div>
        <button onclick="closeHotelModal()" class="text-gray-400 hover:text-gray-600">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="${hotel.image}" class="w-full rounded-2xl shadow-sm h-64 object-cover" alt="${hotel.name}">
          <div class="mt-6">
            <h4 class="font-bold text-gray-800 mb-3">About this Hotel</h4>
            <p class="text-sm text-gray-600 leading-relaxed mb-4">
              Experience the pinnacle of luxury at ${hotel.name}. Enjoy world-class amenities, stunning views, and unparalleled service in ${hotel.location}.
            </p>
          </div>
        </div>
        
        <div class="bg-gray-50 rounded-2xl p-6">
          <h4 class="font-bold text-navy-900 mb-4 text-lg">Quick Inquiry</h4>
          <form class="space-y-4" onsubmit="event.preventDefault(); submitHotelInquiry('${hotel.name}');">
            <div class="form-group"><label>Name</label><input type="text" class="form-control" required placeholder="Your name"></div>
            <div class="form-group"><label>Email</label><input type="email" class="form-control" required placeholder="your@email.com"></div>
            <div class="form-group"><label>Phone</label><input type="tel" class="form-control" required placeholder="+91 XXXXX XXXXX"></div>
            <div class="form-group"><label>Check-in / Check-out</label><input type="date" class="form-control" required onclick="this.showPicker()"></div>
            <div class="form-group"><label>Guests</label><select class="form-control"><option>2 Adults</option><option>2 Adults, 1 Child</option><option>Family</option><option>Group</option></select></div>
            <div class="form-group"><label>Message</label><textarea class="form-control" rows="2" placeholder="Any special requests?"></textarea></div>
            <button type="submit" class="btn-gold w-full justify-center mt-2">Send Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeHotelModal() {
  document.getElementById('hotel-modal').classList.remove('active');
  document.body.style.overflow = '';
}

function submitHotelInquiry(hotelName) {
  closeHotelModal();
  if (typeof showToast === 'function') {
    showToast('success', 'Inquiry Sent', `We will get back to you about ${hotelName} shortly.`);
  } else {
    alert(`Inquiry sent for ${hotelName}!`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderHotels();
  
  // Close modal on outside click
  const modal = document.getElementById('hotel-modal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeHotelModal();
    });
  }
});
