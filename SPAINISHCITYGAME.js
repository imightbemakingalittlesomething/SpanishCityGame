 
 


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
         <button onclick="renderMissionBoard()">Mission Board</button>
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






//    ____                                    ?~~bL
//  z@~ b                                    |  `U,
// d@~' `|, .__     _----L___----, __, .  _t'   `@j
//`@L_,   "-~ `--"~-a,           `C.  ~""O_    ._`@
// q@~'   ]P       ]@[            `Y=,   `H+z_  `a@
 //`@L  _z@        d@               Ya     `-@b,_a'
 // `-@d@a'       )@[               `VL      `a@@'
 //   aa~'   ],  .a@'                qqL  ), ./~
 //   @@_  _z~  _d@[                 .V@  .L_d'
 //    "~@@@'  ]@@@'        __      )@n@bza@-"
 //      `-@zzz@@@L        )@@z     ]@@=%-"
   //      "~~@@@@@bz_    _a@@@@z___a@K
    //         "~-@@@@@@@@@@@@@@@@@@~"   jrd
     //           `~~~-@~~-@@~~~~~





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

function talkToAlto() {
    document.getElementById("app").innerHTML = `
        <h1>Alto the Vendor</h1>
        <p>"Memory dust, cracked relics, or half a prophecy? I've got the good stuff — if you've got credits."</p>
        <button onclick="renderBrokenBellows()">Back</button>
    `;
}



//    ____                                    ?~~bL
//  z@~ b                                    |  `U,
// d@~' `|, .__     _----L___----, __, .  _t'   `@j
//`@L_,   "-~ `--"~-a,           `C.  ~""O_    ._`@
// q@~'   ]P       ]@[            `Y=,   `H+z_  `a@
 //`@L  _z@        d@               Ya     `-@b,_a'
 // `-@d@a'       )@[               `VL      `a@@'
 //   aa~'   ],  .a@'                qqL  ), ./~
 //   @@_  _z~  _d@[                 .V@  .L_d'
 //    "~@@@'  ]@@@'        __      )@n@bza@-"
 //      `-@zzz@@@L        )@@z     ]@@=%-"
   //      "~~@@@@@bz_    _a@@@@z___a@K
    //         "~-@@@@@@@@@@@@@@@@@@~"   jrd
     //           `~~~-@~~-@@~~~~~



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




//    ____                                    ?~~bL
//  z@~ b                                    |  `U,
// d@~' `|, .__     _----L___----, __, .  _t'   `@j
//`@L_,   "-~ `--"~-a,           `C.  ~""O_    ._`@
// q@~'   ]P       ]@[            `Y=,   `H+z_  `a@
 //`@L  _z@        d@               Ya     `-@b,_a'
 // `-@d@a'       )@[               `VL      `a@@'
 //   aa~'   ],  .a@'                qqL  ), ./~
 //   @@_  _z~  _d@[                 .V@  .L_d'
 //    "~@@@'  ]@@@'        __      )@n@bza@-"
 //      `-@zzz@@@L        )@@z     ]@@=%-"
   //      "~~@@@@@bz_    _a@@@@z___a@K
    //         "~-@@@@@@@@@@@@@@@@@@~"   jrd
     //           `~~~-@~~-@@~~~~~



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

function renderPlazaTzompani() {
    document.getElementById("app").innerHTML = `
        <h1>Plaza Tzompani</h1>
        <p>An expansive place filled with people shopping the stalls. Fat men in robes yell for women with their babes to buy their linens. Above it all rests a mushrooming blue field of energy. </p>
        

        <button onclick="renderBrokenBellows()">Back</button>
    `;
}

function renderTeomarket() {
    document.getElementById("app").innerHTML = `<h1>🛒 Teomarket Complex</h1>
    <p>Divinity is packaged and sold here. Lesser gods barter with humans. </p>
       <button onclick="enterBoneStore()">Bone Store</button>
        <button onclick="enterTattooParlor()">TattooParlor</button>
        <button onclick="talkToScrollSeller()">Talk To Scroll Seller</button>
        <button onclick="inspectGlowingTent()">Inspect Glowing Tent</button>
        <button onclick="talkToGlyphVendor()">Talk to Glyph Vendor</button>
        <button onclick="talkToOrator()">Talk to Orator</button>
 
    <button onclick="renderCityMap()">Back</button>`;
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

 
function trySynthfruit() {
    document.getElementById("app").innerHTML = `
        <h1>Synthfruit Vendor</h1>
        <p>You approach a street vendor pushing a glowing, crackling tree in a wheelbarrow. It's the size of a man and smells like static and ripe bananas.</p>
        <p><em>"What is that?"</em> you ask. The vendor raises an eyebrow. <em>"What, you don’t know? Pretend I’m stupid, I’m not from here."</em></p>
        <p>"These fruits are divinely bequeathed upon us," he declares. "Bite, and you shall become one with the gods as your body digests their enzymes."</p>
        <button onclick="eatSynthfruit()">Eat the synthfruit</button>
        <button onclick="renderBrokenBellows()">Back away slowly</button>
    `;
}

function eatSynthfruit() {
    document.getElementById("app").innerHTML = `
        <p>You take a bite. It tastes electric. Your tongue sears. You cough violently.</p>
        <p>The vendor cackles. "What are you, wet behind the ears? Get outta the way of a real customer!"</p>
        <p>He turns. "Sir! Over here! Synthfruit! Fresh from the branch!"</p>
        <button onclick="renderBrokenBellows()">Wander off in shame</button>
    `;
}

function lookThroughOfferingBox() {
    document.getElementById("app").innerHTML = `
        <h1>Offering Box</h1>
        <p>You peer inside the offering box. A few dull coins. A small handmade doll with blue thread hair. A folded prayer that says: <em>"Don't forget me."</em></p>
        <button onclick="renderBrokenBellows()">Step back</button>
    `;
}
function observeBillboardLoop(step = 0) {
    const ads = [
        "Now enhanced with bio-link compatibility. The next neural frontier awaits.",
        "Feeling alone? Register your thoughts today. Memories deserve immortality.",
        "Install your new voice today. Become the version of yourself you remember best.",
        "HEY YOU. YEAH YOU. BUY SOMETHING WOULD YA?! Hahaha!"
    ];

    if (step < ads.length - 1) {
        document.getElementById("app").innerHTML = `
            <h1>Billboard Ad Loop</h1>
            <p>${ads[step]}</p>
            <button onclick="observeBillboardLoop(${step + 1})">Keep watching</button>
            <button onclick="renderBrokenBellows()">Look away</button>
        `;
    } else {
        document.getElementById("app").innerHTML = `
            <h1>The Billboard Notices You</h1>
            <p>${ads[step]}</p>
            <p>You suddenly feel like maybe it’s time to go. Fast.</p>
            <button onclick="renderBrokenBellows()">Leave quickly</button>
        `;
    }
}
function fixLightTotem() {
    document.getElementById("app").innerHTML = `
        <h1>Light Totem</h1>
        <p>The totem flickers weakly. You twist a rusted panel, re-route a glyph wire. Light stabilizes — just for a moment.</p>
        <p>It hums a single note. You’re not sure if that was a thank-you or a warning.</p>
        <button onclick="renderBrokenBellows()">Step back</button>
    `;
}
function talkToElder() {
    document.getElementById("app").innerHTML = `
        <h1>Bathtub Elder</h1>
        <p>The elder soaks in a ceramic tub built into the floor. He doesn’t look at you but speaks:</p>
        <p>"The gods are peeling. Like old paint. You’d best not be under the flakes."</p>
        <button onclick="renderBrokenBellows()">Nod respectfully</button>
    `;
}
function knockCandleDoor() {
    document.getElementById("app").innerHTML = `
        <h1>Candle-Marked Door</h1>
        <p>You knock. Nothing. Then three knocks echo from inside. Slow. Deliberate. The candle flickers green.</p>
        <p>Better come back later. Or never.</p>
        <button onclick="renderBrokenBellows()">Back away</button>
    `;
}




 







function enterBoneStore() {
  document.getElementById("app").innerHTML = `
    <h2>Bone Store</h2>
    <p>There is bone dust in the air and you cover your nose. It smells awful.</p>
    <button onclick="inspectBoneShelves()">Inspect Shelves</button>
    <button onclick="callForBoneLady()">"Anyone working here?"</button>
    <button onclick="inpectLightBoneStore()">Inspect Glowing Light</button>
    <button onclick="stealBones()">Steal Something</button>
    <button onclick="renderTeomarket()">Back</button>
  `;
}

function inspectBoneShelves() {
  document.getElementById("app").innerHTML = `<p>You get close enough to make out the items lining the shelves. Bone art. Poor taste. Animals posed in ways meant to amuse.</p>
          <button onclick="enterBoneStore()">Back away</button>
`;
}

function callForBoneLady() {
  let response = "A clattering of bones in the back startles you. Then laughing. Heh yes dearie. I'm working here. She smiles as she approaches you with one eye squinting.";
  response += `<br><button onclick="investigateBoneLady1()">"How can you breathe this stuff?"</button>`;
  response += `<br><button onclick="investigateBoneLady2()">"Why would you do this to these animals?"</button>`;
  document.getElementById("app").innerHTML = `<p>${response}</p>`;
}

function inpectLightBoneStore() {
  document.getElementById("app").innerHTML = `<p>You steal a lizard riding a rat.</p>
          <button onclick="enterBoneStore()">Back away</button>
`;
}

function stealBones() {
  document.getElementById("app").innerHTML = `<p>The light is a bone that stops glowing once you get close.</p>
          <button onclick="enterBoneStore()">Back away</button>
`;
}

// === INVESTIGATE FOLLOWUPS ===
function investigateBoneLady1() {
  let response = "'Breathe what?'' She takes a deep breath and smiles.";
  response += `<br><button onclick="followupBoneLady11()">The dust... The bone dust</button>`;
  response += `<br><button onclick="followupBoneLady12()">You need a doctor.</button>`;
  response += `<br><button onclick="followupBoneLady13()">I can help</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function investigateBoneLady2() {
  let response = "'They wanted me to help them experience an everlasting joy in the afterlife that they could share with us and the gods.";
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

// ===  DIALOG PATHWAYS ===
function followupBoneLady11() {
  let response = "Oh that. I hardly notice these days... Isn't that funny.";
  response += `<br><button onclick="followupBoneLady31()">No!</button>`;
  response += `<br><button onclick="followupBoneLady32()">If you say so</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function followupBoneLady12() {
  let response = "'I think someone's said that to me before.";
  response += `<br><button onclick="followupBoneLady41()">And you didn't go to the doctor then?</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function followupBoneLady13() {
  document.getElementById("app").innerHTML += `<p>"That's alright sweetie. I'm ok."</p>`;
}

// ===  STORY BRANCHING ===
function followupBoneLady31() {
  let response = "'Oh my! If I had knew you felt so strongly about it...'";
  response += `<br><button onclick="followupBoneLady51()">Will you get help now?</button>`;
  response += `<br><button onclick="followupBoneLady52()">I care that you're obnoxious.</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function followupBoneLady32() {
  followupBoneLady31(); // Same response block
}

// === USER JUDGMENT BRANCHES ===
function followupBoneLady51() {
  document.getElementById("app").innerHTML += `<p>"I just never have the time. I always mean to get around to it."</p>`;
}

function followupBoneLady52() {
  document.getElementById("app").innerHTML += `<p>"Me?"</p>`;
}

// ===  ARC ===
function followupBoneLady41() {
  let response = "'It wasn't serious back then.";
  response += `<br><button onclick="followupBoneLady61()">And when it got serious?</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function followupBoneLady61() {
  let response = "'...I dont remember.";
  response += `<br><button onclick="followupBoneLady62()">AAAAAAAHH!!!</button>`;
  response += `<br><button onclick="followupBoneLady63()">ok</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function followupBoneLady62() {
  document.getElementById("app").innerHTML += `
    <p>"What is wrong with you? There's something off with you."</p>
    <p>She scrambles behind an upright skeletal deer with a rose in hoof.</p>`;
}

function followupBoneLady63() {
  document.getElementById("app").innerHTML += `
    <p>"Yeah</p>`;
}


    function enterTattooParlor() {
  document.getElementById("app").innerHTML = `
    <h2>Tattoo Parlor</h2>
    <p>The shop is empty, echoing with silence. One guy leans behind the counter, flipping through a worn book.</p>
    <p>"You're probably wondering why it's dead in here."</p>
    <button onclick="askWhyEmpty()">Why is it empty?</button>
    <button onclick="seeTattooBook()">Can I see that book?</button>
    <button onclick="askAboutHim()">Who are you?</button>
    <button onclick="leaveTattooParlor()">Back</button>
  `;
}

function askWhyEmpty() {
  document.getElementById("app").innerHTML += `<p>"Inspection day. Everybody cleared out except me. I like the quiet anyway."</p>`;
}

function seeTattooBook() {
  let response = `"These are my favorite pieces." He opens the book. "Some of them talk back if you stare long enough."`;
  response += `<br><button onclick="askTattooMeanings()">What do they mean?</button>`;
  response += `<br><button onclick="complimentDesigns()">They're incredible.</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function askAboutHim() {
  let response = `"I'm just the last apprentice who never left." He shrugs.`;
  response += `<br><button onclick="askApprentice()">Why didn’t you leave?</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function askTattooMeanings() {
  document.getElementById("app").innerHTML += `<p>"Some are blessings. Others are warnings. Depends what you're brave enough to carry."</p>`;
}

function complimentDesigns() {
  document.getElementById("app").innerHTML += `<p>"You're the first to say that today. Thanks."</p>`;
}

function askApprentice() {
  document.getElementById("app").innerHTML += `<p>"Because art is the only thing that ever stayed still in my life."</p>`;
}

function leaveTattooParlor() {
  renderTeomarket(); // Assumes this returns to main market
}

 
function talkToScrollSeller() {
  document.getElementById("app").innerHTML = `
    <h2>Scroll Seller</h2>
    <p>A towering figure looms behind hanging sheets of parchment. His face is wrapped in black silk. He speaks low.</p>
    <p>"You seek knowledge... or refuge?"</p>
    <button onclick="askAboutScrolls()">What kind of scrolls?</button>
    <button onclick="askWhyHidden()">Why hide your face?</button>
    <button onclick="askToBuy()">Can I buy something?</button>
    <button onclick="leaveScrollSeller()">Back</button>
  `;
}

function askAboutScrolls() {
  let response = `"Each scroll is a door. Some to insight. Some to regret. Few to truth."`;
  response += `<br><button onclick="askDanger()">Are they dangerous?</button>`;
  response += `<br><button onclick="askRecommendation()">Which one for me?</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function askWhyHidden() {
  let response = `"The light remembers my face. So I offer it none."`;
  response += `<br><button onclick="pressForMore()">What does that mean?</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function askToBuy() {
  document.getElementById("app").innerHTML += `<p>"If you choose one, it chooses you back. Be sure."</p>`;
}

function askDanger() {
  document.getElementById("app").innerHTML += `<p>"All wisdom is dangerous if you read it too fast."</p>`;
}

function askRecommendation() {
  document.getElementById("app").innerHTML += `<p>"You carry a shadow. Take the scroll bound in silver twine."</p>`;
}

function pressForMore() {
  document.getElementById("app").innerHTML += `<p>"There are laws where I came from. One was about forgetting."</p>`;
}

function leaveScrollSeller() {
  renderTeomarket();
}


function inspectGlowingTent() {
  document.getElementById("app").innerHTML = `
    <h2>Silk Drape Tent</h2>
    <p>Silk shimmers in the breeze. It pulses like breath. A cloaked figure with six arms emerges slowly.</p>
    <p>"You wore a cloak like this..."</p>
    <button onclick="enterSilkTent()">Step inside</button>
    <button onclick="renderTeomarket()">Back away</button>
  `;
}

function enterSilkTent() {
  document.getElementById("app").innerHTML = `
    <h2>Inside the Silk Tent</h2>
    <p>The six-armed weaver gestures silently. Her voice glides across threads.</p>
    <p>"Do you still dream in black and red?"</p>
    <button onclick="askAboutDreams()">What do you mean?</button>
    <button onclick="touchTheSilk()">Touch the silk</button>
    <button onclick="renderTeomarket()">Leave</button>
  `;
}

function askAboutDreams() {
  document.getElementById("app").innerHTML += `<p>"Once, you dreamed of storms. Of threads unraveling. Of a name you forgot."</p>`;
}

function touchTheSilk() {
  document.getElementById("app").innerHTML += `<p>You touch the thread. A storm fills your mind. You remember a name.</p>`;
}


function talkToGlyphVendor() {
  document.getElementById("app").innerHTML = `
    <h2>Floating Glyphs</h2>
    <p>Glowing symbols orbit a teenage vendor, arms crossed, floating slightly off the ground.</p>
    <p>"Choose a glyph, unlock a memory."</p>
    <button onclick="chooseGlyph()">Choose a glyph</button>
    <button onclick="askTeenMood()">Why are you like this?</button>
    <button onclick="renderTeomarket()">Leave</button>
  `;
}

function chooseGlyph() {
  document.getElementById("app").innerHTML += `<p>Your fingers twitch. The glyph reacts. Your hands remember a spell you once knew.</p>`;
}

function askTeenMood() {
  let response = `"You used to hate these." He rolls his eyes. "Let’s see if you still do."`;
  response += `<br><button onclick="respondAnnoyed()">Still do.</button>`;
  response += `<br><button onclick="respondCurious()">Maybe I judged them too fast.</button>`;
  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function respondAnnoyed() {
  document.getElementById("app").innerHTML += `<p>"Cool. Then don’t touch them." He turns away but watches from the corner of his eye.</p>`;
}

function respondCurious() {
  document.getElementById("app").innerHTML += `<p>"Huh. Growth." One of the glyphs pulses with soft light.</p>`;
}


 









function talkToOrator() {
  document.getElementById("app").innerHTML = `
    <h2>Orator Box</h2>
    <p>A cracked loudspeaker hums to life. A prismatic screen flickers above a metal podium.</p>
    <p>"Buy now! Todo por fe!"</p>
    <button onclick="askAboutDeals()">What are you selling?</button>
    <button onclick="askAboutSelf()">Who am I?</button>
    <button onclick="complainNoise()">You’re really annoying.</button>
    <button onclick="renderTeomarket()">Leave</button>
  `;
}

function askAboutDeals() {
  let response = "‘Spoken deals last only—¡un momento!’ You hear static and a distant siren wail. Nothing else plays.";
  response += `<br><button onclick="followupOrator1_1()">What are you selling?</button>`; 
  response += `<br><button onclick="followupOrator1_2()">Don’t scam me</button>`; 
   response += `<br><button onclick="talkToOrator()">back</button>`; 
  document.getElementById("app").innerHTML = `<p>${response}</p>`;
}

function followupOrator1_1() {
  document.getElementById("app").innerHTML = `
    <p>"Fine print: all deals are hypothetical. Satisfaction not guaranteed."</p>
    <button onclick="talkToOrator()">Back</button>
  `;
}

function followupOrator1_2() {
  document.getElementById("app").innerHTML = `
  <p>"You wound me! Just because I'm legally immune doesn't mean I'm dishonest."</p>
    <button onclick="talkToOrator()">Back</button> 
     `;
}
 
 


function askAboutSelf() {
  let response = "‘Back again, memoryless one?’ They grin. Then glitch and come back paler.";
  response += `<br><button onclick="followupOrator2_1()">Who told you?</button>`; 
  response += `<br><button onclick="followupOrator2_2()">I’m back</button>`; 
     response += `<br><button onclick="talkToOrator()">back</button>`; 

  document.getElementById("app").innerHTML = `<p>${response}</p>`;
}

function followupOrator2_1() {
 
  document.getElementById("app").innerHTML = `<p>"It’s in your data signature. Transparent as a god shard."</p>   
   <button onclick="talkToOrator()">Back</button> 
     `;
}
 

function followupOrator2_2() {
 
  document.getElementById("app").innerHTML = `<p>"Reboots are common in this district. You'll catch up... or not."</p>    
  <button onclick="talkToOrator()">Back</button> 
     `;
}
 



function complainNoise() {
  let response = `"The citizens voted for volume!" It shouts. Then mutters, "At least... 38% of them did."`;
  response += `<br><button onclick="threatenToReport()">I’m reporting you to the city core.</button>`;
  response += `<br><button onclick="changeYourTune()">Try a different tone?</button>`;
     response += `<br><button onclick="talkToOrator()">back</button>`; 

  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function threatenToReport() {
  let response = "Again? You people love paperwork more than product!";
  response += `<br><button onclick="followupOrator311()">I want a change</button>`;
  response += `<br><button onclick="followupOrator312()">Who else has reported you?</button>`;
  response += `<br><button onclick="followupOrator313()">You people?</button>`;
     response += `<br><button onclick="talkToOrator()">back</button>`; 

  document.getElementById("app").innerHTML += `<p>${response}</p>`;
}

function followupOrator311() {
  document.getElementById("app").innerHTML += `<p>"Submit Form 88-L. In triplicate. Then scream into a vent."</p>  
    <button onclick="talkToOrator()">Back</button> 
     `;
}
 

function followupOrator312() {
  document.getElementById("app").innerHTML += `<p>"A few dozen prophets. And one parrot. Long story."</p>   
   <button onclick="talkToOrator()">Back</button> 
     `;
}
 

function followupOrator313() {
  document.getElementById("app").innerHTML += `<p>"Yes. You—plural. You—problematic. You—predictable."</p>    
  <button onclick="talkToOrator()">Back</button> 
     `;
}
 






function changeYourTune() {
  document.getElementById("app").innerHTML += `<p>"Tone adjusted. Emotion index: 34% friendlier."</p>  
    <button onclick="talkToOrator()">Back</button> 
     `;
}
 


