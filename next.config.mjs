/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true, // Muy importante para GitHub Pages
    output: 'export',     // Para hacer export estático
    images: {
      unoptimized: true,  // Evita errores si usas <Image />
    },
  };
  
  export default nextConfig;