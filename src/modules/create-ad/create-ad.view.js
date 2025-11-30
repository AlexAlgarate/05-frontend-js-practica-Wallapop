import { querySelectors as qs } from '../../utils/constants.js';

export const buildCreateAdForm = (ad = null) => {
  const isEditing = !!ad;
  const title = isEditing ? 'Editar anuncio' : 'Crea tu anuncio';
  const buttonText = isEditing ? 'Guardar cambios' : 'Crear anuncio';

  return `
    <div class="card shadow-lg p-4 rounded-4" style="max-width: 400px; width: 100%">
      <h1 class="text-center mb-4">${title}</h1>
      <form>
        <section id="notifications"></section>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="productName"
            placeholder="Nombre del producto"
            value="${ad?.name || ''}"
            required
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="productDescription"
            placeholder="Descripción del producto"
            maxlength="300"
            cols="30"
            rows="8"
            required
          >${ad?.description || ''}</textarea>
        </div>
        <div class="mb-3">
          <input
            type="number"
            class="form-control"
            id="productPrice"
            placeholder="Precio del producto (€)"
            value="${ad?.price || ''}"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="productImage"
            placeholder="URL de la imagen del producto"
            value="${ad?.imageURL || ''}"
          />
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCompraVenta"
            style="cursor: pointer"
            ${ad?.operationType === 'Venta' ? 'checked' : ''}
          />
          <label
            class="form-check-label"
            for="switchCompraVenta"
            id="labelCompraVenta"
          >
            ${ad?.operationType || ''}
          </label>
        </div>
        <button type="submit" class="btn ${qs.button.primary} w-100 mt-3">
          ${buttonText}
        </button>
        <a href="/" class="btn btn-link w-100 text-decoration-none text-secondary">
          ← Volver a la página principal
        </a>
      </form>
    </div>
  `;
};

export const buildCreateAdError = (message) => {
  return `
    <div class="text-center mt-5">
      <h3 class="text-danger mb-3">Error al cargar el anuncio</h3>
      <p class="text-muted mb-4">${
        message || 'Ha ocurrido un problema de conexión con el servidor.'
      }</p>
      <div class="d-flex justify-content-center gap-3">
        <a href="/" class="btn btn-outline-secondary">Volver al inicio</a>
        <button onclick="window.location.reload()" class="btn ${
          qs.button.primary
        }">Reintentar</button>
      </div>
    </div>
  `;
};
