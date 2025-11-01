import './style.css'

// Load and display artworks
async function loadArtworks() {
  try {
    const response = await fetch('/artworks.json');
    const artworks = await response.json();
    displayArtworks(artworks);
  } catch (error) {
    console.error('Error loading artworks:', error);
    // Show placeholder message if artworks.json fails to load
    document.getElementById('gallery-grid').innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
        <p style="color: var(--text-secondary);">Loading artworks...</p>
      </div>
    `;
  }
}

// Display artworks in the gallery grid
function displayArtworks(artworks) {
  const galleryGrid = document.getElementById('gallery-grid');
  
  if (artworks.length === 0) {
    galleryGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
        <p style="color: var(--text-secondary);">No artworks available at the moment.</p>
      </div>
    `;
    return;
  }

  galleryGrid.innerHTML = artworks.map(artwork => `
    <div class="artwork-card" onclick="openArtworkModal('${artwork.id}')">
      <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image" 
           onerror="this.src='/images/placeholder.jpg'">
      <div class="artwork-info">
        <h3 class="artwork-title">${artwork.title}</h3>
        <p class="artwork-medium">${artwork.medium}</p>
        <p class="artwork-dimensions">${artwork.dimensions}</p>
        <p class="artwork-price">${artwork.price}</p>
      </div>
    </div>
  `).join('');
}

// Open artwork modal with details
window.openArtworkModal = async function(artworkId) {
  try {
    const response = await fetch('/artworks.json');
    const artworks = await response.json();
    const artwork = artworks.find(art => art.id === artworkId);
    
    if (!artwork) return;

    const modal = document.getElementById('artwork-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
      <div class="modal-artwork">
        <div>
          <img src="${artwork.image}" alt="${artwork.title}" class="modal-image" 
               onerror="this.src='/images/placeholder.jpg'">
        </div>
        <div class="modal-details">
          <h3>${artwork.title}</h3>
          <div class="artwork-meta">
            <p><strong>Medium:</strong> ${artwork.medium}</p>
            <p><strong>Dimensions:</strong> ${artwork.dimensions}</p>
            <p><strong>Status:</strong> ${artwork.available ? 'Available' : 'Sold'}</p>
          </div>
          <div class="artwork-description">
            <p>${artwork.description}</p>
          </div>
          <p class="artwork-price">${artwork.price}</p>
          ${artwork.available ? `
            <button class="btn-primary" onclick="contactAboutArtwork('${artwork.title}')">
              Inquire About This Piece
            </button>
          ` : `
            <button class="btn-primary" disabled style="opacity: 0.5;">
              Sold
            </button>
          `}
        </div>
      </div>
    `;
    
    modal.style.display = 'block';
  } catch (error) {
    console.error('Error loading artwork details:', error);
  }
}

// Contact about artwork
window.contactAboutArtwork = function(artworkTitle) {
  const subject = `Inquiry about "${artworkTitle}"`;
  const body = `Hi! I'm interested in learning more about "${artworkTitle}". Could you please provide more details?`;
  
  // Open email client
  window.location.href = `mailto:artist@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Close modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('artwork-modal');
  const closeBtn = document.querySelector('.modal-close');
  
  // Close modal when clicking the X
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Load artworks when page loads
  loadArtworks();
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
