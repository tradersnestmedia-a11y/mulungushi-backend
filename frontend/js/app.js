
// ============ CLEAN FAB BUTTON JAVASCRIPT ============
(function() {
    // Initialize when DOM is ready
    function initFab() {
        const fabBtn = document.getElementById('mobileFabBtn');
        const fabMenu = document.getElementById('mobileFabMenu');
        
        if (!fabBtn) {
            console.log('FAB button element not found');
            return;
        }
        
        console.log('FAB button found - initializing');
        
        // Toggle menu on button click
        fabBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            fabMenu.classList.toggle('show');
            console.log('FAB toggled');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (fabMenu && !fabMenu.contains(e.target) && e.target !== fabBtn) {
                fabMenu.classList.remove('show');
            }
        });
        
        // Handle menu item clicks
        const menuItems = document.querySelectorAll('.fab-menu-item');
        menuItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                const page = this.getAttribute('data-page');
                
                if (page && typeof showPage === 'function') {
                    showPage(page);
                }
                
                fabMenu.classList.remove('show');
            });
        });
        
        // Handle admin button
        const adminItem = document.getElementById('fabMenuAdmin');
        if (adminItem) {
            adminItem.addEventListener('click', function(e) {
                e.stopPropagation();
                const loginModal = document.getElementById('loginModal');
                if (loginModal) {
                    loginModal.classList.add('show');
                }
                fabMenu.classList.remove('show');
            });
        }
    }
    
    // Run when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFab);
    } else {
        initFab();
    }
})();


// ============ FAB BUTTON - MOBILE ONLY ============
(function() {
    // Wait for page to load
    window.addEventListener('load', function() {
        const fabBtn = document.getElementById('floatingBtn');
        const fabMenu = document.getElementById('floatingMenu');
        
        if (!fabBtn) {
            console.log('FAB button not found');
            return;
        }
        
        console.log('FAB button found - mobile only');
        
        // Toggle menu on button click
        fabBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (fabMenu.style.display === 'none' || fabMenu.style.display === '') {
                fabMenu.style.display = 'flex';
            } else {
                fabMenu.style.display = 'none';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (fabMenu && !fabMenu.contains(e.target) && e.target !== fabBtn) {
                fabMenu.style.display = 'none';
            }
        });
        
        // Handle menu items
        document.querySelectorAll('.float-item').forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                const page = this.getAttribute('data-page');
                if (page && typeof showPage === 'function') {
                    showPage(page);
                }
                fabMenu.style.display = 'none';
            });
        });
        
        // Handle admin button
        const adminBtn = document.getElementById('floatAdminBtn');
        if (adminBtn) {
            adminBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const loginModal = document.getElementById('loginModal');
                if (loginModal) {
                    loginModal.classList.add('show');
                }
                fabMenu.style.display = 'none';
            });
        }
        
        // Initially hide menu
        if (fabMenu) {
            fabMenu.style.display = 'none';
        }
    });
})();


// ============ WORKING FAB BUTTON ============
(function() {
    // Set up FAB button after page loads
    window.addEventListener('load', function() {
        console.log('Setting up floating button...');
        
        const floatingBtn = document.getElementById('floatingBtn');
        const floatingMenu = document.getElementById('floatingMenu');
        
        if (!floatingBtn) {
            console.log('Floating button not found!');
            return;
        }
        
        console.log('Floating button found!');
        
        // Toggle menu on button click
        floatingBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (floatingMenu.style.display === 'none' || floatingMenu.style.display === '') {
                floatingMenu.style.display = 'flex';
                console.log('Menu opened');
            } else {
                floatingMenu.style.display = 'none';
                console.log('Menu closed');
            }
        });
        
        // Close menu when clicking outside
        document.body.addEventListener('click', function(e) {
            if (floatingMenu && !floatingMenu.contains(e.target) && e.target !== floatingBtn) {
                floatingMenu.style.display = 'none';
            }
        });
        
        // Handle menu item clicks
        const menuItems = document.querySelectorAll('.float-item');
        menuItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                const page = this.getAttribute('data-page');
                if (page && typeof showPage === 'function') {
                    showPage(page);
                }
                floatingMenu.style.display = 'none';
            });
        });
        
        // Handle admin button
        const adminFloatBtn = document.getElementById('floatAdminBtn');
        if (adminFloatBtn) {
            adminFloatBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const loginModal = document.getElementById('loginModal');
                if (loginModal) {
                    loginModal.classList.add('show');
                }
                floatingMenu.style.display = 'none';
            });
        }
        
        // Initially hide menu
        if (floatingMenu) {
            floatingMenu.style.display = 'none';
        }
        
        console.log('Floating button ready!');
    });
})();


// ============ SIMPLE FAB BUTTON - WORKING ============
(function() {
    // Wait for page to load
    setTimeout(function() {
        console.log('Setting up FAB button...');
        
        const fabBtn = document.getElementById('mobileFabBtn');
        const fabMenu = document.getElementById('mobileFabMenu');
        
        if (!fabBtn) {
            console.log('FAB button not found');
            return;
        }
        
        console.log('FAB button found - setting up click handler');
        
        // Toggle menu on button click
        fabBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (fabMenu.style.display === 'none' || fabMenu.style.display === '') {
                fabMenu.style.display = 'flex';
                console.log('FAB menu opened');
            } else {
                fabMenu.style.display = 'none';
                console.log('FAB menu closed');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (fabMenu && !fabMenu.contains(e.target) && e.target !== fabBtn) {
                fabMenu.style.display = 'none';
            }
        });
        
        // Handle menu item clicks
        const menuItems = document.querySelectorAll('.fab-mobile-item');
        menuItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                const page = this.getAttribute('data-page');
                if (page && typeof showPage === 'function') {
                    showPage(page);
                }
                fabMenu.style.display = 'none';
            });
        });
        
        // Handle admin button
        const adminItem = document.getElementById('fabMobileAdmin');
        if (adminItem) {
            adminItem.addEventListener('click', function(e) {
                e.stopPropagation();
                const loginModal = document.getElementById('loginModal');
                if (loginModal) {
                    loginModal.classList.add('show');
                }
                fabMenu.style.display = 'none';
            });
        }
        
        // Initially hide menu
        if (fabMenu) {
            fabMenu.style.display = 'none';
        }
        
        console.log('FAB button setup complete');
    }, 500);
})();


// ============ FAB BUTTON - MOBILE NAVIGATION ============
(function() {
    // Wait for page to load
    window.addEventListener('load', function() {
        console.log('Checking FAB button...');
        
        const fabContainer = document.getElementById('fabContainer');
        const fabMainBtn = document.getElementById('fabMainBtn');
        
        if (!fabContainer) {
            console.log('FAB container not found');
            return;
        }
        
        console.log('FAB container found');
        
        // Toggle menu on button click
        if (fabMainBtn) {
            fabMainBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                fabContainer.classList.toggle('open');
                console.log('FAB toggled:', fabContainer.classList.contains('open'));
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (fabContainer && !fabContainer.contains(e.target)) {
                fabContainer.classList.remove('open');
            }
        });
        
        // Handle navigation items
        document.querySelectorAll('.fab-item[data-page]').forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                const page = this.getAttribute('data-page');
                if (typeof showPage === 'function') {
                    showPage(page);
                }
                fabContainer.classList.remove('open');
            });
        });
        
        // Handle admin button
        const fabAdminBtn = document.getElementById('fabAdminItem');
        if (fabAdminBtn) {
            fabAdminBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const loginModal = document.getElementById('loginModal');
                if (loginModal) {
                    loginModal.classList.add('show');
                }
                fabContainer.classList.remove('open');
            });
        }
    });
})();


// ============ FAB BUTTON JAVASCRIPT ============
(function() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFab);
    } else {
        initFab();
    }
    
    function initFab() {
        const fabContainer = document.getElementById('fabContainer');
        const fabMainBtn = document.getElementById('fabMainBtn');
        
        if (!fabContainer || !fabMainBtn) {
            console.log('FAB elements not found');
            return;
        }
        
        console.log('FAB initialized');
        
        // Toggle menu on button click
        fabMainBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            fabContainer.classList.toggle('open');
            console.log('FAB toggled:', fabContainer.classList.contains('open'));
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!fabContainer.contains(e.target)) {
                fabContainer.classList.remove('open');
            }
        });
        
        // Handle FAB item clicks
        const fabItems = document.querySelectorAll('.fab-item');
        fabItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                const page = this.getAttribute('data-page');
                
                if (page === 'home' && typeof showPage === 'function') {
                    showPage('home');
                } else if (page === 'about' && typeof showPage === 'function') {
                    showPage('about');
                } else if (page === 'team' && typeof showPage === 'function') {
                    showPage('team');
                }
                
                fabContainer.classList.remove('open');
            });
        });
        
        // Handle Admin button
        const fabAdminItem = document.getElementById('fabAdminItem');
        if (fabAdminItem) {
            fabAdminItem.addEventListener('click', function(e) {
                e.stopPropagation();
                const loginModal = document.getElementById('loginModal');
                if (loginModal) {
                    loginModal.classList.add('show');
                }
                fabContainer.classList.remove('open');
            });
        }
    }
})();


// ============ FAB BUTTON FUNCTIONALITY ============
document.addEventListener('DOMContentLoaded', function() {
    // Get FAB elements
    const fabContainer = document.getElementById('fab');
    const fabBtn = document.querySelector('.fab-btn');
    
    // Toggle FAB menu on button click
    if (fabBtn) {
        fabBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            fabContainer.classList.toggle('open');
        });
    }
    
    // Close FAB when clicking outside
    document.addEventListener('click', function(e) {
        if (fabContainer && !fabContainer.contains(e.target)) {
            fabContainer.classList.remove('open');
        }
    });
    
    // FAB Admin button - opens login modal
    const fabAdminBtn = document.getElementById('fabAdminBtn');
    if (fabAdminBtn) {
        fabAdminBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const loginModal = document.getElementById('loginModal');
            if (loginModal) {
                loginModal.classList.add('show');
            }
            fabContainer.classList.remove('open');
        });
    }
    
    // FAB navigation buttons
    const fabOptions = document.querySelectorAll('.fab-opt[data-page]');
    fabOptions.forEach(opt => {
        opt.addEventListener('click', function(e) {
            const page = this.getAttribute('data-page');
            if (page && typeof showPage === 'function') {
                showPage(page);
            }
            fabContainer.classList.remove('open');
        });
    });
});


// ============ FAB BUTTON - SIMPLE FIX ============
// FAB menu toggle
const fabContainer = document.getElementById('fab');
const fabButton = document.getElementById('fabBtn');

if (fabButton) {
    fabButton.addEventListener('click', function(e) {
        e.stopPropagation();
        fabContainer.classList.toggle('open');
    });
}

// Close FAB when clicking outside
document.addEventListener('click', function() {
    if (fabContainer) {
        fabContainer.classList.remove('open');
    }
});

// FAB Admin button
const fabAdminBtn = document.getElementById('fabAdminBtn');
if (fabAdminBtn) {
    fabAdminBtn.addEventListener('click', function() {
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.classList.add('show');
        }
        fabContainer.classList.remove('open');
    });
}
// ============ CONFIGURATION ============
const API_URL = "https://mulungushi-backend-api.onrender.com/api";

let locations = [];
let events = [];
let teamMembers = [];
let aboutInfo = {};
let settings = {};
let isAdmin = false;
let currentSlide = 0;
let slideInterval;

// ============ API CALLS ============
async function apiCall(endpoint, method = 'GET', data = null) {
    const options = { method: method, headers: { 'Content-Type': 'application/json' } };
    if (data && (method === 'POST' || method === 'PUT')) options.body = JSON.stringify(data);
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, options);
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Request failed');
        return result;
    } catch (error) {
        showToast(error.message, true);
        throw error;
    }
}

// ============ LOAD DATA ============
async function loadData() {
    showToast('Loading data...');
    try {
        const [locs, evts, team, about, setts] = await Promise.all([
            apiCall('locations'), apiCall('events'), apiCall('team'), apiCall('about'), apiCall('settings')
        ]);
        locations = locs || [];
        events = evts || [];
        teamMembers = team || [];
        aboutInfo = about || {};
        settings = setts || {};
        
        localStorage.setItem('mu_data', JSON.stringify({ locations, events, teamMembers, aboutInfo, settings }));
        renderAll();
        showToast(`Loaded ${locations.length} locations, ${events.length} events`);
    } catch (error) {
        const cached = localStorage.getItem('mu_data');
        if (cached) {
            const data = JSON.parse(cached);
            locations = data.locations || [];
            events = data.events || [];
            teamMembers = data.teamMembers || [];
            aboutInfo = data.aboutInfo || {};
            settings = data.settings || {};
            renderAll();
            showToast('Using cached data', true);
        }
    }
}

// ============ CRUD OPERATIONS ============
async function addLocation(data) { await apiCall('locations', 'POST', data); await loadData(); showToast('Location added'); }
async function updateLocation(id, data) { await apiCall(`locations/${id}`, 'PUT', data); await loadData(); showToast('Location updated'); }
async function deleteLocation(id) { if(confirm('Delete this location?')){ await apiCall(`locations/${id}`, 'DELETE'); await loadData(); showToast('Location deleted'); } }
async function addEvent(data) { await apiCall('events', 'POST', data); await loadData(); showToast('Event added'); }
async function updateEvent(id, data) { await apiCall(`events/${id}`, 'PUT', data); await loadData(); showToast('Event updated'); }
async function deleteEvent(id) { if(confirm('Delete this event?')){ await apiCall(`events/${id}`, 'DELETE'); await loadData(); showToast('Event deleted'); } }
async function addTeamMember(data) { await apiCall('team', 'POST', data); await loadData(); showToast('Team member added'); }
async function updateTeamMember(id, data) { await apiCall(`team/${id}`, 'PUT', data); await loadData(); showToast('Team member updated'); }
async function deleteTeamMember(id) { if(confirm('Delete this team member?')){ await apiCall(`team/${id}`, 'DELETE'); await loadData(); showToast('Team member deleted'); } }
async function updateAbout(data) { await apiCall('about', 'PUT', data); await loadData(); showToast('About updated'); }
async function updateSettings(data) { await apiCall('settings', 'PUT', data); await loadData(); showToast('Settings saved'); }
async function adminLogin(password) { const result = await apiCall('login', 'POST', { password }); return result.success; }

function showToast(msg, isError = false) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = msg;
    if (isError) toast.style.background = '#e74c3c';
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// ============ RENDER FUNCTIONS ============
function renderAll() {
    renderGallery();
    renderSlideshow();
    startSlideshow();
    updateSiteSettings();
    renderSearchResults(locations);
    if (locations.length > 0) selectLocation(locations[0]);
    if (isAdmin) loadAdminData();
}

function renderGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    gallery.innerHTML = locations.map(loc => `
        <div class="gallery-item" data-id="${loc.id}">
            <img src="${loc.thumbnail}" alt="${loc.name}">
            <div class="gallery-info">
                <span class="gallery-badge">${loc.type || 'Location'}</span>
                <h3>${loc.name}</h3>
                <p>${(loc.description || '').substring(0, 80)}</p>
                <div class="gallery-actions">
                    <button class="btn-view" onclick="openLightbox('${loc.id}')">View Image</button>
                    <button class="btn-dir" onclick="getDirections('${loc.id}')">Directions</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderSearchResults(results) {
    const container = document.getElementById('searchResults');
    if (!container) return;
    container.innerHTML = results.map(loc => `
        <div class="search-item" onclick="selectLocationById('${loc.id}')">
            <h4>${loc.name}</h4>
            <small>${loc.type || 'Location'}</small>
        </div>
    `).join('');
}

function renderSlideshow() {
    const container = document.getElementById('slideshow');
    if (!container) return;
    if (events.length === 0) {
        container.innerHTML = '<div class="slide active"><div class="slide-content">No events scheduled</div></div>';
        return;
    }
    container.innerHTML = events.map((ev, i) => `
        <div class="slide ${i === currentSlide ? 'active' : ''}">
            <img src="${ev.image}" alt="${ev.title}">
            <div class="slide-content">
                <h3>${ev.title}</h3>
                <div style="color:#e74c3c; margin-bottom:5px;">📅 ${new Date(ev.event_date || ev.date).toLocaleDateString()}</div>
                <p>${ev.description}</p>
                ${ev.location ? `<div>📍 ${ev.location}</div>` : ''}
            </div>
        </div>
    `).join('');
    renderDots();
}

function renderDots() {
    const container = document.getElementById('slideDots');
    if (!container) return;
    container.innerHTML = events.map((_, i) => `<span class="dot ${i === currentSlide ? 'active' : ''}" onclick="goToSlide(${i})"></span>`).join('');
}

function startSlideshow() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        if (events.length > 0) {
            currentSlide = (currentSlide + 1) % events.length;
            renderSlideshow();
        }
    }, 5000);
}

function nextSlide() { currentSlide = (currentSlide + 1) % events.length; renderSlideshow(); }
function prevSlide() { currentSlide = (currentSlide - 1 + events.length) % events.length; renderSlideshow(); }
function goToSlide(i) { currentSlide = i; renderSlideshow(); }

function updateSiteSettings() {
    const logo = document.getElementById('siteLogo');
    if (logo && settings.logo) logo.src = settings.logo;
    const title = document.querySelector('.brand h1');
    if (title && settings.title) title.textContent = settings.title;
}

function selectLocationById(id) {
    const loc = locations.find(l => l.id === id);
    if (loc) selectLocation(loc);
}

function selectLocation(loc) {
    const mapFrame = document.getElementById('mapFrame');
    if (mapFrame) {
        mapFrame.src = loc.lat && loc.lng ? 
            `https://www.google.com/maps?q=${loc.lat},${loc.lng}&output=embed` : 
            `https://www.google.com/maps?q=${encodeURIComponent(loc.name)}&output=embed`;
    }
    const dirLink = document.getElementById('directionsLink');
    if (dirLink && loc.lat && loc.lng) {
        dirLink.href = `https://www.google.com/maps/dir/Current+Location/${loc.lat},${loc.lng}`;
    }
    const previewImg = document.getElementById('previewImg');
    if (previewImg) previewImg.src = loc.image || loc.thumbnail;
    const previewName = document.getElementById('previewName');
    if (previewName) previewName.textContent = loc.name;
    const previewDesc = document.getElementById('previewDesc');
    if (previewDesc) previewDesc.textContent = loc.description || 'No description';
    const previewType = document.getElementById('previewType');
    if (previewType) previewType.textContent = loc.type || 'Location';
}

function openLightbox(id) {
    const loc = locations.find(l => l.id === id);
    if (loc) {
        document.getElementById('lightboxImg').src = loc.image || loc.thumbnail;
        document.getElementById('lightboxCaption').innerHTML = `<h3>${loc.name}</h3><p>${loc.description}</p>`;
        document.getElementById('lightboxModal').classList.add('show');
    }
}

function getDirections(id) {
    const loc = locations.find(l => l.id === id);
    if (loc && loc.lat && loc.lng) {
        window.open(`https://www.google.com/maps/dir/Current+Location/${loc.lat},${loc.lng}`, '_blank');
    }
}

// ============ PAGE NAVIGATION ============
function showPage(page) {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('teamPage').style.display = 'none';
    
    if (page === 'home') {
        document.getElementById('homePage').style.display = 'block';
        renderGallery();
        renderSearchResults(locations);
    } else if (page === 'about') {
        document.getElementById('aboutPage').style.display = 'block';
        renderAboutPage();
    } else if (page === 'team') {
        document.getElementById('teamPage').style.display = 'block';
        renderTeamPage();
    }
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.nav-btn[data-page="${page}"]`)?.classList.add('active');
}


// Enhanced About Page Content
function renderAboutPage() {
    const container = document.getElementById('aboutContent');
    if (container) {
        container.innerHTML = `
            <div style="background: linear-gradient(135deg, #1a5490, #2b6cb0); color: white; padding: 40px; border-radius: 12px; margin-bottom: 30px; text-align: center;">
                <i class="fas fa-graduation-cap" style="font-size: 60px; margin-bottom: 20px;"></i>
                <h1 style="font-size: 32px; margin-bottom: 10px;">Mulungushi University Route Finder</h1>
                <p style="font-size: 18px;">Smart Campus Navigation & Event Management System</p>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h2><i class="fas fa-users"></i> For Students</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 15px;">
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <i class="fas fa-map-marked-alt" style="font-size: 30px; color: #1a5490;"></i>
                        <h3>Find Your Way</h3>
                        <p>Never get lost on campus. Search for any building, lecture hall, library, or hostel and get instant directions.</p>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <i class="fas fa-calendar-alt" style="font-size: 30px; color: #1a5490;"></i>
                        <h3>Stay Updated</h3>
                        <p>View upcoming events, symposiums, and important dates all in one place. Never miss an important campus activity.</p>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <i class="fas fa-clock" style="font-size: 30px; color: #1a5490;"></i>
                        <h3>Save Time</h3>
                        <p>Quickly locate department offices, administrative blocks, and student services without wandering around campus.</p>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h2><i class="fas fa-chalkboard-teacher"></i> For Lecturers & Staff</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 15px;">
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <i class="fas fa-chalkboard" style="font-size: 30px; color: #1a5490;"></i>
                        <h3>Manage Events</h3>
                        <p>Easily add and manage academic events, research symposiums, and departmental meetings through the admin panel.</p>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <i class="fas fa-directions" style="font-size: 30px; color: #1a5490;"></i>
                        <h3>Guide Students</h3>
                        <p>Share the system with new students during orientation to help them navigate the campus independently.</p>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <i class="fas fa-bell" style="font-size: 30px; color: #1a5490;"></i>
                        <h3>Announcements</h3>
                        <p>Broadcast important announcements and schedule changes to all students through the events system.</p>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h2><i class="fas fa-microchip"></i> Technology & Innovation</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 15px;">
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <i class="fas fa-database" style="font-size: 30px; color: #1a5490;"></i>
                        <h3>Modern Stack</h3>
                        <p>Built with PostgreSQL, Node.js, Express, and vanilla JavaScript for optimal performance and reliability.</p>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <i class="fas fa-mobile-alt" style="font-size: 30px; color: #1a5490;"></i>
                        <h3>Mobile Ready</h3>
                        <p>Fully responsive design with dedicated mobile navigation menu works on smartphones, tablets, and desktops.</p>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <i class="fas fa-cloud-upload-alt" style="font-size: 30px; color: #1a5490;"></i>
                        <h3>Cloud Deployed</h3>
                        <p>Hosted on Render with PostgreSQL database for reliable 24/7 access from anywhere on campus or remotely.</p>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <i class="fas fa-shield-alt" style="font-size: 30px; color: #1a5490;"></i>
                        <h3>Secure Admin</h3>
                        <p>Password-protected admin panel allows authorized staff to manage locations, events, and team information securely.</p>
                    </div>
                </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #1a5490, #2b6cb0); color: white; padding: 30px; border-radius: 12px; text-align: center;">
                <i class="fas fa-university" style="font-size: 50px; margin-bottom: 15px;"></i>
                <h3>Mulungushi University - Leading Digital Transformation</h3>
                <p>This system represents our commitment to leveraging technology for improved campus experience, reduced navigation stress, and enhanced communication between students, faculty, and administration.</p>
                <hr style="margin: 20px 0; border-color: rgba(255,255,255,0.3);">
                <p><i class="fas fa-envelope"></i> IT Support: itsupport@mulungushi.ac.zm | <i class="fas fa-phone"></i> +260 123 456 789</p>
            </div>
        `;
    }
}

function renderTeamPage() {
    const container = document.getElementById('teamGrid');
    if (container) {
        container.innerHTML = teamMembers.map(m => `
            <div class="team-card">
                <img src="${m.image}" alt="${m.name}">
                <div class="team-card-content">
                    <h3>${m.name}</h3>
                    <div class="team-role">${m.role}</div>
                    ${m.bio ? `<p>${m.bio}</p>` : ''}
                    ${m.email ? `<small>📧 ${m.email}</small>` : ''}
                </div>
            </div>
        `).join('');
    }
}

// ============ ADMIN FUNCTIONS ============

// ============ FIXED ADMIN MODE FUNCTIONS ============
function showAdminMode() {
    console.log('showAdminMode called');
    
    const adminPanel = document.getElementById('adminPanel');
    const homePage = document.getElementById('homePage');
    const aboutPage = document.getElementById('aboutPage');
    const teamPage = document.getElementById('teamPage');
    const fabElement = document.getElementById('mobileFabButton');
    const adminBtn = document.getElementById('adminBtn');
    
    if (adminPanel) adminPanel.style.display = 'block';
    if (homePage) homePage.style.display = 'none';
    if (aboutPage) aboutPage.style.display = 'none';
    if (teamPage) teamPage.style.display = 'none';
    if (fabElement) fabElement.style.display = 'none';
    if (adminBtn) adminBtn.style.display = 'none';
    
    isAdmin = true;
    
    if (typeof loadAdminData === 'function') {
        loadAdminData();
    }
}

function showPublicMode() {
    console.log('showPublicMode called');
    
    const adminPanel = document.getElementById('adminPanel');
    const homePage = document.getElementById('homePage');
    const adminBtn = document.getElementById('adminBtn');
    const fabElement = document.getElementById('mobileFabButton');
    
    if (adminPanel) adminPanel.style.display = 'none';
    if (adminBtn) adminBtn.style.display = 'inline-flex';
    if (homePage) homePage.style.display = 'block';
    
    isAdmin = false;
    
    // Show FAB only on mobile
    if (window.innerWidth <= 992 && fabElement) {
        fabElement.style.display = 'block';
    }
    
    if (typeof showPage === 'function') {
        showPage('home');
    }
    
    if (typeof loadData === 'function') {
        loadData();
    }
}


function loadAdminData() {
    document.getElementById('totalLocations').textContent = locations.length;
    document.getElementById('totalEvents').textContent = events.length;
    document.getElementById('totalTeam').textContent = teamMembers.length;
    renderLocationsList();
    renderEventsList();
    renderTeamList();
    document.getElementById('aboutText').value = aboutInfo.content || '';
    document.getElementById('aboutImageUrl').value = aboutInfo.image || '';
    document.getElementById('contactText').value = aboutInfo.contact || '';
    document.getElementById('siteLogoUrl').value = settings.logo || '';
    document.getElementById('siteTitle').value = settings.title || '';
}

function renderLocationsList() {
    const container = document.getElementById('locationsList');
    if (!container) return;
    container.innerHTML = locations.map(loc => `
        <div class="list-item">
            <div><strong>${loc.name}</strong><br><small>${loc.type}</small></div>
            <div class="item-actions" style="position:relative">
                <button class="three-dots" onclick="toggleDropdown(this)">⋮</button>
                <div class="dropdown">
                    <button onclick="openEditModal('${loc.id}', 'location')">✏️ Edit</button>
                    <button onclick="deleteLocation('${loc.id}')">🗑️ Delete</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderEventsList() {
    const container = document.getElementById('eventsList');
    if (!container) return;
    container.innerHTML = events.map(ev => `
        <div class="list-item">
            <div><strong>${ev.title}</strong><br><small>${new Date(ev.event_date || ev.date).toLocaleDateString()}</small></div>
            <div class="item-actions" style="position:relative">
                <button class="three-dots" onclick="toggleDropdown(this)">⋮</button>
                <div class="dropdown">
                    <button onclick="openEditModal('${ev.id}', 'event')">✏️ Edit</button>
                    <button onclick="deleteEvent('${ev.id}')">🗑️ Delete</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTeamList() {
    const container = document.getElementById('teamList');
    if (!container) return;
    container.innerHTML = teamMembers.map(m => `
        <div class="list-item">
            <div><strong>${m.name}</strong><br><small>${m.role}</small></div>
            <div class="item-actions" style="position:relative">
                <button class="three-dots" onclick="toggleDropdown(this)">⋮</button>
                <div class="dropdown">
                    <button onclick="openEditModal('${m.id}', 'team')">✏️ Edit</button>
                    <button onclick="deleteTeamMember('${m.id}')">🗑️ Delete</button>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleDropdown(btn) {
    const dropdown = btn.nextElementSibling;
    document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== dropdown) d.classList.remove('show');
    });
    dropdown.classList.toggle('show');
}

function openEditModal(id, type) {
    const modal = document.getElementById('editModal');
    const title = document.getElementById('editTitle');
    const fields = document.getElementById('editFields');
    
    document.getElementById('editId').value = id;
    document.getElementById('editType').value = type;
    
    if (type === 'location') {
        const loc = locations.find(l => l.id === id);
        title.textContent = 'Edit Location';
        fields.innerHTML = `
            <input type="text" id="editName" value="${loc.name}" placeholder="Name" style="width:100%; padding:8px; margin-bottom:10px;">
            <input type="text" id="editTypeVal" value="${loc.type}" placeholder="Type" style="width:100%; padding:8px; margin-bottom:10px;">
            <input type="url" id="editImage" value="${loc.image || ''}" placeholder="Image URL" style="width:100%; padding:8px; margin-bottom:10px;">
            <textarea id="editDesc" rows="3" placeholder="Description" style="width:100%; padding:8px;">${loc.description || ''}</textarea>
        `;
    } else if (type === 'event') {
        const ev = events.find(e => e.id === id);
        title.textContent = 'Edit Event';
        fields.innerHTML = `
            <input type="text" id="editName" value="${ev.title}" placeholder="Title" style="width:100%; padding:8px; margin-bottom:10px;">
            <input type="date" id="editDate" value="${ev.event_date || ev.date}" style="width:100%; padding:8px; margin-bottom:10px;">
            <input type="url" id="editImage" value="${ev.image}" placeholder="Image URL" style="width:100%; padding:8px; margin-bottom:10px;">
            <textarea id="editDesc" rows="3" placeholder="Description" style="width:100%; padding:8px;">${ev.description}</textarea>
            <input type="text" id="editLocation" value="${ev.location || ''}" placeholder="Location" style="width:100%; padding:8px;">
        `;
    } else if (type === 'team') {
        const m = teamMembers.find(t => t.id === id);
        title.textContent = 'Edit Team Member';
        fields.innerHTML = `
            <input type="text" id="editName" value="${m.name}" placeholder="Name" style="width:100%; padding:8px; margin-bottom:10px;">
            <input type="text" id="editRole" value="${m.role}" placeholder="Role" style="width:100%; padding:8px; margin-bottom:10px;">
            <input type="url" id="editImage" value="${m.image}" placeholder="Image URL" style="width:100%; padding:8px; margin-bottom:10px;">
            <textarea id="editBio" rows="3" placeholder="Bio" style="width:100%; padding:8px;">${m.bio || ''}</textarea>
            <input type="email" id="editEmail" value="${m.email || ''}" placeholder="Email" style="width:100%; padding:8px;">
        `;
    }
    modal.classList.add('show');
}

// ============ FORM HANDLERS ============
document.getElementById('locationForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await addLocation({
        id: Date.now().toString(),
        name: document.getElementById('locName').value,
        type: document.getElementById('locType').value,
        lat: -14.29, lng: 28.55,
        thumbnail: document.getElementById('locThumb').value,
        image: document.getElementById('locImage').value,
        description: document.getElementById('locDesc').value
    });
    e.target.reset();
});

document.getElementById('eventForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await addEvent({
        id: Date.now().toString(),
        title: document.getElementById('eventTitle').value,
        event_date: document.getElementById('eventDate').value,
        image: document.getElementById('eventImage').value,
        description: document.getElementById('eventDesc').value,
        location: document.getElementById('eventLocation').value
    });
    e.target.reset();
});

document.getElementById('teamForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await addTeamMember({
        id: Date.now().toString(),
        name: document.getElementById('memberName').value,
        role: document.getElementById('memberRole').value,
        image: document.getElementById('memberImage').value,
        bio: document.getElementById('memberBio').value,
        email: document.getElementById('memberEmail').value
    });
    e.target.reset();
});

document.getElementById('aboutFormAdmin')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await updateAbout({
        content: document.getElementById('aboutText').value,
        image: document.getElementById('aboutImageUrl').value,
        contact: document.getElementById('contactText').value
    });
});

document.getElementById('settingsFormAdmin')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newPass = document.getElementById('newPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    if (newPass && newPass !== confirmPass) {
        showToast('Passwords do not match!', true);
        return;
    }
    await updateSettings({
        logo: document.getElementById('siteLogoUrl').value,
        title: document.getElementById('siteTitle').value,
        subtitle: document.getElementById('siteSubtitle').value,
        adminPassword: newPass || undefined
    });
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
});

document.getElementById('editForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('editId').value;
    const type = document.getElementById('editType').value;
    
    if (type === 'location') {
        await updateLocation(id, {
            name: document.getElementById('editName').value,
            type: document.getElementById('editTypeVal').value,
            image: document.getElementById('editImage').value,
            description: document.getElementById('editDesc').value,
            lat: -14.29, lng: 28.55,
            thumbnail: document.getElementById('editImage').value
        });
    } else if (type === 'event') {
        await updateEvent(id, {
            title: document.getElementById('editName').value,
            event_date: document.getElementById('editDate').value,
            image: document.getElementById('editImage').value,
            description: document.getElementById('editDesc').value,
            location: document.getElementById('editLocation').value
        });
    } else if (type === 'team') {
        await updateTeamMember(id, {
            name: document.getElementById('editName').value,
            role: document.getElementById('editRole').value,
            image: document.getElementById('editImage').value,
            bio: document.getElementById('editBio').value,
            email: document.getElementById('editEmail').value
        });
    }
    document.getElementById('editModal').classList.remove('show');
});

// ============ INITIALIZATION ============
// FAB Menu
const fab = document.getElementById('fab');
const fabBtn = document.querySelector('.fab-btn');
if (fabBtn) {
    fabBtn.addEventListener('click', () => {
        fab.classList.toggle('open');
    });
}

document.addEventListener('click', (e) => {
    if (fab && !fab.contains(e.target)) {
        fab.classList.remove('open');
    }
});

// Close modals
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').classList.remove('show');
    });
});

document.querySelector('.close-lightbox')?.addEventListener('click', () => {
    document.getElementById('lightboxModal').classList.remove('show');
});

// Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        if (page) showPage(page);
    });
});

document.querySelectorAll('.fab-opt').forEach(opt => {
    opt.addEventListener('click', () => {
        const page = opt.dataset.page;
        if (page) showPage(page);
        fab.classList.remove('open');
    });
});

// Admin
document.getElementById('adminBtn')?.addEventListener('click', () => {
    document.getElementById('loginModal').classList.add('show');
});

document.getElementById('loginBtn')?.addEventListener('click', async () => {
    const success = await adminLogin(document.getElementById('loginPass').value);
    if (success) {
        document.getElementById('loginModal').classList.remove('show');
        showAdminMode();
        showToast('Welcome Admin!');
    } else {
        showToast('Wrong password!', true);
    }
});

document.getElementById('logoutBtn')?.addEventListener('click', showPublicMode);

// Admin tabs
document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
        document.getElementById(`${tab}Tab`).style.display = 'block';
        document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Slideshow buttons
document.getElementById('prevSlide')?.addEventListener('click', prevSlide);
document.getElementById('nextSlide')?.addEventListener('click', nextSlide);

// Load data
loadData();
showPage('home');

// Close dropdowns when clicking outside
document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));
});

console.log('App loaded successfully');

// ============ ENHANCED DELETE WITH CONFIRMATION ============
async function confirmDeleteItem(id, type, name) {
    // Show confirmation dialog with item name
    const userConfirmed = confirm(`⚠️ Are you sure you want to delete "${name}"?\n\nThis action cannot be undone!`);
    
    if (userConfirmed) {
        showToast(`Deleting "${name}"...`);
        
        try {
            if (type === 'location') {
                await deleteLocation(id);
            } else if (type === 'event') {
                await deleteEvent(id);
            } else if (type === 'team') {
                await deleteTeamMember(id);
            }
            showToast(`✅ "${name}" deleted successfully!`);
        } catch (error) {
            showToast(`❌ Failed to delete "${name}"`, true);
        }
    } else {
        showToast(`Deletion cancelled`, false);
    }
}

// ============ ENHANCED EDIT WITH MODAL FORM ============
async function openEditModalWithData(id, type) {
    const modal = document.getElementById('editModal');
    const title = document.getElementById('editTitle');
    const fields = document.getElementById('editFields');
    
    document.getElementById('editId').value = id;
    document.getElementById('editType').value = type;
    
    if (type === 'location') {
        const item = locations.find(l => l.id === id);
        if (!item) return;
        
        title.textContent = '✏️ Edit Location';
        fields.innerHTML = `
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Name</label>
                <input type="text" id="editName" value="${escapeHtml(item.name)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Type/Category</label>
                <input type="text" id="editTypeVal" value="${escapeHtml(item.type)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Image URL</label>
                <input type="url" id="editImage" value="${escapeHtml(item.image || '')}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Thumbnail URL</label>
                <input type="url" id="editThumb" value="${escapeHtml(item.thumbnail || '')}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Description</label>
                <textarea id="editDesc" rows="4" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">${escapeHtml(item.description || '')}</textarea>
            </div>
        `;
    } 
    else if (type === 'event') {
        const item = events.find(e => e.id === id);
        if (!item) return;
        
        title.textContent = '✏️ Edit Event';
        fields.innerHTML = `
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Title</label>
                <input type="text" id="editName" value="${escapeHtml(item.title)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Event Date</label>
                <input type="date" id="editDate" value="${item.event_date || item.date || ''}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Image URL</label>
                <input type="url" id="editImage" value="${escapeHtml(item.image)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Description</label>
                <textarea id="editDesc" rows="4" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">${escapeHtml(item.description)}</textarea>
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Location</label>
                <input type="text" id="editLocation" value="${escapeHtml(item.location || '')}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
        `;
    } 
    else if (type === 'team') {
        const item = teamMembers.find(t => t.id === id);
        if (!item) return;
        
        title.textContent = '✏️ Edit Team Member';
        fields.innerHTML = `
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Name</label>
                <input type="text" id="editName" value="${escapeHtml(item.name)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Role/Position</label>
                <input type="text" id="editRole" value="${escapeHtml(item.role)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Image URL</label>
                <input type="url" id="editImage" value="${escapeHtml(item.image)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Bio</label>
                <textarea id="editBio" rows="4" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">${escapeHtml(item.bio || '')}</textarea>
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Email</label>
                <input type="email" id="editEmail" value="${escapeHtml(item.email || '')}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
        `;
    }
    
    modal.classList.add('show');
}

// Helper function to escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
        return c;
    });
}

// Enhanced Save Edit Function
async function saveEdit() {
    const id = document.getElementById('editId').value;
    const type = document.getElementById('editType').value;
    
    if (type === 'location') {
        const updatedData = {
            name: document.getElementById('editName').value,
            type: document.getElementById('editTypeVal').value,
            image: document.getElementById('editImage').value,
            thumbnail: document.getElementById('editThumb').value,
            description: document.getElementById('editDesc').value,
            lat: -14.29,
            lng: 28.55
        };
        
        showToast('Saving location...');
        await updateLocation(id, updatedData);
        showToast('✅ Location updated successfully!');
    } 
    else if (type === 'event') {
        const updatedData = {
            title: document.getElementById('editName').value,
            event_date: document.getElementById('editDate').value,
            image: document.getElementById('editImage').value,
            description: document.getElementById('editDesc').value,
            location: document.getElementById('editLocation').value
        };
        
        showToast('Saving event...');
        await updateEvent(id, updatedData);
        showToast('✅ Event updated successfully!');
    } 
    else if (type === 'team') {
        const updatedData = {
            name: document.getElementById('editName').value,
            role: document.getElementById('editRole').value,
            image: document.getElementById('editImage').value,
            bio: document.getElementById('editBio').value,
            email: document.getElementById('editEmail').value
        };
        
        showToast('Saving team member...');
        await updateTeamMember(id, updatedData);
        showToast('✅ Team member updated successfully!');
    }
    
    document.getElementById('editModal').classList.remove('show');
    await loadData();
}


// ============ THREE-DOT MENU FUNCTIONS - FIXED ============

// Function to attach dropdown events to all three-dot buttons
function attachThreeDotEvents() {
    // Remove all existing three-dot buttons and recreate them
    document.querySelectorAll('.three-dots').forEach(btn => {
        // Remove old event listeners by cloning
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
    });
    
    // Add new event listeners
    document.querySelectorAll('.three-dots').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Get the dropdown menu
            const dropdown = this.nextElementSibling;
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown').forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('show');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('show');
        });
    });
    
    // Add edit button events
    document.querySelectorAll('.edit-btn').forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = this.dataset.id;
            const type = this.dataset.type;
            
            // Close dropdown
            this.closest('.dropdown')?.classList.remove('show');
            
            // Open edit modal
            openEditModalWithData(id, type);
        });
    });
    
    // Add delete button events
    document.querySelectorAll('.delete-btn').forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = this.dataset.id;
            const type = this.dataset.type;
            const name = this.dataset.name;
            
            // Close dropdown
            this.closest('.dropdown')?.classList.remove('show');
            
            // Confirm and delete
            if (confirm(`⚠️ Are you sure you want to delete "${name}"?\n\nThis action cannot be undone!`)) {
                if (type === 'location') deleteLocation(id);
                else if (type === 'event') deleteEvent(id);
                else if (type === 'team') deleteTeamMember(id);
            }
        });
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown').forEach(d => {
        d.classList.remove('show');
    });
});

// Override the render functions to include three-dot events
function renderLocationsListWithMenu() {
    const container = document.getElementById('locationsList');
    if (!container) return;
    container.innerHTML = locations.map(loc => `
        <div class="list-item">
            <div><strong>${escapeHtml(loc.name)}</strong><br><small>${escapeHtml(loc.type)}</small></div>
            <div class="item-actions" style="position:relative">
                <button class="three-dots" data-id="${loc.id}" data-type="location">⋮</button>
                <div class="dropdown">
                    <button class="edit-btn" data-id="${loc.id}" data-type="location">✏️ Edit</button>
                    <button class="delete-btn" data-id="${loc.id}" data-type="location" data-name="${escapeHtml(loc.name)}">🗑️ Delete</button>
                </div>
            </div>
        </div>
    `).join('');
    attachThreeDotEvents();
}

function renderEventsListWithMenu() {
    const container = document.getElementById('eventsList');
    if (!container) return;
    container.innerHTML = events.map(ev => `
        <div class="list-item">
            <div><strong>${escapeHtml(ev.title)}</strong><br><small>${new Date(ev.event_date || ev.date).toLocaleDateString()}</small></div>
            <div class="item-actions" style="position:relative">
                <button class="three-dots" data-id="${ev.id}" data-type="event">⋮</button>
                <div class="dropdown">
                    <button class="edit-btn" data-id="${ev.id}" data-type="event">✏️ Edit</button>
                    <button class="delete-btn" data-id="${ev.id}" data-type="event" data-name="${escapeHtml(ev.title)}">🗑️ Delete</button>
                </div>
            </div>
        </div>
    `).join('');
    attachThreeDotEvents();
}

function renderTeamListWithMenu() {
    const container = document.getElementById('teamList');
    if (!container) return;
    container.innerHTML = teamMembers.map(m => `
        <div class="list-item">
            <div><strong>${escapeHtml(m.name)}</strong><br><small>${escapeHtml(m.role)}</small></div>
            <div class="item-actions" style="position:relative">
                <button class="three-dots" data-id="${m.id}" data-type="team">⋮</button>
                <div class="dropdown">
                    <button class="edit-btn" data-id="${m.id}" data-type="team">✏️ Edit</button>
                    <button class="delete-btn" data-id="${m.id}" data-type="team" data-name="${escapeHtml(m.name)}">🗑️ Delete</button>
                </div>
            </div>
        </div>
    `).join('');
    attachThreeDotEvents();
}

// Replace original render functions
renderLocationsList = renderLocationsListWithMenu;
renderEventsList = renderEventsListWithMenu;
renderTeamList = renderTeamListWithMenu;

// Edit Modal Functions
function openEditModalWithData(id, type) {
    const modal = document.getElementById('editModal');
    const title = document.getElementById('editTitle');
    const fields = document.getElementById('editFields');
    
    document.getElementById('editId').value = id;
    document.getElementById('editType').value = type;
    
    if (type === 'location') {
        const item = locations.find(l => l.id === id);
        if (!item) return;
        
        title.textContent = '✏️ Edit Location';
        fields.innerHTML = `
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Name</label>
                <input type="text" id="editName" value="${escapeHtml(item.name)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Type/Category</label>
                <input type="text" id="editTypeVal" value="${escapeHtml(item.type)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Image URL</label>
                <input type="url" id="editImage" value="${escapeHtml(item.image || '')}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Description</label>
                <textarea id="editDesc" rows="4" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">${escapeHtml(item.description || '')}</textarea>
            </div>
        `;
    } 
    else if (type === 'event') {
        const item = events.find(e => e.id === id);
        if (!item) return;
        
        title.textContent = '✏️ Edit Event';
        fields.innerHTML = `
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Title</label>
                <input type="text" id="editName" value="${escapeHtml(item.title)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Event Date</label>
                <input type="date" id="editDate" value="${item.event_date || item.date || ''}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Image URL</label>
                <input type="url" id="editImage" value="${escapeHtml(item.image)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Description</label>
                <textarea id="editDesc" rows="4" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">${escapeHtml(item.description)}</textarea>
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Location</label>
                <input type="text" id="editLocation" value="${escapeHtml(item.location || '')}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
        `;
    } 
    else if (type === 'team') {
        const item = teamMembers.find(t => t.id === id);
        if (!item) return;
        
        title.textContent = '✏️ Edit Team Member';
        fields.innerHTML = `
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Name</label>
                <input type="text" id="editName" value="${escapeHtml(item.name)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Role/Position</label>
                <input type="text" id="editRole" value="${escapeHtml(item.role)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Image URL</label>
                <input type="url" id="editImage" value="${escapeHtml(item.image)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Bio</label>
                <textarea id="editBio" rows="4" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">${escapeHtml(item.bio || '')}</textarea>
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Email</label>
                <input type="email" id="editEmail" value="${escapeHtml(item.email || '')}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
        `;
    }
    
    modal.classList.add('show');
}

// Save Edit Function
async function saveEditedItem() {
    const id = document.getElementById('editId').value;
    const type = document.getElementById('editType').value;
    
    if (type === 'location') {
        const updatedData = {
            name: document.getElementById('editName').value,
            type: document.getElementById('editTypeVal').value,
            image: document.getElementById('editImage').value,
            description: document.getElementById('editDesc').value,
            lat: -14.29,
            lng: 28.55,
            thumbnail: document.getElementById('editImage').value
        };
        
        showToast('Saving location...');
        await updateLocation(id, updatedData);
        showToast('✅ Location updated successfully!');
    } 
    else if (type === 'event') {
        const updatedData = {
            title: document.getElementById('editName').value,
            event_date: document.getElementById('editDate').value,
            image: document.getElementById('editImage').value,
            description: document.getElementById('editDesc').value,
            location: document.getElementById('editLocation').value
        };
        
        showToast('Saving event...');
        await updateEvent(id, updatedData);
        showToast('✅ Event updated successfully!');
    } 
    else if (type === 'team') {
        const updatedData = {
            name: document.getElementById('editName').value,
            role: document.getElementById('editRole').value,
            image: document.getElementById('editImage').value,
            bio: document.getElementById('editBio').value,
            email: document.getElementById('editEmail').value
        };
        
        showToast('Saving team member...');
        await updateTeamMember(id, updatedData);
        showToast('✅ Team member updated successfully!');
    }
    
    document.getElementById('editModal').classList.remove('show');
    await loadData();
}

// Attach edit form submit event
document.addEventListener('DOMContentLoaded', function() {
    const editForm = document.getElementById('editForm');
    if (editForm) {
        editForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await saveEditedItem();
        });
    }
});

// Call attachThreeDotEvents after each admin data load
const originalLoadAdminData = loadAdminData;
loadAdminData = function() {
    originalLoadAdminData();
    setTimeout(() => attachThreeDotEvents(), 100);
};


// ============ FAB BUTTON FIX ============
// Ensure FAB button works after page loads
document.addEventListener('DOMContentLoaded', function() {
    // FAB menu toggle
    const fabContainer = document.getElementById('fab');
    const fabButton = document.querySelector('.fab-btn');
    
    if (fabButton) {
        fabButton.addEventListener('click', function(e) {
            e.stopPropagation();
            fabContainer.classList.toggle('open');
        });
    }
    
    // Close FAB when clicking elsewhere
    document.addEventListener('click', function(e) {
        if (fabContainer && !fabContainer.contains(e.target)) {
            fabContainer.classList.remove('open');
        }
    });
    
    // Mobile admin button
    const mobileAdminBtn = document.getElementById('mobileAdminBtn');
    if (mobileAdminBtn) {
        mobileAdminBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const loginModal = document.getElementById('loginModal');
            if (loginModal) {
                loginModal.classList.add('show');
            }
            if (fabContainer) {
                fabContainer.classList.remove('open');
            }
        });
    }
});

// Override showPublicMode to ensure FAB shows on mobile after logout
const originalShowPublicMode = showPublicMode;
showPublicMode = function() {
    originalShowPublicMode();
    if (window.innerWidth <= 992) {
        const fabContainer = document.getElementById('fab');
        if (fabContainer) {
            fabContainer.style.display = 'block';
        }
    }
};

// Fix login modal close buttons
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.modal').classList.remove('show');
    });
});

// Fix login button
const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
    loginBtn.addEventListener('click', async function() {
        const password = document.getElementById('loginPass').value;
        const success = await adminLogin(password);
        if (success) {
            document.getElementById('loginModal').classList.remove('show');
            showAdminMode();
            showToast('Welcome Admin!');
            document.getElementById('loginPass').value = '';
        } else {
            showToast('Wrong password! Try: ', true);
        }
    });
}

// Enter key on login input
const loginPass = document.getElementById('loginPass');
if (loginPass) {
    loginPass.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('loginBtn').click();
        }
    });
}



// Ensure login button works
const loginSubmitBtn = document.getElementById('loginBtn');
if (loginSubmitBtn) {
    loginSubmitBtn.addEventListener('click', async function() {
        const password = document.getElementById('loginPass').value;
        const success = await adminLogin(password);
        if (success) {
            document.getElementById('loginModal').classList.remove('show');
            showAdminMode();
            showToast('Welcome Admin!');
            document.getElementById('loginPass').value = '';
        } else {
            showToast('Wrong password! Use: ', true);
        }
    });
}

// Close modal when clicking X
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.modal').classList.remove('show');
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('loginModal');
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});


// ============ IMPROVED LIGHTBOX FUNCTIONS ============
// Open lightbox with image
function openLightbox(imageUrl, title, description) {
    const lightbox = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (lightboxImg) {
        lightboxImg.src = imageUrl;
        lightboxImg.alt = title || 'Image';
    }
    
    if (lightboxCaption) {
        lightboxCaption.innerHTML = `<strong>${title || ''}</strong><br>${description || ''}`;
    }
    
    if (lightbox) {
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightboxModal');
    if (lightbox) {
        lightbox.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Override existing openLightbox function if exists
if (typeof window.openLightbox !== 'undefined') {
    window.openLightbox = openLightbox;
}


// Update gallery item view button to use improved lightbox
function bindGalleryEvents() {
    document.querySelectorAll('.btn-view').forEach(btn => {
        btn.removeEventListener('click', handleViewImage);
        btn.addEventListener('click', handleViewImage);
    });
}

function handleViewImage(e) {
    e.stopPropagation();
    const galleryItem = e.currentTarget.closest('.gallery-item');
    if (galleryItem) {
        const img = galleryItem.querySelector('img');
        const title = galleryItem.querySelector('h3')?.innerText || '';
        const desc = galleryItem.querySelector('p')?.innerText || '';
        if (img && img.src) {
            openLightbox(img.src, title, desc);
        }
    }
}

// Call bindGalleryEvents after gallery loads
setInterval(() => {
    if (document.querySelectorAll('.btn-view').length > 0) {
        bindGalleryEvents();
    }
}, 1000);


// Close lightbox events
const closeLightboxBtn = document.getElementById('closeLightboxBtn');
if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
}

// Click outside image to close
const lightboxModal = document.getElementById('lightboxModal');
if (lightboxModal) {
    lightboxModal.addEventListener('click', function(e) {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
}





// Force FAB visibility on mobile
function checkFabVisibility() {
    const fab = document.getElementById('fabContainer');
    if (fab) {
        if (window.innerWidth <= 992) {
            fab.style.display = 'block';
            console.log('FAB visible (mobile mode)');
        } else {
            fab.style.display = 'none';
            console.log('FAB hidden (desktop mode)');
        }
    }
}

// Check on load and resize
window.addEventListener('load', checkFabVisibility);
window.addEventListener('resize', checkFabVisibility);






// ============ EDIT FUNCTIONS FOR ADMIN PANEL ============

// Open edit modal with data
function openEditModal(itemId, itemType) {
    const modal = document.getElementById('editModal');
    const title = document.getElementById('editTitle');
    const fields = document.getElementById('editFields');
    
    if (!modal) {
        console.log('Edit modal not found');
        return;
    }
    
    document.getElementById('editId').value = itemId;
    document.getElementById('editType').value = itemType;
    
    if (itemType === 'location') {
        const item = locations.find(l => l.id === itemId);
        if (!item) return;
        
        title.textContent = '✏️ Edit Location';
        fields.innerHTML = `
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Name</label>
                <input type="text" id="editName" value="${escapeHtml(item.name)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Type/Category</label>
                <input type="text" id="editTypeVal" value="${escapeHtml(item.type)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Image URL</label>
                <input type="url" id="editImage" value="${escapeHtml(item.image || '')}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Description</label>
                <textarea id="editDesc" rows="4" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">${escapeHtml(item.description || '')}</textarea>
            </div>
        `;
    } 
    else if (itemType === 'event') {
        const item = events.find(e => e.id === itemId);
        if (!item) return;
        
        title.textContent = '✏️ Edit Event';
        fields.innerHTML = `
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Title</label>
                <input type="text" id="editName" value="${escapeHtml(item.title)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Event Date</label>
                <input type="date" id="editDate" value="${item.event_date || item.date || ''}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Image URL</label>
                <input type="url" id="editImage" value="${escapeHtml(item.image)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Description</label>
                <textarea id="editDesc" rows="4" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">${escapeHtml(item.description)}</textarea>
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Location</label>
                <input type="text" id="editLocation" value="${escapeHtml(item.location || '')}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
        `;
    } 
    else if (itemType === 'team') {
        const item = teamMembers.find(t => t.id === itemId);
        if (!item) return;
        
        title.textContent = '✏️ Edit Team Member';
        fields.innerHTML = `
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Name</label>
                <input type="text" id="editName" value="${escapeHtml(item.name)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Role/Position</label>
                <input type="text" id="editRole" value="${escapeHtml(item.role)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Image URL</label>
                <input type="url" id="editImage" value="${escapeHtml(item.image)}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Bio</label>
                <textarea id="editBio" rows="4" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">${escapeHtml(item.bio || '')}</textarea>
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">Email</label>
                <input type="email" id="editEmail" value="${escapeHtml(item.email || '')}" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
            </div>
        `;
    }
    
    modal.classList.add('show');
}

// Save edited item
async function saveEditItem() {
    const id = document.getElementById('editId').value;
    const type = document.getElementById('editType').value;
    
    if (type === 'location') {
        const updatedData = {
            name: document.getElementById('editName').value,
            type: document.getElementById('editTypeVal').value,
            image: document.getElementById('editImage').value,
            description: document.getElementById('editDesc').value,
            lat: -14.29,
            lng: 28.55,
            thumbnail: document.getElementById('editImage').value
        };
        
        showToast('Saving location...');
        await updateLocation(id, updatedData);
        showToast('✅ Location updated successfully!');
    } 
    else if (type === 'event') {
        const updatedData = {
            title: document.getElementById('editName').value,
            event_date: document.getElementById('editDate').value,
            image: document.getElementById('editImage').value,
            description: document.getElementById('editDesc').value,
            location: document.getElementById('editLocation').value
        };
        
        showToast('Saving event...');
        await updateEvent(id, updatedData);
        showToast('✅ Event updated successfully!');
    } 
    else if (type === 'team') {
        const updatedData = {
            name: document.getElementById('editName').value,
            role: document.getElementById('editRole').value,
            image: document.getElementById('editImage').value,
            bio: document.getElementById('editBio').value,
            email: document.getElementById('editEmail').value
        };
        
        showToast('Saving team member...');
        await updateTeamMember(id, updatedData);
        showToast('✅ Team member updated successfully!');
    }
    
    document.getElementById('editModal').classList.remove('show');
    await loadData();
}

// Helper function to escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Enhanced delete with confirmation
async function deleteWithConfirm(id, type, name) {
    if (confirm(`⚠️ Are you sure you want to delete "${name}"?\n\nThis action cannot be undone!`)) {
        if (type === 'location') {
            await deleteLocation(id);
        } else if (type === 'event') {
            await deleteEvent(id);
        } else if (type === 'team') {
            await deleteTeamMember(id);
        }
        showToast(`✅ "${name}" deleted successfully!`);
        await loadData();
    }
}



// ============ FIXED FAB BUTTON CODE ============
(function() {
    function initFab() {
        const fabContainer = document.getElementById('mobileFabButton');
        const fabBtn = document.getElementById('mobileFabBtn');
        const fabMenu = document.getElementById('mobileFabMenu');
        
        if (!fabContainer) {
            console.log('FAB container not found - element ID may be different');
            return;
        }
        
        console.log('FAB container found');
        
        if (fabBtn) {
            fabBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (fabMenu) {
                    fabMenu.classList.toggle('show');
                }
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (fabMenu && fabContainer && !fabContainer.contains(e.target)) {
                fabMenu.classList.remove('show');
            }
        });
        
        // Handle menu items
        const menuItems = document.querySelectorAll('.fab-menu-item, .float-item');
        menuItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                const page = this.getAttribute('data-page');
                if (page && typeof showPage === 'function') {
                    showPage(page);
                }
                if (fabMenu) fabMenu.classList.remove('show');
            });
        });
        
        // Handle admin button
        const adminItem = document.getElementById('fabMenuAdmin');
        if (adminItem) {
            adminItem.addEventListener('click', function(e) {
                e.stopPropagation();
                const loginModal = document.getElementById('loginModal');
                if (loginModal) {
                    loginModal.classList.add('show');
                }
                if (fabMenu) fabMenu.classList.remove('show');
            });
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFab);
    } else {
        initFab();
    }
})();

// ============ SAFETY NULL CHECKS ============
// Ensure all critical functions have null checks
if (typeof window.showAdminMode === 'undefined') {
    window.showAdminMode = showAdminMode;
}
if (typeof window.showPublicMode === 'undefined') {
    window.showPublicMode = showPublicMode;
}



// ============ FAB BUTTON FUNCTIONALITY (Three Lines Hamburger Icon) ============
function initFabButton() {
    const fabContainer = document.getElementById('fabMobile');
    const fabBtn = document.getElementById('fabMobileBtn');
    const fabMenu = document.getElementById('fabMobileMenu');
    
    if (!fabBtn) {
        console.log('FAB button not found');
        return;
    }
    
    console.log('FAB button initialized with hamburger icon');
    
    fabBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        fabMenu.classList.toggle('show');
        
        const icon = fabBtn.querySelector('i');
        if (fabMenu.classList.contains('show')) {
            icon.style.transform = 'rotate(90deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
    });
    
    document.addEventListener('click', function(e) {
        if (fabContainer && !fabContainer.contains(e.target)) {
            fabMenu.classList.remove('show');
            const icon = fabBtn.querySelector('i');
            if (icon) icon.style.transform = 'rotate(0deg)';
        }
    });
    
    document.querySelectorAll('.fab-mobile-item[data-page]').forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const page = this.getAttribute('data-page');
            if (typeof showPage === 'function') {
                showPage(page);
            }
            fabMenu.classList.remove('show');
            const icon = fabBtn.querySelector('i');
            if (icon) icon.style.transform = 'rotate(0deg)';
        });
    });
    
    const adminItem = document.getElementById('fabAdminBtn');
    if (adminItem) {
        adminItem.addEventListener('click', function(e) {
            e.stopPropagation();
            const loginModal = document.getElementById('loginModal');
            if (loginModal) {
                loginModal.classList.add('show');
            }
            fabMenu.classList.remove('show');
            const icon = fabBtn.querySelector('i');
            if (icon) icon.style.transform = 'rotate(0deg)';
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFabButton);
} else {
    initFabButton();
}












// ============ FIXED LOCATION PREVIEW ============
function selectLocation(loc) {
    console.log('selectLocation called with:', loc);
    
    if (!loc) {
        console.error('No location provided');
        return;
    }
    
    // Update preview image
    const previewImg = document.getElementById('previewImg');
    if (previewImg) {
        const imgUrl = loc.image || loc.thumbnail || 'https://picsum.photos/400/200';
        previewImg.src = imgUrl;
        previewImg.alt = loc.name || 'Location';
        console.log('Preview image set to:', imgUrl);
    }
    
    // Update preview name
    const previewName = document.getElementById('previewName');
    if (previewName) {
        previewName.textContent = loc.name || 'Unknown Location';
        console.log('Preview name set to:', loc.name);
    }
    
    // Update preview description
    const previewDesc = document.getElementById('previewDesc');
    if (previewDesc) {
        previewDesc.textContent = loc.description || 'No description available';
        console.log('Preview description set');
    }
    
    // Update preview type
    const previewType = document.getElementById('previewType');
    if (previewType) {
        previewType.textContent = loc.type || 'Location';
        console.log('Preview type set to:', loc.type);
    }
    
    // Update map with coordinates if available
    const mapFrame = document.getElementById('mapFrame');
    const mode = document.getElementById('transportMode')?.value || 'driving';
    
    if (mapFrame) {
        if (loc.lat && loc.lng && loc.lat !== 0 && loc.lng !== 0) {
            const mapUrl = `https://www.google.com/maps?q=${loc.lat},${loc.lng}&output=embed`;
            mapFrame.src = mapUrl;
            console.log('Map updated with coordinates:', loc.lat, loc.lng);
        } else if (loc.name) {
            const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(loc.name)}+Mulungushi+University&output=embed`;
            mapFrame.src = mapUrl;
            console.log('Map updated with search:', loc.name);
        }
    }
    
    // Update directions link
    const dirLink = document.getElementById('directionsLink');
    if (dirLink) {
        if (loc.lat && loc.lng && loc.lat !== 0 && loc.lng !== 0) {
            dirLink.href = `https://www.google.com/maps/dir/Current+Location/${loc.lat},${loc.lng}/data=!4m2!4m1!3e0?travelmode=${mode}`;
            console.log('Directions link updated with coordinates');
        } else if (loc.name) {
            dirLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.name)}+Mulungushi+University`;
            console.log('Directions link updated with search');
        }
    }
}

// Fix selectLocationById function
function selectLocationById(id) {
    console.log('selectLocationById called with id:', id);
    const loc = locations.find(l => l.id == id);
    if (loc) {
        selectLocation(loc);
    } else {
        console.error('Location not found with id:', id);
    }
}

// Fix gallery click handler
function initGalleryClicks() {
    console.log('Initializing gallery clicks...');
    const galleryItems = document.querySelectorAll('.gallery-item');
    console.log('Found gallery items:', galleryItems.length);
    
    galleryItems.forEach(item => {
        item.removeEventListener('click', handleGalleryItemClick);
        item.addEventListener('click', handleGalleryItemClick);
    });
}

function handleGalleryItemClick(e) {
    const id = this.getAttribute('data-id');
    console.log('Gallery item clicked, id:', id);
    if (id) {
        selectLocationById(id);
    }
}

// Call initGalleryClicks after gallery loads
const originalRenderGallery = renderGallery;
window.renderGallery = function() {
    originalRenderGallery();
    setTimeout(initGalleryClicks, 100);
};
