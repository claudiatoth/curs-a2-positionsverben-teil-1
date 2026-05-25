// ============================================
// VERB-KONJUGATION — Positionsverben Teil 1 (Atelier A2)
// Claudia Toth · 5 perechi Wechselverben (poziție vs. mișcare)
// Conjugări PONS-verified: Präsens + Präteritum + Perfekt
// ============================================

const verbsData = [
    // ========== PERECHEA 1: liegen / legen ==========
    {
        inf: 'liegen', ro: 'a sta întins / a fi situat', typ: 'tare / neregulat · poziție', aux: 'haben', part: 'gelegen',
        praes: [['ich','liege','stau întins'],['du','liegst','stai întins'],['er/sie/es','liegt','stă întins'],['wir','liegen','stăm întinși'],['ihr','liegt','stați întinși'],['sie/Sie','liegen','stau întinși']],
        praet: [['ich','lag','stăteam întins'],['du','lagst','stăteai întins'],['er/sie/es','lag','stătea întins'],['wir','lagen','stăteam întinși'],['ihr','lagt','stăteați întinși'],['sie/Sie','lagen','stăteau întinși']],
        perf: [['ich','habe gelegen','am stat întins'],['du','hast gelegen','ai stat întins'],['er/sie/es','hat gelegen','a stat întins'],['wir','haben gelegen','am stat întinși'],['ihr','habt gelegen','ați stat întinși'],['sie/Sie','haben gelegen','au stat întinși']],
        note: 'INTRANSITIV (fără obiect). Wo? Cere DATIV. Ex: Das Buch liegt AUF DEM Tisch.'
    },
    {
        inf: 'legen', ro: 'a pune (întins) / a așeza', typ: 'regulat · mișcare', aux: 'haben', part: 'gelegt',
        praes: [['ich','lege','pun'],['du','legst','pui'],['er/sie/es','legt','pune'],['wir','legen','punem'],['ihr','legt','puneți'],['sie/Sie','legen','pun']],
        praet: [['ich','legte','puneam'],['du','legtest','puneai'],['er/sie/es','legte','punea'],['wir','legten','puneam'],['ihr','legtet','puneați'],['sie/Sie','legten','puneau']],
        perf: [['ich','habe gelegt','am pus'],['du','hast gelegt','ai pus'],['er/sie/es','hat gelegt','a pus'],['wir','haben gelegt','am pus'],['ihr','habt gelegt','ați pus'],['sie/Sie','haben gelegt','au pus']],
        note: 'TRANSITIV (cere obiect direct). Wohin? Cere AKKUSATIV. Ex: Ich lege das Buch AUF DEN Tisch.'
    },

    // ========== PERECHEA 2: stehen / stellen ==========
    {
        inf: 'stehen', ro: 'a sta în picioare / a fi așezat vertical', typ: 'tare / neregulat · poziție', aux: 'haben', part: 'gestanden',
        praes: [['ich','stehe','stau în picioare'],['du','stehst','stai în picioare'],['er/sie/es','steht','stă în picioare'],['wir','stehen','stăm în picioare'],['ihr','steht','stați în picioare'],['sie/Sie','stehen','stau în picioare']],
        praet: [['ich','stand','stăteam în picioare'],['du','standst','stăteai în picioare'],['er/sie/es','stand','stătea în picioare'],['wir','standen','stăteam în picioare'],['ihr','standet','stăteați în picioare'],['sie/Sie','standen','stăteau în picioare']],
        perf: [['ich','habe gestanden','am stat în picioare'],['du','hast gestanden','ai stat în picioare'],['er/sie/es','hat gestanden','a stat în picioare'],['wir','haben gestanden','am stat în picioare'],['ihr','habt gestanden','ați stat în picioare'],['sie/Sie','haben gestanden','au stat în picioare']],
        note: 'INTRANSITIV. Wo? + DATIV. Ex: Die Vase steht AUF DEM Regal.'
    },
    {
        inf: 'stellen', ro: 'a așeza vertical / a pune în picioare', typ: 'regulat · mișcare', aux: 'haben', part: 'gestellt',
        praes: [['ich','stelle','așez'],['du','stellst','așezi'],['er/sie/es','stellt','așază'],['wir','stellen','așezăm'],['ihr','stellt','așezați'],['sie/Sie','stellen','așază']],
        praet: [['ich','stellte','așezam'],['du','stelltest','așezai'],['er/sie/es','stellte','așeza'],['wir','stellten','așezam'],['ihr','stelltet','așezați'],['sie/Sie','stellten','așezau']],
        perf: [['ich','habe gestellt','am așezat'],['du','hast gestellt','ai așezat'],['er/sie/es','hat gestellt','a așezat'],['wir','haben gestellt','am așezat'],['ihr','habt gestellt','ați așezat'],['sie/Sie','haben gestellt','au așezat']],
        note: 'TRANSITIV. Wohin? + AKKUSATIV. Ex: Ich stelle die Vase AUF DAS Regal.'
    },

    // ========== PERECHEA 3: sitzen / setzen ==========
    {
        inf: 'sitzen', ro: 'a sta așezat / a ședea', typ: 'tare / neregulat · poziție', aux: 'haben', part: 'gesessen',
        praes: [['ich','sitze','stau așezat'],['du','sitzt','stai așezat'],['er/sie/es','sitzt','stă așezat'],['wir','sitzen','stăm așezați'],['ihr','sitzt','stați așezați'],['sie/Sie','sitzen','stau așezați']],
        praet: [['ich','saß','stăteam așezat'],['du','saßt','stăteai așezat'],['er/sie/es','saß','stătea așezat'],['wir','saßen','stăteam așezați'],['ihr','saßt','stăteați așezați'],['sie/Sie','saßen','stăteau așezați']],
        perf: [['ich','habe gesessen','am stat așezat'],['du','hast gesessen','ai stat așezat'],['er/sie/es','hat gesessen','a stat așezat'],['wir','haben gesessen','am stat așezați'],['ihr','habt gesessen','ați stat așezați'],['sie/Sie','haben gesessen','au stat așezați']],
        note: 'INTRANSITIV. Wo? + DATIV. Ex: Mihai sitzt AUF DEM Stuhl.'
    },
    {
        inf: 'setzen', ro: 'a așeza pe ceva / a (se) așeza', typ: 'regulat · mișcare', aux: 'haben', part: 'gesetzt',
        praes: [['ich','setze','așez'],['du','setzt','așezi'],['er/sie/es','setzt','așază'],['wir','setzen','așezăm'],['ihr','setzt','așezați'],['sie/Sie','setzen','așază']],
        praet: [['ich','setzte','așezam'],['du','setztest','așezai'],['er/sie/es','setzte','așeza'],['wir','setzten','așezam'],['ihr','setztet','așezați'],['sie/Sie','setzten','așezau']],
        perf: [['ich','habe gesetzt','am așezat'],['du','hast gesetzt','ai așezat'],['er/sie/es','hat gesetzt','a așezat'],['wir','haben gesetzt','am așezat'],['ihr','habt gesetzt','ați așezat'],['sie/Sie','haben gesetzt','au așezat']],
        note: 'TRANSITIV (deseori reflexiv: sich setzen = a se așeza). Wohin? + AKKUSATIV. Ex: Mihai setzt sich AUF DEN Stuhl.'
    },

    // ========== PERECHEA 4: hängen DOUBLET ==========
    {
        inf: 'hängen (TARE)', ro: 'a fi atârnat / a atârna (intransitiv)', typ: 'tare / neregulat · poziție', aux: 'haben', part: 'gehangen',
        praes: [['ich','hänge','atârn'],['du','hängst','atârni'],['er/sie/es','hängt','atârnă'],['wir','hängen','atârnăm'],['ihr','hängt','atârnați'],['sie/Sie','hängen','atârnă']],
        praet: [['ich','hing','atârnam'],['du','hingst','atârnai'],['er/sie/es','hing','atârna'],['wir','hingen','atârnam'],['ihr','hingt','atârnați'],['sie/Sie','hingen','atârnau']],
        perf: [['ich','habe gehangen','am atârnat (eram atârnat)'],['du','hast gehangen','ai atârnat'],['er/sie/es','hat gehangen','a atârnat'],['wir','haben gehangen','am atârnat'],['ihr','habt gehangen','ați atârnat'],['sie/Sie','haben gehangen','au atârnat']],
        note: '🚨 DOUBLET! Forma TARE (hing/gehangen) = INTRANSITIV (poziție, Wo? + Dativ). Ex: Das Foto hing AN DER Wand.'
    },
    {
        inf: 'hängen (REGULAT)', ro: 'a agăța / a pune să atârne (transitiv)', typ: 'regulat · mișcare', aux: 'haben', part: 'gehängt',
        praes: [['ich','hänge','agăț'],['du','hängst','agăți'],['er/sie/es','hängt','agață'],['wir','hängen','agățăm'],['ihr','hängt','agățați'],['sie/Sie','hängen','agață']],
        praet: [['ich','hängte','agățam'],['du','hängtest','agățai'],['er/sie/es','hängte','agăța'],['wir','hängten','agățam'],['ihr','hängtet','agățați'],['sie/Sie','hängten','agățau']],
        perf: [['ich','habe gehängt','am agățat'],['du','hast gehängt','ai agățat'],['er/sie/es','hat gehängt','a agățat'],['wir','haben gehängt','am agățat'],['ihr','habt gehängt','ați agățat'],['sie/Sie','haben gehängt','au agățat']],
        note: '🚨 DOUBLET! Forma REGULATĂ (hängte/gehängt) = TRANSITIV (mișcare, Wohin? + Akkusativ). Ex: Ich hängte das Foto AN DIE Wand. Präsens-ul e IDENTIC cu forma tare — diferența se vede DOAR la Präteritum/Perfekt!'
    },

    // ========== PERECHEA 5: stecken ==========
    {
        inf: 'stecken', ro: 'a băga / a fi băgat (poziție SAU mișcare)', typ: 'regulat · poziție ȘI mișcare', aux: 'haben', part: 'gesteckt',
        praes: [['ich','stecke','bag'],['du','steckst','bagi'],['er/sie/es','steckt','bagă'],['wir','stecken','băgăm'],['ihr','steckt','băgați'],['sie/Sie','stecken','bagă']],
        praet: [['ich','steckte','băgam'],['du','stecktest','băgai'],['er/sie/es','steckte','băga'],['wir','steckten','băgam'],['ihr','stecktet','băgați'],['sie/Sie','steckten','băgau']],
        perf: [['ich','habe gesteckt','am băgat'],['du','hast gesteckt','ai băgat'],['er/sie/es','hat gesteckt','a băgat'],['wir','haben gesteckt','am băgat'],['ihr','habt gesteckt','ați băgat'],['sie/Sie','haben gesteckt','au băgat']],
        note: '🌟 UNIC! stecken funcționează ATÂT pentru poziție (Wo? + Dativ) CÂT și pentru mișcare (Wohin? + Akkusativ). Ex poziție: Der Schlüssel steckt IM Schloss. Ex mișcare: Ich stecke den Schlüssel INS Schloss.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe Wechselverben</strong> — Präsens + Präteritum + Perfekt complet.<br>' +
        '5 PERECHI: poziție (tare/neregulat, Wo? + Dat) vs. mișcare (regulat, Wohin? + Akk).<br>' +
        '<em>💡 Click pe un verb să vezi conjugarea completă.</em>' +
        '</div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('open');
}

buildVerbs();
