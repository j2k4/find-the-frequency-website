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
  const modal = document.createElement('div');
  modal.className = 'contact-modal';
  modal.innerHTML = `
    <div class="contact-modal-content">
      <span class="contact-modal-close">&times;</span>
      <h3>Contact About "${artworkTitle}"</h3>
      <p>Get in touch to inquire about this piece:</p>
      <div class="contact-options">
        <button class="contact-btn email-btn" onclick="openEmailContact('${artworkTitle}')">
          <i class="fas fa-envelope"></i>
          Send Email
        </button>
        <button class="contact-btn instagram-btn" onclick="openInstagram()">
          <i class="fab fa-instagram"></i>
          Instagram DM
        </button>
      </div>
      <div class="contact-info">
        <p><strong>Instagram:</strong> @glastronautilus</p>
        <p><strong>Email:</strong> findthefrequency@example.com</p>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  modal.style.display = 'block';
  
  // Close modal functionality
  modal.querySelector('.contact-modal-close').onclick = () => {
    document.body.removeChild(modal);
  };
  
  modal.onclick = (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  };
}

window.openEmailContact = function(artworkTitle) {
  const subject = `Inquiry about "${artworkTitle}"`;
  const body = `Hi! I'm interested in learning more about "${artworkTitle}". Could you please provide more details about pricing, availability, and shipping?

Thanks!`;
  
  window.location.href = `mailto:findthefrequency@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

window.openInstagram = function() {
  window.open('https://www.instagram.com/glastronautilus/', '_blank');
}

// About Modal
window.openAboutModal = function() {
  const modal = document.getElementById('about-modal');
  modal.style.display = 'block';
}

window.closeAboutModal = function() {
  const modal = document.getElementById('about-modal');
  modal.style.display = 'none';
}

// Contact Modal  
window.openContactModal = function() {
  const modal = document.createElement('div');
  modal.className = 'contact-modal';
  modal.innerHTML = `
    <div class="contact-modal-content">
      <span class="contact-modal-close">&times;</span>
      <h3>Get In Touch</h3>
      <p>Ready to add some frequency to your space? Let's connect!</p>
      <div class="contact-options">
        <button class="contact-btn email-btn" onclick="openGeneralEmail()">
          <i class="fas fa-envelope"></i>
          Send Email
        </button>
        <button class="contact-btn instagram-btn" onclick="openInstagram()">
          <i class="fab fa-instagram"></i>
          Instagram DM
        </button>
      </div>
      <div class="contact-info">
        <div class="contact-item">
          <span class="contact-label">Instagram:</span>
          <span>@glastronautilus</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">Email:</span>
          <span>findthefrequency@example.com</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">Location:</span>
          <span>Dallas, TX</span>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  modal.style.display = 'block';
  
  // Close modal functionality
  modal.querySelector('.contact-modal-close').onclick = () => {
    document.body.removeChild(modal);
  };
  
  modal.onclick = (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  };
}

window.openGeneralEmail = function() {
  const subject = 'Inquiry from Find the Frequency Website';
  const body = `Hi Kyle!

I found your art through the Find the Frequency website and would love to connect. 

[Please tell me what you're interested in - commissioning work, purchasing existing pieces, or just saying hello!]

Looking forward to hearing from you!`;
  
  window.location.href = `mailto:findthefrequency@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
    
    // Handle about modal
    const aboutModal = document.getElementById('about-modal');
    if (event.target === aboutModal) {
      aboutModal.style.display = 'none';
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
