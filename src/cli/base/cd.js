export const cd = (path) => {
  try {
    process.chdir(path);
  } catch (error) {
    console.error(error)
  }
}