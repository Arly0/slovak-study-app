export const NormilizeString = (text:string|null) => {
  // Remove style tags and content
  if (!text) {
    return null;
  }
  return text.replace(/<style[^>]*>.*<\/style>/gm, '')
    // Remove script tags and content
    .replace(/<script[^>]*>.*<\/script>/gm, '')
    // Remove all opening, closing and orphan HTML tags
    .replace(/<[^>]+>/gm, '')
    // Remove leading spaces and repeated CR/LF
    .replace(/([\r\n]+ +)+/gm, '');
}