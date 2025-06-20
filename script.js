// ========================================
// GALERÍA MULTIMEDIA - COLEGIO MAGISTER 2B
// Archivo JavaScript independiente - Versión Adaptativa
// ========================================

// Datos de actividades - En producción estos vendrían del servidor
let activities = {
    'Día de la Madre': {
        photos: [
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m1.jpg', name: 'foto1.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m2.jpg', name: 'foto2.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m3.jpg', name: 'foto3.jpg' },
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
    'Día del padre': {
        photos: [
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/a1.jpeg', name: 'familia1.jpg' },
        ]
    },
};

// Iconos para las actividades
const activityIcons = {
    'Día de la Madre': '🌸',
    'Policias Escolares': '👮🏼‍♀️',
    'Dia de la Papa': '🍠',
    'Día del padre': '👨',
    'Día de la Familia': '👨‍👩‍👧‍👦',
    'Concurso de Ciencias': '🔬',
    'Graduación': '🎉'
};

// ========================================
// FUNCIONES DE RENDERIZADO
// ========================================

/**
 * Determina la clase CSS apropiada según el número de fotos
 * @param {number} photoCount - Número de fotos
 * @returns {string} Clase CSS correspondiente
 */
function getPhotosGridClass(photoCount) {
    if (photoCount <= 10) {
        return `photos-${photoCount}`;
    } else {
        return 'photos-many';
    }
}

/**
 * Renderiza todas las actividades en la página
 */
function renderActivities() {
    const grid = document.getElementById('activitiesGrid');
    grid.innerHTML = '';

    Object.keys(activities).forEach(activityName => {
        const activity = activities[activityName];
        const icon = activityIcons[activityName] || '📚';
        const photoCount = activity.photos.length;
        const gridClass = getPhotosGridClass(photoCount);
        
        const activityCard = document.createElement('div');
        activityCard.className = 'activity-card';
        activityCard.innerHTML = `
            <div class="activity-title">
                <span class="icon">${icon}</span>
                <span>${activityName}</span>
            </div>
            
            <div class="photos-info">
                📷 Fotos (${photoCount})
            </div>
            
            <div class="photos-grid ${gridClass}">
                ${renderPhotos(activity.photos)}
            </div>
        `;
        grid.appendChild(activityCard);
    });
}

/**
 * Renderiza las fotos de una actividad
 * @param {Array} photos - Array de fotos
 * @returns {string} HTML generado
 */
function renderPhotos(photos) {
    return photos.map((photo, index) => `
        <div class="photo-item" onclick="openModal('${photo.url}')">
            <img src="${photo.url}" alt="Foto ${index + 1}" oncontextmenu="return false;">
            <div class="overlay">
                <span class="view-icon">👁️</span>
            </div>
        </div>
    `).join('');
}

// ========================================
// MODAL DE VISUALIZACIÓN
// ========================================

/**
 * Abre el modal para visualizar una foto
 * @param {string} url - URL de la imagen
 */
function openModal(url) {
    const modal = document.getElementById('photoModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `<img src="${url}" alt="Foto" oncontextmenu="return false;">`;
    modal.style.display = 'block';
    
    // Evitar scroll en el body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal de visualización
 */
function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.style.display = 'none';
    
    // Restaurar scroll en el body
    document.body.style.overflow = 'auto';
}

// ========================================
// PROTECCIÓN CONTRA DESCARGA
// ========================================

/**
 * Previene el menú contextual (clic derecho)
 */
function preventContextMenu() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
}

/**
 * Previene teclas de acceso directo para guardar/descargar
 */
function preventKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Prevenir Ctrl+S (Guardar), Ctrl+A (Seleccionar todo)
        if (e.ctrlKey && (e.keyCode === 83 || e.keyCode === 65)) {
            e.preventDefault();
            return false;
        }
        
        // Prevenir F12 (Herramientas de desarrollador)
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        
        // Prevenir Ctrl+Shift+I (Herramientas de desarrollador)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        
        // Prevenir Ctrl+U (Ver código fuente)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
    });
}

// ========================================
// EVENT LISTENERS Y INICIALIZACIÓN
// ========================================

/**
 * Maneja el clic fuera del modal para cerrarlo
 */
function setupModalClickOutside() {
    window.onclick = function(event) {
        const modal = document.getElementById('photoModal');
        if (event.target === modal) {
            closeModal();
        }
    }
}

/**
 * Maneja la tecla Escape para cerrar el modal
 */
function setupEscapeKey() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

/**
 * Inicializa toda la aplicación
 */
function initializeApp() {
    // Renderizar actividades
    renderActivities();
    
    // Configurar protecciones
    preventContextMenu();
    preventKeyboardShortcuts();
    
    // Configurar eventos del modal
    setupModalClickOutside();
    setupEscapeKey();
    
    console.log('Galería Multimedia Adaptativa inicializada correctamente');
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
 * En producción, reemplazar con llamada real al backend
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

/**
 * Función para añadir nuevas actividades dinámicamente
 * @param {string} activityName - Nombre de la actividad
 * @param {Array} photos - Array de fotos
 * @param {string} icon - Icono de la actividad
 */
function addActivity(activityName, photos, icon = '📚') {
    activities[activityName] = { photos };
    activityIcons[activityName] = icon;
    renderActivities();
}

/**
 * Función para eliminar una actividad
 * @param {string} activityName - Nombre de la actividad a eliminar
 */
function removeActivity(activityName) {
    delete activities[activityName];
    delete activityIcons[activityName];
    renderActivities();
}

// ========================================
// INICIALIZACIÓN
// ========================================

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Opcional: Recargar datos periódicamente (cada 5 minutos)
// setInterval(loadActivitiesFromServer, 300000);
