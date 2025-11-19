export const buildNotification = (message, type) => {
  return `
    <div style="display: flex; gap: 1rem; width: fit-content" class="${type}">
        <h3>${message}</h3>
        <button>❌</button>
    </div>
    `;
};
