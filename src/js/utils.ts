export const separateLastParagraph = (text: string, divider: string) => {
  const indexLastdividerStart = text.lastIndexOf(divider);
  const firstSection = text.slice(0, indexLastdividerStart);
  const lastsection = text.slice(indexLastdividerStart);
  return [firstSection, lastsection];
};