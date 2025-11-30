export const dispatchCustomEvent = (container, eventName, detail = null) => {
  const event = new CustomEvent(eventName, detail ? { detail } : {});
  container.dispatchEvent(event);
};
