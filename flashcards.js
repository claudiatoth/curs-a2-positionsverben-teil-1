// ============================================
// FLASHCARDS - Positionsverben Teil 1
// Claudia Toth · A2.1 · 32 carduri
// ============================================

const flashcardsData = [
    // === Verbele de POZIȚIE (5) ===
    { de: "liegen", ro: "a fi întins / a zace · Wo? + Dativ → das Buch liegt auf dem Tisch", audio: "audio/letters/liegen.wav" },
    { de: "stehen", ro: "a sta în picioare · Wo? + Dativ → die Flasche steht auf dem Tisch", audio: "audio/letters/stehen.wav" },
    { de: "sitzen", ro: "a sta așezat · Wo? + Dativ → Florian sitzt auf dem Stuhl", audio: "audio/letters/sitzen.wav" },
    { de: "stecken (Wo?)", ro: "a fi introdus înăuntru · Wo? + Dativ → der Schlüssel steckt im Schloss", audio: "audio/letters/stecken-wo.wav" },
    { de: "hängen (Wo?)", ro: "a atârna · Wo? + Dativ → das Foto hängt an der Wand", audio: "audio/letters/haengen-wo.wav" },

    // === Verbele de MIȘCARE (5) ===
    { de: "legen", ro: "a pune (orizontal) · Wohin? + Akkusativ → ich lege das Buch auf den Tisch", audio: "audio/letters/legen.wav" },
    { de: "stellen", ro: "a pune (vertical) · Wohin? + Akkusativ → Mihai stellt die Flasche auf den Tisch", audio: "audio/letters/stellen.wav" },
    { de: "setzen", ro: "a așeza pe cineva · Wohin? + Akkusativ → die Mutter setzt das Kind auf den Stuhl", audio: "audio/letters/setzen.wav" },
    { de: "stecken (Wohin?)", ro: "a introduce înăuntru · Wohin? + Akkusativ → ich stecke den Schlüssel in das Schloss", audio: "audio/letters/stecken-wohin.wav" },
    { de: "hängen (Wohin?)", ro: "a agăța · Wohin? + Akkusativ → Carolina hängt das Foto an die Wand", audio: "audio/letters/haengen-wohin.wav" },

    // === Wechselpräpositionen (9) ===
    { de: "in", ro: "în (înăuntru) · in der Klasse / in die Klasse", audio: "audio/letters/in.wav" },
    { de: "an", ro: "pe (perete) / la · an der Wand / an die Wand", audio: "audio/letters/an.wav" },
    { de: "auf", ro: "pe (orizontal) · auf dem Tisch / auf den Tisch", audio: "audio/letters/auf.wav" },
    { de: "vor", ro: "în fața · vor der Tür / vor die Tür", audio: "audio/letters/vor.wav" },
    { de: "hinter", ro: "în spatele · hinter dem Haus / hinter das Haus", audio: "audio/letters/hinter.wav" },
    { de: "über", ro: "deasupra · über dem Bett / über das Bett", audio: "audio/letters/ueber.wav" },
    { de: "unter", ro: "sub · unter dem Tisch / unter den Tisch", audio: "audio/letters/unter.wav" },
    { de: "neben", ro: "lângă · neben dem Stuhl / neben den Stuhl", audio: "audio/letters/neben.wav" },
    { de: "zwischen", ro: "între · zwischen den Büchern / zwischen die Bücher", audio: "audio/letters/zwischen.wav" },

    // === Forme contrase (4) ===
    { de: "im = in dem", ro: "în (Dativ) · im Zimmer = în cameră", audio: "audio/letters/im.wav" },
    { de: "ins = in das", ro: "în (Akkusativ) · ins Zimmer = (intru) în cameră", audio: "audio/letters/ins.wav" },
    { de: "am = an dem", ro: "la (Dativ) · am Fenster = la fereastră", audio: "audio/letters/am.wav" },
    { de: "ans = an das", ro: "la (Akkusativ) · ans Fenster = (merg) la fereastră", audio: "audio/letters/ans.wav" },

    // === Articole + cazuri (8) ===
    { de: "der → den (Akk)", ro: "masculin la Akkusativ · auf den Tisch", audio: "audio/letters/der-den.wav" },
    { de: "der → dem (Dat)", ro: "masculin la Dativ · auf dem Tisch", audio: "audio/letters/der-dem.wav" },
    { de: "die → die (Akk fem)", ro: "feminin la Akkusativ · an die Wand", audio: "audio/letters/die-die-akk.wav" },
    { de: "die → der (Dat fem)", ro: "feminin la Dativ · an der Wand", audio: "audio/letters/die-der.wav" },
    { de: "das → das (Akk neutru)", ro: "neutru la Akkusativ · in das Zimmer", audio: "audio/letters/das-das.wav" },
    { de: "das → dem (Dat neutru)", ro: "neutru la Dativ · in dem Zimmer", audio: "audio/letters/das-dem.wav" },
    { de: "die → die (Akk plural)", ro: "plural la Akkusativ · auf die Tische", audio: "audio/letters/die-pl-akk.wav" },
    { de: "die → den (+n) (Dat plural)", ro: "plural la Dativ + n la substantiv · auf den Tischen", audio: "audio/letters/die-den-pl.wav" },

    // === Întrebări (1) ===
    { de: "Wo? vs. Wohin?", ro: "Wo = unde (poziție, Dativ) · Wohin = încotro (mișcare, Akkusativ)", audio: "audio/letters/wo-wohin.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (5 verbe poziție · 5 verbe mișcare · 9 Wechselpräpositionen · 4 forme contrase · 8 articole + cazuri · 1 sumar).<br>
            Click pe card pentru a vedea traducerea. Click pe 🔊 pentru a auzi pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

// Init direct
buildFlashcards();
