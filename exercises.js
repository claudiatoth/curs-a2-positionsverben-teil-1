// ============================================
// EXERCIȚII - Positionsverben — Wo? Wohin? (Teil 1)
// Claudia Toth · A2.1 · 5 exerciții
// ============================================

// Normalizare răspuns: acceptă AMBELE forme (cu/fără diacritice germane)
function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s+/g, ' ')
        .replace(/[.,!?;:]/g, '');
}

// ============================================
// EX 1: Wo sau Wohin? (multiple choice)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Das Buch liegt auf dem Tisch.', options: ['Wo?', 'Wohin?'], correct: 'Wo?', explanation: 'Verbul „liegt" (e întinsă) = POZIȚIE statică → Wo? + Dativ (dem Tisch).' },
    { id: 'b', sentence: 'Ich lege das Buch auf den Tisch.', options: ['Wo?', 'Wohin?'], correct: 'Wohin?', explanation: 'Verbul „lege" (pun) = MIȘCARE → Wohin? + Akkusativ (den Tisch).' },
    { id: 'c', sentence: 'Annette steht vor der Tafel.', options: ['Wo?', 'Wohin?'], correct: 'Wo?', explanation: '„steht" (stă în picioare) = POZIȚIE → Wo? + Dativ (der Tafel).' },
    { id: 'd', sentence: 'Carolina hängt das Foto an die Wand.', options: ['Wo?', 'Wohin?'], correct: 'Wohin?', explanation: '„hängt" + obiect (das Foto) + agață ACUM = MIȘCARE → Wohin? + Akkusativ (die Wand).' },
    { id: 'e', sentence: 'Florian sitzt auf dem Stuhl.', options: ['Wo?', 'Wohin?'], correct: 'Wo?', explanation: '„sitzt" (stă așezat) = POZIȚIE → Wo? + Dativ (dem Stuhl).' },
    { id: 'f', sentence: 'Andreea geht in das Café.', options: ['Wo?', 'Wohin?'], correct: 'Wohin?', explanation: '„geht in" (merge în) = MIȘCARE → Wohin? + Akkusativ (das Café).' },
    { id: 'g', sentence: 'Mihai stellt die Flasche in den Kühlschrank.', options: ['Wo?', 'Wohin?'], correct: 'Wohin?', explanation: '„stellt" (pune în picioare) = MIȘCARE → Wohin? + Akkusativ (den Kühlschrank).' },
    { id: 'h', sentence: 'Der Schlüssel steckt im Schloss.', options: ['Wo?', 'Wohin?'], correct: 'Wo?', explanation: '„steckt" + e ACOLO = POZIȚIE → Wo? + Dativ (im = in + dem Schloss).' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Citește propoziția și alege întrebarea potrivită.</strong><br><em>Reamintire:</em> Wo? = poziție statică (Dativ) · Wohin? = mișcare către un loc (Akkusativ).</div>`;
    ex1Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex1-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex1-${it.id}-${k}"><label for="ex1-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label><span class="nomen-highlight">${it.sentence}</span></label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex1-${it.id}"]:checked`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EX 2: Articol Dativ sau Akkusativ? (text completion)
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Das Buch liegt auf ___ Tisch. (der Tisch — masculin)', correct: 'dem', accept: ['dem'], hint: 'Wo? → Dativ masc.' },
    { id: 'b', sentence: 'Ich lege das Buch auf ___ Tisch. (der Tisch)', correct: 'den', accept: ['den'], hint: 'Wohin? → Akk masc.' },
    { id: 'c', sentence: 'Annette steht vor ___ Tafel. (die Tafel — feminin)', correct: 'der', accept: ['der'], hint: 'Wo? → Dativ fem.' },
    { id: 'd', sentence: 'Carolina hängt das Foto an ___ Wand. (die Wand — feminin)', correct: 'die', accept: ['die'], hint: 'Wohin? → Akk fem.' },
    { id: 'e', sentence: 'Andreea sitzt in ___ Klasse. (die Klasse — feminin)', correct: 'der', accept: ['der'], hint: 'Wo? → Dativ fem.' },
    { id: 'f', sentence: 'Mihai stellt die Flasche in ___ Kühlschrank. (der Kühlschrank)', correct: 'den', accept: ['den'], hint: 'Wohin? → Akk masc.' },
    { id: 'g', sentence: 'Die Kinder spielen vor ___ Haus. (das Haus — neutru)', correct: 'dem', accept: ['dem'], hint: 'Wo? → Dativ neutru' },
    { id: 'h', sentence: 'Acar geht in ___ Werkstatt. (die Werkstatt — feminin)', correct: 'die', accept: ['die'], hint: 'Wohin? → Akk fem.' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Completează cu articolul potrivit (Dativ sau Akkusativ).</strong><br><em>Reamintire:</em> Wo? (poziție) → Dat: dem/der/dem/den · Wohin? (mișcare) → Akk: den/die/das/die.</div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${it.sentence} <small style="color:#6b7280;">💡 ${it.hint}</small></label><input type="text" id="ex2-${it.id}" placeholder="articol"></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = normalizeAnswer(inp.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EX 3: Verbul potrivit — liegen/legen, stehen/stellen etc.
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Das Buch ___ auf dem Tisch.', options: ['liegt', 'legt'], correct: 'liegt', explanation: 'Pe „dem Tisch" (Dativ) = poziție → liegt (e întinsă).' },
    { id: 'b', sentence: 'Mihai ___ den Apfel auf den Tisch.', options: ['liegt', 'legt'], correct: 'legt', explanation: 'Pe „den Tisch" (Akkusativ) = mișcare → legt (pune).' },
    { id: 'c', sentence: 'Die Flasche ___ im Kühlschrank.', options: ['steht', 'stellt'], correct: 'steht', explanation: 'În „im (in dem) Kühlschrank" (Dativ) = poziție → steht.' },
    { id: 'd', sentence: 'Annette ___ den Stuhl an die Tafel.', options: ['steht', 'stellt'], correct: 'stellt', explanation: 'La „die Tafel" (Akkusativ) = mișcare → stellt (pune în picioare).' },
    { id: 'e', sentence: 'Florian ___ auf dem Stuhl.', options: ['sitzt', 'setzt'], correct: 'sitzt', explanation: 'Pe „dem Stuhl" (Dativ) = poziție → sitzt (stă așezat).' },
    { id: 'f', sentence: 'Die Mutter ___ das Kind auf den Stuhl.', options: ['sitzt', 'setzt'], correct: 'setzt', explanation: 'Pe „den Stuhl" (Akkusativ) = mișcare → setzt (așază).' },
    { id: 'g', sentence: 'Das Foto ___ an der Wand.', options: ['hängt', 'hängt (mișcare)'], correct: 'hängt', explanation: 'La „der Wand" (Dativ) = poziție → hängt (atârnă). Verb identic, dar caz Dativ!' },
    { id: 'h', sentence: 'Carolina ___ das Foto an die Wand.', options: ['hängt (poziție)', 'hängt (mișcare)'], correct: 'hängt (mișcare)', explanation: 'La „die Wand" (Akkusativ) + subiect (Carolina) acționează = mișcare → hängt (agață).' }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Alege verbul potrivit pentru context.</strong><br><em>Trucul:</em> uite-te la articolul după prepoziție — dacă e Dativ (dem, der), folosește verbul de poziție. Dacă e Akkusativ (den, die, das), folosește verbul de mișcare.</div>`;
    ex3Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex3-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex3-${it.id}-${k}"><label for="ex3-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label><span class="nomen-highlight">${it.sentence}</span></label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex3-${it.id}"]:checked`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EX 4: Asociază perechile (poziție ↔ mișcare)
// ============================================
const ex4Data = [
    { id: 'a', verb: 'liegen', options: ['legen', 'stellen', 'setzen', 'hängen'], correct: 'legen', explanation: 'liegen (a fi întins) ↔ legen (a pune orizontal).' },
    { id: 'b', verb: 'stehen', options: ['legen', 'stellen', 'setzen', 'stecken'], correct: 'stellen', explanation: 'stehen (a sta în picioare) ↔ stellen (a pune vertical).' },
    { id: 'c', verb: 'sitzen', options: ['legen', 'stellen', 'setzen', 'hängen'], correct: 'setzen', explanation: 'sitzen (a sta așezat) ↔ setzen (a așeza pe cineva).' },
    { id: 'd', verb: 'stecken (Wo?)', options: ['legen', 'stellen', 'stecken (Wohin?)', 'hängen'], correct: 'stecken (Wohin?)', explanation: 'stecken (a fi introdus) ↔ stecken (a introduce) — același verb, caz diferit!' },
    { id: 'e', verb: 'hängen (Wo?)', options: ['legen', 'stellen', 'setzen', 'hängen (Wohin?)'], correct: 'hängen (Wohin?)', explanation: 'hängen (a atârna) ↔ hängen (a agăța) — același verb, caz diferit!' }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Alege verbul-pereche de MIȘCARE pentru fiecare verb de POZIȚIE.</strong></div>`;
    ex4Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex4-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex4-${it.id}-${k}"><label for="ex4-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>Poziție: <span class="nomen-highlight">${it.verb}</span> ↔ Mișcare: ?</label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex4-${it.id}"]:checked`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex4Data.length };
}

// ============================================
// EX 5: Wechselpräpositionen complete (din PDF original, Ex 4)
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Ich lege das Buch ___ ___ Tisch. (der Tisch · Wohin?)', correct: 'auf den', accept: ['auf den', 'auf den.'], hint: 'auf + Akkusativ masc.' },
    { id: 'b', sentence: 'Es liegt jetzt ___ ___ Tisch. (der Tisch · Wo?)', correct: 'auf dem', accept: ['auf dem'], hint: 'auf + Dativ masc.' },
    { id: 'c', sentence: 'Er hängt die Jacke ___ ___ Haken. (der Haken · Wohin?)', correct: 'an den', accept: ['an den'], hint: 'an + Akkusativ masc.' },
    { id: 'd', sentence: 'Sie hängt jetzt ___ ___ Haken. (der Haken · Wo?)', correct: 'an dem', accept: ['an dem', 'am'], hint: 'an + Dativ masc. (sau forma contrasă „am")' },
    { id: 'e', sentence: 'Annette setzt Andreea ___ ___ Stuhl. (der Stuhl · Wohin?)', correct: 'auf den', accept: ['auf den'], hint: 'auf + Akkusativ masc.' },
    { id: 'f', sentence: 'Andreea sitzt jetzt ___ ___ Stuhl. (der Stuhl · Wo?)', correct: 'auf dem', accept: ['auf dem'], hint: 'auf + Dativ masc.' },
    { id: 'g', sentence: 'Andreea geht ___ ___ Klasse. (die Klasse · Wohin?)', correct: 'in die', accept: ['in die'], hint: 'in + Akkusativ fem.' },
    { id: 'h', sentence: 'Andreea ist jetzt ___ ___ Klasse. (die Klasse · Wo?)', correct: 'in der', accept: ['in der'], hint: 'in + Dativ fem.' },
    { id: 'i', sentence: 'Mihai bringt den Wein ___ ___ Keller. (der Keller · Wohin?)', correct: 'in den', accept: ['in den'], hint: 'in + Akkusativ masc.' }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Completează cu prepoziția și articolul potrivit.</strong><br><em>Reamintire:</em> aceeași prepoziție (in, an, auf etc.) ia <strong>Dativ</strong> la Wo? și <strong>Akkusativ</strong> la Wohin?.</div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${it.sentence} <small style="color:#6b7280;">💡 ${it.hint}</small></label><input type="text" id="ex5-${it.id}" placeholder="prepoziție + articol"></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = normalizeAnswer(inp.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

// INIT
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
