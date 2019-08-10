/**
 * Google Maps API loves to override fonts by injecting it's own in header.
 * This function can be used to prevent that.
 */
export const stopFontOverride = () => {
  const head = document.getElementsByTagName('head')[0];
  const { insertBefore } = head;
  head.insertBefore = (newElement, referenceElement) => {
    if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') > -1) {
      return;
    }
    insertBefore.call(head, newElement, referenceElement);
  };
};

export const generateHash = (length) => {
  if (length < 1 || length > 36) {
    length = 10;
  }
  return Math.random().toString(36).substring(length);
};