// ========================================
// GALERÍA MULTIMEDIA - COLEGIO MAGISTER 2B
// JavaScript Completo - Con Scroll to Top
// ========================================

// Datos de actividades - En producción estos vendrían del servidor
let activities = {
    'Día de la Madre': {
        photos: [
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m1.jpg', name: 'foto1.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m2.jpg', name: 'foto2.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m3.jpg', name: 'foto3.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m4.jpg', name: 'foto4.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m5.jpg', name: 'foto5.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m6.jpg', name: 'foto6.jpg' },
        ]
    },
    'Policias Escolares': {
        photos: [
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/c1.jpeg', name: 'festival1.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/c2.jpeg', name: 'festival2.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/c3.jpeg', name: 'festival3.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/c4.jpeg', name: 'festival4.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/c5.jpeg', name: 'festival5.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/c6.jpeg', name: 'festival6.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/c7.jpeg', name: 'festival7.jpg' },
        ]
    },
    'Dia de la Papa': {
        photos: [
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/p1.jpeg', name: 'teatro1.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/p2.jpeg', name: 'teatro2.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/p3.jpeg', name: 'teatro3.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/p4.jpeg', name: 'teatro4.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/p5.jpeg', name: 'teatro5.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/p6.jpeg', name: 'teatro6.jpg' },
        ]
    },
    'Día del paseo': {
        photos: [
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/b1.jpeg', name: 'paseo1.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/b2.jpeg', name: 'paseo2.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/b3.jpeg', name: 'paseo3.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/b4.jpeg', name: 'paseo4.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/b5.jpeg', name: 'paseo5.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/b6.jpeg', name: 'paseo6.jpg' },
        ]
    },
    'Día del maestro': {
        photos: [
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/d1.jpeg', name: 'maestro1.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/d2.jpeg', name: 'maestro2.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/d3.jpeg', name: 'maestro3.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/d4.jpeg', name: 'maestro4.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/d5.jpeg', name: 'maestro5.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/d6.jpeg', name: 'maestro6.jpg' },
        ]
    },
       'Fiestas Patrias': {
        photos: [
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f1.jpeg', name: 'patrias1.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f2.jpeg', name: 'patrias2.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f3.jpeg', name: 'patrias3.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f4.jpeg', name: 'patrias4.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f5.jpeg', name: 'patrias5.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f6.jpeg', name: 'patrias6.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f7.jpeg', name: 'patrias7.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f8.jpeg', name: 'patrias8.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f9.jpeg', name: 'patrias9.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f10.jpeg', name: 'patrias10.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f11.jpeg', name: 'patrias11.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f12.jpeg', name: 'patrias12.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f13.jpeg', name: 'patrias13.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f14.jpeg', name: 'patrias14.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/f15.jpeg', name: 'patrias15.jpg' },
        ]
    },
};

// Iconos para las actividades
const activityIcons = {
    'Día de la Madre': '🌸',
    'Policias Escolares': '👮🏼‍♀️',
    'Dia de la Papa': '🍠',
    'Día del padre': '👨',
    'Día del paseo': '👨‍👩‍👧‍👦',
    'Dia del maestro': '🔬',
    'Fiestas Patrias': '🇵🇪​',
    'Graduación': '🎉'
};

// Variables globales para navegación del modal
let currentActivity = '';
let currentPhotoIndex = 0;
let activitiesArray = [];

// ========================================
// FUNCIONES DE RENDERIZADO
// ========================================

/**
 * Renderiza todas las actividades en la página
 */
function renderActivities() {
    const grid = document.getElementById('activitiesGrid');
    grid.innerHTML = '';
    
    // Crear array de actividades para navegación
    activitiesArray = Object.keys(activities);

    activitiesArray.forEach(activityName => {
        const activity = activities[activityName];
        const icon = activityIcons[activityName] || '📚';
        
        const activityCard = document.createElement('div');
        activityCard.className = 'activity-card';
        activityCard.innerHTML = `
            <div class="activity-title">
                <span class="icon">${icon}</span>
                <span>${activityName}</span>
            </div>
            
            <div class="photos-info">
                📷 Fotos (${activity.photos.length})
            </div>
            
            <div class="photos-grid">
                ${renderPhotos(activity.photos, activityName)}
            </div>
        `;
        grid.appendChild(activityCard);
    });
}

/**
 * Renderiza las fotos de una actividad con miniaturas uniformes
 * @param {Array} photos - Array de fotos
 * @param {string} activityName - Nombre de la actividad
 * @returns {string} HTML generado
 */
function renderPhotos(photos, activityName) {
    return photos.map((photo, index) => `
        <div class="photo-item" onclick="openModal('${activityName}', ${index})">
            <img src="${photo.url}" alt="Foto ${index + 1}" 
                 onerror="handleImageError(this)">
            <div class="overlay">
                <span class="view-icon">👁️</span>
            </div>
        </div>
    `).join('');
}

/**
 * Maneja errores de carga de imágenes en miniaturas
 * @param {HTMLImageElement} img - Elemento de imagen
 */
function handleImageError(img) {
    img.style.display = 'none';
    
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: #666;
        font-size: 12px;
        text-align: center;
        background: #f5f5f5;
        border-radius: 8px;
        flex-direction: column;
    `;
    errorDiv.innerHTML = '📷<br>No disponible';
    
    img.parentNode.insertBefore(errorDiv, img);
}

// ========================================
// MODAL DE VISUALIZACIÓN
// ========================================

/**
 * Abre el modal para visualizar una foto con navegación
 * @param {string} activityName - Nombre de la actividad
 * @param {number} photoIndex - Índice de la foto
 */
function openModal(activityName, photoIndex) {
    currentActivity = activityName;
    currentPhotoIndex = photoIndex;
    
    const modal = document.getElementById('photoModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = '';
    
    const photo = activities[activityName].photos[photoIndex];
    const img = document.createElement('img');
    img.src = photo.url;
    img.alt = 'Foto ampliada';
    img.onerror = () => handleModalImageError(img);
    
    modalContent.appendChild(img);
    
    modal.style.display = 'flex';
    modal.classList.add('show');
    
    document.body.style.overflow = 'hidden';
    
    // Actualizar visibilidad de botones de navegación
    updateNavigationButtons();
    
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

/**
 * Cierra el modal de visualización
 */
function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    
    document.body.style.overflow = 'auto';
}

/**
 * Navega entre fotos y secciones
 * @param {number} direction - Dirección: -1 para anterior, 1 para siguiente
 */
function navigatePhoto(direction) {
    const currentPhotos = activities[currentActivity].photos;
    const newIndex = currentPhotoIndex + direction;
    
    // Si estamos dentro de la misma sección
    if (newIndex >= 0 && newIndex < currentPhotos.length) {
        openModal(currentActivity, newIndex);
        return;
    }
    
    // Si necesitamos cambiar de sección
    const currentActivityIndex = activitiesArray.indexOf(currentActivity);
    let newActivityIndex;
    
    if (direction > 0) {
        // Ir a siguiente sección
        newActivityIndex = currentActivityIndex + 1;
        if (newActivityIndex >= activitiesArray.length) {
            return; // No hay más secciones
        }
        openModal(activitiesArray[newActivityIndex], 0); // Primera foto de la nueva sección
    } else {
        // Ir a sección anterior
        newActivityIndex = currentActivityIndex - 1;
        if (newActivityIndex < 0) {
            return; // No hay secciones anteriores
        }
        const prevSectionPhotos = activities[activitiesArray[newActivityIndex]].photos;
        openModal(activitiesArray[newActivityIndex], prevSectionPhotos.length - 1); // Última foto de la sección anterior
    }
}

/**
 * Actualiza la visibilidad de los botones de navegación
 */
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    const currentActivityIndex = activitiesArray.indexOf(currentActivity);
    const currentPhotos = activities[currentActivity].photos;
    
    // Mostrar/ocultar botón anterior
    const hasPrev = currentPhotoIndex > 0 || currentActivityIndex > 0;
    prevBtn.style.display = hasPrev ? 'flex' : 'none';
    
    // Mostrar/ocultar botón siguiente
    const hasNext = currentPhotoIndex < currentPhotos.length - 1 || currentActivityIndex < activitiesArray.length - 1;
    nextBtn.style.display = hasNext ? 'flex' : 'none';
}

/**
 * Maneja errores de carga de imágenes en el modal
 * @param {HTMLImageElement} img - Elemento de imagen
 */
function handleModalImageError(img) {
    img.style.display = 'none';
    
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        min-width: 400px;
        color: #666;
        font-size: 18px;
        text-align: center;
        background: #f5f5f5;
        border-radius: 10px;
        flex-direction: column;
    `;
    errorDiv.innerHTML = '📷<br><br>Imagen no disponible<br>para visualización';
    
    img.parentNode.insertBefore(errorDiv, img);
}

// ========================================
// SCROLL TO TOP FUNCTIONALITY
// ========================================

/**
 * Controla la visibilidad del botón scroll to top
 */
function toggleScrollButton() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const scrollThreshold = 300; // Pixeles desde arriba para mostrar el botón
    
    if (window.pageYOffset > scrollThreshold) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

/**
 * Hace scroll suave hacia arriba
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// FUNCIONES UTILITARIAS
// ========================================

/**
 * Obtiene el número total de fotos
 * @returns {number} Total de fotos
 */
function getTotalPhotosCount() {
    let total = 0;
    Object.values(activities).forEach(activity => {
        total += activity.photos.length;
    });
    return total;
}

/**
 * Busca actividades que contengan un término
 * @param {string} searchTerm - Término de búsqueda
 * @returns {Object} Actividades filtradas
 */
function searchActivities(searchTerm) {
    const filtered = {};
    const term = searchTerm.toLowerCase();
    
    Object.keys(activities).forEach(activityName => {
        if (activityName.toLowerCase().includes(term)) {
            filtered[activityName] = activities[activityName];
        }
    });
    
    return filtered;
}

/**
 * Función para cargar datos desde el servidor (ejemplo)
 */
async function loadActivitiesFromServer() {
    try {
        // Ejemplo de cómo cargar datos del servidor
        // const response = await fetch('/api/activities');
        // const data = await response.json();
        // activities = data;
        // renderActivities();
        
        console.log('Función preparada para cargar datos del servidor');
    } catch (error) {
        console.error('Error al cargar actividades:', error);
    }
}

// ========================================
// MANEJO DE EVENTOS DE TECLADO
// ========================================

/**
 * Maneja eventos de teclado básicos
 */
function setupKeyboardEvents() {
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('photoModal');
        const isModalOpen = modal.style.display === 'flex';
        
        if (isModalOpen) {
            switch(e.keyCode) {
                case 27: // Escape
                    closeModal();
                    break;
                case 37: // Flecha izquierda
                    navigatePhoto(-1);
                    break;
                case 39: // Flecha derecha
                    navigatePhoto(1);
                    break;
            }
        }
    });
}

/**
 * Configura el scroll listener para el botón scroll to top
 */
function setupScrollListener() {
    window.addEventListener('scroll', toggleScrollButton);
    
    // También verificar al cargar por si la página ya tiene scroll
    toggleScrollButton();
}

// ========================================
// INICIALIZACIÓN
// ========================================

/**
 * Inicializa la aplicación cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar actividades
    renderActivities();
    
    // Configurar eventos de teclado básicos
    setupKeyboardEvents();
    
    // Configurar scroll listener para el botón
    setupScrollListener();
    
    // Mostrar información en consola
    console.log(`Galería cargada con ${getTotalPhotosCount()} fotos`);
    console.log('Galería multimedia iniciada correctamente');
    console.log('Botón scroll to top configurado');
    console.log('Navegación entre fotos y secciones habilitada');
    console.log('Controles de teclado: Escape (cerrar), ← → (navegar)');
});
