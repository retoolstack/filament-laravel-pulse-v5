let preset = null;
try {
    preset = require('./vendor/filament/filament/tailwind.config.preset');
} catch (e) {
    // Preset not found, will use default Tailwind config
}

const container = require('@tailwindcss/container-queries');

const config = {
    content: [
        './resources/views/**/*.blade.php',
        './vendor/laravel/pulse/resources/views/**/*.blade.php',
    ],
    plugins: [container],
};

if (preset) {
    config.presets = [preset];
}

module.exports = config;
