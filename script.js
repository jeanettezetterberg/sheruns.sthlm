function visaSchema() {
    const schema = document.getElementById('schema');
    schema.innerHTML = `
        <h3>Veckoschema</h3>
        <table border="1" cellpadding="10">
            <tr><th>Dag</th><th>Träning</th><th>Plats</th></tr>
            <tr><td>Måndag</td><td>Intervall</td><td>Tantolunden</td></tr>
            <tr><td>Onsdag</td><td>Lugn distans</td><td>Djurgården</td></tr>
            <tr><td>Lördag</td><td>Långpass + fika</td><td>Varierande</td></tr>
        </table>
    `;
    schema.style.display = 'block';
}

// Enkel validering vid formsubmit
const kontaktform = document.getElementById('kontaktform');
kontaktform.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Tack för ditt meddelande! Vi hör av oss snart.');
    kontaktform.reset();
});