
function calculateROI() {
    // Récupérer les valeurs des champs du formulaire
    const numEmployees = parseInt(document.getElementById('num-employees').value);
    const numHR = parseInt(document.getElementById('num-hr').value);
    const hoursAdmin = parseInt(document.getElementById('hours-admin').value);
    const errorRate = parseFloat(document.getElementById('error-rate').value) / 100;
    const costPerHour = parseFloat(document.getElementById('cost-per-hour').value);
    const annualSIRHCost = parseFloat(document.getElementById('annual-sirh-cost').value);
    const payroll = parseFloat(document.getElementById('payroll').value);

    // Calculer les économies potentielles
    const adminHoursSaved = hoursAdmin * 52; // Heures économisées par an
    const costSavedByAutomation = adminHoursSaved * costPerHour;
    const errorCostSaved = payroll * errorRate; // Risque d'erreur sur la masse salariale

    // Calculer le coût total du SIRH
    const totalSIRHCost = numEmployees * annualSIRHCost;

    // Calculer le ROI
    const totalSavings = costSavedByAutomation + errorCostSaved;
    const roi = (totalSavings - totalSIRHCost) / totalSIRHCost * 100;

    // Afficher le résultat
    document.getElementById('result').innerHTML = `
        <h2>Résultats du ROI</h2>
        <p>Économies réalisées grâce à l'automatisation : €${costSavedByAutomation.toFixed(2)}</p>
        <p>Économies réalisées grâce à la réduction des erreurs : €${errorCostSaved.toFixed(2)}</p>
        <p>Coût total du SIRH : €${totalSIRHCost.toFixed(2)}</p>
        <p>ROI : ${roi.toFixed(2)}%</p>
    `;

    // Expliquer le calcul du ROI
    document.getElementById('explanation').innerHTML = `
        <h2>Explication du Calcul du ROI</h2>
        <p>Le ROI (Retour sur Investissement) est calculé en utilisant la formule suivante :</p>
        <p><strong>ROI = (Économies Réalisées - Coût du SIRH) / Coût du SIRH * 100</strong></p>
        <p>Voici comment nous avons déterminé chaque valeur :</p>
        <ul>
            <li><strong>Économies réalisées grâce à l'automatisation</strong> : Nombre d'heures administratives économisées par semaine multiplié par le coût horaire des professionnels RH, puis multiplié par 52 semaines.</li>
            <li><strong>Économies réalisées grâce à la réduction des erreurs</strong> : Masse salariale annuelle multipliée par le taux d'erreur (en pourcentage).</li>
            <li><strong>Coût total du SIRH</strong> : Nombre de salariés multiplié par le coût annuel du SIRH par salarié.</li>
            <li><strong>ROI</strong> : (Total des économies réalisées moins le coût total du SIRH) divisé par le coût total du SIRH, le tout multiplié par 100 pour obtenir un pourcentage.</li>
        </ul>
        <h2>Autres Retours sur Investissement</h2>
        <p>En plus des économies calculables, l'implémentation d'un SIRH apporte de nombreux autres avantages :</p>
        <ul>
            <li><strong>Amélioration de la marque employeur</strong> : Une gestion RH moderne et efficace attire et retient les talents.</li>
            <li><strong>Amélioration de l'engagement des employés</strong> : Des processus simplifiés et une meilleure communication augmentent la satisfaction des employés.</li>
            <li><strong>Meilleure conformité</strong> : Réduction des risques de non-conformité grâce à une gestion centralisée et automatisée.</li>
            <li><strong>Prise de décision éclairée</strong> : Accès à des données précises et en temps réel pour des décisions stratégiques plus informées.</li>
            <li><strong>Réduction du turnover</strong> : Un meilleur environnement de travail contribue à réduire le taux de rotation du personnel.</li>
        </ul>
    `;
}
