module.exports = logger;

function logger(value) {
    console.log(`[logger][${ new Date().toISOString() }] ${ value }`);
}