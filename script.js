// ========================================
// GALERÍA MULTIMEDIA - COLEGIO MAGISTER 2B
// Archivo JavaScript independiente - Solo Visualización
// ========================================

// Datos de actividades - En producción estos vendrían del servidor
let activities = {
    'Día del Estudiante': {
        photos: [
            { url: 'https://drive.google.com/file/d/1ALseorVXJUdETPGD_6uPmCL5Gfatuvg_/view?usp=drive_link', name: 'foto1.jpg' },
            { url: 'https://picsum.photos/400/400?random=2', name: 'foto2.jpg' },
            { url: 'https://picsum.photos/400/400?random=3', name: 'foto3.jpg' },
            { url: 'https://picsum.photos/400/400?random=4', name: 'foto4.jpg' }
        ]
    },
    'Festival de Talentos': {
        photos: [
            { url: 'https://picsum.photos/400/400?random=5', name: 'festival1.jpg' },
            { url: 'https://picsum.photos/400/400?random=6', name: 'festival2.jpg' }
        ]
    },
    'Obra de Teatro': {
        photos: [
            { url: 'https://picsum.photos/400/400?random=7', name: 'teatro1.jpg' },
            { url: 'https://picsum.photos/400/400?random=8', name: 'teatro2.jpg' },
            { url: 'https://picsum.photos/400/400?random=9', name: 'teatro3.jpg' }
        ]
    },
    'Día de la Familia': {
        photos: [
            { url: 'https://picsum.photos/400/400?random=10', name: 'familia1.jpg' }
        ]
    },
    'Concurso de Ciencias': {
        photos: [
            { url: 'https://picsum.photos/400/400?random=11', name: 'ciencias1.jpg' },
            { url: 'https://picsum.photos/400/400?random=12', name: 'ciencias2.jpg' },
            { url: 'https://picsum.photos/400/400?random=13', name: 'ciencias3.jpg' },
            { url: 'https://picsum.photos/400/400?random=14', name: 'ciencias4.jpg' },
            { url: 'https://picsum.photos/400/400?random=15', name: 'ciencias5.jpg' }
        ]
    },
    'Graduación': {
        photos: [
            { url: 'https://picsum.photos/400/400?random=16', name: 'graduacion1.jpg' },
            { url: 'https://picsum.photos/400/400?random=17', name: 'graduacion2.jpg' }
        ]
    }
};

// Iconos para las actividades
const activityIcons = {
    'Día del Estudiante': '🎓',
    'Festival de Talentos': '🎭',
    'Obra de Teatro': '🎪',
    'Día de la Familia': '👨‍👩‍👧‍👦',
    'Concurso de Ciencias': '🔬',
    'Graduación': '🎉'
};

// ========================================
// FUNCIONES DE RENDERIZADO
// ========================================

/**
 * Renderiza todas las actividades en la página
 */
function renderActivities() {
    const grid = document.getElementById('activitiesGrid');
    grid.innerHTML = '';

    Object.keys(activities).forEach(activityName => {
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
            <img src="${photo.url}" alt="Foto" oncontextmenu="return false;">
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
    
    console.log('Galería Multimedia inicializada correctamente');
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

// ========================================
// INICIALIZACIÓN
// ========================================

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Opcional: Recargar datos periódicamente (cada 5 minutos)
// setInterval(loadActivitiesFromServer, 300000);