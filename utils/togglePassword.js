export const initPasswordToggle = (buttonId, inputId, iconId) => {
  const button = document.getElementById(buttonId);
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);

  if (!button || !input || !icon) {
    console.warn(
      `Password toggle: No se encontraron los elementos ${buttonId}, ${inputId}, ${iconId}`
    );
    return;
  }

  button.addEventListener('click', () => {
    const isPassword = input.type === 'password';

    // Cambiar tipo de input
    input.type = isPassword ? 'text' : 'password';

    // Actualizar icono
    if (isPassword) {
      // Icono de "ojo tachado" (password visible)
      icon.innerHTML = `
        <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/>
        <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/>
        <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/>
        <path d="m2 2 20 20"/>
      `;
    } else {
      // Icono de "ojo normal" (password oculta)
      icon.innerHTML = `
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
        <circle cx="12" cy="12" r="3"/>
      `;
    }
  });
};

export const getPasswordToggleButton = (buttonId, iconId) => {
  return `
    <button type="button" id="${buttonId}" class="btn btn-outline-secondary">
      <svg
        id="${iconId}"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-eye"
      >
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    </button>
  `;
};
