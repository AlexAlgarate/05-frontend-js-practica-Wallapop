export const validationErrorEvent = (customEvent, message, arrayErrors) => {
  const errorEvent = new CustomEvent(customEvent, {
    detail: {
      message,
      type: 'error',
    },
  });
  arrayErrors.push(errorEvent);
};
