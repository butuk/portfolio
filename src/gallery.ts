// Free-form image stream after the cases. No titles or captions: just pictures, in this order.
// Each item is an image from media-src/gallery/ (src without extension) or, for now, a placeholder.
export type Shot = { src?: string; ratio: number; color?: string; alt?: string };

// Placeholders with varied proportions (width / height) to preview the layout.
export const gallery: Shot[] = [
  { ratio: 4 / 5, color: '#d9d3c7' },
  { ratio: 16 / 10, color: '#c9d4dc' },
  { ratio: 1, color: '#e7d9b0' },
  { ratio: 3 / 4, color: '#cfd8c6' },
  { ratio: 4 / 3, color: '#e3c9c3' },
  { ratio: 9 / 16, color: '#c7cde2' },
  { ratio: 3 / 2, color: '#dcd6e8' },
  { ratio: 1, color: '#c3dcd6' },
  { ratio: 2 / 3, color: '#e6d3bd' },
  { ratio: 16 / 9, color: '#d4d4d4' },
  { ratio: 4 / 5, color: '#cdd9e6' },
  { ratio: 5 / 4, color: '#e1d7c8' },
];
