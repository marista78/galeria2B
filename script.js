// ========================================
// GALERÍA MULTIMEDIA - COLEGIO MAGISTER 2B
// JavaScript Completo - Con protección y funcionalidad
// ========================================

// Datos de actividades - En producción estos vendrían del servidor
let activities = {
    'Día de la Madre': {
        photos: [
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m1.jpg', name: 'foto1.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m2.jpg', name: 'foto2.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m3.jpg', name: 'foto3.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m4.jpg', name: 'foto3.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m5.jpg', name: 'foto3.jpg' },
            { url: 'https://raw.githubusercontent.com/marista78/galeria2B/main/img/m6.jpg', name: 'foto3.jpg' },
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
 * Renderiza las fotos de una actividad con miniaturas uniformes
 * @param {Array} photos - Array de fotos
 * @returns {string} HTML generado
 */
function renderPhotos(photos) {
    return photos.map((photo, index) => `
        <div class="photo-item" onclick="openModal('${photo.url}')">
            <img src="${photo.url}" alt="Foto ${index + 1}" 
                 oncontextmenu="return false;" 
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
 * Abre el modal para visualizar una foto en su tamaño original
 * @param {string} url - URL de la imagen
 */
function openModal(url) {
    const modal = document.getElementById('photoModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = '';
    
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Foto ampliada';
    img.oncontextmenu = () => false;
    img.onerror = () => handleModalImageError(img);
    
    modalContent.appendChild(img);
    
    modal.style.display = 'flex';
    modal.classList.add('show');
    
    document.body.style.overflow = 'hidden';
    
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
// PROTECCIÓN CONTRA DESCARGA
// ========================================

/**
 * Previene el menú contextual (clic derecho)
 */
function preventContextMenu() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showWarning();
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
            showWarning();
            return false;
        }
        
        // Prevenir F12 (Herramientas de desarrollador)
        if (e.keyCode === 123) {
            e.preventDefault();
            showWarning();
            return false;
        }
        
        // Prevenir Ctrl+Shift+I (Herramientas de desarrollador)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            showWarning();
            return false;
        }
        
        // Prevenir Ctrl+U (Ver código fuente)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            showWarning();
            return false;
        }
        
        // Permitir Escape para cerrar modal
        if (e.keyCode === 27) {
            closeModal();
            closeWarningModal();
        }
    });
}

/**
 * Previene arrastrar imágenes
 */
function preventDragAndDrop() {
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        showWarning();
        return false;
    });
    
    document.addEventListener('drop', function(e) {
        e.preventDefault();
        return false;
    });
}

/**
 * Muestra advertencia de protección
 */
function showWarning() {
    const warningModal = document.getElementById('warningModal');
    warningModal.style.display = 'block';
    
    setTimeout(() => {
        closeWarningModal();
    }, 3000);
}

/**
 * Cierra el modal de advertencia
 */
function closeWarningModal() {
    const warningModal = document.getElementById('warningModal');
    warningModal.style.display = 'none';
}

/**
 * Protección adicional contra herramientas de desarrollador
 */
function protectDevTools() {
    setInterval(() => {
        if (window.outerHeight - window.innerHeight > 200 || 
            window.outerWidth - window.innerWidth > 200) {
            showWarning();
        }
    }, 1000);
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
// INICIALIZACIÓN
// ========================================

/**
 * Inicializa la aplicación cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar actividades
    renderActivities();
    
    // Aplicar protecciones
    preventContextMenu();
    preventKeyboardShortcuts();
    preventDragAndDrop();
    protectDevTools();
    
    // Mostrar información en consola
    console.log(`Galería cargada con ${getTotalPhotosCount()} fotos`);
    console.log('Protecciones activadas');
    
    // Protección adicional: limpiar consola cada 5 segundos
    setInterval(() => {
        console.clear();
        console.log('🔒 Contenido protegido - Colegio Magister 2B');
    }, 5000);
});

// ========================================
// PROTECCIÓN FINAL
// ========================================

// Prevenir inspección por consola
(function() {
    'use strict';
    const devtools = {
        open: false,
        orientation: null
    };
    
    const threshold = 160;
    
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                showWarning();
            }
        } else {
            devtools.open = false;
        }
    }, 500);
})();

// Protección contra modificación del código
Object.freeze(activities);
Object.freeze(activityIcons);
