export default []
  // Table of contents
  .concat("NOTOC", "FORCETOC", "TOC")
  // Editing
  .concat("NOEDITSECTION", "NEWSECTIONLINK", "NONEWSECTIONLINK")
  // Categories
  .concat("NOGALLERY", "HIDDENCAT", "EXPECTUNUSEDCATEGORY")
  // Language conversion
  .concat("NOCONTENTCONVERT", "NOCC", "NOTITLECONVERT", "NOTC")
  // Other
  .concat("START", "END", "INDEX", "NOINDEX", "STATICREDIRECT")
  // From Extensions
  .concat("NOGLOBAL", "DISAMBIG")
  .map((word) => `__${word}__`);
