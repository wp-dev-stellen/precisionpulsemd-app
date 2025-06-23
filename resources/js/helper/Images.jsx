const images = {};

const modules = import.meta.glob('../assets/img/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
});

for (const path in modules) {
  const fileName = path.split('/').pop();
  images[fileName] = modules[path].default;
}

export default images;