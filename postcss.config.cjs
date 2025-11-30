module.exports = {
    plugins: {
        "postcss-import": {},
        "tailwindcss/nesting": {},
        'postcss-url': {
            url: 'inline'
        },
        'postcss-assets': {},
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
}
