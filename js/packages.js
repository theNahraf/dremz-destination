/* ========== PACKAGES PAGE ========== */
const allPackages = [
  {
    id: 1, title: 'Magical Kashmir', dest: 'Kashmir', image: 'https://media.gettyimages.com/id/173294490/photo/tourists-enjoying-in-snow-covered-landscape-jammu-and-kashmir-india.jpg?s=612x612&w=0&k=20&c=vrkqUKSMMwSfsyrMzfYjNZwYIO_GQyG-3oBXYode3vE=', duration: '5N/6D', price: '₹18,999', rating: 4.9, reviews: 234, highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley', 'Saffron Fields'], type: 'family', badge: 'Bestseller',
    itinerary: [{ day: 'Day 1', title: 'Arrival in Srinagar', desc: 'Airport pickup, check-in to luxury houseboat on Dal Lake. Evening shikara ride.' }, { day: 'Day 2', title: 'Gulmarg Excursion', desc: 'Drive to Gulmarg. Gondola ride to Phase 1 & 2. Snow activities.' }, { day: 'Day 3', title: 'Pahalgam Day Trip', desc: 'Visit Betaab Valley, Aru Valley, and Chandanwari. Pony ride available.' }, { day: 'Day 4', title: 'Sonmarg Adventure', desc: 'Drive to Sonmarg. Visit Thajiwas Glacier. Scenic mountain views.' }, { day: 'Day 5', title: 'Srinagar Local', desc: 'Mughal Gardens - Nishat, Shalimar, Chashme Shahi. Shopping at local markets.' }, { day: 'Day 6', title: 'Departure', desc: 'Breakfast. Airport transfer. Tour ends with beautiful memories.' }],
    inclusions: ['5-star houseboat & hotel stays', 'All meals (breakfast & dinner)', 'Private AC vehicle', 'Experienced local guide', 'Airport transfers', 'Shikara ride', 'Gondola tickets'],
    exclusions: ['Flights', 'Personal expenses', 'Travel insurance', 'Pony rides', 'Tips & gratuities']
  },
  {
    id: 2, title: 'Romantic Goa Getaway', dest: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80', duration: '4N/5D', price: '₹12,499', rating: 4.8, reviews: 189, highlights: ['Beach Hopping', 'Water Sports', 'Nightlife Tour', 'Old Goa Heritage'], type: 'honeymoon', badge: 'Limited Slots',
    itinerary: [{ day: 'Day 1', title: 'Arrival & North Goa', desc: 'Airport pickup. Check in to beach resort. Evening at Baga Beach.' }, { day: 'Day 2', title: 'North Goa Tour', desc: 'Aguada Fort, Vagator, Anjuna Flea Market, Chapora Fort.' }, { day: 'Day 3', title: 'South Goa Explore', desc: 'Colva Beach, Palolem Beach, Cabo de Rama Fort.' }, { day: 'Day 4', title: 'Adventure Day', desc: 'Water sports - parasailing, jet ski, banana ride. Dudhsagar Falls.' }, { day: 'Day 5', title: 'Departure', desc: 'Old Goa churches visit. Airport transfer.' }],
    inclusions: ['4-star resort stay', 'Daily breakfast', 'AC vehicle', 'Sightseeing', 'Airport transfers'],
    exclusions: ['Flights', 'Water sports fees', 'Meals other than breakfast', 'Personal expenses']
  },
  {
    id: 3, title: 'Kerala Backwaters Bliss', dest: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', duration: '6N/7D', price: '₹22,999', rating: 4.9, reviews: 312, highlights: ['Houseboat Stay', 'Munnar Tea Gardens', 'Alleppey Backwaters', 'Thekkady Wildlife'], type: 'family', badge: 'Top Rated',
    itinerary: [{ day: 'Day 1', title: 'Arrive Cochin', desc: 'Airport pickup. Fort Kochi tour - Chinese fishing nets, St. Francis Church.' }, { day: 'Day 2', title: 'Munnar', desc: 'Drive to Munnar. Tea plantations, Eravikulam National Park.' }, { day: 'Day 3', title: 'Munnar Sightseeing', desc: 'Mattupetty Dam, Echo Point, Tea Museum.' }, { day: 'Day 4', title: 'Thekkady', desc: 'Periyar Wildlife Sanctuary boat ride. Spice plantation visit.' }, { day: 'Day 5', title: 'Alleppey', desc: 'Drive to Alleppey. Board luxury houseboat. Backwater cruise.' }, { day: 'Day 6', title: 'Kovalam Beach', desc: 'Beach relaxation. Lighthouse visit. Ayurvedic massage.' }, { day: 'Day 7', title: 'Departure', desc: 'Trivandrum airport transfer.' }],
    inclusions: ['Premium hotels & houseboat', 'All meals on houseboat', 'AC vehicle', 'Boat rides', 'All entry tickets', 'Airport transfers'],
    exclusions: ['Flights', 'Ayurvedic treatments', 'Personal expenses', 'Tips']
  },
  {
    id: 4, title: 'Bali Adventure', dest: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', duration: '5N/6D', price: '₹34,999', rating: 4.7, reviews: 156, highlights: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Snorkeling', 'Kintamani Volcano'], type: 'adventure', badge: 'Limited Slots',
    itinerary: [{ day: 'Day 1', title: 'Arrival Bali', desc: 'Airport pickup. Seminyak beach sunset. Welcome dinner.' }, { day: 'Day 2', title: 'Ubud Cultural Tour', desc: 'Monkey Forest, Tegallalang Rice Terraces, Ubud Art Market.' }, { day: 'Day 3', title: 'Kintamani & Temples', desc: 'Mount Batur viewpoint, Tirta Empul Temple, coffee plantation.' }, { day: 'Day 4', title: 'Water Adventures', desc: 'Nusa Penida day trip - snorkeling, Kelingking Beach, Crystal Bay.' }, { day: 'Day 5', title: 'Beach & Temples', desc: 'Tanah Lot sunset. Uluwatu Temple. Kecak fire dance show.' }, { day: 'Day 6', title: 'Departure', desc: 'Last-minute shopping. Airport transfer.' }],
    inclusions: ['4-star villa stays', 'Daily breakfast', 'Private driver', 'All entry tickets', 'Nusa Penida tour', 'Airport transfers'],
    exclusions: ['Flights', 'Visa on arrival', 'Lunch & dinner', 'Water sports', 'Travel insurance']
  },
  {
    id: 5, title: 'Royal Rajasthan', dest: 'Rajasthan', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80', duration: '7N/8D', price: '₹24,999', rating: 4.8, reviews: 278, highlights: ['Jaipur Forts', 'Udaipur Lakes', 'Jaisalmer Desert Safari', 'Jodhpur Blue City'], type: 'group', badge: 'Bestseller',
    itinerary: [{ day: 'Day 1', title: 'Arrive Jaipur', desc: 'Pink City welcome. Check in to heritage hotel.' }, { day: 'Day 2', title: 'Jaipur Sightseeing', desc: 'Amber Fort, Hawa Mahal, City Palace, Jantar Mantar.' }, { day: 'Day 3', title: 'Jodhpur', desc: 'Drive to Blue City. Mehrangarh Fort, Jaswant Thada.' }, { day: 'Day 4', title: 'Jaisalmer', desc: 'Golden Fort, Patwon Ki Haveli, Gadisar Lake.' }, { day: 'Day 5', title: 'Desert Experience', desc: 'Sam Sand Dunes camel safari. Desert camp under stars.' }, { day: 'Day 6', title: 'Udaipur', desc: 'Drive to City of Lakes. Lake Pichola boat ride.' }, { day: 'Day 7', title: 'Udaipur Explore', desc: 'City Palace, Saheliyon ki Bari, Jagdish Temple.' }, { day: 'Day 8', title: 'Departure', desc: 'Airport transfer from Udaipur.' }],
    inclusions: ['Heritage hotel stays', 'Desert camp night', 'All breakfasts', 'AC vehicle', 'Camel safari', 'Boat rides', 'All entry tickets'],
    exclusions: ['Flights', 'Lunch & dinner', 'Personal expenses', 'Tips', 'Camera fees']
  },
  {
    id: 6, title: 'Maldives Luxury Escape', dest: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80', duration: '4N/5D', price: '₹54,999', rating: 5.0, reviews: 98, highlights: ['Overwater Villa', 'Coral Diving', 'Sunset Cruise', 'Private Beach Dinner'], type: 'luxury', badge: 'Premium',
    itinerary: [{ day: 'Day 1', title: 'Arrival in Paradise', desc: 'Speedboat transfer to resort. Check into overwater villa. Welcome cocktail.' }, { day: 'Day 2', title: 'Ocean Adventures', desc: 'Snorkeling at coral reef. Dolphin watching cruise. Spa session.' }, { day: 'Day 3', title: 'Island Hopping', desc: 'Visit local island. Water sports - jet ski, parasailing. Underwater restaurant dinner.' }, { day: 'Day 4', title: 'Romance & Relaxation', desc: 'Private beach breakfast. Couples spa. Sunset sailing. Beach bonfire dinner.' }, { day: 'Day 5', title: 'Departure', desc: 'Sunrise yoga. Farewell brunch. Speedboat & flight.' }],
    inclusions: ['Overwater villa', 'All meals (full board)', 'Speedboat transfers', 'Snorkeling gear', 'Sunset cruise', 'Couples spa', 'Water sports'],
    exclusions: ['Flights', 'Scuba diving certification', 'Premium alcohol', 'Tips', 'Travel insurance']
  },
  {
    id: 7, title: 'Ladakh Expedition', dest: 'Ladakh', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80', duration: '6N/7D', price: '₹26,999', rating: 4.8, reviews: 201, highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La Pass', 'Magnetic Hill'], type: 'adventure', badge: 'Trending',
    itinerary: [{ day: 'Day 1', title: 'Arrive Leh', desc: 'Fly into Leh. Acclimatization day. Explore Leh market.' }, { day: 'Day 2', title: 'Leh Local', desc: 'Shanti Stupa, Leh Palace, Hall of Fame, Magnetic Hill.' }, { day: 'Day 3', title: 'Nubra Valley', desc: 'Drive via Khardung La (18,380 ft). Diskit Monastery. Camel ride on sand dunes.' }, { day: 'Day 4', title: 'Pangong Lake', desc: 'Drive to Pangong Tso. Camp lakeside. Stunning blue waters.' }, { day: 'Day 5', title: 'Return to Leh', desc: 'Morning at Pangong. Drive back via Chang La pass.' }, { day: 'Day 6', title: 'Monasteries', desc: 'Hemis, Thiksey & Shey monasteries. Rancho School.' }, { day: 'Day 7', title: 'Departure', desc: 'Early morning flight from Leh.' }],
    inclusions: ['Hotels & camps', 'All meals', '4x4 vehicle', 'Inner Line Permits', 'Oxygen cylinder', 'All entry fees'],
    exclusions: ['Flights', 'Personal expenses', 'AMS medicine', 'Tips', 'Travel insurance']
  },
  {
    id: 8, title: 'Thailand Explorer', dest: 'Thailand', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80', duration: '5N/6D', price: '₹29,999', rating: 4.7, reviews: 167, highlights: ['Bangkok Temples', 'Pattaya Beaches', 'Phi Phi Islands', 'Floating Market'], type: 'family', badge: 'Popular',
    itinerary: [{ day: 'Day 1', title: 'Bangkok Arrival', desc: 'Airport pickup. Khao San Road night market.' }, { day: 'Day 2', title: 'Bangkok Temples', desc: 'Grand Palace, Wat Pho, Wat Arun. Chao Phraya river cruise.' }, { day: 'Day 3', title: 'Floating Market & Pattaya', desc: 'Damnoen Saduak Floating Market. Transfer to Pattaya.' }, { day: 'Day 4', title: 'Pattaya Fun', desc: 'Coral Island day trip. Alcazar Show. Walking Street.' }, { day: 'Day 5', title: 'Pattaya Activities', desc: 'Nong Nooch Garden, Art in Paradise, Sanctuary of Truth.' }, { day: 'Day 6', title: 'Departure', desc: 'Bangkok shopping. Airport transfer.' }],
    inclusions: ['4-star hotels', 'Daily breakfast', 'AC transfers', 'City tours', 'Coral Island trip', 'Airport transfers'],
    exclusions: ['Flights', 'Visa', 'Lunch & dinner', 'Shows entry', 'Personal expenses']
  },
  {
    id: 9, title: 'Europe Grand Tour', dest: 'Europe', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80', duration: '10N/11D', price: '₹1,29,999', rating: 4.9, reviews: 89, highlights: ['Paris Eiffel Tower', 'Swiss Alps', 'Rome Colosseum', 'Amsterdam Canals'], type: 'luxury', badge: 'Premium',
    itinerary: [{ day: 'Day 1-2', title: 'Paris', desc: 'Eiffel Tower, Louvre Museum, Seine River cruise, Montmartre.' }, { day: 'Day 3-4', title: 'Switzerland', desc: 'Lucerne, Mt. Titlis, Interlaken, Jungfraujoch.' }, { day: 'Day 5-6', title: 'Italy', desc: 'Rome - Colosseum, Vatican. Venice - Gondola ride, St. Mark\'s.' }, { day: 'Day 7-8', title: 'Austria & Germany', desc: 'Innsbruck, Neuschwanstein Castle, Munich.' }, { day: 'Day 9-10', title: 'Amsterdam & Brussels', desc: 'Canal cruise, Anne Frank House, Belgian chocolate tour.' }, { day: 'Day 11', title: 'Departure', desc: 'Amsterdam airport transfer.' }],
    inclusions: ['4-star hotels', 'Daily breakfast', 'Luxury coach', 'English guide', 'All entry tickets', 'City tours'],
    exclusions: ['Flights', 'Visa fees', 'Lunch & dinner', 'Travel insurance', 'Tips', 'Shopping']
  }
];

function renderPackages(filter = 'all') {
  const grid = document.getElementById('packages-grid');
  const noRes = document.getElementById('no-results');
  const filtered = filter === 'all' ? allPackages : allPackages.filter(p => p.type === filter);
  noRes.classList.toggle('hidden', filtered.length > 0);
  grid.innerHTML = filtered.map((pkg, i) => {
    const stars = '★'.repeat(Math.floor(pkg.rating));
    const waMsg = `Hi! I'm interested in the ${pkg.title} package (${pkg.duration}, ${pkg.price}/person). Please share details.`;
    const bc = pkg.badge === 'Limited Slots' ? 'from-red-500 to-red-600' : pkg.badge === 'Premium' ? 'from-amber-500 to-amber-600' : pkg.badge === 'Trending' ? 'from-purple-500 to-purple-600' : 'from-teal-500 to-teal-600';
    return `<div class="card" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
      <div class="card-image"><img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
        <div class="card-badge bg-gradient-to-r ${bc}">${pkg.badge}</div>
        <div class="card-price">${pkg.price}<span class="text-xs text-white/60 font-normal">/person</span></div>
      </div>
      <div class="p-5">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-teal-600 tracking-wider uppercase">${pkg.dest}</span>
          <span class="stars">${stars}</span>
        </div>
        <h3 class="font-heading text-xl font-bold text-gray-900 mb-2">${pkg.title}</h3>
        <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span><i class="far fa-clock mr-1"></i>${pkg.duration}</span>
          <span><i class="far fa-star mr-1"></i>${pkg.rating} (${pkg.reviews})</span>
        </div>
        <ul class="mb-4 space-y-1">${pkg.highlights.map(h => `<li class="text-sm text-gray-500 flex items-center gap-2"><i class="fas fa-check text-teal-500 text-xs"></i>${h}</li>`).join('')}</ul>
        <div class="flex gap-2">
          <a href="${waLink(waMsg)}" target="_blank" class="btn-gold flex-1 justify-center text-sm !py-2.5"><span>Book Now</span><i class="fab fa-whatsapp"></i></a>
          <button onclick="openPackageModal(${pkg.id})" class="btn-outline !text-gray-700 !border-gray-200 hover:!border-teal-500 hover:!text-teal-600 text-sm !py-2.5 px-4">Details</button>
        </div>
      </div></div>`;
  }).join('');
  if (typeof AOS !== 'undefined') AOS.refresh();
}

function openPackageModal(id) {
  const pkg = allPackages.find(p => p.id === id); if (!pkg) return;
  const modal = document.getElementById('package-modal');
  const body = document.getElementById('modal-body');
  const waMsg = `Hi! I'm interested in the ${pkg.title} package (${pkg.duration}, ${pkg.price}/person). Please share details and availability.`;
  body.innerHTML = `
    <div class="relative"><img src="${pkg.image}" alt="${pkg.title}" class="w-full h-64 sm:h-80 object-cover">
      <button onclick="closePackageModal()" class="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center text-xl hover:bg-black/70 backdrop-blur-sm">&times;</button>
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h2 class="text-white font-heading text-2xl sm:text-3xl font-bold">${pkg.title}</h2>
        <div class="flex items-center gap-4 mt-2 text-white/70 text-sm"><span><i class="far fa-clock mr-1"></i>${pkg.duration}</span><span class="stars">★★★★★</span><span>${pkg.rating} (${pkg.reviews} reviews)</span></div>
      </div>
    </div>
    <div class="p-6 sm:p-8">
      <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div><span class="text-3xl font-bold text-amber-500">${pkg.price}</span><span class="text-gray-400">/person</span></div>
        <a href="${waLink(waMsg)}" target="_blank" class="btn-gold"><span>Book via WhatsApp</span><i class="fab fa-whatsapp text-lg"></i></a>
      </div>
      <h3 class="font-heading text-xl font-bold mb-4 text-gray-900">Day-by-Day Itinerary</h3>
      <div class="space-y-3 mb-8">${pkg.itinerary.map((d, i) => `
        <div class="accordion-item ${i === 0 ? 'open' : ''}">
          <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
            <span><span class="text-teal-600 font-bold mr-2">${d.day}</span>${d.title}</span><i class="fas fa-chevron-down text-gray-400"></i>
          </div>
          <div class="accordion-body"><p class="text-gray-600 text-sm">${d.desc}</p></div>
        </div>`).join('')}</div>
      <div class="grid sm:grid-cols-2 gap-6 mb-8">
        <div><h4 class="font-bold text-green-700 mb-3"><i class="fas fa-check-circle mr-2"></i>Inclusions</h4>
          <ul class="space-y-2">${pkg.inclusions.map(i => `<li class="text-sm text-gray-600 flex items-start gap-2"><i class="fas fa-check text-green-500 mt-1 text-xs"></i>${i}</li>`).join('')}</ul>
        </div>
        <div><h4 class="font-bold text-red-600 mb-3"><i class="fas fa-times-circle mr-2"></i>Exclusions</h4>
          <ul class="space-y-2">${pkg.exclusions.map(i => `<li class="text-sm text-gray-600 flex items-start gap-2"><i class="fas fa-times text-red-400 mt-1 text-xs"></i>${i}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="bg-gray-50 rounded-2xl p-6">
        <h4 class="font-heading text-lg font-bold mb-4">Quick Inquiry</h4>
        <form onsubmit="submitInquiry(event,'${pkg.title}')">
          <div class="grid sm:grid-cols-2 gap-4 mb-4">
            <div class="form-group"><label>Name</label><input type="text" class="form-control" required placeholder="Your name"></div>
            <div class="form-group"><label>Email</label><input type="email" class="form-control" required placeholder="your@email.com"></div>
            <div class="form-group"><label>Phone</label><input type="tel" class="form-control" required placeholder="+91 XXXXX XXXXX"></div>
            <div class="form-group"><label>Travel Dates</label><input type="date" class="form-control" required></div>
            <div class="form-group"><label>Travelers</label><select class="form-control"><option>2 People</option><option>3-5</option><option>6-10</option><option>10+</option></select></div>
            <div class="form-group"><label>Message</label><textarea class="form-control" rows="2" placeholder="Any special requests?"></textarea></div>
          </div>
          <button type="submit" class="btn-gold w-full justify-center"><span>Send Inquiry</span><i class="fas fa-paper-plane"></i></button>
        </form>
      </div>
    </div>`;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
window.openPackageModal = openPackageModal;

function closePackageModal() {
  document.getElementById('package-modal').classList.remove('active');
  document.body.style.overflow = '';
}
window.closePackageModal = closePackageModal;

function submitInquiry(e, pkgTitle) {
  e.preventDefault();
  showToast('success', 'Inquiry Sent!', 'Our travel expert will reach out within 2 hours!');
  closePackageModal();
}
window.submitInquiry = submitInquiry;

document.addEventListener('DOMContentLoaded', () => {
  renderPackages();
  document.getElementById('filter-bar').addEventListener('click', e => {
    const btn = e.target.closest('.filter-tab'); if (!btn) return;
    document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPackages(btn.dataset.filter);
  });
  document.getElementById('package-modal').addEventListener('click', e => {
    if (e.target.id === 'package-modal') closePackageModal();
  });
});
