export const buildNotification = (message, type) => {
  return `
    <div style="display: flex; gap: 1rem; width: fit-content; margin-top: 1.5rem;" class="${type} alert alert-secondary" role="alert">
        <h3>${message}</h3>
        <button class="btn btn-outline-danger">❌</button>
    </div>
    `;
};
