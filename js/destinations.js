/* ========== DESTINATIONS PAGE ========== */
const destinations = [
  { id: 'kashmir', name: 'Kashmir', region: 'India', tagline: 'Paradise on Earth', image: 'https://media.gettyimages.com/id/173294490/photo/tourists-enjoying-in-snow-covered-landscape-jammu-and-kashmir-india.jpg?s=612x612&w=0&k=20&c=vrkqUKSMMwSfsyrMzfYjNZwYIO_GQyG-3oBXYode3vE=', bestTime: 'March – October', highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonmarg', 'Mughal Gardens'], tours: 3, startPrice: '₹18,999' },
  { id: 'goa', name: 'Goa', region: 'India', tagline: 'Sun, Sand & Soul', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80', bestTime: 'October – March', highlights: ['Baga Beach', 'Old Goa Churches', 'Dudhsagar Falls', 'Water Sports', 'Nightlife'], tours: 2, startPrice: '₹12,499' },
  { id: 'kerala', name: 'Kerala', region: 'India', tagline: 'God\'s Own Country', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', bestTime: 'September – March', highlights: ['Alleppey Backwaters', 'Munnar Hills', 'Thekkady Wildlife', 'Kovalam Beach', 'Ayurveda'], tours: 2, startPrice: '₹22,999' },
  { id: 'rajasthan', name: 'Rajasthan', region: 'India', tagline: 'Land of Royals', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80', bestTime: 'October – March', highlights: ['Jaipur Forts', 'Udaipur Lakes', 'Jaisalmer Desert', 'Jodhpur Blue City', 'Heritage Hotels'], tours: 2, startPrice: '₹24,999' },
  { id: 'ladakh', name: 'Ladakh', region: 'India', tagline: 'Roof of the World', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80', bestTime: 'June – September', highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La', 'Monasteries', 'Magnetic Hill'], tours: 1, startPrice: '₹26,999' },
  { id: 'bali', name: 'Bali', region: 'Southeast Asia', tagline: 'Island of the Gods', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', bestTime: 'April – October', highlights: ['Ubud Rice Terraces', 'Tanah Lot', 'Nusa Penida', 'Kintamani Volcano', 'Beach Clubs'], tours: 1, startPrice: '₹34,999' },
  { id: 'thailand', name: 'Thailand', region: 'Southeast Asia', tagline: 'Land of Smiles', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80', bestTime: 'November – February', highlights: ['Bangkok Temples', 'Pattaya Beaches', 'Phi Phi Islands', 'Floating Markets', 'Street Food'], tours: 1, startPrice: '₹29,999' },
  { id: 'maldives', name: 'Maldives', region: 'Indian Ocean', tagline: 'Tropical Paradise', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80', bestTime: 'November – April', highlights: ['Overwater Villas', 'Coral Reefs', 'Dolphin Watching', 'Water Sports', 'Private Islands'], tours: 1, startPrice: '₹54,999' },
  { id: 'europe', name: 'Europe', region: 'Europe', tagline: 'Art, Culture & Romance', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80', bestTime: 'April – October', highlights: ['Eiffel Tower', 'Swiss Alps', 'Venice Canals', 'Amsterdam', 'Rome Colosseum'], tours: 1, startPrice: '₹1,29,999' },
  { id: 'himachal', name: 'Himachal Pradesh', region: 'India', tagline: 'Adventure Awaits', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80', bestTime: 'March – June, Sep – Nov', highlights: ['Manali', 'Shimla', 'Dharamshala', 'Kasol', 'Spiti Valley'], tours: 2, startPrice: '₹14,999' },
];

function renderDestinations() {
  const grid = document.getElementById('dest-grid');
  grid.innerHTML = destinations.map((d, i) => `
    <div class="dest-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 100}" onclick="showDestDetail('${d.id}')">
      <img src="${d.image}" alt="${d.name}" loading="lazy">
      <div class="dest-overlay">
        <p class="text-amber-400 text-xs font-bold tracking-wider uppercase">${d.region}</p>
        <h3 class="text-white text-2xl font-heading font-bold">${d.name}</h3>
        <p class="text-white/60 text-sm">${d.tagline}</p>
        <div class="mt-3 flex items-center gap-3">
          <span class="text-xs text-white/50"><i class="fas fa-suitcase mr-1"></i>${d.tours} tours</span>
          <span class="text-xs text-amber-400 font-semibold">From ${d.startPrice}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function showDestDetail(id) {
  const d = destinations.find(x => x.id === id); if (!d) return;
  const section = document.getElementById('dest-detail');
  const waMsg = `Hi! I'm interested in a trip to ${d.name}. Please share packages and details.`;
  section.innerHTML = `
    <div class="max-w-5xl mx-auto px-4">
      <button onclick="hideDestDetail()" class="text-teal-600 font-semibold mb-6 hover:underline"><i class="fas fa-arrow-left mr-2"></i>Back to all destinations</button>
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div class="rounded-2xl overflow-hidden shadow-xl"><img src="${d.image}" alt="${d.name}" class="w-full h-80 object-cover"></div>
        <div>
          <p class="text-amber-500 font-semibold text-sm tracking-wider uppercase mb-2">${d.region}</p>
          <h2 class="font-heading text-4xl font-bold text-gray-900 mb-2">${d.name}</h2>
          <p class="text-xl text-gray-500 mb-6">${d.tagline}</p>
          <div class="flex items-center gap-6 mb-6">
            <div class="flex items-center gap-2 text-sm text-gray-600"><i class="fas fa-calendar-alt text-teal-500"></i><span><strong>Best Time:</strong> ${d.bestTime}</span></div>
            <div class="flex items-center gap-2 text-sm text-gray-600"><i class="fas fa-tag text-amber-500"></i><span><strong>From:</strong> ${d.startPrice}</span></div>
          </div>
          <h4 class="font-semibold text-gray-800 mb-3">Top Highlights</h4>
          <div class="flex flex-wrap gap-2 mb-8">${d.highlights.map(h => `<span class="bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-sm font-medium">${h}</span>`).join('')}</div>
          <div class="flex gap-3">
            <a href="${waLink(waMsg)}" target="_blank" class="btn-gold"><span>Plan This Trip</span><i class="fab fa-whatsapp text-lg"></i></a>
            <a href="packages.html" class="btn-teal"><span>View Packages</span><i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>`;
  section.classList.remove('hidden');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.showDestDetail = showDestDetail;

function hideDestDetail() {
  document.getElementById('dest-detail').classList.add('hidden');
  document.getElementById('dest-grid').scrollIntoView({ behavior: 'smooth' });
}
window.hideDestDetail = hideDestDetail;

document.addEventListener('DOMContentLoaded', renderDestinations);
