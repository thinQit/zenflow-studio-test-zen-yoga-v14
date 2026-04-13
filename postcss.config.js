/**
 * PostCSS config for Next.js.
 *
 * The build was failing because `postcss-flexbugs-fixes` was referenced but not
 * installed. Next.js works fine without it; Autoprefixer covers the important
 * vendor prefixing.
 */
module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
  },
};
