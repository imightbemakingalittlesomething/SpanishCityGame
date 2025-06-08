
 


// === CORE GAME DATA ===
window.onload = renderMainMenu;

let gold = 100; // Starting currency
let inventory = [];
let hasTouchedGlyph = false;

 
// === MAIN MENU ===
function renderMainMenu() {
    document.getElementById("app").innerHTML = `
        <h1>Tenochtitech Terminal</h1>
        <p><strong>Credits:</strong> ${gold}c</p>
        <button onclick="renderCityMap()">Access City Map</button>
        <button onclick="renderEchoMemory()">View Memory Echoes</button>
        <button onclick="renderInventory()">Inventory</button>
        <button onclick="renderRelicShop()">Relic Vendor</button>
        <button onclick="renderMissionBoard()">Mission Board</button>
        <button onclick="renderGlitchPulse()">Scan Glitch Pulse</button>
    `;
}

function renderInventory() {
    let inventoryItems = inventory.length > 0 ? inventory.join(", ") : "Nothing";
    document.getElementById("app").innerHTML = `
        <h1>Inventory</h1>
        <p><strong>Items:</strong> ${inventoryItems}</p>
        <button onclick="renderMainMenu()">Back</button>
    `;
}

// === CITY MAP ===
function renderCityMap() {
    document.getElementById("app").innerHTML = `
        <h1>📡 Tenochtitech District Grid</h1>
        <p>Select a district to investigate:</p>
        <button onclick="renderBrokenBellows()">Enter Broken Bellows</button>
        <button onclick="renderPlazaTzompani()">Visit Plaza Tzompani</button>
        <button onclick="renderTeomarket()">Go to Teomarket Complex</button>
        <button onclick="renderCodexSpire()">Access Codex Spire</button>
        <button onclick="renderJaguarBastion()">Approach Jaguar Bastion</button>
        <button onclick="renderEchoChapel()">Echo Chapel (Restricted)</button>
        <br><br>
        <button onclick="renderMainMenu()">Return to Terminal</button>
    `;
}

// === DISTRICT: BROKEN BELLOWS ===
function renderBrokenBellows() {
    document.getElementById("app").innerHTML = `
       <h1>🔧 Broken Bellows</h1>
        <p>A fragmented lower district littered with broken godtech, rogue memories, and forgotten prayers.</p>
        <button onclick="talkToEzri()">Talk to Ezri</button>
        <button onclick="talkToMaru()">Talk to Maru</button>
        <button onclick="inspectWallGlyph()">Inspect Wall Glyph</button>
        <button onclick="inspectJobBoard()">Check Job Board</button>
        <button onclick="inspectSolarDrones()">Watch Solar Drones</button>
        <button onclick="inspectWorshipTerminal()">Kick Worship Terminal</button>
        <button onclick="triggerPrayerPostFlashback()">Trigger Flashback at Prayer Post</button>
        <button onclick="brokenBellowsarea2()">Go Right</button>
        <button onclick="brokenBellowsarea3()">Go Left</button>
    
        <button onclick="renderCityMap()">Leave Broken Bellows</button>

    `;
}

function brokenBellowsarea2 (){
	    document.getElementById("app").innerHTML = `

            <h1>🍲 Ration District</h1>
        <p>A narrow sector where survivors barter rations and trade whispers about what happened to you.</p>
        <button onclick="talkToLana()">Talk to Lana</button>
        <button onclick="helpWithFoodRations()">Help with food rations</button>
        <button onclick="visitLanaStorage()">Visit Lana’s storage room</button>
        <button onclick="enterEzriWorkshop()">Enter Ezri’s workshop</button>
        <button onclick="snoopEzriLocker()">Snoop through Ezri’s locker</button>
        <button onclick="stealMemoryDust()">Steal a bag of Memory Dust</button>
                <button onclick="talkToRebel()">Talk to Rebel</button>

        <button onclick="readScrawledPrayers()">Read a wall of scrawled prayers</button>
        <button onclick="triggerMemoryEcho()">Trigger a hidden memory echo at the abandoned shrine</button>
        <button onclick="findOldPoster()">Find a poster with your old face crossed out</button>
        <button onclick="renderBrokenBellows() ">Go Back</button>
    `;}


function brokenBellowsarea3 (){
	    document.getElementById("app").innerHTML = `
   <h1>🛒 Neon Alley</h1>
        <p>A narrow strip of malfunctioning ads, steamy carts, and faded shrines. A strange serenity hangs in the noise.</p>
        <button onclick="talkToAlto()">Talk to Alto the Vendor</button>
        <button onclick="trySynthfruit()">Try the synthfruit from the street cart</button>
        <button onclick="lookThroughOfferingBox()">Look through the old offering box</button>
        <button onclick="observeBillboardLoop()">Observe the billboard loop for glitches</button>
        <button onclick="fixLightTotem()">Try to fix a buzzing light totem</button>
        <button onclick="talkToElder()">Talk to the elder in the bathtub shrine</button>
        <button onclick="knockCandleDoor()">Knock on the door with candle markings</button>
        <button onclick="renderBrokenBellows() ">Go Back</button>
    `;
}

function talkToEzri() {
    document.getElementById("app").innerHTML = `
        <h1>Ezri</h1>
        <p>"You're awake... I thought we lost you down there. You still don't remember anything? Damn. You were the brain of this outfit..."</p>
        <button onclick="ezriDialogue1()">What do you mean, 'brain of this outfit'?</button>
        <button onclick="ezriDialogue2()">Where *was* I?</button>
        <button onclick="ezriDialogue3()">Who are you?</button>

        <button onclick="renderBrokenBellows()">Back</button>

    `;
}
function ezriDialogue1() {
    document.getElementById("app").innerHTML = `
        <h1>Ezri</h1>
        <p>"You handled the big moves. The structure. You made the call that we’d try to *bind the network through ourselves*."</p>
        <p>"We didn’t understand what that would cost you. But you said someone had to try."</p>
        <button onclick="ezriReveal()">What network?</button>
        <button onclick="talkToEzri()">Back</button>
    `;
}
function ezriDialogue2() {
    document.getElementById("app").innerHTML = `
        <h1>Ezri</h1>
        <p>"Beneath the Spire. Deep zone. Memory echo field was unstable. You walked in and... dissolved. For days."</p>
        <p>"Then you showed up again, blank-eyed. Silent."</p>
        <button onclick="ezriReveal()">How am I alive?</button>
        <button onclick="talkToEzri()">Back</button>
    `;
}
function ezriDialogue3() {
    document.getElementById("app").innerHTML = `
        <h1>Ezri</h1>
        <p>"We were your second. When the city fractured, we stayed behind to keep the core stable."</p>
        <p>"I go by Ezri now. I don’t remember what you used to call me."</p>
        <button onclick="ezriReveal()">Why did I do this?</button>
        <button onclick="talkToEzri()">Back</button>
    `;
}
function ezriReveal() {
    document.getElementById("app").innerHTML = `
        <h1>Ezri</h1>
        <p>They kneel beside a humming console. Their hand hovers over the activation rune.</p>
        <p><em>"Because you believed there was something underneath this city worth saving."</em></p>
        <p><em>"You said you *heard it whispering*. And that you’d bring it back—if it meant tearing yourself apart to do it."</em></p>
        <button onclick="renderBrokenBellows()">Let it sink in</button>
    `;
}

function talkToMaru() {
    document.getElementById("app").innerHTML = `
        <h1>Maru</h1>
        <p>He looks up from his reinforced gloves. "You trained us. Now we're scrambling without you. Good to have you vertical again."</p>
        <button onclick="maruDialogue1()">Who am I?</button>
        <button onclick="maruDialogue2()">What happened to me?</button>
        <button onclick="maruDialogue3()">Who are you?</button>

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function maruDialogue1() {
    document.getElementById("app").innerHTML = `
        <h1>Maru</h1>
        <p>"You're the best man I know."</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function maruDialogue2() {
    document.getElementById("app").innerHTML = `
        <h1>Maru</h1>
        <p>He becomes flustered and scratches the back of his head. "I don't think I should be the one to tell you."</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function maruDialogue3() {
    document.getElementById("app").innerHTML = `
        <h1>Maru</h1>
        <p>"You liked me. So don't worry about that."</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}


function talkToLana() {
    document.getElementById("app").innerHTML = `
        <h1>Lana</h1>
        <p>She is typing away on her floating pyramid system. "There you are. Look at you. I could just pinch your cheeks... but this security system..."</p>
        <button onclick="lanaDialogue1()">What happened to me?</button>
        <button onclick="lanaDialogue2()">Who are you?</button>
        <button onclick="lanaDialogue3()">Can you help me?</button>

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function lanaDialogue1() {
    document.getElementById("app").innerHTML = `
        <h1>Lana</h1>
        <p>"You took a big hit. Nearly broke the o-zone."</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function lanaDialogue2() {
    document.getElementById("app").innerHTML = `
        <h1>Lana</h1>
        <p>"I'm Lana... Can't you remember?"</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function lanaDialogue3() {
    document.getElementById("app").innerHTML = `
        <h1>Lana</h1>
        <p>"We are all trying to help you. We are just not sure how yet."</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}

function inspectWallGlyph() {
  if (hasTouchedGlyph) {
    document.getElementById("app").innerHTML = `
      <h1>Wall Glyph</h1>
      <p>The whispers are gone. So is the guard. Just a scorched trace remains where your hand once reached.</p>
      <button onclick="renderBrokenBellows()">Back</button>
    `;
  } else {
    document.getElementById("app").innerHTML = `
      <h1>Wall Glyph</h1>
      <p>The glyph pulses faintly... a distorted voice whispers from your past: "Don’t forget the price... you agreed..."</p>
      <button onclick="touchGlyph()">Touch the Glyph</button>
      <button onclick="renderBrokenBellows()">Step Away</button>
    `;
  }
}

function touchGlyph() {
  hasTouchedGlyph = true;

  document.getElementById("app").innerHTML = `
    <h1>Wall Glyph</h1>
    <p>Your fingers graze the glyph—</p>
    <p>There's a sudden pull.</p>
    <p>It’s gone just as fast. You yank your hand back instinctively.</p>
    <p>"Hey! What are you doing? Get away from that!" a guard barks.</p>
    <p>You scurry off, head spinning. You still don’t even know who you are...</p>
    <button onclick="renderBrokenBellows()">Leave Quickly</button>
  `;
}


function examinePrayerDrum() {
    document.getElementById("app").innerHTML = `
        <h1>Broken Prayer Drum</h1>
        <p>Twisted bronze rings clatter as you touch the drum. Echoes of worship, static-laced, spill into the street.</p>
        <button onclick="renderBrokenBellows()">Back</button>
    `;
}

function listenToSpeakerGrate() {
    document.getElementById("app").innerHTML = `
        <h1>Speaker Grate</h1>
        <p>"The gods are not gone... they’re dormant." The voice vanishes. You step back, uneasy.</p>
        <button onclick="renderBrokenBellows()">Back</button>
    `;
}

function enterEzriWorkshop() {
    document.getElementById("app").innerHTML = `
        <h1>Ezri’s Workshop</h1>
        <p>Tools, relics, memory shards. A dusty notebook labeled with your name lies on the table...</p>
        <button onclick="renderBrokenBellows()">Back</button>
    `;
}

function visitAltoVendor() {
    document.getElementById("app").innerHTML = `
        <h1>Alto the Vendor</h1>
        <p>"Memory dust, cracked relics, or half a prophecy? I've got the good stuff — if you've got credits."</p>
        <button onclick="renderBrokenBellows()">Back</button>
    `;
}

function talkToRebel() {
  document.getElementById("app").innerHTML = `
    <h2>Rebel Contact</h2>
    <p>She crosses her arms, sizing you up. "You finally made it, huh?"</p>
    <button onclick="handleBarter()">Barter</button>
    <button onclick="handleInvestigate()">Investigate</button>
    <button onclick="handleFlirt()">Flirt</button>
    <button onclick="handleImpress()">Impress</button>
            <button onclick="renderBrokenBellows()">Back</button>

  `;
}
 
function handleBarter() {
  document.getElementById("app").innerHTML = `<p>You offer some scrap parts. She says, 'Come back with something real.'</p>`;
}

function handleInvestigate() {
  let response = "You ask about the resistance. She looks around, then leans in.";
  response += `<br><button onclick="investigateLeader()">Ask about her leader</button>`;
  response += `<br><button onclick="investigateHelp()">Ask how to help</button>`;
  document.getElementById("app").innerHTML = `<p>${response}</p>`;
}

function handleFlirt() {
  document.getElementById("app").innerHTML = `<p>You flirt a little. She smirks. 'You're brave, I'll give you that.'</p>`;
}

function handleImpress() {
  document.getElementById("app").innerHTML = `<p>You tell her about fighting off drones. She raises an eyebrow. 'Not bad...'</p>`;
}

// === INVESTIGATE FOLLOWUPS ===
function investigateLeader() {
  let response = "'Our leader doesn’t show their face. Only their will.' She seems nervous.";
  response += `<br><button onclick="followupLeaderWhy()">Why?</button>`;
  response += `<br><button onclick="followupLeaderWhat()">What are they like?</button>`;
  response += `<br><button onclick="followupLeaderMerciful()">Are they merciful?</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function investigateHelp() {
  let response = "'Get a datachip from the patrol post. Bring it here without being followed.'";
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

// === LEADER DIALOG PATHWAYS ===
function followupLeaderWhy() {
  let response = "'When he was a boy, they pushed him off a ravine. He's never shown his face since.'";
  response += `<br><button onclick="believeScarStory()">You believe that?</button>`;
  response += `<br><button onclick="doubtScarStory()">That's a stupid reason.</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function followupLeaderWhat() {
  let response = "'He talks to people like he already knows what they're afraid of.'";
  response += `<br><button onclick="askRelationship()">What's your relationship with him?</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function followupLeaderMerciful() {
  document.getElementById("app").innerHTML += `<p>'He makes hard choices. Mercy isn't always one of them.'</p>`;
}

// === SCAR STORY BRANCHING ===
function believeScarStory() {
  let response = "'I imagine his face is scarred. Wouldn't you hide too?'";
  response += `<br><button onclick="sayUnderstand()">I understand</button>`;
  response += `<br><button onclick="sayWimp()">Sounds like a wimp</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function doubtScarStory() {
  believeScarStory(); // Same response block
}

// === USER JUDGMENT BRANCHES ===
function sayUnderstand() {
  document.getElementById("app").innerHTML += `<p>'You're kinder than most.'</p>`;
}

function sayWimp() {
  document.getElementById("app").innerHTML += `<p>'You're bolder than most. But that kind of talk gets people hurt.'</p>`;
}

// === RELATIONSHIP ARC ===
function askRelationship() {
  let response = "'I didn't always trust him. But three years ago... that changed.'";
  response += `<br><button onclick="askTragedy()">What happened three years ago?</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function askTragedy() {
  let response = "'Oh right... you don't remember.' She looks sad.";
  response += `<br><button onclick="pushAnswer()">Push her to answer</button>`;
  response += `<br><button onclick="changeSubject()">Change the subject</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function pushAnswer() {
  document.getElementById("app").innerHTML += `
    <p>'There was a tragedy. I can't explain more yet. I'm sorry.'</p>
    <p>'Talk to everyone else while I prepare things for us.'</p>`;
}

function changeSubject() {
  document.getElementById("app").innerHTML += `
    <p>She nods. 'Talk to everyone else while I prepare things for us.'</p>`;
}




function inspectJobBoard() {
    document.getElementById("app").innerHTML = `
        <h1>Job Board</h1>
        <p>There are various jobs available and too many urgent jobs left undone. There are two well dressed citizens also flipping through the jobs.</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function inspectSolarDrones() {
    document.getElementById("app").innerHTML = `
        <h1>Solar Drones</h1>
        <p>They flutter in the undercity skies. Dancing colors of sun are shining against the city. One seems to be going haywire.</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function inspectWorshipTerminal() {
    document.getElementById("app").innerHTML = `
        <h1>Worship Terminal</h1>
        <p>"74 and 828 prayers uploaded today. Top prayer: Good Weather. Message from the gods: More Worship Means More Wealth</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function renderPlazaTzompani() {
    document.getElementById("app").innerHTML = `
        <h1>Plaza Tzompani</h1>
        <p>An expansive place filled with people shopping the stalls. Fat men in robes yell for women with their babes to buy their linens. Above it all</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}

function helpWithFoodRations() {
    document.getElementById("app").innerHTML = `
        <h1>Food Ration Station</h1>
        <p>The line is long and there is only one attendant handling everything.</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function visitLanaStorage() {
    document.getElementById("app").innerHTML = `
        <h1>Lana's Storage Room</h1>
        <p>There are multiple computers chasers with their screens bashed in. There is also a bookcase and a rack of varying styles of clothing.</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function enterEzriWorkshop() {
    document.getElementById("app").innerHTML = `
        <h1>Ezri's Workshop</h1>
        <p>You enter a room with a huge hole in the middle and with smoke coming out and a red glow. Cables litter the floor. Most lead into the hole.</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function snoopEzriLocker() {
    document.getElementById("app").innerHTML = `
        <h1>Ezri's Locker</h1>
        <p>There are photos of a girl and her family. There is a lone teddy bear. Pink.</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function stealMemoryDust() {
    document.getElementById("app").innerHTML = `
        <h1>Dust Saver</h1>
        <p>The keeper is turned around.</p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}
function renderTeomarket() {
    document.getElementById("app").innerHTML = `<h1>🛒 Teomarket Complex</h1><p>Coming soon...</p><button onclick="renderCityMap()">Back</button>`;
}

function renderCodexSpire() {
    document.getElementById("app").innerHTML = `<h1>📚 Codex Spire</h1><p>Coming soon...</p><button onclick="renderCityMap()">Back</button>`;
}

function renderJaguarBastion() {
    document.getElementById("app").innerHTML = `<h1>🐆 Jaguar Bastion</h1><p>Coming soon...</p><button onclick="renderCityMap()">Back</button>`;
}

function renderEchoChapel() {
    document.getElementById("app").innerHTML = `<h1>🔔 Echo Chapel</h1><p>Coming soon...</p><button onclick="renderCityMap()">Back</button>`;
}

function renderEchoMemory() {
    document.getElementById("app").innerHTML = `<h1>🧠 Echo Memories</h1><p>Your memories are fractured... but you feel something returning.</p><button onclick="renderMainMenu()">Back</button>`;
}

function renderRelicShop() {
    document.getElementById("app").innerHTML = `<h1>💼 Relic Vendor</h1><p>Nothing to sell yet.</p><button onclick="renderMainMenu()">Back</button>`;
}

function renderMissionBoard() {
    document.getElementById("app").innerHTML = `<h1>📜 Mission Board</h1><p>No new missions.</p><button onclick="renderMainMenu()">Back</button>`;
}

function renderGlitchPulse() {
    document.getElementById("app").innerHTML = `<h1>📡 Glitch Pulse</h1><p>You scan the grid... anomaly detected in the upper rings.</p><button onclick="renderMainMenu()">Back</button>`;
}
