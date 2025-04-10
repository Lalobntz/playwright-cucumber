// cucumber.js
require('ts-node/register');

module.exports = {
    default: [
        '--require-module ts-node/register',             // Permite ejecutar archivos TS sin compilación previa
        '--require src/test/step_definitions/**/*.ts',   // Ruta de los step definitions
        '--require src/test/support/**/*.ts',            // Ruta de los hooks u otros archivos de soporte
        '--format summary'                               // Formato de salida
    ].join(' ')
};