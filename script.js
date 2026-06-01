function calcular() {

    let residuos = parseFloat(
        document.getElementById("residuos").value
    );

    let dias = parseInt(
        document.getElementById("dias").value
    );

    const resultado =
        document.getElementById("resultado");

    if (
        isNaN(residuos) ||
        isNaN(dias) ||
        residuos <= 0 ||
        dias <= 0
    ) {
        resultado.innerHTML =
            "⚠️ Insira valores válidos.";
        return;
    }

    let total = residuos * dias;

    // Aproximadamente 40% vira composto
    let adubo = total * 0.4;

    resultado.innerHTML = `
        ✅ Você evitou que
        <strong>${total.toFixed(1)} kg</strong>
        de resíduos fossem enviados aos aterros.
        <br><br>

        🌿 Estimativa de adubo produzido:
        <strong>${adubo.toFixed(1)} kg</strong>.
    `;
}
