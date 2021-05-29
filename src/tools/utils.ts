export const getImageUrl = (src: string) => {
  return `${process.env.REACT_APP_IMAGE_URL}${src}`;
};
