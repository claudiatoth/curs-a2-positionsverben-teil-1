// ============================================
// TEORIE - Positionsverben — Wo? Wohin? + Wechselverben (Teil 1)
// Claudia Toth · A2.1 · Curs autorizat de limba germană
// ============================================

const theoryHTML = `
    <!-- 0: Regula de aur Wo / Wohin -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🎯 1. Regula de aur — Wo? vs. Wohin?</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-wo-wohin.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ss</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ß</code></li>
                            <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ae</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ä</code></li>
                            <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">oe</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ö</code></li>
                            <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ue</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat. Eu așa am început — fără tastatură germană!"</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>Două întrebări, două cazuri diferite</h4>
                <p>În germană, aceeași prepoziție (de exemplu „<strong>auf</strong>") poate fi urmată de două cazuri diferite — depinde dacă întrebi:</p>
                <ul>
                    <li>📍 <strong>Wo?</strong> = <strong>Unde?</strong> (poziție statică, nu se mișcă nimic) → <strong>Dativ</strong></li>
                    <li>➡️ <strong>Wohin?</strong> = <strong>Unde? / Încotro?</strong> (mișcare spre un loc) → <strong>Akkusativ</strong></li>
                </ul>
            </div>

            <table class="theory-table">
                <thead><tr><th>Întrebare</th><th>Cazul</th><th>Exemplu · traducere</th></tr></thead>
                <tbody>
                    <tr>
                        <td><strong>Wo?</strong> (Unde?)</td>
                        <td><strong>Dativ</strong></td>
                        <td>Das Buch <u>liegt</u> auf <strong>dem</strong> Tisch.<br>
                            <span class="ro-translation">Cartea este (întinsă) pe masă. — poziție</span></td>
                    </tr>
                    <tr>
                        <td><strong>Wohin?</strong> (Încotro?)</td>
                        <td><strong>Akkusativ</strong></td>
                        <td>Ich <u>lege</u> das Buch auf <strong>den</strong> Tisch.<br>
                            <span class="ro-translation">Pun cartea pe masă. — mișcare</span></td>
                    </tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Truc simplu: <strong>vezi MIȘCARE</strong> în propoziție? (cineva mută ceva, cineva merge undeva) → <strong>Wohin?</strong> + Akkusativ. <strong>Vezi POZIȚIE statică</strong>? (ceva e ACOLO, nu se mișcă) → <strong>Wo?</strong> + Dativ. Asta a fost cel mai greu pentru mine la început, dar odată ce „simți" diferența, devine automat."</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 1: Articolele hotărâte Dativ + Akkusativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📋 2. Articolele hotărâte — Dativ și Akkusativ</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-articole.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Cum se schimbă articolele după caz</h4>
                <p>Înainte de a folosi Wechselverben, trebuie să cunoști <strong>formele articolelor hotărâte</strong> la cele 2 cazuri. Iată tabelul complet:</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Genul</th><th>Nominativ <span class="ro-translation">(de bază)</span></th><th>Dativ <span class="ro-translation">(Wo?)</span></th><th>Akkusativ <span class="ro-translation">(Wohin?)</span></th></tr></thead>
                <tbody>
                    <tr><td><strong>masculin</strong> <span class="ro-translation">(el)</span></td><td>der</td><td><strong>dem</strong></td><td><strong>den</strong></td></tr>
                    <tr><td><strong>feminin</strong> <span class="ro-translation">(ea)</span></td><td>die</td><td><strong>der</strong></td><td>die</td></tr>
                    <tr><td><strong>neutru</strong></td><td>das</td><td><strong>dem</strong></td><td>das</td></tr>
                    <tr><td><strong>plural</strong></td><td>die</td><td><strong>den</strong> (+ -n la substantiv)</td><td>die</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #d1fae5; border-left: 4px solid #10b981; margin-top: 14px;">
                <h4>📌 Trucul de aur</h4>
                <p>La <strong>Akkusativ</strong>, doar <strong>masculinul</strong> își schimbă articolul: <strong>der → den</strong>. Restul (feminin, neutru, plural) rămân la fel ca la Nominativ.</p>
                <p style="margin-top: 8px;">La <strong>Dativ</strong>, <strong>TOATE genurile se schimbă</strong> — și la plural se adaugă „-n" la substantiv (die Kinder → mit den Kinder<strong>n</strong>).</p>
            </div>

            <h4 style="color: #065f46; margin-top: 14px;">Exemple cu personajele din clasă</h4>
            <table class="theory-table">
                <thead><tr><th>Wo? — Dativ (poziție)</th><th>Wohin? — Akkusativ (mișcare)</th></tr></thead>
                <tbody>
                    <tr>
                        <td>Annette steht vor <strong>der</strong> Tafel.<br><span class="ro-translation">Annette stă în picioare în fața tablei.</span></td>
                        <td>Annette geht zu <strong>der</strong> Tafel.<br><span class="ro-translation">Annette merge la tablă. (zu + Dat — exempl. fix)</span></td>
                    </tr>
                    <tr>
                        <td>Das Foto hängt an <strong>der</strong> Wand.<br><span class="ro-translation">Poza atârnă pe perete.</span></td>
                        <td>Carolina hängt das Foto an <strong>die</strong> Wand.<br><span class="ro-translation">Carolina agață poza pe perete.</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 2: 5 perechi de Wechselverben -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>👥 3. Cele 5 perechi de Wechselverben</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-wechselverben.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Verbe în perechi: poziție vs. mișcare</h4>
                <p>În germană există <strong>5 perechi de verbe</strong> care merg „mână în mână":</p>
                <ul>
                    <li>Unul descrie <strong>poziția</strong> (Wo? + Dativ)</li>
                    <li>Celălalt descrie <strong>mișcarea</strong> (Wohin? + Akkusativ)</li>
                </ul>
                <p style="margin-top: 8px;">📌 Asta înseamnă că <strong>același obiect</strong> poate fi descris cu 2 verbe diferite — depinde dacă vorbim despre starea lui (e acolo) sau acțiunea de a-l muta (cineva îl pune acolo).</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Wo? (Dativ) — POZIȚIE</th><th>Wohin? (Akkusativ) — MIȘCARE</th></tr></thead>
                <tbody>
                    <tr>
                        <td><strong>liegen</strong> <span class="ro-translation">a fi întins / a zace</span></td>
                        <td><strong>legen</strong> <span class="ro-translation">a pune (orizontal)</span></td>
                    </tr>
                    <tr>
                        <td><strong>stehen</strong> <span class="ro-translation">a sta în picioare</span></td>
                        <td><strong>stellen</strong> <span class="ro-translation">a pune (vertical)</span></td>
                    </tr>
                    <tr>
                        <td><strong>sitzen</strong> <span class="ro-translation">a sta așezat (cineva)</span></td>
                        <td><strong>setzen</strong> <span class="ro-translation">a așeza pe cineva</span></td>
                    </tr>
                    <tr>
                        <td><strong>stecken</strong> <span class="ro-translation">a fi introdus (înăuntru)</span></td>
                        <td><strong>stecken</strong> <span class="ro-translation">a introduce (înăuntru)</span></td>
                    </tr>
                    <tr>
                        <td><strong>hängen</strong> <span class="ro-translation">a atârna</span></td>
                        <td><strong>hängen</strong> <span class="ro-translation">a agăța</span></td>
                    </tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b; margin-top: 14px;">
                <h4>⚠️ Atenție: stecken și hängen sunt IDENTICE ca formă!</h4>
                <p>La <strong>stecken</strong> și <strong>hängen</strong>, verbul se scrie la fel pentru poziție și mișcare. <strong>Diferența o face cazul</strong> (Dativ vs. Akkusativ) + sensul propoziției.</p>
                <p style="margin-top: 8px;">Exemplu:<br>
                <strong>Wo?</strong> — Der Schlüssel steckt im Schloss. <span class="ro-translation">(Cheia e în broască.)</span><br>
                <strong>Wohin?</strong> — Ich stecke den Schlüssel in das Schloss. <span class="ro-translation">(Bag cheia în broască.)</span></p>
            </div>

            <h4 style="color: #065f46; margin-top: 14px;">Conjugarea verbelor de poziție (Präsens)</h4>
            <table class="theory-table">
                <thead><tr><th>Pronume</th><th>liegen</th><th>stehen</th><th>sitzen</th></tr></thead>
                <tbody>
                    <tr><td><strong>ich</strong> <span class="ro-translation">(eu)</span></td><td>liege</td><td>stehe</td><td>sitze</td></tr>
                    <tr><td><strong>du</strong> <span class="ro-translation">(tu)</span></td><td>liegst</td><td>stehst</td><td>sitzt</td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td>liegt</td><td>steht</td><td>sitzt</td></tr>
                    <tr><td><strong>wir</strong></td><td>liegen</td><td>stehen</td><td>sitzen</td></tr>
                    <tr><td><strong>ihr</strong></td><td>liegt</td><td>steht</td><td>sitzt</td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td>liegen</td><td>stehen</td><td>sitzen</td></tr>
                </tbody>
            </table>

            <h4 style="color: #065f46; margin-top: 14px;">Conjugarea verbelor de mișcare (Präsens)</h4>
            <table class="theory-table">
                <thead><tr><th>Pronume</th><th>legen</th><th>stellen</th><th>setzen</th></tr></thead>
                <tbody>
                    <tr><td><strong>ich</strong></td><td>lege</td><td>stelle</td><td>setze</td></tr>
                    <tr><td><strong>du</strong></td><td>legst</td><td>stellst</td><td>setzt</td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td>legt</td><td>stellt</td><td>setzt</td></tr>
                    <tr><td><strong>wir</strong></td><td>legen</td><td>stellen</td><td>setzen</td></tr>
                    <tr><td><strong>ihr</strong></td><td>legt</td><td>stellt</td><td>setzt</td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td>legen</td><td>stellen</td><td>setzen</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 3: Cum recunoști care e care -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🔍 4. Cum recunoști care verb să folosești</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-cum-recunosti.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>3 întrebări pentru a decide</h4>
                <p>Când vrei să formezi o propoziție, întreabă-te:</p>
                <ol>
                    <li><strong>Există subiect care MIȘCĂ ceva?</strong> (sau cineva se mișcă spre un loc) → folosește verbul de <strong>MIȘCARE</strong> + Akkusativ</li>
                    <li><strong>Obiectul/persoana e DEJA acolo</strong> și nu se mișcă? → folosește verbul de <strong>POZIȚIE</strong> + Dativ</li>
                    <li><strong>Conjugarea verbului</strong> e ușoară: verbele de mișcare (legen, stellen, setzen) sunt verbe regulate. Doar liegen și stehen, sitzen sunt mai speciale.</li>
                </ol>
            </div>

            <h4 style="color: #065f46; margin-top: 14px;">Exemple cu personajele clasei</h4>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai (la bucătărie)</div>
                        <div class="dialog-text">Ich <strong>lege</strong> den Apfel auf <strong>den</strong> Tisch.
                            <span class="translation">Pun mărul pe masă. (MIȘCARE → Akk: <em>den</em>)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble right">
                        <div class="dialog-speaker">Mihai (după)</div>
                        <div class="dialog-text">Der Apfel <strong>liegt</strong> jetzt auf <strong>dem</strong> Tisch.
                            <span class="translation">Mărul stă acum pe masă. (POZIȚIE → Dat: <em>dem</em>)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/carolina.png" alt="Carolina" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Carolina (în atelier)</div>
                        <div class="dialog-text">Ich <strong>hänge</strong> das Foto an <strong>die</strong> Wand.
                            <span class="translation">Agăț poza pe perete. (MIȘCARE → Akk: <em>die</em>)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/carolina.png" alt="Carolina" class="dialog-avatar">
                    <div class="dialog-bubble right">
                        <div class="dialog-speaker">Carolina (după)</div>
                        <div class="dialog-text">Das Foto <strong>hängt</strong> jetzt an <strong>der</strong> Wand.
                            <span class="translation">Poza atârnă acum pe perete. (POZIȚIE → Dat: <em>der</em>)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„M-a ajutat să-mi imaginez că verbele de mișcare se termină cu <strong>-en cu accent dur</strong> (legen, stellen, setzen) — sună ca o ACȚIUNE. Verbele de poziție sună mai blând: liegen, stehen, sitzen — sună a STARE."</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Wechselpräpositionen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🔄 5. Wechselpräpositionen — cele 9 prepoziții speciale</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-wechselpraepositionen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>9 prepoziții care „aleg" cazul</h4>
                <p>Există <strong>9 prepoziții speciale</strong> care pot fi urmate de <strong>fie Dativ, fie Akkusativ</strong> — depinde de întrebare (Wo? sau Wohin?). De aici și numele „Wechselpräpositionen" (prepoziții care schimbă cazul).</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Prepoziție</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td><strong>in</strong></td><td><span class="ro-translation">în (înăuntru)</span></td><td>in dem (im) Zimmer · <span class="ro-translation">în cameră</span></td></tr>
                    <tr><td><strong>an</strong></td><td><span class="ro-translation">pe (perete) / la</span></td><td>an der Wand · <span class="ro-translation">pe perete</span></td></tr>
                    <tr><td><strong>auf</strong></td><td><span class="ro-translation">pe (orizontal)</span></td><td>auf dem Tisch · <span class="ro-translation">pe masă</span></td></tr>
                    <tr><td><strong>vor</strong></td><td><span class="ro-translation">în fața</span></td><td>vor der Tür · <span class="ro-translation">în fața ușii</span></td></tr>
                    <tr><td><strong>hinter</strong></td><td><span class="ro-translation">în spatele</span></td><td>hinter dem Haus · <span class="ro-translation">în spatele casei</span></td></tr>
                    <tr><td><strong>über</strong></td><td><span class="ro-translation">deasupra</span></td><td>über dem Bett · <span class="ro-translation">deasupra patului</span></td></tr>
                    <tr><td><strong>unter</strong></td><td><span class="ro-translation">sub</span></td><td>unter dem Tisch · <span class="ro-translation">sub masă</span></td></tr>
                    <tr><td><strong>neben</strong></td><td><span class="ro-translation">lângă</span></td><td>neben dem Stuhl · <span class="ro-translation">lângă scaun</span></td></tr>
                    <tr><td><strong>zwischen</strong></td><td><span class="ro-translation">între</span></td><td>zwischen den Büchern · <span class="ro-translation">între cărți</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #ecfdf5; border-left: 4px solid #10b981; margin-top: 14px;">
                <h4>📌 Forme contrase frecvente</h4>
                <ul>
                    <li><strong>in + dem = im</strong> (im Zimmer = în cameră)</li>
                    <li><strong>in + das = ins</strong> (ins Zimmer = în cameră, mișcare)</li>
                    <li><strong>an + dem = am</strong> (am Fenster = la fereastră)</li>
                    <li><strong>an + das = ans</strong> (ans Fenster = la fereastră, mișcare)</li>
                    <li><strong>auf + das = aufs</strong> (mai rar)</li>
                </ul>
            </div>

            <h4 style="color: #065f46; margin-top: 14px;">Comparativ Wo / Wohin cu aceeași prepoziție</h4>
            <table class="theory-table">
                <thead><tr><th>Wo? (Dativ — POZIȚIE)</th><th>Wohin? (Akkusativ — MIȘCARE)</th></tr></thead>
                <tbody>
                    <tr>
                        <td>Florian sitzt <strong>auf dem</strong> Stuhl.<br><span class="ro-translation">Florian stă pe scaun.</span></td>
                        <td>Florian setzt sich <strong>auf den</strong> Stuhl.<br><span class="ro-translation">Florian se așază pe scaun.</span></td>
                    </tr>
                    <tr>
                        <td>Acar steht <strong>vor dem</strong> Haus.<br><span class="ro-translation">Acar stă în fața casei.</span></td>
                        <td>Acar geht <strong>vor das</strong> Haus.<br><span class="ro-translation">Acar merge în fața casei.</span></td>
                    </tr>
                    <tr>
                        <td>Das Buch liegt <strong>in dem (im)</strong> Regal.<br><span class="ro-translation">Cartea e în raft.</span></td>
                        <td>Andreea legt das Buch <strong>in das (ins)</strong> Regal.<br><span class="ro-translation">Andreea pune cartea în raft.</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const header = content.previousElementSibling;
    const arrow = header.querySelector('.sub-arrow');
    content.classList.toggle('open');
    arrow.classList.toggle('open');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
