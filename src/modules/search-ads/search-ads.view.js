import { querySelectors as qs} from '../../utils/constants.js';

export const buildSearchForm = () => {
  return `
    <div class="card shadow-sm mb-4" style="max-width: 600px; width: 100%;">
      <div class="card-body">
        <form id="searchForm" class="d-flex gap-2">
          <input
            type="text"
            class="form-control"
            id="searchInput"
            placeholder="Buscar por nombre o descripción..."
            required
          />
          <button type="submit" class="btn ${qs.buttons.primary} text-nowrap">
            Buscar
          </button>
          <button type="button" id="clearSearch" class="btn ${qs.buttons.outlinePrimary} text-nowrap">
            Limpiar
          </button>
        </form>
      </div>
    </div>
  `;
};

export const buildNoResultsView = (searchTerm) => {
  return `
    <div class="col-12 text-center mt-5">
      <h3 class="text-muted">No se encontraron resultados</h3>
      <p class="lead">No hay anuncios que coincidan con "<strong style="font-weight: 800;">${searchTerm}</strong>"</p>
      <button id="clearSearchFromResults" class="btn ${qs.buttons.primary} mt-3">
        Ver todos los anuncios
      </button>
    </div>
  `;
};
