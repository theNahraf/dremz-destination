/* ========== GALLERY PAGE ========== */
const galleryPhotos = [
  { src:'https://images.unsplash.com/photo-1597074866923-dc0589150a53?w=800&q=80', thumb:'https://images.unsplash.com/photo-1597074866923-dc0589150a53?w=400&q=80', caption:'Dal Lake, Kashmir', cat:'india' },
  { src:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', thumb:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80', caption:'Sunset at Goa Beach', cat:'india' },
  { src:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', thumb:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80', caption:'Kerala Backwaters', cat:'india' },
  { src:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', thumb:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80', caption:'Bali Rice Terraces', cat:'southeast-asia' },
  { src:'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', thumb:'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80', caption:'Maldives Overwater Villa', cat:'honeymoon' },
  { src:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80', thumb:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80', caption:'Taj Mahal, India', cat:'india' },
  { src:'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80', thumb:'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=80', caption:'Venice, Italy', cat:'europe' },
  { src:'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80', thumb:'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&q=80', caption:'Thai Temple', cat:'southeast-asia' },
  { src:'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', thumb:'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80', caption:'Pangong Lake, Ladakh', cat:'adventure' },
  { src:'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80', thumb:'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80', caption:'Eiffel Tower, Paris', cat:'europe' },
  { src:'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80', thumb:'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80', caption:'Himachal Mountains', cat:'adventure' },
  { src:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', thumb:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80', caption:'Mountain Sunrise', cat:'adventure' },
  { src:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80', thumb:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80', caption:'Tropical Beach Swing', cat:'honeymoon' },
  { src:'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80', thumb:'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&q=80', caption:'Mountain Trek', cat:'adventure' },
  { src:'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80', thumb:'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400&q=80', caption:'Beach Paradise', cat:'honeymoon' },
  { src:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80', thumb:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80', caption:'Island Aerial View', cat:'honeymoon' },
  { src:'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80', thumb:'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80', caption:'Lake & Mountains', cat:'europe' },
  { src:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80', thumb:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80', caption:'Golden Sunset Valley', cat:'adventure' },
  { src:'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=800&q=80', thumb:'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=400&q=80', caption:'Maldives Crystal Water', cat:'honeymoon' },
  { src:'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80', thumb:'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&q=80', caption:'Dubai Skyline', cat:'adventure' },
];

let lightbox;

function renderGallery(filter='all') {
  const grid = document.getElementById('gallery-grid');
  const filtered = filter === 'all' ? galleryPhotos : galleryPhotos.filter(p => p.cat === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="masonry-item">
      <a href="${p.src}" class="glightbox" data-gallery="gallery1" data-title="${p.caption}">
        <img src="${p.thumb}" alt="${p.caption}" loading="lazy">
      </a>
    </div>
  `).join('');

  if(lightbox) lightbox.destroy();
  lightbox = GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });
}

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  document.getElementById('gallery-filters').addEventListener('click', e => {
    const btn = e.target.closest('.filter-tab'); if(!btn) return;
    document.querySelectorAll('#gallery-filters .filter-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.filter);
  });
});
