const arr = new Set( [
    "Ado", "Cor","Mai", "Bip","Ski","Atre","Rhum","Thym","Lynx", "jazz", "yack","Banjo","Igloo","Moult","Tyran","Acajou","Azimut","Hochet","Cercle","Faucon","Coccyx","Whisky","Bretzel","Panique","Strophe","Vautour","Clavecin","Logiciel","Toujours","Triangle","Utopique","Aseptiser","Ascension","Klaxonner","Mascarade","Printemps","Tambourin","Xylophone"
])

let randWord = Math.floor(Math.random() * arr.size);

let nx =Array.from(arr)[randWord];

console.log(nx)


const chars = nx.split('');
console.log(chars[2]);