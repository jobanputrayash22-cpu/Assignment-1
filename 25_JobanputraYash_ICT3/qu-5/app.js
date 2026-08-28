const AdmZip = require("adm-zip");

const zip = new AdmZip("compressed.zip");

zip.extractAllTo("extracted", true);

console.log("ZIP file extracted successfully!");