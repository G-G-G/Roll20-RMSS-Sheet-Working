
/* eslint-disable no-console */

// <!-- Stat Mod Calculation -->
// Takes Stat total, returns bonus (base bonus).
function StatMod(stat) {
    let mod = 0;
    if (stat < 11) {
        mod = Math.round((stat - 21) / 2);
    } else if (stat < 31) {
        mod = Math.round((stat - 33) / 5);
    } else if (stat < 70) {
        mod = 0;
    } else if (stat < 90) {
        mod = Math.round((stat - 67) / 5);
    } else if (stat < 101) {
        mod = Math.round((stat - 81) / 2);
    } else if (stat > 100) {
        mod = Math.round((stat - 95) * 2);
    }
    return mod;  
}
  
// <!-- Stat Calculation -->
// Takes base stat, racial bonus, special bonus, returns total bonus.
function StatCalc(base, racial, special) {
    return base + racial + special;

}
  
// <!-- Generic Skill - Rank Bonus Calculation -->
// takes skill rank and progression and returns rank bonus
function GenSkillMod(rank, prog0, prog10, prog20, prog30, prog31) {
    let mod = 0;
    //	  console.log('/* ----------inside GenSkillMod rank:'+rank+'------------ */');
    if (rank == 0) {
        if (isNaN(prog0)) {mod=0;}
        else {mod = prog0;}
        //		  mod = -15;
    } else if (rank < 11) {
        mod = rank * prog10;
        //		  mod = rank * 3;
    } else if (rank < 21) {
        mod = Math.round((10 * prog10) + ((rank-10) * prog20));
        //		  mod = 10 + (rank * 2);
    } else if (rank < 31) {
        mod = Math.round((10 * prog10) + (10 * prog20) + ((rank-20) * prog30));
        //		  mod = 30 + rank;
    } else if (rank > 30) {
        mod = Math.round((10 * prog10) + (10 * prog20) + (10 * prog30) + ((rank - 30) * prog31));
        //		  mod = 45 + Math.round(rank / 2);
    }
    //	  console.log('/* ----------leaving GenSkillMod mod:'+mod+'------------ */');
    return mod;  
}
  
// <!-- Body Dev Progression Setup -->
// takes racial index (my value) and progression index and returns current rank modifier.  Passes through the current value if the race is set to "custom" rather than one of the premades
function BodyDevProgMod(race, pindex, currentval) {
    let mod = 0;
    	  console.log('/* ----------inside BodyDevProgMod race:'+race+'------------ */');
	const bodydevmods = {}; // to set up array... but doing if statments first because I understand them better.
    if (race == 'common man') {				//------Common Man------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 6;}
        else if (pindex == 20) {mod = 4;}
        else if (pindex == 30) {mod = 2;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'mixed man') {		//------Mixed Man------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 6;}
        else if (pindex == 20) {mod = 5;}
        else if (pindex == 30) {mod = 2;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'high man') {		//------High Man------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 7;}
        else if (pindex == 20) {mod = 5;}
        else if (pindex == 30) {mod = 3;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'half-elf') {		//------Half-elf------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 7;}
        else if (pindex == 20) {mod = 5;}
        else if (pindex == 30) {mod = 3;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'wood elf') {		//------Wood Elf------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 6;}
        else if (pindex == 20) {mod = 3;}
        else if (pindex == 30) {mod = 1;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'grey elf') {		//------Grey Elf------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 6;}
        else if (pindex == 20) {mod = 3;}
        else if (pindex == 30) {mod = 2;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'high elf') {		//------High Elf------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 7;}
        else if (pindex == 20) {mod = 3;}
        else if (pindex == 30) {mod = 2;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'dwarf') {		//------Dwarf------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 7;}
        else if (pindex == 20) {mod = 4;}
        else if (pindex == 30) {mod = 2;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'halfling') {		//------Halfling------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 6;}
        else if (pindex == 20) {mod = 2;}
        else if (pindex == 30) {mod = 2;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'half-orc') {		//------Half-orc------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 7;}
        else if (pindex == 20) {mod = 4;}
        else if (pindex == 30) {mod = 2;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'common orc') {		//------Common Orc------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 6;}
        else if (pindex == 20) {mod = 3;}
        else if (pindex == 30) {mod = 2;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'greater orc') {		//------Greater Orc------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 7;}
        else if (pindex == 20) {mod = 3;}
        else if (pindex == 30) {mod = 2;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'none' ) {		//------None; reset to zero------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 0;}
        else if (pindex == 20) {mod = 0;}
        else if (pindex == 30) {mod = 0;}
        else if (pindex == 31) {mod = 0;}
    } else {mod = currentval;}		//------Custom------
    	  console.log('/* ----------leaving BodyDevProgMod mod:'+mod+'------------ */');
    return mod;  
}
  
// <!-- Set Realm -->
// takes realm selection, in mod, em mod, and pr mod and returns proper realm bonus depending upon selected realm and current stats.
function SetRealm(rselect, intmod, empmod, premod) {
    let mod = 0;
    //	  console.log('/* ----------entering SetRealmMod mod:'+mod+' rselect:'+rselect+' intmod:'+intmod+' empmod:'+empmod+' premod:'+premod+'------------ */');
    if (rselect == 1) {			//channeling
        mod = intmod;
    } else if (rselect == 2) {	//essence
        mod = empmod;
    } else if (rselect == 3) {	//mentalism
        mod = premod;
    } else if (rselect == 4) {	//chan/ess
        mod = Math.round((intmod + empmod)/2);
    } else if (rselect == 5) {	//chan/ment
        mod = Math.round((intmod + premod) / 2);
    } else if (rselect == 6) {	//ess/ment
        mod = Math.round((empmod + premod) / 2);
    } else if (rselect == 7) {	//arcane
        mod = Math.round((intmod + empmod + premod) / 3);
    }
    //	  console.log('/* ----------leaving SetRealmMod mod:'+mod+'------------ */');
    return mod;  
}
  
// <!-- Power Point Dev Progression Setup -->
// takes realm selection, racial index (my value), and progression index and returns current rank modifier.  Passes through the current value if the race is set to "custom" rather than one of the premades
//  Race instead of racialindex.  going to need some work:  case statements would be better than these if statements.....  
function PPDevProgMod(rselect, race, pindex, currentval) {
    let mod = 0;
    	  console.log('/* ----------entering PPDevProgMod rselect:'+rselect+' race:'+race+' pindex:'+pindex+' mod:'+mod+'------------ */');
    if (rselect == 1) {							//------Channeling------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 6;}
        else if (pindex == 20) {mod = 5;}
        else if (pindex == 30) {mod = 4;}
        else if (pindex == 31) {mod = 3;}
    } else if ((race == 'common man') || (race == 'mixed man') || (race == 'high man') || (race == 'half-elf') || (race == 'wood elf') || (race == 'grey elf') || (race == 'high elf')){
        if (rselect == 2) {						//------Essence------
            if ((race == 'common man') || (race == 'mixed man') || (race == 'high man')) {			//------Common Man------/Mixed Man/High Man
                if (pindex == 0) {mod = 0;}
                else if (pindex == 10) {mod = 6;}
                else if (pindex == 20) {mod = 5;}
                else if (pindex == 30) {mod = 4;}
                else if (pindex == 31) {mod = 3;}
            } else if (race == 'half-elf') {					//------Half-elf------
                if (pindex == 0) {mod = 0;}
                else if (pindex == 10) {mod = 6;}
                else if (pindex == 20) {mod = 6;}
                else if (pindex == 30) {mod = 4;}
                else if (pindex == 31) {mod = 3;}
            } else if ((race == 'wood elf') || (race == 'grey elf') || (race == 'high elf')) {	//------Wood Elf------/Grey Elf/High Elf
                if (pindex == 0) {mod = 0;}
                else if (pindex == 10) {mod = 7;}
                else if (pindex == 20) {mod = 6;}
                else if (pindex == 30) {mod = 5;}
                else if (pindex == 31) {mod = 4;}
            }
        } else if (rselect == 3) {				//------Mentalism------
            if ((race == 'common man') || (race == 'mixed man') || (race == 'high man')) {			//------Common Man------/Mixed Man/High Man
                if (pindex == 0) {mod = 0;}
                else if (pindex == 10) {mod = 7;}
                else if (pindex == 20) {mod = 6;}
                else if (pindex == 30) {mod = 5;}
                else if (pindex == 31) {mod = 4;}
            } else if (race == 'half-elf') {					//------Half-elf------
                if (pindex == 0) {mod = 0;}
                else if (pindex == 10) {mod = 7;}
                else if (pindex == 20) {mod = 5;}
                else if (pindex == 30) {mod = 4;}
                else if (pindex == 31) {mod = 3;}
            } else if ((race == 'wood elf') || (race == 'grey elf') || (race == 'high elf')) {	//------Wood Elf------/Grey Elf/High Elf
                if (pindex == 0) {mod = 0;}
                else if (pindex == 10) {mod = 6;}
                else if (pindex == 20) {mod = 5;}
                else if (pindex == 30) {mod = 4;}
                else if (pindex == 31) {mod = 3;}
            }	
        } else if ((rselect == 4) || (rselect == 5) || (rselect == 7)) {	//------Chan-ess/chan-ment/arcane------
            if (pindex == 0) {mod = 0;}
            else if (pindex == 10) {mod = 6;}
            else if (pindex == 20) {mod = 5;}
            else if (pindex == 30) {mod = 4;}
            else if (pindex == 31) {mod = 3;}
        } else if (rselect == 6) {				//------Ess-Ment------
            if ((race == 'common man') || (race == 'mixed man') || (race == 'high man')) {			//------Common Man------/Mixed Man/High Man
                if (pindex == 0) {mod = 0;}
                else if (pindex == 10) {mod = 6;}
                else if (pindex == 20) {mod = 5;}
                else if (pindex == 30) {mod = 4;}
                else if (pindex == 31) {mod = 3;}
            } else if (race == 'half-elf') {					//------Half-elf------
                if (pindex == 0) {mod = 0;}
                else if (pindex == 10) {mod = 6;}
                else if (pindex == 20) {mod = 5;}
                else if (pindex == 30) {mod = 4;}
                else if (pindex == 31) {mod = 3;}
            } else if ((race == 'wood elf') || (race == 'grey elf') || (race == 'high elf')) {	//------Wood Elf------/Grey Elf/High Elf
                if (pindex == 0) {mod = 0;}
                else if (pindex == 10) {mod = 7;}
                else if (pindex == 20) {mod = 6;}
                else if (pindex == 30) {mod = 5;}
                else if (pindex == 31) {mod = 4;}
            }	
        }										//------Other------
    } else if (race == 'dwarf') {		//------Dwarf------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 3;}
        else if (pindex == 20) {mod = 2;}
        else if (pindex == 30) {mod = 1;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'halfling') {		//------Halfling------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 2;}
        else if (pindex == 20) {mod = 1;}
        else if (pindex == 30) {mod = 1;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'half-orc') {						//------Half-orc------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 6;}
        else if (pindex == 20) {mod = 4;}
        else if (pindex == 30) {mod = 3;}
        else if (pindex == 31) {mod = 2;}
    } else if (race == 'common orc') {						//------Common Orc------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 4;}
        else if (pindex == 20) {mod = 3;}
        else if (pindex == 30) {mod = 2;}
        else if (pindex == 31) {mod = 1;}
    } else if (race == 'greater orc') {						//------Greater Orc------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 5;}
        else if (pindex == 20) {mod = 3;}
        else if (pindex == 30) {mod = 2;}
        else if (pindex == 31) {mod = 2;}
    }  else if (race == 'none') {						//------None; reset to zero------
        if (pindex == 0) {mod = 0;}
        else if (pindex == 10) {mod = 0;}
        else if (pindex == 20) {mod = 0;}
        else if (pindex == 30) {mod = 0;}
        else if (pindex == 31) {mod = 0;}
    } else {						//------Custom------
        if (isNaN(currentval)) {mod = 0;}
        else {mod = currentval;}
    }
    	  console.log('/* ----------leaving PPDevProgMod mod:'+mod+'------------ */');
    return mod;  
}
  
// <!-- Race Fixed Info (Stat, RR bonuses + Soul Departure/Recovery Multiplier) Setup -->
// takes racial index and a value index for which stat/resistance/etc and returns the value for that race.  Passes through the current value if race is set to a non-supported/custom race.
function RaceFixedInfoSetup(race, index, currentval) {
    let mod = 0;
    	  console.log('/* ----------inside RaceFixedInfoSetup race:'+race+'------------ */');
    if (race == 'common man') {				//-------Common Man-------
        if (index == 1) {mod = 0;} 			//Ag 
        else if (index == 2) {mod = 0;}		//Co
        else if (index == 3) {mod = 0;}		//Me
        else if (index == 4) {mod = 0;}		//Re
        else if (index == 5) {mod = 2;}		//SD
        else if (index == 6) {mod = 0;}		//Em
        else if (index == 7) {mod = 0;}		//In
        else if (index == 8) {mod = 0;}		//Pr
        else if (index == 9) {mod = 0;}		//Qu
        else if (index == 10) {mod = 2;}	//St
        else if (index == 11) {mod = 0;}	//Ess
        else if (index == 12) {mod = 0;}	//Chan
        else if (index == 13) {mod = 0;}	//Ment
        else if (index == 14) {mod = 0;}	//Poison
        else if (index == 15) {mod = 0;}	//Disease
        else if (index == 20) {mod = 0;}    //Will
        else if (index == 16) {mod = 12;}	//Soul Departure
        else if (index == 17) {mod = 1;}	//Recovery Multiplier
        else if (index == 18) {mod = 2;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 0;}	//Bonus Exhaustion Points
    } else if (race == 'mixed man') {		//-------Mixed Man-------
        if (index == 1) {mod = 0;} 			//Ag
        else if (index == 2) {mod = 2;}		//Co
        else if (index == 3) {mod = 0;}		//Me
        else if (index == 4) {mod = 0;}		//Re
        else if (index == 5) {mod = 2;}		//SD
        else if (index == 6) {mod = 2;}		//Em
        else if (index == 7) {mod = 0;}		//In
        else if (index == 8) {mod = 2;}		//Pr
        else if (index == 9) {mod = 0;}		//Qu
        else if (index == 10) {mod = 2;}	//St 
        else if (index == 11) {mod = 0;}	//Ess
        else if (index == 12) {mod = 0;}	//Chan
        else if (index == 13) {mod = 0;}	//Ment
        else if (index == 14) {mod = 0;}	//Poison
        else if (index == 15) {mod = 0;}	//Disease
        else if (index == 20) {mod = 0;}    //Will
        else if (index == 16) {mod = 11;}	//Soul Departure
        else if (index == 17) {mod = 0.9;}	//Recovery Multiplier
        else if (index == 18) {mod = 2;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 0;}	//Bonus Exhaustion Points
    } else if (race = 'high man') {		//-------High Man-------
        if (index == 1) {mod = -2;} 			//Ag 
        else if (index == 2) {mod = 4;}		//Co
        else if (index == 3) {mod = 0;}		//Me
        else if (index == 4) {mod = 0;}		//Re
        else if (index == 5) {mod = 0;}		//SD
        else if (index == 6) {mod = 0;}		//Em
        else if (index == 7) {mod = 0;}		//In
        else if (index == 8) {mod = 4;}		//Pr
        else if (index == 9) {mod = -2;}	//Qu
        else if (index == 10) {mod = 4;}	//St
        else if (index == 11) {mod = -5;}	//Ess
        else if (index == 12) {mod = -5;}	//Chan
        else if (index == 13) {mod = -5;}	//Ment
        else if (index == 14) {mod = 0;}	//Poison
        else if (index == 15) {mod = 0;}	//Disease
        else if (index == 20) {mod = 0;}    //Will
        else if (index == 16) {mod = 10;}	//Soul Departure
        else if (index == 17) {mod = 0.75;}	//Recovery Multiplier
        else if (index == 18) {mod = 2;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 0;}	//Bonus Exhaustion Points
    } else if (race == 'half-elf') {		//-------Half-elf-------
        if (index == 1) {mod = 2;} 			//Ag 
        else if (index == 2) {mod = 2;}		//Co
        else if (index == 3) {mod = 0;}		//Me
        else if (index == 4) {mod = 0;}		//Re
        else if (index == 5) {mod = -3;}	//SD
        else if (index == 6) {mod = 0;}		//Em
        else if (index == 7) {mod = 0;}		//In
        else if (index == 8) {mod = 4;}		//Pr
        else if (index == 9) {mod = 4;}		//Qu
        else if (index == 10) {mod = 2;}	//St
        else if (index == 11) {mod = -5;}	//Ess
        else if (index == 12) {mod = -5;}	//Chan
        else if (index == 13) {mod = -5;}	//Ment
        else if (index == 14) {mod = 0;}	//Poison
        else if (index == 15) {mod = 50;}	//Disease
        else if (index == 20) {mod = -15;}  //Will
        else if (index == 16) {mod = 6;}	//Soul Departure
        else if (index == 17) {mod = 1.5;}	//Recovery Multiplier
        else if (index == 18) {mod = 3;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 0;}	//Bonus Exhaustion Points
    } else if (race == 'wood elf') {		//-------Wood Elf-------
        if (index == 1) {mod = 4;} 			//Ag 
        else if (index == 2) {mod = 0;}		//Co
        else if (index == 3) {mod = 2;}		//Me
        else if (index == 4) {mod = 0;}		//Re
        else if (index == 5) {mod = -5;}	//SD
        else if (index == 6) {mod = 2;}		//Em
        else if (index == 7) {mod = 0;}		//In
        else if (index == 8) {mod = 2;}		//Pr
        else if (index == 9) {mod = 2;}		//Qu
        else if (index == 10) {mod = 0;}	//St
        else if (index == 11) {mod = -5;}	//Ess
        else if (index == 12) {mod = -5;}	//Chan
        else if (index == 13) {mod = -5;}	//Ment
        else if (index == 14) {mod = 10;}	//Poison
        else if (index == 15) {mod = 100;}	//Disease
        else if (index == 20) {mod = -15;}  //Will
        else if (index == 16) {mod = 3;}	//Soul Departure
        else if (index == 17) {mod = 1.5;}	//Recovery Multiplier
        else if (index == 18) {mod = 3;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 0;}	//Bonus Exhaustion Points
    } else if (race == 'grey elf') {		//-------Grey Elf-------
        if (index == 1) {mod = 2;} 			//Ag 
        else if (index == 2) {mod = 0;}		//Co
        else if (index == 3) {mod = 2;}		//Me
        else if (index == 4) {mod = 0;}		//Re
        else if (index == 5) {mod = -5;}	//SD
        else if (index == 6) {mod = 2;}		//Em
        else if (index == 7) {mod = 0;}		//In
        else if (index == 8) {mod = 4;}		//Pr
        else if (index == 9) {mod = 4;}		//Qu
        else if (index == 10) {mod = 0;}	//St
        else if (index == 11) {mod = -5;}	//Ess
        else if (index == 12) {mod = -5;}	//Chan
        else if (index == 13) {mod = -5;}	//Ment
        else if (index == 14) {mod = 10;}	//Poison
        else if (index == 15) {mod = 100;}	//Disease
        else if (index == 20) {mod = -15;}  //Will
        else if (index == 16) {mod = 2;}	//Soul Departure
        else if (index == 17) {mod = 2;}	//Recovery Multiplier
        else if (index == 18) {mod = 4;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 0;}	//Bonus Exhaustion Points
    } else if (race == 'high elf') {		//-------High Elf-------
        if (index == 1) {mod = 2;} 			//Ag 
        else if (index == 2) {mod = 0;}		//Co
        else if (index == 3) {mod = 2;}		//Me
        else if (index == 4) {mod = 0;}		//Re
        else if (index == 5) {mod = -5;}	//SD
        else if (index == 6) {mod = 2;}		//Em
        else if (index == 7) {mod = 0;}		//In
        else if (index == 8) {mod = 6;}		//Pr
        else if (index == 9) {mod = 6;}		//Qu
        else if (index == 10) {mod = 0;}	//St
        else if (index == 11) {mod = -5;}	//Ess
        else if (index == 12) {mod = -5;}	//Chan
        else if (index == 13) {mod = -5;}	//Ment
        else if (index == 14) {mod = 10;}	//Poison
        else if (index == 15) {mod = 100;}	//Disease
        else if (index == 20) {mod = -15;}  //Will
        else if (index == 16) {mod = 1;}	//Soul Departure
        else if (index == 17) {mod = 3;}	//Recovery Multiplier
        else if (index == 18) {mod = 5;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 0;}	//Bonus Exhaustion Points
    } else if (race == 'dwarf') {		//-------Dwarf-------
        if (index == 1) {mod = -2;} 			//Ag 
        else if (index == 2) {mod = 6;}		//Co
        else if (index == 3) {mod = 0;}		//Me
        else if (index == 4) {mod = 0;}		//Re
        else if (index == 5) {mod = 2;}		//SD
        else if (index == 6) {mod = -4;}	//Em
        else if (index == 7) {mod = 0;}		//In
        else if (index == 8) {mod = -4;}	//Pr
        else if (index == 9) {mod = -2;}	//Qu
        else if (index == 10) {mod = 2;}	//St
        else if (index == 11) {mod = 40;}	//Ess
        else if (index == 12) {mod = 0;}	//Chan
        else if (index == 13) {mod = 40;}	//Ment
        else if (index == 14) {mod = 20;}	//Poison
        else if (index == 15) {mod = 15;}	//Disease
        else if (index == 20) {mod = 80;}   //Will
        else if (index == 16) {mod = 21;}	//Soul Departure
        else if (index == 17) {mod = 0.5;}	//Recovery Multiplier
        else if (index == 18) {mod = 1;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 0;}	//Bonus Exhaustion Points
    } else if (race == 'halfling') {		//-------Halfling-------
        if (index == 1) {mod = 6;} 			//Ag 
        else if (index == 2) {mod = 6;}		//Co
        else if (index == 3) {mod = 0;}		//Me
        else if (index == 4) {mod = 0;}		//Re
        else if (index == 5) {mod = -4;}	//SD
        else if (index == 6) {mod = -2;}	//Em
        else if (index == 7) {mod = 0;}		//In
        else if (index == 8) {mod = -6;}	//Pr
        else if (index == 9) {mod = 4;}		//Qu
        else if (index == 10) {mod = -8;}	//St
        else if (index == 11) {mod = 40;}	//Ess
        else if (index == 12) {mod = 0;}	//Chan
        else if (index == 13) {mod = 40;}	//Ment
        else if (index == 14) {mod = 30;}	//Poison
        else if (index == 15) {mod = 15;}	//Disease
        else if (index == 20) {mod = 90;}   //Will
        else if (index == 16) {mod = 18;}	//Soul Departure
        else if (index == 17) {mod = 0.5;}	//Recovery Multiplier
        else if (index == 18) {mod = 1;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 0;}	//Bonus Exhaustion Points
    } else if (race == 'half-orc') {		//-------Half-orc-------
        if (index == 1) {mod = 0;} 			//Ag 
        else if (index == 2) {mod = 2;}		//Co
        else if (index == 3) {mod = 0;}		//Me
        else if (index == 4) {mod = 0;}		//Re
        else if (index == 5) {mod = 2;}		//SD
        else if (index == 6) {mod = 0;}		//Em
        else if (index == 7) {mod = 0;}		//In
        else if (index == 8) {mod = 0;}		//Pr
        else if (index == 9) {mod = 0;}		//Qu
        else if (index == 10) {mod = 2;}	//St
        else if (index == 11) {mod = 0;}	//Ess
        else if (index == 12) {mod = 0;}	//Chan
        else if (index == 13) {mod = 0;}	//Ment
        else if (index == 14) {mod = 5;}	//Poison
        else if (index == 15) {mod = 5;}	//Disease
        else if (index == 20) {mod = 0;}    //Will
        else if (index == 16) {mod = 6;}	//Soul Departure
        else if (index == 17) {mod = 0.75;}	//Recovery Multiplier
        else if (index == 18) {mod = 2;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 10;}	//Bonus Exhaustion Points
    } else if (race == 'common orc') {		//-------Common Orc-------
        if (index == 1) {mod = 0;} 			//Ag 
        else if (index == 2) {mod = 2;}		//Co
        else if (index == 3) {mod = -4;}	//Me
        else if (index == 4) {mod = -2;}	//Re
        else if (index == 5) {mod = -4;}	//SD
        else if (index == 6) {mod = -2;}	//Em
        else if (index == 7) {mod = -4;}	//In
        else if (index == 8) {mod = -2;}	//Pr
        else if (index == 9) {mod = 0;}		//Qu
        else if (index == 10) {mod = 2;}	//St
        else if (index == 11) {mod = 0;}	//Ess
        else if (index == 12) {mod = 0;}	//Chan
        else if (index == 13) {mod = 0;}	//Ment
        else if (index == 14) {mod = 0;}	//Poison
        else if (index == 15) {mod = 5;}	//Disease
        else if (index == 20) {mod = 0;}    //Will
        else if (index == 16) {mod = 1;}	//Soul Departure
        else if (index == 17) {mod = 0.5;}	//Recovery Multiplier
        else if (index == 18) {mod = 2;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 20;}	//Bonus Exhaustion Points
    } else if (race == 'greater orc') {		//-------Greater Orc-------
        if (index == 1) {mod = 0;} 			//Ag 
        else if (index == 2) {mod = 4;}		//Co
        else if (index == 3) {mod = -2;}	//Me
        else if (index == 4) {mod = -2;}	//Re
        else if (index == 5) {mod = -2;}	//SD
        else if (index == 6) {mod = -2;}	//Em
        else if (index == 7) {mod = -2;}	//In
        else if (index == 8) {mod = -2;}	//Pr
        else if (index == 9) {mod = 0;}		//Qu
        else if (index == 10) {mod = 4;}	//St
        else if (index == 11) {mod = 0;}	//Ess
        else if (index == 12) {mod = 0;}	//Chan
        else if (index == 13) {mod = 0;}	//Ment
        else if (index == 14) {mod = 5;}	//Poison
        else if (index == 15) {mod = 10;}	//Disease
        else if (index == 20) {mod = 0;}    //Will
        else if (index == 16) {mod = 1;}	//Soul Departure
        else if (index == 17) {mod = 0.5;}	//Recovery Multiplier
        else if (index == 18) {mod = 2;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 30;}	//Bonus Exhaustion Points
    } else if (race == 'none') {		//-------None; Reset to zero-------
        if (index == 1) {mod = 0;} 			//Ag 
        else if (index == 2) {mod = 0;}		//Co
        else if (index == 3) {mod = 0;}		//Me
        else if (index == 4) {mod = 0;}		//Re
        else if (index == 5) {mod = 0;}		//SD
        else if (index == 6) {mod = 0;}		//Em
        else if (index == 7) {mod = 0;}		//In
        else if (index == 8) {mod = 0;}		//Pr
        else if (index == 9) {mod = 0;}		//Qu
        else if (index == 10) {mod = 0;}	//St
        else if (index == 11) {mod = 0;}	//Ess
        else if (index == 12) {mod = 0;}	//Chan
        else if (index == 13) {mod = 0;}	//Ment
        else if (index == 14) {mod = 0;}	//Poison
        else if (index == 15) {mod = 0;}	//Disease
        else if (index == 20) {mod = 0;}    //Will
        else if (index == 16) {mod = 0;}	//Soul Departure
        else if (index == 17) {mod = 0;}	//Recovery Multiplier
        else if (index == 18) {mod = 0;}	//Race Type for Stat Loss
        else if (index == 19) {mod = 0;}	//Bonus Exhaustion Points
    } else {mod = currentval;}		//------Custom------
    	  console.log('/* ----------leaving RaceFixedInfoSetup mod:'+mod+'------------ */');
    return mod;  
}
  
// <!-- Profession Bonus for Skill Categories Setup -->
// takes a profession index and an index for which skill category and returns Profession bonus for that skill/profession combo.
function ProfessionInfoSetup(professionindex, index, currentval) {
    let mod = 0;
    //	  console.log('/* ----------inside ProfessionInfoSetup professionindex:'+professionindex+' index:'+index+' currentval:'+currentval+'------------ */');
    if (professionindex == 99) {mod = 0;}					//------Reset profession bonuses------
    if (professionindex == 21) {mod = currentval;}		//------Custom------
    else {
        if ((index == 1) || (index == 2) || (index == 3)) {		// -------cat-armor-heavy(light/med)-profbonus-------
            if (professionindex == 1) {mod = 10;}			//Fighter
            else if ((professionindex == 3) || (professionindex == 16)) {mod = 5;}	//Rogue/Paladin
        } else if (index == 4) {		// -------cat-artistic-active-profbonus-------
            if (professionindex == 19) {mod = 5;}			//Bard
        } else if (index == 5) {  		// -------cat-artistic-passive-profbonus-------
            //None in Standard Rules
        } else if ((index == 6) || (index == 7 )) {	//-------cat-athletic-brawn(endur/gym)-profbonus-------
            if ((professionindex == 5) || (professionindex == 15) || (professionindex == 16)) {mod = 5;}		//Layman/Ranger/Paladin
        } else if (index == 8) {		// -------cat-athletic-gym-profbonus-------
            if ((professionindex == 2) || (professionindex == 3) || (professionindex == 4) || (professionindex == 5) || (professionindex == 15) || (professionindex == 16) || (professionindex == 17)) {mod = 5;}	//Thief/Rogue/Warrior Monk/Layman/Ranger/Paladin/Monk
        } else if ((index == 9) || (index == 10) || (index == 11)) {	// -------cat-aware-percept(search/senses)-profbonus-------
            if ((professionindex == 2) || (professionindex == 15) || (professionindex == 18) || (professionindex == 20)) {mod = 10;}		//Thief/Ranger/Dabbler/Magent
            else if ((professionindex == 3) || (professionindex == 4) || (professionindex == 5) || (professionindex == 7) || (professionindex == 8) || (professionindex == 9) || (professionindex == 10) || (professionindex == 11) || (professionindex == 12) || (professionindex == 13) || (professionindex == 16) || (professionindex == 17) || (professionindex == 19)) {mod = 5;}	//Rogue/Warrior Monk/Layman/Illusionist/Cleric/Animist/Mentalist/Lay Healer/Mystic/Paladin/Bard
        } else if (index == 12) {		// -------bodydevcatbonus-------
            if ((professionindex == 1) || (professionindex == 4) || (professionindex == 11) || (professionindex == 12) || (professionindex == 16)) {mod = 10;}	//Fighter/Warrior Monk/Lay Healer/Healer/Paladin
            else if ((professionindex == 2) || (professionindex == 3) || (professionindex == 5) || (professionindex == 10) || (professionindex == 15) || (professionindex == 17) || (professionindex == 18) || (professionindex == 19) || (professionindex == 20)) {mod = 5;}	//Thief/Rogue/Layman/Mentalist/Ranger/Monk/Dabbler/Bard/Magent
        } else if (index == 13) {		// -------cat-combat-maneuvers-profbonus-------
            if ((professionindex == 1) || (professionindex == 16)) {mod = 10;}		//Fighter/Paladin
            else if (professionindex == 3) {mod = 5;}		//Rogue
        } else if (index == 14) {		// -------cat-communications-profbonus-------
            if ((professionindex == 19) || (professionindex == 20)) {mod = 5;}		//Bard/Magent
        } else if (index == 15) {		// -------cat-crafts-profbonus-------
            if (professionindex == 5) {mod = 5;}			//Layman
        } else if (index == 16) {		// -------cat-directed-spells-profbonus-------
            if (professionindex == 6) {mod = 10;}			//Magician
            else if ((professionindex == 7) || (professionindex == 14)) {mod = 5;}	//Illusionist/Sorcerer
        } else if (index == 17) {		// -------cat-influence-profbonus-------
            if (professionindex == 10) {mod = 10;}			//Mentalist
            else if ((professionindex == 8) || (professionindex == 13) || (professionindex == 18) || (professionindex == 19) || (professionindex == 20)) {mod = 5;}	//Cleric/Mystic/Dabbler/Bard/Magent
        } else if ((index == 18) || (index == 20) || (index == 21)) {	// -------cat-lore-general(obscure/technical)-profbonus-------
            if (professionindex == 19) {mod = 10;}			//Bard
        } else if (index == 19) {		// -------cat-lore-magical-profbonus-------
            if ((professionindex == 6) || (professionindex == 7) || (professionindex == 14) || (professionindex == 19)) {mod = 10;}	//Magician/Illusionist/Sorcerer/Bard
            else if ((professionindex == 8) || (professionindex == 9) || (professionindex == 10) || (professionindex == 11) || (professionindex == 12) || (professionindex == 13) || (professionindex == 18)) {mod = 5;}	//Cleric/Animist/Mentalist/Lay Healer/Healer/Mystic/Dabbler
        } else if ((index == 22) || (index == 23)) {	// -------cat-ma-striking(sweeps)-profbonus-------
            if (professionindex == 4) {mod = 15;}			//Warrior Monk
            else if (professionindex == 17) {mod = 10;}		//Monk
        } else if ((index == 24) || (index == 25)) {	// -------cat-outdoor-animal(environ)-profbonus-------
            if ((professionindex == 9) || (professionindex == 15)) {mod = 20;}		//Animist/Ranger
            else if ((professionindex == 5) || (professionindex == 8)) {mod = 5;}	//Layman/Cleric
        } else if (index == 26) {		// -------cat-power-awareness-profbonus-------
            if ((professionindex == 6) || (professionindex == 7) || (professionindex == 8) || (professionindex == 13) || (professionindex == 14)) {mod = 10;}	//Magician/Illusionist/Cleric/Mystic/Sorcerer
            else if ((professionindex == 5) || (professionindex == 9) || (professionindex == 10) || (professionindex == 11) || (professionindex == 12) || (professionindex == 17) || (professionindex == 18) || (professionindex == 19) || (professionindex == 20)) {mod = 5;}	//Layman/Animist/Mentalist/Lay Healer/Healer/Monk/Dabbler/Bard/Magent
        } else if (index == 27) {		// -------cat-power-manipulation-profbonus-------
            if (professionindex == 14) {mod = 15;}			//Sorcerer
            else if ((professionindex == 6) || (professionindex == 7)) {mod = 10;}	//Magician/Illusionist
            else if ((professionindex == 5) || (professionindex == 8) || (professionindex == 9) || (professionindex == 10) || (professionindex == 11) || (professionindex == 12) || (professionindex == 13) || (professionindex == 16) || (professionindex == 18)) {mod = 5;}	//Layman/Cleric/Animist/Mentalist/Lay Healer/Healer/Mystic/Paladin/Dabbler
        } else if (index == 28) {		// -------ppdevcatbonus-------
            if ((professionindex == 6) || (professionindex == 7) || (professionindex == 8) || (professionindex == 9) || (professionindex == 10) || (professionindex == 11) || (professionindex == 12) || (professionindex == 13) || (professionindex == 14)) {mod = 5;}	//Magician/Illusionist/Cleric/Animist/Mentalist/Lay Healer/Healer/Mystic/Sorcerer
        } else if ((index == 29) || (index == 30)) {	// -------cat-science-basic(specialized)-profbonus-------
            //None in Standard Rules
        } else if (index == 31) {		// -------cat-self-control-profbonus-------
            if (professionindex == 4) {mod = 15;}			//Warrior Monk
            else if ((professionindex == 11) || (professionindex == 12) || (professionindex == 17) || (professionindex == 20)) {mod = 10;}	//Lay Healer/Healer/Monk/Magent
            else if ((professionindex == 2) || (professionindex == 5) || (professionindex == 10) || (professionindex == 13) || (professionindex == 19)) {mod = 5;}	//Thief/Layman/Mentalist/Mystic/Bard
        } else if (index == 32) {		// -------cat-special-attacks-profbonus-------
            //None in Standard Rules
        } else if ((index == 33) || (index == 34)) {	// -------cat-subterfuge-attack(mechanics)-profbonus-------
            if (professionindex == 2) {mod = 15;}			//Thief
            else if (professionindex == 3) {mod = 10;}		//Rogue
            else if ((professionindex == 18) || (professionindex == 20)) {mod = 5;}	//Dabbler/Magent
        } else if (index == 35) {		// -------cat-subterfuge-stealth-profbonus-------
            if (professionindex == 2) {mod = 15;}			//Thief
            else if (professionindex == 3) {mod = 10;}		//Rogue
            else if ((professionindex == 13) || (professionindex == 15) || (professionindex == 17) || (professionindex == 18) || (professionindex == 20)) {mod = 5;}	//Mystic/Ranger/Monk/Dabbler/Magent
        } else if ((index == 36) || (index == 37) || (index == 38)) {	// -------cat-tech-general(professionindexal/vocational)-profbonus-------
            if (professionindex == 5) {mod = 5;}			//Layman
        } else if (index == 39) {		// -------cat-urban-profbonus-------
            if (professionindex == 18) {mod = 5;}			//Dabbler
        } else if ((index == 40) || (index == 41) || (index == 42) || (index == 43) || (index == 44) || (index == 45) || (index == 46)) {	// -------cat-weapon-1hconcussion(1hedged/2handed/missile/missileartillery/polearms/thrown)-profbonus-------
            if (professionindex == 1) {mod = 20;}			//Fighter
            else if (professionindex == 3) {mod = 15;}		//Rogue
            else if ((professionindex == 2) || (professionindex == 16)) {mod = 10;}	//Thief/Paladin
            else if ((professionindex == 5) || (professionindex == 8) || (professionindex == 15) || (professionindex == 17) || (professionindex == 18) || (professionindex == 19) || (professionindex == 20)) {mod = 5;}	//Layman/Cleric/Ranger/Monk/Dabbler/Bard/Magent
        } else if ((index == 47) || (index == 48) || (index == 49) || (index == 50) || (index == 51) || (index == 52) || (index == 53) || (index == 54) || (index == 55) || (index == 56) || (index == 57)) {	// -------srob(sropen/srclosed/srotherb/oropen/orclosed/orbase/arcopen/arcclosed/arcbase/arcotherbase)-catprofbonus-------
            if ((professionindex == 6) || (professionindex == 7) || (professionindex == 8) || (professionindex == 9) || (professionindex == 10) || (professionindex == 11) || (professionindex == 12) || (professionindex == 13) || (professionindex == 14)) {mod = 5;}	//Magician/Illusionist/Cleric/Animist/Mentalist/Lay Healer/Healer/Mystic/Sorcerer
        } 
    }
    //	  console.log('/* ----------leaving ProfessionInfoSetup mod:'+mod+'------------ */');
    return mod;  
}
  
//	<!---- Calc skill bonus from ranks/progression (use GenSkillMod to calc the actual value) ---->	
function SkillChange(name) {
    getAttrs(['skillcalc'], function(values) {
        if (parseInt(values.skillcalc,10) == 1){
            //    console.log('/* ----------entering SkillChange ------------ */');
            let prog;
            prog = name.replace(/ranks/g,'prog');
            let bonus = name.replace(/ranks/g,'rankbonus');
            //    console.log('/* ----------SkillChange: prog:'+prog+' bonus:'+bonus+' ------------ */'); // debug
            getAttrs([prog],function(values) {
                //    console.log('/* ----------SkillChange: prog value:'+values[prog]+' ------------ */'); // debug
                if (values[prog] == 1) { //combined
                    getAttrs([name, 'combprog0', 'combprog10', 'combprog20', 'combprog30', 'combprog31'], function(values) {
                        let update = {};
                        update[bonus]=GenSkillMod(parseInt(values[name],10), parseFloat(values.combprog0),parseFloat(values.combprog10), parseFloat(values.combprog20), parseFloat(values.combprog30), parseFloat(values.combprog31));
                        setAttrs(update);
                    });
                } else if (values[prog] == 2) { // Category
                    getAttrs([name, 'catprog0', 'catprog10', 'catprog20', 'catprog30', 'catprog31'], function(values) {
                        let update = {};
                        update[bonus]=GenSkillMod(parseInt(values[name],10), parseFloat(values.catprog0),parseFloat(values.catprog10), parseFloat(values.catprog20), parseFloat(values.catprog30), parseFloat(values.catprog31));
                        setAttrs(update);
                    });
                } else if (values[prog] == 3) { // Standard
                    getAttrs([name, 'stdprog0', 'stdprog10', 'stdprog20', 'stdprog30', 'stdprog31'], function(values) {
                        let update = {};
                        update[bonus]=GenSkillMod(parseInt(values[name],10), parseFloat(values.stdprog0),parseFloat(values.stdprog10), parseFloat(values.stdprog20), parseFloat(values.stdprog30), parseFloat(values.stdprog31));
                        setAttrs(update);
                    });
                } else if (values[prog] == 4) { // Special/Spell
                    getAttrs([name, 'spellprog0', 'spellprog10', 'spellprog20', 'spellprog30', 'spellprog31'], function(values) {
                        let update = {};
                        update[bonus]=GenSkillMod(parseInt(values[name],10), parseFloat(values.spellprog0),parseFloat(values.spellprog10), parseFloat(values.spellprog20), parseFloat(values.spellprog30), parseFloat(values.spellprog31));
                        setAttrs(update);
                    });
                } else if (values[prog] == 5) { // Bodydev
                    getAttrs([name, 'bodydevprog0', 'bodydevprog10', 'bodydevprog20', 'bodydevprog30', 'bodydevprog31'], function(values) {
                        let update = {};
                        update[bonus]=GenSkillMod(parseInt(values[name],10), parseFloat(values.bodydevprog0),parseFloat(values.bodydevprog10), parseFloat(values.bodydevprog20), parseFloat(values.bodydevprog30), parseFloat(values.bodydevprog31));
                        setAttrs(update);
                    });
                } else if (values[prog] == 6) { // PPDev
                    getAttrs([name, 'ppdevprog0', 'ppdevprog10', 'ppdevprog20', 'ppdevprog30', 'ppdevprog31'], function(values) {
                        let update = {};
                        update[bonus]=GenSkillMod(parseInt(values[name],10), parseFloat(values.ppdevprog0),parseFloat(values.ppdevprog10), parseFloat(values.ppdevprog20), parseFloat(values.ppdevprog30), parseFloat(values.ppdevprog31));
                        setAttrs(update);
                    });
                } else if (values[prog] == 7) { // Custom1
                    getAttrs([name, 'cust1prog0', 'cust1prog10', 'cust1prog20', 'cust1prog30', 'cust1prog31'], function(values) {
                        let update = {};
                        update[bonus]=GenSkillMod(parseInt(values[name],10), parseFloat(values.cust1prog0),parseFloat(values.cust1prog10), parseFloat(values.cust1prog20), parseFloat(values.cust1prog30), parseFloat(values.cust1prog31));
                        setAttrs(update);
                    });
                } else if (values[prog] == 8) { // Custom2
                    getAttrs([name, 'cust2prog0', 'cust2prog10', 'cust2prog20', 'cust2prog30', 'cust2prog31'], function(values) {
                        let update = {};
                        update[bonus]=GenSkillMod(parseInt(values[name],10), parseFloat(values.cust2prog0),parseFloat(values.cust2prog10), parseFloat(values.cust2prog20), parseFloat(values.cust2prog30), parseFloat(values.cust2prog31));
                        setAttrs(update);
                    });
                }
            });
            //  console.log('/* ----------exiting SkillChange ------------ */');
        }
    });
}

//		Update the dropdown stats for the skills since they got renamed and we don't want to lose data NYI
function FixDropdownStats(name) {
    let stat = name + 'stat';
    let display = name + 'statdisplay';
    let choice = name + 'statchoice';
    let svalue = 0;
    let cvalue = '';
    //console.log('/* ---------- stat:'+stat+'; choice:'+choice+'------------ */');
    getAttrs([stat, display, choice, 'agbonus', 'cobonus', 'mebonus', 'rebonus', 'sdbonus', 'embonus', 'inbonus', 'prbonus', 'qubonus', 'stbonus'], function(values) {
        console.log('/* ---------- stat:'+stat+' value stat:'+values[stat]+'; display:'+display+'; value display:'+values[display]+'; choice:'+choice+'; value choice:'+values[choice]+'------------ */');
        if (values[stat].includes('ag')) { 
            svalue = parseInt(values.agbonus,10); 
            cvalue = 'ag'; 
        }
        if (values.stat.includes('co')) { 
            svalue = parseInt(values.cobonus,10); 
            cvalue = 'co'; 
        }
        if (values.stat.includes('me')) { 
            svalue = parseInt(values.mebonus,10); 
            cvalue = 'me'; 
        }
        if (values.stat.includes('re')) { 
            svalue = parseInt(values.rebonus,10); 
            cvalue = 're'; 
        }
        if (values.stat.includes('sd')) { 
            svalue = parseInt(values.sdbonus,10); 
            cvalue = 'sd'; 
        }
        if (values.stat.includes('em')) { 
            svalue = parseInt(values.embonus,10); 
            cvalue = 'em'; 
        }
        if (values.stat.includes('in')) { 
            svalue = parseInt(values.inbonus,10); 
            cvalue = 'in'; 
        }
        if (values.stat.includes('pr')) { 
            svalue = parseInt(values.prbonus,10);
            cvalue = 'pr';  
        }
        if (values.stat.includes('qu')) { 
            svalue = parseInt(values.qubonus,10);
            cvalue = 'qu';  
        }
        if (values.stat.includes('st')) { 
            svalue = parseInt(values.stbonus,10); 
            cvalue = 'st'; 
        }
        console.log ('/*------ svalue:'+svalue+';  cvalue:'+cvalue);
        setAttrs({
            [name+ 'stat']: svalue,      
            [name+ 'statchoice']: cvalue
        });
    });
}
//	<!---- Calc total skill bonus ------->	
function CalcTotalBonus(name) {
//    console.log('/* ----------entering CalcTotalBonus  ------------ */'); 
//	let temp = name+"z";
    let skill = name.replace(/-$/g,'');   //need to remove the last - but not the previous ones....
    let rankbonus = name+'rankbonus';
    let stat = name+'stat';
    let catbonus = name+'catbonus';
    let specialmod = name+'specialmod';
    let itemmod = name+'itemmod';
    let specialbonus = name+'specialbonus';
    let itembonus = name+'itembonus';
    let statbonus = name+'statbonus';
    let profbonus = name+'profbonus';
    //console.log('/* ----------CalcTotalBonus: name value:'+skill+'; rankbonus value:'+rankbonus+'; stat value:'+stat+'; catbonus value:'+catbonus+'; specialmod value:'+specialmod+'; itemmod value:'+itemmod+'; statbonus value:'+statbonus+'; profbonus value:'+profbonus+'; specialbonus value:'+specialbonus+'; itemmod value:'+itembonus+' ------------ */'); // debug 
    getAttrs([skill, stat, rankbonus, catbonus, specialmod, specialmod, itemmod, statbonus, profbonus, specialbonus, itembonus], function(values) {
        let update = {};
        let rbon = parseInt(values[rankbonus],10)||0;
        let statv = parseInt(values[stat],10)||0;
        let catbon = parseInt(values[catbonus],10)||0;
        let spmod = parseInt(values[specialmod],10)||0;
        let imod = parseInt(values[itemmod],10)||0;
        let stbon = parseInt(values[statbonus],10)||0;
        let profbon = parseInt(values[profbonus],10)||0;
        let spbon = parseInt(values[specialbonus],10)||0;
        let ibon = parseInt(values[itembonus],10)||0;
        //console.log('/* ----------CalcTotalBonus: rankbonus value:'+rbon+'; stat value:'+statv+'; catbonus value:'+catbon+'; specialmod value:'+spmod+'; itemmod value:'+imod+'; statbonus value:'+stbon+'; profbonus value:'+profbon+'; specialbonus value:'+spbon+'; itemmod value:'+ibon+' ------------ */'); // debug 
        if (name == 'bodydev') {
            update[skill]=rbon + statv + catbon + spmod + imod + stbon + profbon + spbon + ibon + 10.0;
        } else {
            update[skill]=rbon + statv + catbon + spmod + imod + stbon + profbon + spbon + ibon;
        }
        //console.log('/* ----------CalcTotalBonus:'+skill+' value:'+values[skill]+' ------------ */'); // debug
        setAttrs(update);
    });
//console.log('/* ----------exiting CalcTotalBonus ------------ */');
}

// <!-- change the skill stat when the skill dropdown changes -->
function DropdownStatChange(statname) {
    let statchoice = statname+'choice';  //gigs todo
    getAttrs(['agbonus', 'cobonus', 'mebonus', 'rebonus', 'sdbonus', 'embonus', 'inbonus', 'prbonus', 'qubonus', 'stbonus', statchoice], function(values) {
        let update = {};
        //console.log('/*-------------- Statname:'+statname+';  Statchoice:'+statchoice+';  Scvalue:'+values[statchoice]+'-----------*/');
        const statabs = ['ag','co','me','re','sd','em','in','pr','qu','st'];
        //gigs done
        update[statname] = statabs.includes(values[statchoice]) ? (parseInt(values[statname + 'bonus'] ,10)||0)  : 0 ;
        /*if (values[statchoice] == 'ag') {
            update[statname] = parseInt(values.agbonus,10)||0;
        } else if (values[statchoice] == 'co') {
            update[statname] = parseInt(values.cobonus,10)||0;
        } else if (values[statchoice] == 'me') {
            update[statname] = parseInt(values.mebonus,10)||0;
        } else if (values[statchoice] == 're') {
            update[statname] = parseInt(values.rebonus,10)||0;
        } else if (values[statchoice] == 'sd') {
            update[statname] = parseInt(values.sdbonus,10)||0;
        } else if (values[statchoice] == 'em') {
            update[statname] = parseInt(values.embonus,10)||0;
        } else if (values[statchoice] == 'in') {
            update[statname] = parseInt(values.inbonus,10)||0;
        } else if (values[statchoice] == 'pr') {
            update[statname] = parseInt(values.prbonus,10)||0;
        } else if (values[statchoice] == 'qu') {
            update[statname] = parseInt(values.qubonus,10)||0;
        } else if (values[statchoice] == 'st') {
            update[statname] = parseInt(values.stbonus,10)||0;
        } else {
            update[statname] = 0;
        }*/
        setAttrs(update);
    });
}

// <!---- Copy Offensive Bonus from skill to attack if you can find it ---->
function WeaponOBCopy(attack){
    let attname = attack+'name';
    let attbonus = attack+'bonus';
    getAttrs([attname, attbonus, 'weapon1hc1name', 'weapon1hc1', 'weapon1hc2name', 'weapon1hc2', 'weapon1hc3name', 'weapon1hc3', 'weapon1he1name', 'weapon1he1', 'weapon1he2name', 'weapon1he2', 'weapon1he3name', 'weapon1he3', 'weapon2hand1name', 'weapon2hand1', 'weapon2hand2name', 'weapon2hand2', 'weapon2hand3name', 'weapon2hand3', 'weaponmissile1name', 'weaponmissile1', 'weaponmissile2name', 'weaponmissile2', 'weaponmissile3name', 'weaponmissile3', 'weaponmissileart1name', 'weaponmissileart1', 'weaponmissileart2name', 'weaponmissileart2', 'weaponmissileart3name', 'weaponmissileart3', 'weaponpolearm1name', 'weaponpolearm1', 'weaponpolearm2name', 'weaponpolearm2', 'weaponpolearm3name', 'weaponpolearm3', 'weaponthrown1name', 'weaponthrown1', 'weaponthrown2name', 'weaponthrown2', 'weaponthrown3name', 'weaponthrown3', 'sweeps1', 'sweeps2', 'sweeps3', 'sweeps4', 'striking1', 'striking2', 'striking3', 'striking4', 'boxing', 'tackling', 'blocking', 'wrestling', 'brawling', 'subdual', 'mountedcombat', 'shockbolt', 'firebolt', 'icebolt', 'lightningbolt', 'waterbolt', 'boltattack6name', 'boltattack6', 'twoweaponfighting1', 'twoweaponfighting1name', 'reversestroke1', 'reversestroke1name', 'copyob'], function(values) {
        if (parseInt(values.copyob) == 1){
            let update = {};
            console.log('/*-------------- OBCopy: attname:'+values[attname]+';  attbonus:'+values[attbonus]+'-----------*/');
            switch(values[attname]) {
                case values.weapon1hc1name:
                    update[attbonus] = parseInt(values.weapon1hc1,10)||0;
                    console.log('-------------weapon1hc1:'+values.weapon1hc1+'--------------');
                    break;
                case values.weapon1hc2name:
                    update[attbonus] = parseInt(values.weapon1hc2,10)||0;
                    console.log('-------------weapon1hc2:'+values.weapon1hc2+'--------------');
                    break;
                case values.weapon1hc3name:
                    update[attbonus] = parseInt(values.weapon1hc3,10)||0;
                    console.log('-------------weapon1hc3:'+values.weapon1hc3+'--------------');
                    break;
                case values.weapon1he1name:
                    update[attbonus] = parseInt(values.weapon1he1,10)||0;
                    console.log('-------------weapon1he1:'+values.weapon1he1+'--------------');
                    break;
                case values.weapon1he2name:
                    update[attbonus] = parseInt(values.weapon1he2,10)||0;
                    console.log('-------------weapon1he2:'+values.weapon1he2+'--------------');
                    break;
                case values.weapon1he3name:
                    update[attbonus] = parseInt(values.weapon1he3,10)||0;
                    console.log('-------------weapon1he3:'+values.weapon1he3+'--------------');
                    break;
                case values.weapon2hand1name:
                    update[attbonus] = parseInt(values.weapon2hand1,10)||0;
                    console.log('-------------weapon2hand1:'+values.weapon2hand1+'--------------');
                    break;
                case values.weapon2hand2name:
                    update[attbonus] = parseInt(values.weapon2hand2,10)||0;
                    console.log('-------------weapon2hand2:'+values.weapon2hand2+'--------------');
                    break;
                case values.weapon2hand3name:
                    update[attbonus] = parseInt(values.weapon2hand3,10)||0;
                    console.log('-------------weapon2hand3:'+values.weapon2hand3+'--------------');
                    break;
                case values.weaponmissile1name:
                    update[attbonus] = parseInt(values.weaponmissile1,10)||0;
                    console.log('-------------weaponmissile1:'+values.weaponmissile1+'--------------');
                    break;
                case values.weaponmissile2name:
                    update[attbonus] = parseInt(values.weaponmissile2,10)||0;
                    console.log('-------------weaponmissile2:'+values.weaponmissile2+'--------------');
                    break;
                case values.weaponmissile3name:
                    update[attbonus] = parseInt(values.weaponmissile3,10)||0;
                    console.log('-------------weaponmissile3:'+values.weaponmissile3+'--------------');
                    break;
                case values.weaponmissileart1name:
                    update[attbonus] = parseInt(values.weaponmissileart1,10)||0;
                    console.log('-------------weaponmissileart1:'+values.weaponmissileart1+'--------------');
                    break;
                case values.weaponmissileart2name:
                    update[attbonus] = parseInt(values.weaponmissileart2,10)||0;
                    console.log('-------------weaponmissileart2:'+values.weaponmissileart2+'--------------');
                    break;
                case values.weaponmissileart3name:
                    update[attbonus] = parseInt(values.weaponmissileart3,10)||0;
                    console.log('-------------weaponmissileart3:'+values.weaponmissileart3+'--------------');
                    break;
                case values.weaponpolearm1name:
                    update[attbonus] = parseInt(values.weaponpolearm1,10)||0;
                    console.log('-------------weaponpolearm1:'+values.weaponpolearm1+'--------------');
                    break;
                case values.weaponpolearm2name:
                    update[attbonus] = parseInt(values.weaponpolearm2,10)||0;
                    console.log('-------------weaponpolearm2:'+values.weaponpolearm2+'--------------');
                    break;
                case values.weaponpolearm3name:
                    update[attbonus] = parseInt(values.weaponpolearm3,10)||0;
                    console.log('-------------weaponpolearm3:'+values.weaponpolearm3+'--------------');
                    break;
                case values.weaponthrown1name:
                    update[attbonus] = parseInt(values.weaponthrown1,10)||0;
                    console.log('-------------weaponthrown1:'+values.weaponthrown1+'--------------');
                    break;
                case values.weaponthrown2name:
                    update[attbonus] = parseInt(values.weaponthrown2,10)||0;
                    console.log('-------------weaponthrown2:'+values.weaponthrown2+'--------------');
                    break;
                case values.weaponthrown3name:
                    update[attbonus] = parseInt(values.weaponthrown3,10)||0;
                    console.log('-------------weaponthrown3:'+values.weaponthrown3+'--------------');
                    break;
                case 'Firebolt':
                case 'Fire Bolt':
                case 'Fire bolt':
                case 'firebolt':
                    update[attbonus] = parseInt(values.firebolt,10)||0;
                    console.log('-------------firebolt:'+values.firebolt+'--------------');
                    break;
                case 'Icebolt':
                case 'Ice Bolt':
                case 'Ice bolt':
                case 'icebolt':
                    update[attbonus] = parseInt(values.icebolt,10)||0;
                    console.log('-------------icebolt:'+values.icebolt+'--------------');
                    break;
                case 'Lightningbolt':
                case 'Lightning Bolt':
                case 'Lightning bolt':
                case 'lightningbolt':
                    update[attbonus] = parseInt(values.lightningbolt,10)||0;
                    console.log('-------------lightningbolt:'+values.lightningbolt+'--------------');
                    break;
                case 'Shockbolt':
                case 'Shock Bolt':
                case 'Shock bolt':
                case 'shockbolt':
                    update[attbonus] = parseInt(values.shockbolt,10)||0;
                    console.log('-------------shockbolt:'+values.shockbolt+'--------------');
                    break;
                case 'Waterbolt':
                case 'Water Bolt':
                case 'Water bolt':
                case 'waterbolt':
                    update[attbonus] = parseInt(values.waterbolt,10)||0;
                    console.log('-------------waterbolt:'+values.waterbolt+'--------------');
                    break;
                case 'boltattack6':
                case 'Bolt 6':
                case 'Bolt attack 6':
                case values.boltattack6name:
                    update[attbonus] = parseInt(values.boltattack6,10)||0;
                    console.log('-------------boltattack6:'+values.boltattack6+'--------------');
                    break;
                case 'Two-Weapon Fighting':
                case '2Weapon Fighting':
                case 'Two-Weapon':
                case 'twoweaponfighting1':
                case values.twoweaponfighting1name:
                    update[attbonus] = parseInt(values.twoweaponfighting1,10)||0;
                    console.log('-------------twoweaponfighting1:'+values.twoweaponfighting1+'--------------');
                    break;
                case 'Martial Arts Sweeps1':
                case 'Martial Arts Sweeps 1':
                case 'MA Sweeps1':
                case 'MA Sweeps 1':
                case 'Sweeps 1':
                case 'Sweeps1':
                case 'sweeps1':
                    update[attbonus] = parseInt(values.sweeps1,10)||0;
                    console.log('-------------sweeps1:'+values.sweeps1+'--------------');
                    break;
                case 'Martial Arts Sweeps2':
                case 'Martial Arts Sweeps 2':
                case 'MA Sweeps2':
                case 'MA Sweeps 2':
                case 'Sweeps 2':
                case 'Sweeps2':
                case 'sweeps2':
                    update[attbonus] = parseInt(values.sweeps2,10)||0;
                    console.log('-------------sweeps2:'+values.sweeps2+'--------------');
                    break;
                case 'Martial Arts Sweeps3':
                case 'Martial Arts Sweeps 3':
                case 'MA Sweeps3':
                case 'MA Sweeps 3':
                case 'Sweeps 3':
                case 'Sweeps3':
                case 'sweeps3':
                    update[attbonus] = parseInt(values.sweeps3,10)||0;
                    console.log('-------------sweeps3:'+values.sweeps3+'--------------');
                    break;
                case 'Martial Arts Sweeps4':
                case 'Martial Arts Sweeps 4':
                case 'MA Sweeps4':
                case 'MA Sweeps 4':
                case 'Sweeps 4':
                case 'Sweeps4':
                case 'sweeps4':
                    update[attbonus] = parseInt(values.sweeps4,10)||0;
                    console.log('-------------sweeps4:'+values.sweeps4+'--------------');
                    break;
                case 'Martial Arts Striking1':
                case 'Martial Arts Striking 1':
                case 'MA Striking1':
                case 'MA Striking 1':
                case 'Striking 1':
                case 'Striking1':
                case 'striking1':
                    update[attbonus] = parseInt(values.striking1,10)||0;
                    console.log('-------------striking1:'+values.striking1+'--------------');
                    break;
                case 'Martial Arts Striking2':
                case 'Martial Arts Striking 2':
                case 'MA Striking2':
                case 'MA Striking 2':
                case 'Striking 2':
                case 'Striking2':
                case 'striking2':
                    update[attbonus] = parseInt(values.striking2,10)||0;
                    console.log('-------------striking2:'+values.striking2+'--------------');
                    break;
                case 'Martial Arts Striking3':
                case 'Martial Arts Striking 3':
                case 'MA Striking3':
                case 'MA Striking 3':
                case 'Striking 3':
                case 'Striking3':
                case 'striking3':
                    update[attbonus] = parseInt(values.striking3,10)||0;
                    console.log('-------------striking3:'+values.striking3+'--------------');
                    break;
                case 'Martial Arts Striking4':
                case 'Martial Arts Striking 4':
                case 'MA Striking4':
                case 'MA Striking 4':
                case 'Striking 4':
                case 'Striking4':
                case 'striking4':
                    update[attbonus] = parseInt(values.striking4,10)||0;
                    console.log('-------------striking4:'+values.striking4+'--------------');
                    break;
                case 'Boxing':
                case 'boxing':
                    update[attbonus] = parseInt(values.boxing,10)||0;
                    console.log('-------------boxing:'+values.boxing+'--------------');
                    break;
                case 'Tacking':
                case 'tackling':
                    update[attbonus] = parseInt(values.tackling,10)||0;
                    console.log('-------------tackling:'+values.tackling+'--------------');
                    break;
                case 'Blocking':
                case 'blocking':
                    update[attbonus] = parseInt(values.blocking,10)||0;
                    console.log('-------------blocking:'+values.blocking+'--------------');
                    break;
                case 'Wrestling':
                case 'wrestling':
                    update[attbonus] = parseInt(values.wrestling,10)||0;
                    console.log('-------------wrestling:'+values.wrestling+'--------------');
                    break;
                case 'Brawling':
                case 'brawling':
                    update[attbonus] = parseInt(values.brawling,10)||0;
                    console.log('-------------brawling:'+values.brawling+'--------------');
                    break;
                case 'Subdual':
                case 'subdual':
                    update[attbonus] = parseInt(values.subdual,10)||0;
                    console.log('-------------subdual:'+values.subdual+'--------------');
                    break;
                case 'Mounted Combat':
                case 'Mounted combat':
                case 'mountedcombat':
                    update[attbonus] = parseInt(values.mountedcombat,10)||0;
                    console.log('-------------mountedcombat:'+values.mountedcombat+'--------------');
                    break;
                case 'Reverse Stroke':
                case 'reversestroke1':
                case 'reversestroke':
                case 'Reverse stroke':
                case values.reversestroke1name:
                    update[attbonus] = parseInt(values.reversestroke1,10)||0;
                    console.log('-------------reversestroke1:'+values.reversestroke1+'--------------');
                    break;
                default:
                    update[attbonus] = values[attbonus];
                    console.log('-------------default:'+values[attbonus]+'--------------');
            }
            setAttrs(update);
        }
    });
}

// <!---- Set up Attack type and Roll type ---->
function AttackTypeSetup(attack){
    let attselect = attack+'select';
    let atttype = attack+'type';
    let attbonus = attack+'bonus';
    let attcalc = attack+'attackcalc';
    let attroll = attack+'rolltype';
    let attfumble = attack+'fumble';
    getAttrs([atttype, attcalc, attroll, attselect], function(values) {
        let update = {};
        //console.log('/*-------------- AttCalc/RollType: attack:'+values[attack]+';  attbonus:'+values[attbonus]+'-----------*/');
        switch(values[attselect]) {
            case 'none':
                update[attcalc] = ' ';
                update[attroll] = ' ';
                update[atttype] = ' ';
                //				console.log('-------------melee attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+'--------------');
                break;
            case 'melee':
                update[attcalc] = '@{'+attbonus+'}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]';
                update[attroll] = '1d100!>@{oeuproll}cf<@{'+attfumble+'}';
                update[atttype] = '[[@{'+attroll+'} +@{'+attcalc+'}]]';
                //				console.log('-------------melee attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+';  atttype:'+values[atttype]+'--------------');
                break;
            case 'ranged':
                update[attcalc] = '@{'+attbonus+'}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action]';
                update[attroll] = '1d100!>@{oeuproll}cf<@{'+attfumble+'}';
                update[atttype] = '[[@{'+attroll+'} +@{'+attcalc+'}]]';
                //				console.log('-------------ranged attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+'--------------');
                break;
            case 'basic':
                update[attcalc] = '@{'+attbonus+'}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}';
                update[attroll] = '1d100cf<2cs>96';
                update[atttype] = '[[@{'+attroll+'} +@{'+attcalc+'}]]';
                //				console.log('-------------basic attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+'--------------');
                break;
            case 'directed':
                update[attcalc] = '@{'+attbonus+'}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update[attroll] = '1d100!>@{oeuproll}cf<2cs=100';
                update[atttype] = '[[@{'+attroll+'} +@{'+attcalc+'}]]';
                //				console.log('-------------directed attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+'--------------');
                break;
            case 'area':
                update[attcalc] = '@{'+attbonus+'}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]';
                update[attroll] = '1d100cf<4cs>96';
                update[atttype] = '[[@{'+attroll+'} +@{'+attcalc+'}]]';
                //				console.log('-------------area attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+'--------------');
                break;
            case 'custom':
                update[attcalc] = values[attcalc];
                update[attroll] = values[attroll];
                update[atttype] = '[[@{'+attroll+'} +@{'+attcalc+'}]]';
                //				console.log('-------------custom attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+'--------------');
                break;
            case 'npcmelee':
                update[attcalc] = '@{'+attbonus+'}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust: should be negative)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update[attroll] = '1d100!>96cf<@{'+attfumble+'}';
                update[atttype] = '[[@{'+attroll+'} +@{'+attcalc+'}]]';
                //				console.log('-------------melee attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+';  atttype:'+values[atttype]+'--------------');
                break;
            case 'npcranged':
                update[attcalc] = '@{'+attbonus+'}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust: should be negative)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update[attroll] = '1d100!>96cf<@{'+attfumble+'}';
                update[atttype] = '[[@{'+attroll+'} +@{'+attcalc+'}]]';
                //				console.log('-------------ranged attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+'--------------');
                break;
            case 'npcbasic':
                update[attcalc] = '@{'+attbonus+'}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update[attroll] = '1d100cf<2cs>96';
                update[atttype] = '[[@{'+attroll+'} +@{'+attcalc+'}]]';
                //				console.log('-------------basic attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+'--------------');
                break;
            case 'npcdirected':
                update[attcalc] = '@{'+attbonus+'}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update[attroll] = '1d100!>@{oeuproll}cf<2cs=100';
                update[atttype] = '[[@{'+attroll+'} +@{'+attcalc+'}]]';
                //				console.log('-------------directed attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+'--------------');
                break;
            case 'npcarea':
                update[attcalc] = '@{'+attbonus+'}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]';
                update[attroll] = '1d100cf<4cs>96';
                update[atttype] = '[[@{'+attroll+'} +@{'+attcalc+'}]]';
                //				console.log('-------------area attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+'--------------');
                break;
            default:
                update[attcalc] = values[attcalc];
                update[attroll] = values[attroll];
                update[atttype] = '[[@{'+attroll+'} +@{'+attcalc+'}]]';
//				console.log('-------------def attcalc:'+values[attcalc]+';  attroll:'+values[attroll]+'--------------');
        }
        setAttrs(update);
    });
}
// <!---- Set up breakage number calculations for the attack macro ---->
function BreakageMacroSetup(attack){
    let attcalc = attack+'attackcalc';
    let attbreakage = attack+'breakage';
    let attbreakmacro = attack+'breakagemacrosection';
    let attstr = attack+'str';
    getAttrs([attbreakage, attbreakmacro, attstr], function(values) {
        let update = {};
        //console.log('/*-------------- Att breakage: attack:'+values.attack+';  -----------*/');
        switch(values[attbreakage]) {
            case '1':
                update[attbreakmacro] = ' {{breakage11=[[11+@{'+attcalc+'}]]}} {{breakage11roll=Natural 11, check for breakage. Weapon Strength: @{'+attstr+'} }} ';
                //console.log('-------------melee breakmacro:'+values[attbreakmacro]+'--------------');
                break;
            case '2':
            case '1-2':
                update[attbreakmacro] = ' {{breakage11=[[11+@{'+attcalc+'}]]}} {{breakage11roll=Natural 11, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage22=[[22+@{'+attcalc+'}]]}} {{breakage22roll=Natural 22, check for breakage. Weapon Strength: @{'+attstr+'} }} ';
                //console.log('-------------melee breakmacro:'+values[attbreakmacro]+'--------------');
                break;
            case '3':
            case '1-3':
                update[attbreakmacro] = ' {{breakage11=[[11+@{'+attcalc+'}]]}} {{breakage11roll=Natural 11, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage22=[[22+@{'+attcalc+'}]]}} {{breakage22roll=Natural 22, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage33=[[33+@{'+attcalc+'}]]}} {{breakage33roll=Natural 33, check for breakage. Weapon Strength: @{'+attstr+'} }} ';
                //console.log('-------------melee breakmacro:'+values[attbreakmacro]+'--------------');
                break;
            case '4':
            case '1-4':
                update[attbreakmacro] = ' {{breakage11=[[11+@{'+attcalc+'}]]}} {{breakage11roll=Natural 11, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage22=[[22+@{'+attcalc+'}]]}} {{breakage22roll=Natural 22, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage33=[[33+@{'+attcalc+'}]]}} {{breakage33roll=Natural 33, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage44=[[44+@{'+attcalc+'}]]}} {{breakage44roll=Natural 44, check for breakage. Weapon Strength: @{'+attstr+'} }} ';
                //console.log('-------------melee breakmacro:'+values[attbreakmacro]+'--------------');
                break;
            case '5':
            case '1-5':
                update[attbreakmacro] = ' {{breakage11=[[11+@{'+attcalc+'}]]}} {{breakage11roll=Natural 11, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage22=[[22+@{'+attcalc+'}]]}} {{breakage22roll=Natural 22, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage33=[[33+@{'+attcalc+'}]]}} {{breakage33roll=Natural 33, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage44=[[44+@{'+attcalc+'}]]}} {{breakage44roll=Natural 44, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage55=[[55+@{'+attcalc+'}]]}} {{breakage55roll=Natural 55, check for breakage. Weapon Strength: @{'+attstr+'} }} ';
                //console.log('-------------melee breakmacro:'+values[attbreakmacro]+'--------------');
                break;
            case '6':
            case '1-6':
                update[attbreakmacro] = ' {{breakage11=[[11+@{'+attcalc+'}]]}} {{breakage11roll=Natural 11, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage22=[[22+@{'+attcalc+'}]]}} {{breakage22roll=Natural 22, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage33=[[33+@{'+attcalc+'}]]}} {{breakage33roll=Natural 33, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage44=[[44+@{'+attcalc+'}]]}} {{breakage44roll=Natural 44, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage55=[[55+@{'+attcalc+'}]]}} {{breakage55roll=Natural 55, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage66=[[66+@{'+attcalc+'}]]}} {{breakage66roll=Natural 66, check for breakage. Weapon Strength: @{'+attstr+'} }} ';
                //console.log('-------------melee breakmacro:'+values[attbreakmacro]+'--------------');
                break;
            case '7':
            case '1-7':
                update[attbreakmacro] = ' {{breakage11=[[11+@{'+attcalc+'}]]}} {{breakage11roll=Natural 11, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage22=[[22+@{'+attcalc+'}]]}} {{breakage22roll=Natural 22, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage33=[[33+@{'+attcalc+'}]]}} {{breakage33roll=Natural 33, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage44=[[44+@{'+attcalc+'}]]}} {{breakage44roll=Natural 44, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage55=[[55+@{'+attcalc+'}]]}} {{breakage55roll=Natural 55, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage66=[[66+@{'+attcalc+'}]]}} {{breakage66roll=Natural 66, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage77=[[77+@{'+attcalc+'}]]}} {{breakage77roll=Natural 77, check for breakage. Weapon Strength: @{'+attstr+'} }} ';
                //console.log('-------------melee breakmacro:'+values[attbreakmacro]+'--------------');
                break;
            case '8':
            case '1-8':
                update[attbreakmacro] = ' {{breakage11=[[11+@{'+attcalc+'}]]}} {{breakage11roll=Natural 11, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage22=[[22+@{'+attcalc+'}]]}} {{breakage22roll=Natural 22, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage33=[[33+@{'+attcalc+'}]]}} {{breakage33roll=Natural 33, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage44=[[44+@{'+attcalc+'}]]}} {{breakage44roll=Natural 44, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage55=[[55+@{'+attcalc+'}]]}} {{breakage55roll=Natural 55, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage66=[[66+@{'+attcalc+'}]]}} {{breakage66roll=Natural 66, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage77=[[77+@{'+attcalc+'}]]}} {{breakage77roll=Natural 77, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage88=[[88+@{'+attcalc+'}]]}} {{breakage88roll=Natural 88, check for breakage. Weapon Strength: @{'+attstr+'} }} ';
                //console.log('-------------melee breakmacro:'+values[attbreakmacro]+'--------------');
                break;
            case '9':
            case '1-9':
                update[attbreakmacro] = ' {{breakage11=[[11+@{'+attcalc+'}]]}} {{breakage11roll=Natural 11, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage22=[[22+@{'+attcalc+'}]]}} {{breakage22roll=Natural 22, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage33=[[33+@{'+attcalc+'}]]}} {{breakage33roll=Natural 33, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage44=[[44+@{'+attcalc+'}]]}} {{breakage44roll=Natural 44, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage55=[[55+@{'+attcalc+'}]]}} {{breakage55roll=Natural 55, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage66=[[66+@{'+attcalc+'}]]}} {{breakage66roll=Natural 66, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage77=[[77+@{'+attcalc+'}]]}} {{breakage77roll=Natural 77, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage88=[[88+@{'+attcalc+'}]]}} {{breakage88roll=Natural 88, check for breakage. Weapon Strength: @{'+attstr+'} }} {{breakage99=[[99+@{'+attcalc+'}]]}} {{breakage99roll=Natural 99, check for breakage. Weapon Strength: @{'+attstr+'} }} ';
                //console.log('-------------melee breakmacro:'+values[attbreakmacro]+'--------------');
                break;
            case '0':
            case '-':
            case 'Auto':
            case ' ':
                update[attbreakmacro] = ' ';
                //console.log('-------------melee breakmacro:'+values[attbreakmacro]+'--------------');
                break;
            default:
                update[attbreakmacro] = ' ';
//console.log('-------------melee breakmacro:'+values[attbreakmacro]+'--------------');
        }
        setAttrs(update);
    });
}

//  <!-- if the Breakage number for an Attack changes, change the breakage macro calculation -->
on ('sheet:opened', function() {
    var attkbreakage=['attack1', 'attack2', 'attack3', 'attack4', 'attack5', 'attack6', 'attack7', 'attack8', 'npcattack1', 'npcattack2', 'npcattack3', 'npcattack4', 'npcattack5', 'npcattack6', 'npcattack7', 'npcattack8'];
    _.each(attkbreakage, function (attkb) {
        var event;
        event = 'change:'+attkb+'breakage';
        on ( event, _.bind(BreakageMacroSetup,{},attkb));
    });
});

//  <!-- if the type for an Attack changes, change the attack calculation -->
on ('sheet:opened', function() {
    var attktype=['attack1', 'attack2', 'attack3', 'attack4', 'attack5', 'attack6', 'attack7', 'attack8', 'npcattack1', 'npcattack2', 'npcattack3', 'npcattack4', 'npcattack5', 'npcattack6', 'npcattack7', 'npcattack8'];
    _.each(attktype, function (attkt) {
        var event;
        event = 'change:'+attkt+'select';
        on ( event, _.bind(AttackTypeSetup,{},attkt));
    });
});

//  <!-- if the name for an Attack changes, check if you can find an OB/skill to copy in for it -->
on ('sheet:opened', function() {
    var attks=['attack1', 'attack2', 'attack3', 'attack4', 'attack5', 'attack6', 'attack7', 'attack8'];
    _.each(attks, function (attk) {
        var event;
        event = 'change:'+attk+'name change:'+attk;
        on ( event, _.bind(WeaponOBCopy,{},attk));
    });
});

//  <!-- Update copied OB if the weapon/attack skill changes.  Have to check them all since don't know if/where the attack might be  -->
on ('change:weapon1hc1 change:weapon1hc2 change:weapon1hc3 change:weapon1he1 change:weapon1he2 change:weapon1he3 change:weapon2hand1 change:weapon2hand2 change:weapon2hand3 change:weaponmissile1 change:weaponmissile2 change:weaponmissile3 change:weaponmissileart1 change:weaponmissileart2 change:weaponmissileart3 change:weaponpolearm1 change:weaponpolearm2 change:weaponpolearm3 change:weaponthrown1 change:weaponthrown2 change:weaponthrown3 change:weapon1namehc1name change:weapon1namehc2name change:weapon1namehc3name change:weapon1namehe1name change:weapon1namehe2name change:weapon1namehe3name change:weapon2namehand1name change:weapon2namehand2name change:weapon2namehand3name change:weaponmissile1name change:weaponmissile2name change:weaponmissile3name change:weaponmissileart1name change:weaponmissileart2name change:weaponmissileart3name change:weaponpolearm1name change:weaponpolearm2name change:weaponpolearm3name change:weaponthrown1name change:weaponthrown2name change:weaponthrown3name change:sweeps1 change:sweeps2 change:sweeps3 change:sweeps4 change:striking1 change:striking2 change:striking3 change:striking4 change:boxing change:tackling change:blocking change:wrestling change:brawling change:subdual change:mountedcombat change:shockbolt change:firebolt change:icebolt change:lightningbolt change:waterbolt change:boltattack6 change:boltattack6name change:twoweaponfighting1 change:twoweaponfighting1name change:reversestroke1 change:reversestroke1name change:copyob', function () {
    getAttrs(['copyob'], function(values) {
        if (parseInt(values.copyob) == 1){
            WeaponOBCopy('attack1'); 
            WeaponOBCopy('attack2');
            WeaponOBCopy('attack3'); 
            WeaponOBCopy('attack4'); 
            WeaponOBCopy('attack5'); 
            WeaponOBCopy('attack6');
            WeaponOBCopy('attack7'); 
            WeaponOBCopy('attack8');
        }
    });
});

// <!---- Copy Armor from Primary/Secondary/Tertiary to Worn ---->
on('change:activearmor', function() {
    getAttrs(['activearmor', 'atactual1', 'at1', 'dbpweight1', 'dbweightpen1', 'dbmisspen1', 'dbarmdb1', 'dbquickpen1', 'dbshield1', 'dbshieldranged1', 'dbshielddb1', 'dbmagicbon1', 'atactual2', 'at2', 'dbpweight2', 'dbweightpen2', 'dbmisspen2', 'dbarmdb2', 'dbquickpen2', 'dbshield2', 'dbshieldranged2', 'dbshielddb2', 'dbmagicbon2', 'atactual3', 'at3', 'dbpweight3', 'dbweightpen3', 'dbmisspen3', 'dbarmdb3', 'dbquickpen3', 'dbshield3', 'dbshieldranged3', 'dbshielddb3', 'dbmagicbon3'], function(values) {
		const output = {};
		var activearmor = parseInt(values.activearmor);
        if (activearmor == 1){
			output['atactualworn']= values.atactual1;
			output['atworn']= values.at1;
			output['dbpweightworn']= values.dbpweight1;
			output['dbweightpenworn']= values.dbweightpen1;
			output['dbmisspenworn']= values.dbmisspen1;
			output['dbarmdbworn']= values.dbarmdb1;
			output['dbquickpenworn']= values.dbquickpen1;
			output['dbshieldworn']= values.dbshield1;
			output['dbshieldrangedworn']= values.dbshieldranged1;
			output['dbshielddbworn']= values.dbshielddb1;
			output['dbmagicbonworn']= values.dbmagicbon1;
        } else if (activearmor == 2){
			output['atactualworn']= values.atactual2;
			output['atworn']= values.at2;
			output['dbpweightworn']= values.dbpweight2;
			output['dbweightpenworn']= values.dbweightpen2;
			output['dbmisspenworn']= values.dbmisspen2;
			output['dbarmdbworn']= values.dbarmdb2;
			output['dbquickpenworn']= values.dbquickpen2;
			output['dbshieldworn']= values.dbshield2;
			output['dbshieldrangedworn']= values.dbshieldranged2;
			output['dbshielddbworn']= values.dbshielddb2;
			output['dbmagicbonworn']= values.dbmagicbon2;
        } else if (activearmor == 3){
			output['atactualworn']= values.atactual3;
			output['atworn']= values.at3;
			output['dbpweightworn']= values.dbpweight3;
			output['dbweightpenworn']= values.dbweightpen3;
			output['dbmisspenworn']= values.dbmisspen3;
			output['dbarmdbworn']= values.dbarmdb3;
			output['dbquickpenworn']= values.dbquickpen3;
			output['dbshieldworn']= values.dbshield3;
			output['dbshieldrangedworn']= values.dbshieldranged3;
			output['dbshielddbworn']= values.dbshielddb3;
			output['dbmagicbonworn']= values.dbmagicbon3;
        }
		setAttrs(output);
    });
});	

// <!-- Recalc skills -->
on('change:skillrecalc', function(){
//console.log('------------entering NPC Import change---------------');
    getAttrs(['skillrecalc'], function(text) {
        if(text.skillrecalc=='1'){
            setAttrs({
                skillrecalc:0
            });
        }
    });
});

// <!-- Update stats for skills with stat dropdowns -->
on ('sheet:opened', function() {
    var skills=['awaresenses1stat', 'awaresenses2stat', 'awaresenses3stat', 'combatmaneuvers1stat', 'combatmaneuvers2stat', 'combatmaneuvers3stat', 'craft15stat', 'craft16stat', 'boltattack6stat', 'loregeneral1stat', 'loregeneral2stat', 'loregeneral3stat', 'outdooranimal1stat', 'outdooranimal2stat', 'outdooranimal3stat', 'specscience1stat', 'specscience2stat', 'subtermech1stat', 'subtermech2stat', 'techprof1stat', 'techprof2stat', 'techprof3stat', 'techvoc1stat', 'techvoc2stat'];
    _.each(skills, function (skill) {
        var event;
        event = 'change:'+skill+'choice change:agbonus change:cobonus change:mebonus change:rebonus change:sdbonus change:embonus change:inbonus change:prbonus change:qubonus change:stbonus change:skillrecalc';
        on ( event, _.bind(DropdownStatChange,{},skill));
    });
});

// <!-- Stat calculation/update for Categories (stat1+stat2) and skills (stat) -->
on('change:agbonus change:variablestatbonuscalc change:skillrecalc', function () {			//Agility-based Categories
    getAttrs(['agbonus', 'cobonus', 'embonus', 'inbonus', 'mebonus', 'qubonus', 'sdbonus', 'stbonus', 'variablestatbonuscalc'], function(values) {
        setAttrs({
            'cat-athletic-endur-statbonus': parseInt(values.agbonus,10)+parseInt(values.cobonus,10),
            'cat-outdoor-animal-statbonus': parseInt(values.agbonus,10)+parseInt(values.embonus,10),
            'cat-subterfuge-mechanics-statbonus': parseInt(values.agbonus,10)+parseInt(values.inbonus,10),
            'cat-weapon-missileartillery-statbonus': parseInt(values.agbonus,10)+parseInt(values.inbonus,10),
            'cat-crafts-statbonus': parseInt(values.agbonus,10)+parseInt(values.mebonus,10),
            'cat-athletic-gym-statbonus': parseInt(values.agbonus,10)+parseInt(values.qubonus,10),
            'cat-combat-maneuvers-statbonus': parseInt(values.agbonus,10)+parseInt(values.qubonus,10),
            'cat-directed-spells-statbonus': parseInt(values.agbonus,10)+parseInt(values.sdbonus,10),
            'cat-subterfuge-attack-statbonus': parseInt(values.agbonus,10)+parseInt(values.sdbonus,10),
            'cat-subterfuge-stealth-statbonus': parseInt(values.agbonus,10)+parseInt(values.sdbonus,10),
            'cat-armor-light-statbonus': parseInt(values.agbonus,10)+parseInt(values.stbonus,10),
            'cat-ma-sweeps-statbonus': parseInt(values.agbonus,10)+parseInt(values.stbonus,10),
            'cat-weapon-missile-statbonus': parseInt(values.agbonus,10)+parseInt(values.stbonus,10),
            'cat-weapon-thrown-statbonus': parseInt(values.agbonus,10)+parseInt(values.stbonus,10),
            'cat-armor-heavy-statbonus': parseInt(values.agbonus,10)+parseInt(values.stbonus,10),
            'cat-armor-med-statbonus': parseInt(values.agbonus,10)+parseInt(values.stbonus,10),
            'cat-ma-striking-statbonus': parseInt(values.agbonus,10)+parseInt(values.stbonus,10),
            'cat-special-attacks-statbonus': parseInt(values.agbonus,10)+parseInt(values.stbonus,10),
            'cat-weapon-1hconcussion-statbonus': parseInt(values.agbonus,10)+parseInt(values.stbonus,10),
            'cat-weapon-1hedged-statbonus': parseInt(values.agbonus,10)+parseInt(values.stbonus,10),
            'cat-weapon-2handed-statbonus': parseInt(values.agbonus,10)+parseInt(values.stbonus,10),
            'cat-weapon-polearms-statbonus': parseInt(values.agbonus,10)+parseInt(values.stbonus,10),
            acrobaticsstat: parseInt(values.agbonus,10),	// set skills also
            athleticgamesbrawn1stat: parseInt(values.agbonus,10),
            athleticgamesbrawn2stat: parseInt(values.agbonus,10),
            athleticgamesbrawn3stat: parseInt(values.agbonus,10),
            dancingstat: parseInt(values.agbonus,10),
            divingstat: parseInt(values.agbonus,10),
            fireboltstat: parseInt(values.agbonus,10),
            iceboltstat: parseInt(values.agbonus,10),
            jumpingstat: parseInt(values.agbonus,10),
            lightningboltstat: parseInt(values.agbonus,10),
            playinstrument1stat: parseInt(values.agbonus,10),
            playinstrument2stat: parseInt(values.agbonus,10),
            playinstrument3stat: parseInt(values.agbonus,10),
            polevaultingstat: parseInt(values.agbonus,10),
            rigidleatherstat: parseInt(values.agbonus,10),
            shockboltstat: parseInt(values.agbonus,10),
            skatingstat: parseInt(values.agbonus,10),
            softleatherstat: parseInt(values.agbonus,10),
            stiltwalkingstat: parseInt(values.agbonus,10),
            sweeps1stat: parseInt(values.agbonus,10),
            sweeps2stat: parseInt(values.agbonus,10),
            tumblingstat: parseInt(values.agbonus,10),
            waterboltstat: parseInt(values.agbonus,10),
            weaponmissile1stat: parseInt(values.agbonus,10),
            weaponmissile2stat: parseInt(values.agbonus,10),
            weaponmissile3stat: parseInt(values.agbonus,10),
            weaponthrown1stat: parseInt(values.agbonus,10),
            weaponthrown2stat: parseInt(values.agbonus,10),
            weaponthrown3stat: parseInt(values.agbonus,10),
            weightliftingstat: parseInt(values.agbonus,10)
        });
        if (parseInt(values.variablestatbonuscalc) == 1){
            setAttrs({
                athleticgamesgym1stat: parseInt(values.agbonus,10),
                athleticgamesgym2stat: parseInt(values.agbonus,10),
                athleticgamesgym3stat: parseInt(values.agbonus,10),
                skiingstat: parseInt(values.agbonus,10),
                surfingstat: parseInt(values.agbonus,10),
                flyglidestat: parseInt(values.agbonus,10),
                jugglingstat: parseInt(values.agbonus,10),
                mimicrystat: parseInt(values.agbonus,10),
                poeticimprovstat: parseInt(values.agbonus,10),
                singingstat: parseInt(values.agbonus,10),
                taletellingstat: parseInt(values.agbonus,10),
                actingstat: parseInt(values.agbonus,10),
                mimerystat: parseInt(values.agbonus,10),
                ventriloquismstat: parseInt(values.agbonus,10),
                contortionsstat: parseInt(values.agbonus,10),
                tightropestat: parseInt(values.agbonus,10),
                sweeps3stat: parseInt(values.agbonus,10),
                sweeps4stat: parseInt(values.agbonus,10),
                wrestlingstat: parseInt(values.agbonus,10),
                powerstrikingstat: parseInt(values.agbonus,10),
                powerthrowingstat: parseInt(values.agbonus,10),
                climbingstat: parseInt(values.agbonus,10),
                rappellingstat: parseInt(values.agbonus,10),
                blockingstat: parseInt(values.agbonus,10)
            });
        } else {
            setAttrs({
                paintingstat: parseInt(values.agbonus,10),
                sculptingstat: parseInt(values.agbonus,10),
                tumbleevadestat: parseInt(values.agbonus,10),
                adrenalbalancestat: parseInt(values.agbonus,10),
                adrenallandingstat: parseInt(values.agbonus,10),
                adrenalquickdrawstat: parseInt(values.agbonus,10),
                disarmarmedvs1hstat: parseInt(values.agbonus,10),
                disarmarmedvs2hstat: parseInt(values.agbonus,10),
                disarmarmedvspolearmstat: parseInt(values.agbonus,10),
                disarmarmedvs2wcombostat: parseInt(values.agbonus,10),
                disarmunarmedvs1hedgedstat: parseInt(values.agbonus,10),
                disarmunarmedvs1hconcussionstat: parseInt(values.agbonus,10),
                disarmunarmedvs2hstat: parseInt(values.agbonus,10),
                disarmunarmedvspolearmstat: parseInt(values.agbonus,10),
                useprepherbsstat: parseInt(values.agbonus,10),
                mechanition1stat: parseInt(values.agbonus,10),
                boatpilot1stat: parseInt(values.agbonus,10),
                prepareherbsstat: parseInt(values.agbonus,10),
                minglingstat: parseInt(values.agbonus,10),
                weapon1he1stat: parseInt(values.agbonus,10),
                weapon1he2stat: parseInt(values.agbonus,10),
                weapon1he3stat: parseInt(values.agbonus,10)
            });
        }
    });
});
// <!-- Stat calculation for Categories (stat1+stat2) -->
on('change:cobonus change:variablestatbonuscalc change:skillrecalc', function () {			//Constitution-based Categories
    getAttrs(['agbonus', 'cobonus', 'sdbonus', 'stbonus', 'variablestatbonuscalc'], function(values) {
        setAttrs({
            'cat-athletic-endur-statbonus': parseInt(values.cobonus,10)+parseInt(values.agbonus,10),
            'bodydevstat': parseInt(values.cobonus,10)+parseInt(values.sdbonus,10)+parseInt(values.cobonus,10),    // not really a category but the regular skills don't have multiple stats so this is close enough.
            'cat-athletic-brawn-statbonus': parseInt(values.cobonus,10)+parseInt(values.stbonus,10)
        });
        if (parseInt(values.variablestatbonuscalc) == 1){
            setAttrs({
                //			  "surfingstat": parseInt(values.cobonus,10),
                //			  "otherstat": parseInt(values.cobonus,10)
            });
        } else {
            setAttrs({
                athleticgamesendur1stat: parseInt(values.cobonus,10),
                athleticgamesendur2stat: parseInt(values.cobonus,10),
                athleticgamesendur3stat: parseInt(values.cobonus,10),
                distancerunningstat: parseInt(values.cobonus,10),
                athleticgamesgym1stat: parseInt(values.cobonus,10),
                athleticgamesgym2stat: parseInt(values.cobonus,10),
                athleticgamesgym3stat: parseInt(values.cobonus,10),
                skiingstat: parseInt(values.cobonus,10),
                surfingstat: parseInt(values.cobonus,10)
            });
        }
    });
});
// <!-- Stat calculation for Categories (stat1+stat2) -->
on('change:embonus change:variablestatbonuscalc change:skillrecalc', function () {			//Empathy-based Categories
    getAttrs(['agbonus', 'embonus', 'inbonus', 'prbonus', 'variablestatbonuscalc'], function(values) {
        setAttrs({
            'cat-outdoor-animal-statbonus': parseInt(values.embonus,10)+parseInt(values.agbonus,10),
            'cat-artistic-passive-statbonus': parseInt(values.embonus,10)+parseInt(values.inbonus,10),
            'cat-power-awareness-statbonus': parseInt(values.embonus,10)+parseInt(values.inbonus,10),
            'cat-power-manipulation-statbonus': parseInt(values.embonus,10)+parseInt(values.inbonus,10),
            'cat-artistic-active-statbonus': parseInt(values.embonus,10)+parseInt(values.prbonus,10),
            'cat-influence-statbonus': parseInt(values.embonus,10)+parseInt(values.prbonus,10),
            animalhandling1stat: parseInt(values.embonus,10),	// set skills also
            animalhealing1stat: parseInt(values.embonus,10),
            herding1stat: parseInt(values.embonus,10),
            riding1stat: parseInt(values.embonus,10)
        });
        if (parseInt(values.variablestatbonuscalc) == 1){
            setAttrs({
                driving1stat: parseInt(values.embonus,10),
                signalingstat: parseInt(values.embonus,10),
                animalmasterystat: parseInt(values.embonus,10),
                lipreadingstat: parseInt(values.embonus,10),
                animaltraining1stat: parseInt(values.embonus,10)
            });
        } else {
            setAttrs({
                senseambushstat: parseInt(values.embonus,10),
                lieperceptionstat: parseInt(values.embonus,10),
                realityawarenessstat: parseInt(values.embonus,10),
                timesensestat: parseInt(values.embonus,10),
                mountedcombatstat: parseInt(values.embonus,10),
                trappingstat: parseInt(values.embonus,10),
                faunalorestat: parseInt(values.embonus,10),
                floralorestat: parseInt(values.embonus,10),
                symbollorestat: parseInt(values.embonus,10),
                foragingstat: parseInt(values.embonus,10),
                huntingstat: parseInt(values.embonus,10),
                anthropology1stat: parseInt(values.embonus,10),
                healingtrancestat: parseInt(values.embonus,10),
                camouflagestat: parseInt(values.embonus,10),
                firstaidstat: parseInt(values.embonus,10),
                diagnostics1stat: parseInt(values.embonus,10),
                secondaidstat: parseInt(values.embonus,10),
                surgerystat: parseInt(values.embonus,10),
                hypnosisstat: parseInt(values.embonus,10),
                midwiferystat: parseInt(values.embonus,10),
                streetwisestat: parseInt(values.embonus,10)
            });
        }
    });
});
// <!-- Stat calculation for Categories (stat1+stat2) -->
on('change:inbonus change:variablestatbonuscalc change:skillrecalc', function () {			//Intuition-based Categories
    getAttrs(['agbonus', 'embonus', 'inbonus', 'mebonus', 'prbonus', 'rebonus', 'sdbonus', 'variablestatbonuscalc'], function(values) {
        setAttrs({
            'cat-subterfuge-mechanics-statbonus': parseInt(values.inbonus,10)+parseInt(values.agbonus,10),
            'cat-weapon-missileartillery-statbonus': parseInt(values.inbonus,10)+parseInt(values.agbonus,10),
            'cat-artistic-passive-statbonus': parseInt(values.inbonus,10)+parseInt(values.embonus,10),
            'cat-power-awareness-statbonus': parseInt(values.inbonus,10)+parseInt(values.embonus,10),
            'cat-power-manipulation-statbonus': parseInt(values.inbonus,10)+parseInt(values.embonus,10),
            'cat-tech-vocational-statbonus': parseInt(values.inbonus,10)+parseInt(values.mebonus,10),
            'cat-urban-statbonus': parseInt(values.inbonus,10)+parseInt(values.prbonus,10),
            'cat-aware-search-statbonus': parseInt(values.inbonus,10)+parseInt(values.rebonus,10),
            'cat-aware-percept-statbonus': parseInt(values.inbonus,10)+parseInt(values.sdbonus,10),
            'cat-aware-senses-statbonus': parseInt(values.inbonus,10)+parseInt(values.sdbonus,10),
            'cat-outdoor-environ-statbonus': parseInt(values.inbonus,10)+parseInt(values.sdbonus,10),
            advertisingstat: parseInt(values.inbonus,10),		// set skills also
            alertnessstat: parseInt(values.inbonus,10),
            ambushstat: parseInt(values.inbonus,10),
            architecturestat: parseInt(values.inbonus,10),
            briberystat: parseInt(values.inbonus,10),
            diplomacystat: parseInt(values.inbonus,10),
            directionsensestat: parseInt(values.inbonus,10),
            dowsingstat: parseInt(values.inbonus,10),
            dupingstat: parseInt(values.inbonus,10),
            engineering1stat: parseInt(values.inbonus,10),
            hidingstat: parseInt(values.inbonus,10),
            militaryorg1stat: parseInt(values.inbonus,10),
            mining1stat: parseInt(values.inbonus,10),
            publicspeakingstat: parseInt(values.inbonus,10),
            seductionstat: parseInt(values.inbonus,10),
            silentkillstat: parseInt(values.inbonus,10),
            sitawareness1stat: parseInt(values.inbonus,10)
        });
        if (parseInt(values.variablestatbonuscalc) == 1){
            setAttrs({
                mechanition1stat: parseInt(values.inbonus,10),
                senseambushstat: parseInt(values.inbonus,10),
                realityawarenessstat: parseInt(values.inbonus,10),
                timesensestat: parseInt(values.inbonus,10),
                diagnostics1stat: parseInt(values.inbonus,10),
                secondaidstat: parseInt(values.inbonus,10),
                surgerystat: parseInt(values.inbonus,10),
                senseawareness1stat: parseInt(values.inbonus,10),
                slastat: parseInt(values.inbonus,10),
                leadershipstat: parseInt(values.inbonus,10),
                pickpocketsstat: parseInt(values.inbonus,10),
                trickerystat: parseInt(values.inbonus,10),
                propagandastat: parseInt(values.inbonus,10),
                interrogationstat: parseInt(values.inbonus,10),
                tradingstat: parseInt(values.inbonus,10),
                stalkingstat: parseInt(values.inbonus,10)
            });
        } else {
            setAttrs({
                flyglidestat: parseInt(values.inbonus,10),
                jugglingstat: parseInt(values.inbonus,10),
                detecttrapsstat: parseInt(values.inbonus,10),
                locatehiddenstat: parseInt(values.inbonus,10),
                cookingstat: parseInt(values.inbonus,10),
                fletchingstat: parseInt(values.inbonus,10),
                metalcraftsstat: parseInt(values.inbonus,10),
                ropemasterystat: parseInt(values.inbonus,10),
                sewingstat: parseInt(values.inbonus,10),
                skinningstat: parseInt(values.inbonus,10),
                stonecraftsstat: parseInt(values.inbonus,10),
                woodcraftsstat: parseInt(values.inbonus,10),
                philosophystat: parseInt(values.inbonus,10),
                planarlorestat: parseInt(values.inbonus,10),
                driving1stat: parseInt(values.inbonus,10),
                survival1stat: parseInt(values.inbonus,10),
                survival2stat: parseInt(values.inbonus,10),
                survival3stat: parseInt(values.inbonus,10),
                weatherwatchingstat: parseInt(values.inbonus,10),
                divination1stat: parseInt(values.inbonus,10),
                divination2stat: parseInt(values.inbonus,10),
                divination3stat: parseInt(values.inbonus,10),
                alchemystat: parseInt(values.inbonus,10),
                biochemistrystat: parseInt(values.inbonus,10),
                operatingequipmentstat: parseInt(values.inbonus,10),
                orienteeringstat: parseInt(values.inbonus,10)
            });
        }
    });
});
// <!-- Stat calculation for Categories (stat1+stat2) -->
on('change:mebonus change:variablestatbonuscalc change:skillrecalc', function () {			//Memory-based Categories
    getAttrs(['agbonus', 'inbonus', 'mebonus', 'rebonus', 'variablestatbonuscalc'], function(values) {
        setAttrs({
            'cat-crafts-statbonus': parseInt(values.mebonus,10)+parseInt(values.agbonus,10),
            'cat-tech-vocational-statbonus': parseInt(values.mebonus,10)+parseInt(values.inbonus,10),
            'cat-lore-general-statbonus': parseInt(values.mebonus,10)+parseInt(values.rebonus,10),
            'cat-lore-magical-statbonus': parseInt(values.mebonus,10)+parseInt(values.rebonus,10),
            'cat-lore-obscure-statbonus': parseInt(values.mebonus,10)+parseInt(values.rebonus,10),
            'cat-lore-technical-statbonus': parseInt(values.mebonus,10)+parseInt(values.rebonus,10),
            'cat-communications-statbonus': parseInt(values.mebonus,10)+parseInt(values.rebonus,10),
            'cat-science-basic-statbonus': parseInt(values.mebonus,10)+parseInt(values.rebonus,10),
            'cat-science-specialized-statbonus': parseInt(values.mebonus,10)+parseInt(values.rebonus,10),
            'cat-tech-general-statbonus': parseInt(values.mebonus,10)+parseInt(values.rebonus,10),
            'cat-tech-professional-statbonus': parseInt(values.mebonus,10)+parseInt(values.rebonus,10),	
            artifactlorestat: parseInt(values.mebonus,10), 		// set skills also
            cavingstat: parseInt(values.mebonus,10),
            circlelorestat: parseInt(values.mebonus,10),
            culturelore1stat: parseInt(values.mebonus,10),
            demondevillorestat: parseInt(values.mebonus,10),
            dragonlorestat: parseInt(values.mebonus,10),
            faerielorestat: parseInt(values.mebonus,10),
            heraldrystat: parseInt(values.mebonus,10),
            herblorestat: parseInt(values.mebonus,10),
            historystat: parseInt(values.mebonus,10),
            locklorestat: parseInt(values.mebonus,10),
            metallorestat: parseInt(values.mebonus,10),
            poisonlorestat: parseInt(values.mebonus,10),
            regionlore1stat: parseInt(values.mebonus,10),
            religionstat: parseInt(values.mebonus,10),
            spelllorestat: parseInt(values.mebonus,10),
            stargazingstat: parseInt(values.mebonus,10),
            stonelorestat: parseInt(values.mebonus,10),
            tradinglorestat: parseInt(values.mebonus,10),
            undeadlorestat: parseInt(values.mebonus,10),
            wardinglorestat: parseInt(values.mebonus,10),
            xenolore1stat: parseInt(values.mebonus,10),
            xenolore2stat: parseInt(values.mebonus,10),
            xenolore3stat: parseInt(values.mebonus,10)
        });
        if (parseInt(values.variablestatbonuscalc) == 1){
            setAttrs({
                faunalorestat: parseInt(values.mebonus,10),
                floralorestat: parseInt(values.mebonus,10),
                symbollorestat: parseInt(values.mebonus,10),
                foragingstat: parseInt(values.mebonus,10),
                huntingstat: parseInt(values.mebonus,10),
                philosophystat: parseInt(values.mebonus,10),
                planarlorestat: parseInt(values.mebonus,10),
                survival1stat: parseInt(values.mebonus,10),
                survival2stat: parseInt(values.mebonus,10),
                survival3stat: parseInt(values.mebonus,10),
                weatherwatchingstat: parseInt(values.mebonus,10)
            });
        } else {
            setAttrs({
                mimicrystat: parseInt(values.mebonus,10),
                poeticimprovstat: parseInt(values.mebonus,10),
                singingstat: parseInt(values.mebonus,10),
                taletellingstat: parseInt(values.mebonus,10),
                poisonperceptionstat: parseInt(values.mebonus,10),
                signalingstat: parseInt(values.mebonus,10),
                readrunesstat: parseInt(values.mebonus,10),
                mnemonicsstat: parseInt(values.mebonus,10)
            });
        }
    });
});
// <!-- Stat calculation for Categories (stat1+stat2) -->
on('change:prbonus change:variablestatbonuscalc change:skillrecalc', function () {			//Presence-based Categories
    getAttrs(['embonus', 'inbonus', 'prbonus', 'sdbonus', 'variablestatbonuscalc'], function(values) {
        setAttrs({
            'cat-artistic-active-statbonus': parseInt(values.prbonus,10)+parseInt(values.embonus,10),
            'cat-influence-statbonus': parseInt(values.prbonus,10)+parseInt(values.embonus,10),
            'cat-urban-statbonus': parseInt(values.prbonus,10)+parseInt(values.inbonus,10),
            'cat-self-control-statbonus': parseInt(values.prbonus,10)+parseInt(values.sdbonus,10),
            attunementstat: parseInt(values.prbonus,10),		// set skills also	
            musicstat: parseInt(values.prbonus,10),
            powerperceptionstat: parseInt(values.prbonus,10),
            spellmastery1stat: parseInt(values.prbonus,10),
            spellmastery2stat: parseInt(values.prbonus,10),
            spellmastery3stat: parseInt(values.prbonus,10),
            transcendarmorstat: parseInt(values.prbonus,10)
        });
        if (parseInt(values.variablestatbonuscalc) == 1){
            setAttrs({
                paintingstat: parseInt(values.prbonus,10),
                sculptingstat: parseInt(values.prbonus,10),
                divination1stat: parseInt(values.prbonus,10),
                divination2stat: parseInt(values.prbonus,10),
                divination3stat: parseInt(values.prbonus,10),
                readrunesstat: parseInt(values.prbonus,10),
                poetrystat: parseInt(values.prbonus,10),
                channelingstat: parseInt(values.prbonus,10),
                magicritualstat: parseInt(values.prbonus,10)
            });
        } else {
            setAttrs({
                senseawareness1stat: parseInt(values.prbonus,10),
                slastat: parseInt(values.prbonus,10),
                reversestroke1stat: parseInt(values.prbonus,10),
                swashbucklingstat: parseInt(values.prbonus,10),
                leadershipstat: parseInt(values.prbonus,10),
                animalmasterystat: parseInt(values.prbonus,10),
                astronomystat: parseInt(values.prbonus,10),
                psychologystat: parseInt(values.prbonus,10),
                adrenalconcentrationstat: parseInt(values.prbonus,10),
                stunnedmaneuveringstat: parseInt(values.prbonus,10),
                disguisestat: parseInt(values.prbonus,10),
                pickpocketsstat: parseInt(values.prbonus,10),
                trickerystat: parseInt(values.prbonus,10),
                beggingstat: parseInt(values.prbonus,10),
                gamblingstat: parseInt(values.prbonus,10),
                administrationstat: parseInt(values.prbonus,10)
            });
        }
    });
});
// <!-- Stat calculation for Categories (stat1+stat2) -->
on('change:qubonus change:variablestatbonuscalc change:skillrecalc', function () {			//Quickness-based Categories
    getAttrs(['agbonus', 'qubonus', 'variablestatbonuscalc'], function(values) {
        setAttrs({
            'cat-athletic-gym-statbonus': parseInt(values.qubonus,10)+parseInt(values.agbonus,10),
            'cat-combat-maneuvers-statbonus': parseInt(values.qubonus,10)+parseInt(values.agbonus,10)
        });
        if (parseInt(values.variablestatbonuscalc) == 1){
            setAttrs({
                //			  "surfingstat": parseInt(values.qubonus,10),
                //			  "otherstat": parseInt(values.qubonus,10)
            });
        } else {
            setAttrs({
                sprintingstat: parseInt(values.qubonus,10),
                tacklingstat: parseInt(values.qubonus,10),
                adrenalspeedstat: parseInt(values.qubonus,10)
            });
        }
    });
});
// <!-- Stat calculation for Categories (stat1+stat2) -->
on('change:rebonus change:variablestatbonuscalc change:skillrecalc', function () {			//Reasoning-based Categories
    getAttrs(['inbonus', 'mebonus', 'rebonus', 'variablestatbonuscalc'], function(values) {
        setAttrs({
            'cat-aware-search-statbonus': parseInt(values.rebonus,10)+parseInt(values.inbonus,10),
            'cat-communications-statbonus': parseInt(values.rebonus,10)+parseInt(values.mebonus,10),
            'cat-lore-general-statbonus': parseInt(values.rebonus,10)+parseInt(values.mebonus,10),
            'cat-lore-magical-statbonus': parseInt(values.rebonus,10)+parseInt(values.mebonus,10),
            'cat-lore-obscure-statbonus': parseInt(values.rebonus,10)+parseInt(values.mebonus,10),
            'cat-lore-technical-statbonus': parseInt(values.rebonus,10)+parseInt(values.mebonus,10),
            'cat-science-basic-statbonus': parseInt(values.rebonus,10)+parseInt(values.mebonus,10),
            'cat-science-specialized-statbonus': parseInt(values.rebonus,10)+parseInt(values.mebonus,10),
            'cat-tech-general-statbonus': parseInt(values.rebonus,10)+parseInt(values.mebonus,10),
            'cat-tech-professional-statbonus': parseInt(values.rebonus,10)+parseInt(values.mebonus,10),	
            advancedmathstat: parseInt(values.rebonus,10),		// set skills also
            appraisalstat: parseInt(values.rebonus,10),
            basicmathstat: parseInt(values.rebonus,10),
            cartographystat: parseInt(values.rebonus,10),
            contactingstat: parseInt(values.rebonus,10),
            counterfeitingstat: parseInt(values.rebonus,10),
            evalarmorstat: parseInt(values.rebonus,10),
            evalmetalstat: parseInt(values.rebonus,10),
            evalstonestat: parseInt(values.rebonus,10),
            evalweaponstat: parseInt(values.rebonus,10),
            forgery1stat: parseInt(values.rebonus,10),
            gimmickrystat: parseInt(values.rebonus,10),
            hidingitemsstat: parseInt(values.rebonus,10),
            navigationstat: parseInt(values.rebonus,10),
            picklocksstat: parseInt(values.rebonus,10),
            scroungingstat: parseInt(values.rebonus,10),
            siegeengineeringstat: parseInt(values.rebonus,10),
            tacticsstat: parseInt(values.rebonus,10),
            trapbuildingstat: parseInt(values.rebonus,10),
            weaponmissileart1stat: parseInt(values.rebonus,10),
            weaponmissileart2stat: parseInt(values.rebonus,10),
            weaponmissileart3stat: parseInt(values.rebonus,10)
        });
        if (parseInt(values.variablestatbonuscalc) == 1){
            setAttrs({
                boatpilot1stat: parseInt(values.rebonus,10),
                prepareherbsstat: parseInt(values.rebonus,10),
                minglingstat: parseInt(values.rebonus,10),
                anthropology1stat: parseInt(values.rebonus,10),
                camouflagestat: parseInt(values.rebonus,10),
                hypnosisstat: parseInt(values.rebonus,10),
                midwiferystat: parseInt(values.rebonus,10),
                streetwisestat: parseInt(values.rebonus,10),
                alchemystat: parseInt(values.rebonus,10),
                biochemistrystat: parseInt(values.rebonus,10),
                astronomystat: parseInt(values.rebonus,10),
                psychologystat: parseInt(values.rebonus,10),
                disguisestat: parseInt(values.rebonus,10),
                administrationstat: parseInt(values.rebonus,10),
                researchstat: parseInt(values.rebonus,10),
                disarmingtrapsstat: parseInt(values.rebonus,10),
                settrapsstat: parseInt(values.rebonus,10),
                usepoisonstat: parseInt(values.rebonus,10),
                preparepoisonsstat: parseInt(values.rebonus,10)
            });
        } else {
            setAttrs({
                poetrystat: parseInt(values.rebonus,10),
                propagandastat: parseInt(values.rebonus,10)
            });
        }
    });
});
// <!-- Stat calculation for Categories (stat1+stat2) -->
on('change:sdbonus change:variablestatbonuscalc change:skillrecalc', function () {			//Self Discipline-based Categories
    getAttrs(['agbonus', 'cobonus', 'inbonus', 'prbonus', 'sdbonus', 'variablestatbonuscalc'], function(values) {
        setAttrs({
            'cat-directed-spells-statbonus': parseInt(values.sdbonus,10)+parseInt(values.agbonus,10),
            'cat-subterfuge-attack-statbonus': parseInt(values.sdbonus,10)+parseInt(values.agbonus,10),
            'cat-subterfuge-stealth-statbonus': parseInt(values.sdbonus,10)+parseInt(values.agbonus,10),
            'bodydevstat': parseInt(values.sdbonus,10)+parseInt(values.cobonus,10)+parseInt(values.cobonus,10),
            'cat-outdoor-environ-statbonus': parseInt(values.sdbonus,10)+parseInt(values.inbonus,10),
            'cat-aware-percept-statbonus': parseInt(values.sdbonus,10)+parseInt(values.inbonus,10),
            'cat-aware-senses-statbonus': parseInt(values.sdbonus,10)+parseInt(values.inbonus,10),
            'cat-self-control-statbonus': parseInt(values.sdbonus,10)+parseInt(values.prbonus,10),
            adrenaldeflectingstat: parseInt(values.sdbonus,10),		// set skills also
            adrenalstabilizationstat: parseInt(values.sdbonus,10),
            cleansingtrancestat: parseInt(values.sdbonus,10),
            controllycanthropystat: parseInt(values.sdbonus,10),
            deathtrancestat: parseInt(values.sdbonus,10),
            frenzystat: parseInt(values.sdbonus,10),
            joustingstat: parseInt(values.sdbonus,10),
            leathercraftsstat: parseInt(values.sdbonus,10),
            mappingstat: parseInt(values.sdbonus,10),
            meditationstat: parseInt(values.sdbonus,10),
            observationstat: parseInt(values.sdbonus,10),
            quickdrawstat: parseInt(values.sdbonus,10),
            readtracksstat: parseInt(values.sdbonus,10),
            sailingstat: parseInt(values.sdbonus,10),
            scribingstat: parseInt(values.sdbonus,10),
            sleeptrancestat: parseInt(values.sdbonus,10),
            subdualstat: parseInt(values.sdbonus,10),
            surveillancestat: parseInt(values.sdbonus,10),
            tacticalgamesstat: parseInt(values.sdbonus,10),
            trackingstat: parseInt(values.sdbonus,10),
            twoweaponfighting1stat: parseInt(values.sdbonus,10)
        });
        if (parseInt(values.variablestatbonuscalc) == 1){
            setAttrs({
                tumbleevadestat: parseInt(values.sdbonus,10),
                adrenalbalancestat: parseInt(values.sdbonus,10),
                adrenallandingstat: parseInt(values.sdbonus,10),
                adrenalquickdrawstat: parseInt(values.sdbonus,10),
                disarmarmedvs1hstat: parseInt(values.sdbonus,10),
                disarmarmedvs2hstat: parseInt(values.sdbonus,10),
                disarmarmedvspolearmstat: parseInt(values.sdbonus,10),
                disarmarmedvs2wcombostat: parseInt(values.sdbonus,10),
                disarmunarmedvs1hedgedstat: parseInt(values.sdbonus,10),
                disarmunarmedvs1hconcussionstat: parseInt(values.sdbonus,10),
                disarmunarmedvs2hstat: parseInt(values.sdbonus,10),
                disarmunarmedvspolearmstat: parseInt(values.sdbonus,10),
                useprepherbsstat: parseInt(values.sdbonus,10),
                lieperceptionstat: parseInt(values.sdbonus,10),
                mountedcombatstat: parseInt(values.sdbonus,10),
                trappingstat: parseInt(values.sdbonus,10),
                healingtrancestat: parseInt(values.sdbonus,10),
                firstaidstat: parseInt(values.sdbonus,10),
                detecttrapsstat: parseInt(values.sdbonus,10),
                locatehiddenstat: parseInt(values.sdbonus,10),
                cookingstat: parseInt(values.sdbonus,10),
                fletchingstat: parseInt(values.sdbonus,10),
                metalcraftsstat: parseInt(values.sdbonus,10),
                ropemasterystat: parseInt(values.sdbonus,10),
                sewingstat: parseInt(values.sdbonus,10),
                skinningstat: parseInt(values.sdbonus,10),
                stonecraftsstat: parseInt(values.sdbonus,10),
                woodcraftsstat: parseInt(values.sdbonus,10),
                operatingequipmentstat: parseInt(values.sdbonus,10),
                orienteeringstat: parseInt(values.sdbonus,10),
                poisonperceptionstat: parseInt(values.sdbonus,10),
                mnemonicsstat: parseInt(values.sdbonus,10),
                reversestroke1stat: parseInt(values.sdbonus,10),
                swashbucklingstat: parseInt(values.sdbonus,10),
                adrenalconcentrationstat: parseInt(values.sdbonus,10),
                stunnedmaneuveringstat: parseInt(values.sdbonus,10),
                beggingstat: parseInt(values.sdbonus,10),
                gamblingstat: parseInt(values.sdbonus,10),
                adrenalspeedstat: parseInt(values.sdbonus,10),
                adrenalleapingstat: parseInt(values.sdbonus,10),
                adrenalstrengthstat: parseInt(values.sdbonus,10),
                brawlingstat: parseInt(values.sdbonus,10)
            });
        } else {
            setAttrs({
                actingstat: parseInt(values.sdbonus,10),
                mimerystat: parseInt(values.sdbonus,10),
                ventriloquismstat: parseInt(values.sdbonus,10),
                swimmingstat: parseInt(values.sdbonus,10),
                contortionsstat: parseInt(values.sdbonus,10),
                tightropestat: parseInt(values.sdbonus,10),
                lipreadingstat: parseInt(values.sdbonus,10),
                interrogationstat: parseInt(values.sdbonus,10),
                tradingstat: parseInt(values.sdbonus,10),
                striking3stat: parseInt(values.sdbonus,10),
                striking4stat: parseInt(values.sdbonus,10),
                sweeps3stat: parseInt(values.sdbonus,10),
                sweeps4stat: parseInt(values.sdbonus,10),
                wrestlingstat: parseInt(values.sdbonus,10),
                animaltraining1stat: parseInt(values.sdbonus,10),
                channelingstat: parseInt(values.sdbonus,10),
                magicritualstat: parseInt(values.sdbonus,10),
                researchstat: parseInt(values.sdbonus,10),
                disarmingtrapsstat: parseInt(values.sdbonus,10),
                settrapsstat: parseInt(values.sdbonus,10),
                usepoisonstat: parseInt(values.sdbonus,10),
                stalkingstat: parseInt(values.sdbonus,10),
                preparepoisonsstat: parseInt(values.sdbonus,10)
            });
        }
    });
});
// <!-- Stat calculation for Categories (stat1+stat2) -->
on('change:stbonus change:variablestatbonuscalc change:skillrecalc', function () {			//Strength-based Categories
    getAttrs(['agbonus', 'cobonus', 'stbonus', 'variablestatbonuscalc'], function(values) {
        setAttrs({
            'cat-armor-heavy-statbonus': parseInt(values.stbonus,10)+parseInt(values.agbonus,10),
            'cat-armor-med-statbonus': parseInt(values.stbonus,10)+parseInt(values.agbonus,10),
            'cat-ma-striking-statbonus': parseInt(values.stbonus,10)+parseInt(values.agbonus,10),
            'cat-special-attacks-statbonus': parseInt(values.stbonus,10)+parseInt(values.agbonus,10),
            'cat-weapon-1hconcussion-statbonus': parseInt(values.stbonus,10)+parseInt(values.agbonus,10),
            'cat-weapon-1hedged-statbonus': parseInt(values.stbonus,10)+parseInt(values.agbonus,10),
            'cat-weapon-2handed-statbonus': parseInt(values.stbonus,10)+parseInt(values.agbonus,10),
            'cat-weapon-polearms-statbonus': parseInt(values.stbonus,10)+parseInt(values.agbonus,10),
            'cat-armor-light-statbonus': parseInt(values.stbonus,10)+parseInt(values.agbonus,10),
            'cat-ma-sweeps-statbonus': parseInt(values.stbonus,10)+parseInt(values.agbonus,10),
            'cat-weapon-missile-statbonus': parseInt(values.stbonus,10)+parseInt(values.agbonus,10),
            'cat-weapon-thrown-statbonus': parseInt(values.stbonus,10)+parseInt(values.agbonus,10),
            'cat-athletic-brawn-statbonus': parseInt(values.stbonus,10)+parseInt(values.cobonus,10),
            boxingstat: parseInt(values.stbonus,10), 		// set skills also	
            chainstat: parseInt(values.stbonus,10),
            platestat: parseInt(values.stbonus,10),
            rowingstat: parseInt(values.stbonus,10),
            scalingstat: parseInt(values.stbonus,10),
            striking1stat: parseInt(values.stbonus,10),
            striking2stat: parseInt(values.stbonus,10),
            weapon1hc1stat: parseInt(values.stbonus,10),
            weapon1hc2stat: parseInt(values.stbonus,10),
            weapon1hc3stat: parseInt(values.stbonus,10),
            weapon2hand1stat: parseInt(values.stbonus,10),
            weapon2hand2stat: parseInt(values.stbonus,10),
            weapon2hand3stat: parseInt(values.stbonus,10),
            weaponpolearm1stat: parseInt(values.stbonus,10),
            weaponpolearm2stat: parseInt(values.stbonus,10),
            weaponpolearm3stat: parseInt(values.stbonus,10)
        });
        if (parseInt(values.variablestatbonuscalc) == 1){
            setAttrs({
                weapon1he1stat: parseInt(values.stbonus,10),
                weapon1he2stat: parseInt(values.stbonus,10),
                weapon1he3stat: parseInt(values.stbonus,10),
                athleticgamesendur1stat: parseInt(values.stbonus,10),
                athleticgamesendur2stat: parseInt(values.stbonus,10),
                athleticgamesendur3stat: parseInt(values.stbonus,10),
                distancerunningstat: parseInt(values.stbonus,10),
                sprintingstat: parseInt(values.stbonus,10),
                tacklingstat: parseInt(values.stbonus,10),
                swimmingstat: parseInt(values.stbonus,10),
                striking3stat: parseInt(values.stbonus,10),
                striking4stat: parseInt(values.stbonus,10)
            });
        } else {
            setAttrs({
                powerstrikingstat: parseInt(values.stbonus,10),
                powerthrowingstat: parseInt(values.stbonus,10),
                climbingstat: parseInt(values.stbonus,10),
                rappellingstat: parseInt(values.stbonus,10),
                blockingstat: parseInt(values.stbonus,10),
                adrenalleapingstat: parseInt(values.stbonus,10),
                adrenalstrengthstat: parseInt(values.stbonus,10),
                brawlingstat: parseInt(values.stbonus,10)
            });
        }
    });
});

// <!-- if powerpoint development total changes, update powerpoints-->
on('change:ppdev change:ppmult', function() {
    getAttrs(['ppdev', 'ppmult'], function(values) {
        let powerpts = parseInt(values.ppdev,10)||0;
        let mult = parseFloat(values.ppmult,10)||0;
        setAttrs({
            'powerpoints_max': Math.round(powerpts*mult)
        });
    });
});

// <!-- if realm (bonus) changes, update things-->
on('change:realm change:skillrecalc', function() {
    getAttrs(['realm'], function(values) {
        let realmstat = parseInt(values.realm,10)||0;
        setAttrs({
            ppdevstat: realmstat,
            'cat-srobstatbonus': realmstat,
            'cat-sropenstatbonus': realmstat,
            'cat-srclosedstatbonus': realmstat,
            'cat-srotherbstatbonus': realmstat,
            'cat-oropenstatbonus': realmstat,
            'cat-orclosedstatbonus': realmstat,
            'cat-orbasestatbonus': realmstat,
            'cat-arcopenstatbonus': realmstat,
            'cat-arcclosedstatbonus': realmstat,
            'cat-arcbasestatbonus': realmstat,
            'cat-arcotherbasestatbonus': realmstat
        });
    });
});

// <!-- Copy over Armor-Heavy Category Bonus-->
on('change:cat-armor-heavy', function() {
    getAttrs(['cat-armor-heavy'], function(values) {
        setAttrs({
            platecatbonus: parseInt(values['cat-armor-heavy'],10)||0
        });
    });
});
  
// <!-- Copy over Armor-Light Category Bonus-->
on('change:cat-armor-light', function() {
    getAttrs(['cat-armor-light'], function(values) {
        setAttrs({
            softleathercatbonus: parseInt(values['cat-armor-light'],10)||0,
            rigidleathercatbonus: parseInt(values['cat-armor-light'],10)||0
        });
    });
});

// <!-- Copy over Armor-Medium Category Bonus-->
on('change:cat-armor-med', function() {
    getAttrs(['cat-armor-med'], function(values) {
        setAttrs({
            chaincatbonus: parseInt(values['cat-armor-med'],10)||0
        });
    });
});
  
// <!-- Copy over Artistic-Active Category Bonus-->
on('change:cat-artistic-active', function() {
    getAttrs(['cat-artistic-active'], function(values) {
        setAttrs({
            actingcatbonus: parseInt(values['cat-artistic-active'],10)||0,
            dancingcatbonus: parseInt(values['cat-artistic-active'],10)||0,
            mimerycatbonus: parseInt(values['cat-artistic-active'],10)||0,
            mimicrycatbonus: parseInt(values['cat-artistic-active'],10)||0,
            playinstrument1catbonus: parseInt(values['cat-artistic-active'],10)||0,
            playinstrument2catbonus: parseInt(values['cat-artistic-active'],10)||0,
            playinstrument3catbonus: parseInt(values['cat-artistic-active'],10)||0,
            poeticimprovcatbonus: parseInt(values['cat-artistic-active'],10)||0,
            singingcatbonus: parseInt(values['cat-artistic-active'],10)||0,
            taletellingcatbonus: parseInt(values['cat-artistic-active'],10)||0,
            ventriloquismcatbonus: parseInt(values['cat-artistic-active'],10)||0
        });
    });
});
  
// <!-- Copy over Artistic-Passive Category Bonus-->
on('change:cat-artistic-passive', function() {
    getAttrs(['cat-artistic-passive'], function(values) {
        setAttrs({
            musiccatbonus: parseInt(values['cat-artistic-passive'],10)||0,
            paintingcatbonus: parseInt(values['cat-artistic-passive'],10)||0,
            poetrycatbonus: parseInt(values['cat-artistic-passive'],10)||0,
            sculptingcatbonus: parseInt(values['cat-artistic-passive'],10)||0
        });
    });
});
  
// <!-- Copy over Athletic-Brawn Category Bonus-->
on('change:cat-athletic-brawn', function() {
    getAttrs(['cat-athletic-brawn'], function(values) {
        setAttrs({
            athleticgamesbrawn1catbonus: parseInt(values['cat-athletic-brawn'],10)||0,
            athleticgamesbrawn2catbonus: parseInt(values['cat-athletic-brawn'],10)||0,
            athleticgamesbrawn3catbonus: parseInt(values['cat-athletic-brawn'],10)||0,
            jumpingcatbonus: parseInt(values['cat-athletic-brawn'],10)||0,
            powerstrikingcatbonus: parseInt(values['cat-athletic-brawn'],10)||0,
            powerthrowingcatbonus: parseInt(values['cat-athletic-brawn'],10)||0,
            weightliftingcatbonus: parseInt(values['cat-athletic-brawn'],10)||0
        });
    });
});

// <!-- Copy over Athletic-Endurance Category Bonus-->
on('change:cat-athletic-endur', function() {
    getAttrs(['cat-athletic-endur'], function(values) {
        setAttrs({
            athleticgamesendur1catbonus: parseInt(values['cat-athletic-endur'],10)||0,
            athleticgamesendur2catbonus: parseInt(values['cat-athletic-endur'],10)||0,
            athleticgamesendur3catbonus: parseInt(values['cat-athletic-endur'],10)||0,
            distancerunningcatbonus: parseInt(values['cat-athletic-endur'],10)||0,
            rowingcatbonus: parseInt(values['cat-athletic-endur'],10)||0,
            scalingcatbonus: parseInt(values['cat-athletic-endur'],10)||0,
            sprintingcatbonus: parseInt(values['cat-athletic-endur'],10)||0,
            swimmingcatbonus: parseInt(values['cat-athletic-endur'],10)||0
        });
    });
});

// <!-- Copy over Athletic-Gymnastics Category Bonus-->
on('change:cat-athletic-gym', function() {
    getAttrs(['cat-athletic-gym'], function(values) {
        setAttrs({
            acrobaticscatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            athleticgamesgym1catbonus: parseInt(values['cat-athletic-gym'],10)||0,
            athleticgamesgym2catbonus: parseInt(values['cat-athletic-gym'],10)||0,
            athleticgamesgym3catbonus: parseInt(values['cat-athletic-gym'],10)||0,
            climbingcatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            contortionscatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            divingcatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            flyglidecatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            jugglingcatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            polevaultingcatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            rappellingcatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            skatingcatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            skiingcatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            stiltwalkingcatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            surfingcatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            tightropecatbonus: parseInt(values['cat-athletic-gym'],10)||0,
            tumblingcatbonus: parseInt(values['cat-athletic-gym'],10)||0
        });
    });
});
  
// <!-- Copy over Awareness-Perception Category Bonus-->
on('change:cat-aware-percept', function() {
    getAttrs(['cat-aware-percept'], function(values) {
        setAttrs({
            alertnesscatbonus: parseInt(values['cat-aware-percept'],10)||0,
            senseambushcatbonus: parseInt(values['cat-aware-percept'],10)||0
        });
    });
});
  
// <!-- Copy over Awareness-Searching Category Bonus-->
on('change:cat-aware-search', function() {
    getAttrs(['cat-aware-search'], function(values) {
        setAttrs({
            detecttrapscatbonus: parseInt(values['cat-aware-search'],10)||0,
            lieperceptioncatbonus: parseInt(values['cat-aware-search'],10)||0,
            locatehiddencatbonus: parseInt(values['cat-aware-search'],10)||0,
            observationcatbonus: parseInt(values['cat-aware-search'],10)||0,
            poisonperceptioncatbonus: parseInt(values['cat-aware-search'],10)||0,
            readtrackscatbonus: parseInt(values['cat-aware-search'],10)||0,
            surveillancecatbonus: parseInt(values['cat-aware-search'],10)||0,
            trackingcatbonus: parseInt(values['cat-aware-search'],10)||0
        });
    });
});
  
// <!-- Copy over Awareness-Senses Category Bonus-->
on('change:cat-aware-senses', function() {
    getAttrs(['cat-aware-senses'], function(values) {
        setAttrs({
            directionsensecatbonus: parseInt(values['cat-aware-senses'],10)||0,
            realityawarenesscatbonus: parseInt(values['cat-aware-senses'],10)||0,
            senseawareness1catbonus: parseInt(values['cat-aware-senses'],10)||0,
            sitawareness1catbonus: parseInt(values['cat-aware-senses'],10)||0,
            slacatbonus: parseInt(values['cat-aware-senses'],10)||0,
            awaresenses1catbonus: parseInt(values['cat-aware-senses'],10)||0,
            awaresenses2catbonus: parseInt(values['cat-aware-senses'],10)||0,
            awaresenses3catbonus: parseInt(values['cat-aware-senses'],10)||0,
            timesensecatbonus: parseInt(values['cat-aware-senses'],10)||0
        });
    });
});
  
// <!-- Copy over Combat-Maneuvers Category Bonus-->
on('change:cat-combat-maneuvers', function() {
    getAttrs(['cat-combat-maneuvers'], function(values) {
        setAttrs({
            adrenaldeflectingcatbonus: parseInt(values['cat-combat-maneuvers'],10)||0,
            mountedcombatcatbonus: parseInt(values['cat-combat-maneuvers'],10)||0,
            quickdrawcatbonus: parseInt(values['cat-combat-maneuvers'],10)||0,
            reversestroke1catbonus: parseInt(values['cat-combat-maneuvers'],10)||0,
            subdualcatbonus: parseInt(values['cat-combat-maneuvers'],10)||0,
            swashbucklingcatbonus: parseInt(values['cat-combat-maneuvers'],10)||0,
            tumbleevadecatbonus: parseInt(values['cat-combat-maneuvers'],10)||0,
            twoweaponfighting1catbonus: parseInt(values['cat-combat-maneuvers'],10)||0,
            combatmaneuvers1catbonus: parseInt(values['cat-combat-maneuvers'],10)||0,
            combatmaneuvers2catbonus: parseInt(values['cat-combat-maneuvers'],10)||0,
            combatmaneuvers3catbonus: parseInt(values['cat-combat-maneuvers'],10)||0
        });
    });
});
  
// <!-- Copy over Communications Category Bonus-->
on('change:cat-communications', function() {
    getAttrs(['cat-communications'], function(values) {
        setAttrs({
            'repeating_langs_languagespokencatbonus': parseInt(values['cat-communications'],10)||0,  // does not function......
            'repeating_langs_languagewrittencatbonus': parseInt(values['cat-communications'],10)||0,  // does not function...... read in and loop through the id's somehow?
            lipreadingcatbonus: parseInt(values['cat-communications'],10)||0,
            signalingcatbonus: parseInt(values['cat-communications'],10)||0
        });
    });
});
  
// <!-- Copy over Crafts Category Bonus-->
on('change:cat-crafts', function() {
    getAttrs(['cat-crafts'], function(values) {
        setAttrs({
            cookingcatbonus: parseInt(values['cat-crafts'],10)||0,
            fletchingcatbonus: parseInt(values['cat-crafts'],10)||0,
            leathercraftscatbonus: parseInt(values['cat-crafts'],10)||0,
            metalcraftscatbonus: parseInt(values['cat-crafts'],10)||0,
            ropemasterycatbonus: parseInt(values['cat-crafts'],10)||0,
            scribingcatbonus: parseInt(values['cat-crafts'],10)||0,
            sewingcatbonus: parseInt(values['cat-crafts'],10)||0,
            skinningcatbonus: parseInt(values['cat-crafts'],10)||0,
            stonecraftscatbonus: parseInt(values['cat-crafts'],10)||0,
            trappingcatbonus: parseInt(values['cat-crafts'],10)||0,
            woodcraftscatbonus: parseInt(values['cat-crafts'],10)||0,
            craft15catbonus: parseInt(values['cat-crafts'],10)||0,
            craft16catbonus: parseInt(values['cat-crafts'],10)||0
        });
    });
});
  
// <!-- Copy over Directed Spells Category Bonus-->
on('change:cat-directed-spells', function() {
    getAttrs(['cat-directed-spells'], function(values) {
        setAttrs({
            fireboltcatbonus: parseInt(values['cat-directed-spells'],10)||0,
            iceboltcatbonus: parseInt(values['cat-directed-spells'],10)||0,
            lightningboltcatbonus: parseInt(values['cat-directed-spells'],10)||0,
            shockboltcatbonus: parseInt(values['cat-directed-spells'],10)||0,
            waterboltcatbonus: parseInt(values['cat-directed-spells'],10)||0,
            boltattack6catbonus: parseInt(values['cat-directed-spells'],10)||0
        });
    });
});
  
// <!-- Copy over Influence Category Bonus-->
on('change:cat-influence', function() {
    getAttrs(['cat-influence'], function(values) {
        setAttrs({
            briberycatbonus: parseInt(values['cat-influence'],10)||0,
            diplomacycatbonus: parseInt(values['cat-influence'],10)||0,
            dupingcatbonus: parseInt(values['cat-influence'],10)||0,
            interrogationcatbonus: parseInt(values['cat-influence'],10)||0,
            leadershipcatbonus: parseInt(values['cat-influence'],10)||0,
            propagandacatbonus: parseInt(values['cat-influence'],10)||0,
            publicspeakingcatbonus: parseInt(values['cat-influence'],10)||0,
            seductioncatbonus: parseInt(values['cat-influence'],10)||0,
            tradingcatbonus: parseInt(values['cat-influence'],10)||0
        });
    });
});
  
// <!-- Copy over Lore-General Category Bonus-->
on('change:cat-lore-general', function() {
    getAttrs(['cat-lore-general'], function(values) {
        setAttrs({
            culturelore1catbonus: parseInt(values['cat-lore-general'],10)||0,
            faunalorecatbonus: parseInt(values['cat-lore-general'],10)||0,
            floralorecatbonus: parseInt(values['cat-lore-general'],10)||0,
            heraldrycatbonus: parseInt(values['cat-lore-general'],10)||0,
            historycatbonus: parseInt(values['cat-lore-general'],10)||0,
            philosophycatbonus: parseInt(values['cat-lore-general'],10)||0,
            regionlore1catbonus: parseInt(values['cat-lore-general'],10)||0,
            religioncatbonus: parseInt(values['cat-lore-general'],10)||0,
            loregeneral1catbonus: parseInt(values['cat-lore-general'],10)||0,
            loregeneral2catbonus: parseInt(values['cat-lore-general'],10)||0,
            loregeneral3catbonus: parseInt(values['cat-lore-general'],10)||0
        });
    });
});
  
// <!-- Copy over Lore-Magical Category Bonus-->
on('change:cat-lore-magical', function() {
    getAttrs(['cat-lore-magical'], function(values) {
        setAttrs({
            artifactlorecatbonus: parseInt(values['cat-lore-magical'],10)||0,
            circlelorecatbonus: parseInt(values['cat-lore-magical'],10)||0,
            planarlorecatbonus: parseInt(values['cat-lore-magical'],10)||0,
            spelllorecatbonus: parseInt(values['cat-lore-magical'],10)||0,
            symbollorecatbonus: parseInt(values['cat-lore-magical'],10)||0,
            undeadlorecatbonus: parseInt(values['cat-lore-magical'],10)||0,
            wardinglorecatbonus: parseInt(values['cat-lore-magical'],10)||0
        });
    });
});
  
// <!-- Copy over Lore-Obscure Category Bonus-->
on('change:cat-lore-obscure', function() {
    getAttrs(['cat-lore-obscure'], function(values) {
        setAttrs({
            demondevillorecatbonus: parseInt(values['cat-lore-obscure'],10)||0,
            dragonlorecatbonus: parseInt(values['cat-lore-obscure'],10)||0,
            faerielorecatbonus: parseInt(values['cat-lore-obscure'],10)||0,
            xenolore1catbonus: parseInt(values['cat-lore-obscure'],10)||0,
            xenolore2catbonus: parseInt(values['cat-lore-obscure'],10)||0,
            xenolore3catbonus: parseInt(values['cat-lore-obscure'],10)||0
        });
    });
});
  
// <!-- Copy over Lore-Technical Category Bonus-->
on('change:cat-lore-technical', function() {
    getAttrs(['cat-lore-technical'], function(values) {
        setAttrs({
            herblorecatbonus: parseInt(values['cat-lore-technical'],10)||0,
            locklorecatbonus: parseInt(values['cat-lore-technical'],10)||0,
            metallorecatbonus: parseInt(values['cat-lore-technical'],10)||0,
            poisonlorecatbonus: parseInt(values['cat-lore-technical'],10)||0,
            stonelorecatbonus: parseInt(values['cat-lore-technical'],10)||0,
            tradinglorecatbonus: parseInt(values['cat-lore-technical'],10)||0
        });
    });
});
  
// <!-- Copy over Martial Arts-Striking Category Bonus-->
on('change:cat-ma-striking', function() {
    getAttrs(['cat-ma-striking'], function(values) {
        setAttrs({
            boxingcatbonus: parseInt(values['cat-ma-striking'],10)||0,
            striking1catbonus: parseInt(values['cat-ma-striking'],10)||0,
            striking2catbonus: parseInt(values['cat-ma-striking'],10)||0,
            striking3catbonus: parseInt(values['cat-ma-striking'],10)||0,
            striking4catbonus: parseInt(values['cat-ma-striking'],10)||0,
            tacklingcatbonus: parseInt(values['cat-ma-striking'],10)||0
        });
    });
});
  
// <!-- Copy over Martial Arts-Sweeps Category Bonus-->
on('change:cat-ma-sweeps', function() {
    getAttrs(['cat-ma-sweeps'], function(values) {
        setAttrs({
            blockingcatbonus: parseInt(values['cat-ma-sweeps'],10)||0,
            sweeps1catbonus: parseInt(values['cat-ma-sweeps'],10)||0,
            sweeps2catbonus: parseInt(values['cat-ma-sweeps'],10)||0,
            sweeps3catbonus: parseInt(values['cat-ma-sweeps'],10)||0,
            sweeps4catbonus: parseInt(values['cat-ma-sweeps'],10)||0,
            wrestlingcatbonus: parseInt(values['cat-ma-sweeps'],10)||0
        });
    });
});
  
// <!-- Copy over Outdoor-Animal Category Bonus-->
on('change:cat-outdoor-animal', function() {
    getAttrs(['cat-outdoor-animal'], function(values) {
        setAttrs({
            animalhandling1catbonus: parseInt(values['cat-outdoor-animal'],10)||0,
            animalhealing1catbonus: parseInt(values['cat-outdoor-animal'],10)||0,
            animalmasterycatbonus: parseInt(values['cat-outdoor-animal'],10)||0,
            animaltraining1catbonus: parseInt(values['cat-outdoor-animal'],10)||0,
            driving1catbonus: parseInt(values['cat-outdoor-animal'],10)||0,
            herding1catbonus: parseInt(values['cat-outdoor-animal'],10)||0,
            riding1catbonus: parseInt(values['cat-outdoor-animal'],10)||0,
            outdooranimal1catbonus: parseInt(values['cat-outdoor-animal'],10)||0,
            outdooranimal2catbonus: parseInt(values['cat-outdoor-animal'],10)||0,
            outdooranimal3catbonus: parseInt(values['cat-outdoor-animal'],10)||0
        });
    });
});
  
// <!-- Copy over Outdoor-Environmental Category Bonus-->
on('change:cat-outdoor-environ', function() {
    getAttrs(['cat-outdoor-environ'], function(values) {
        setAttrs({
            cavingcatbonus: parseInt(values['cat-outdoor-environ'],10)||0,
            foragingcatbonus: parseInt(values['cat-outdoor-environ'],10)||0,
            huntingcatbonus: parseInt(values['cat-outdoor-environ'],10)||0,
            stargazingcatbonus: parseInt(values['cat-outdoor-environ'],10)||0,
            survival1catbonus: parseInt(values['cat-outdoor-environ'],10)||0,
            survival2catbonus: parseInt(values['cat-outdoor-environ'],10)||0,
            survival3catbonus: parseInt(values['cat-outdoor-environ'],10)||0,
            weatherwatchingcatbonus: parseInt(values['cat-outdoor-environ'],10)||0
        });
    });
});
  
// <!-- Copy over Power Awareness Category Bonus-->
on('change:cat-power-awareness', function() {
    getAttrs(['cat-power-awareness'], function(values) {
        setAttrs({
            attunementcatbonus: parseInt(values['cat-power-awareness'],10)||0,
            divination1catbonus: parseInt(values['cat-power-awareness'],10)||0,
            divination2catbonus: parseInt(values['cat-power-awareness'],10)||0,
            divination3catbonus: parseInt(values['cat-power-awareness'],10)||0,
            powerperceptioncatbonus: parseInt(values['cat-power-awareness'],10)||0,
            readrunescatbonus: parseInt(values['cat-power-awareness'],10)||0
        });
    });
});
  
// <!-- Copy over Power Manipulation Category Bonus-->
on('change:cat-power-manipulation', function() {
    getAttrs(['cat-power-manipulation'], function(values) {
        setAttrs({
            channelingcatbonus: parseInt(values['cat-power-manipulation'],10)||0,
            magicritualcatbonus: parseInt(values['cat-power-manipulation'],10)||0,
            spellmastery1catbonus: parseInt(values['cat-power-manipulation'],10)||0,
            spellmastery2catbonus: parseInt(values['cat-power-manipulation'],10)||0,
            spellmastery3catbonus: parseInt(values['cat-power-manipulation'],10)||0,
            transcendarmorcatbonus: parseInt(values['cat-power-manipulation'],10)||0
        });
    });
});
  
// <!-- Copy over Science-Basic Category Bonus-->
on('change:cat-science-basic', function() {
    getAttrs(['cat-science-basic'], function(values) {
        setAttrs({
            basicmathcatbonus: parseInt(values['cat-science-basic'],10)||0,
            researchcatbonus: parseInt(values['cat-science-basic'],10)||0
        });
    });
});
  
// <!-- Copy over Science-Specialized Category Bonus-->
on('change:cat-science-specialized', function() {
    getAttrs(['cat-science-specialized'], function(values) {
        setAttrs({
            advancedmathcatbonus: parseInt(values['cat-science-specialized'],10)||0,
            anthropology1catbonus: parseInt(values['cat-science-specialized'],10)||0,
            alchemycatbonus: parseInt(values['cat-science-specialized'],10)||0,
            astronomycatbonus: parseInt(values['cat-science-specialized'],10)||0,
            biochemistrycatbonus: parseInt(values['cat-science-specialized'],10)||0,
            psychologycatbonus: parseInt(values['cat-science-specialized'],10)||0,
            specscience1catbonus: parseInt(values['cat-science-specialized'],10)||0,
            specscience2catbonus: parseInt(values['cat-science-specialized'],10)||0
        });
    });
});
  
// <!-- Copy over Self-Control Category Bonus-->
on('change:cat-self-control', function() {
    getAttrs(['cat-self-control'], function(values) {
        setAttrs({
            adrenalbalancecatbonus: parseInt(values['cat-self-control'],10)||0,
            adrenalconcentrationcatbonus: parseInt(values['cat-self-control'],10)||0,
            adrenallandingcatbonus: parseInt(values['cat-self-control'],10)||0,
            adrenalleapingcatbonus: parseInt(values['cat-self-control'],10)||0,
            adrenalquickdrawcatbonus: parseInt(values['cat-self-control'],10)||0,
            adrenalspeedcatbonus: parseInt(values['cat-self-control'],10)||0,
            adrenalstabilizationcatbonus: parseInt(values['cat-self-control'],10)||0,
            adrenalstrengthcatbonus: parseInt(values['cat-self-control'],10)||0,
            cleansingtrancecatbonus: parseInt(values['cat-self-control'],10)||0,
            controllycanthropycatbonus: parseInt(values['cat-self-control'],10)||0,
            deathtrancecatbonus: parseInt(values['cat-self-control'],10)||0,
            frenzycatbonus: parseInt(values['cat-self-control'],10)||0,
            healingtrancecatbonus: parseInt(values['cat-self-control'],10)||0,
            meditationcatbonus: parseInt(values['cat-self-control'],10)||0,
            mnemonicscatbonus: parseInt(values['cat-self-control'],10)||0,
            sleeptrancecatbonus: parseInt(values['cat-self-control'],10)||0,
            stunnedmaneuveringcatbonus: parseInt(values['cat-self-control'],10)||0
        });
    });
});
  
// <!-- Copy over Special-Attacks Category Bonus-->
on('change:cat-special-attacks', function() {
    getAttrs(['cat-special-attacks'], function(values) {
        setAttrs({
            brawlingcatbonus: parseInt(values['cat-special-attacks'],10)||0,
            disarmarmedvs1hcatbonus: parseInt(values['cat-special-attacks'],10)||0,
            disarmarmedvs2hcatbonus: parseInt(values['cat-special-attacks'],10)||0,
            disarmarmedvspolearmcatbonus: parseInt(values['cat-special-attacks'],10)||0,
            disarmarmedvs2wcombocatbonus: parseInt(values['cat-special-attacks'],10)||0,
            disarmunarmedvs1hedgedcatbonus: parseInt(values['cat-special-attacks'],10)||0,
            disarmunarmedvs1hconcussioncatbonus: parseInt(values['cat-special-attacks'],10)||0,
            disarmunarmedvs2hcatbonus: parseInt(values['cat-special-attacks'],10)||0,
            disarmunarmedvspolearmcatbonus: parseInt(values['cat-special-attacks'],10)||0,
            joustingcatbonus: parseInt(values['cat-special-attacks'],10)||0
        });
    });
});
  
// <!-- Copy over Special-Defenses Category Bonus-->
on('change:cat-special-defenses', function() {
    getAttrs(['cat-special-defenses'], function(values) {
        setAttrs({
            adrenaldefensecatbonus: parseInt(values['cat-special-defenses'],10)||0,
            adrenaltoughnesscatbonus: parseInt(values['cat-special-defenses'],10)||0
        });
    });
});
  
// <!-- Copy over Subterfuge-Attack Category Bonus-->
on('change:cat-subterfuge-attack', function() {
    getAttrs(['cat-subterfuge-attack'], function(values) {
        setAttrs({
            ambushcatbonus: parseInt(values['cat-subterfuge-attack'],10)||0,
            silentkillcatbonus: parseInt(values['cat-subterfuge-attack'],10)||0
        });
    });
});
  
// <!-- Copy over Subterfuge-Mechanics Category Bonus-->
on('change:cat-subterfuge-mechanics', function() {
    getAttrs(['cat-subterfuge-mechanics'], function(values) {
        setAttrs({
            camouflagecatbonus: parseInt(values['cat-subterfuge-mechanics'],10)||0,
            disarmingtrapscatbonus: parseInt(values['cat-subterfuge-mechanics'],10)||0,
            disguisecatbonus: parseInt(values['cat-subterfuge-mechanics'],10)||0,
            counterfeitingcatbonus: parseInt(values['cat-subterfuge-mechanics'],10)||0,
            forgerycatbonus: parseInt(values['cat-subterfuge-mechanics'],10)||0,
            hidingitemscatbonus: parseInt(values['cat-subterfuge-mechanics'],10)||0,
            picklockscatbonus: parseInt(values['cat-subterfuge-mechanics'],10)||0,
            settrapscatbonus: parseInt(values['cat-subterfuge-mechanics'],10)||0,
            trapbuildingcatbonus: parseInt(values['cat-subterfuge-mechanics'],10)||0,
            usepoisoncatbonus: parseInt(values['cat-subterfuge-mechanics'],10)||0,
            subtermech1catbonus: parseInt(values['cat-subterfuge-mechanics'],10)||0,
            subtermech2catbonus: parseInt(values['cat-subterfuge-mechanics'],10)||0
        });
    });
});
  
// <!-- Copy over Subterfuge-Stealth Category Bonus-->
on('change:cat-subterfuge-stealth', function() {
    getAttrs(['cat-subterfuge-stealth'], function(values) {
        setAttrs({
            hidingcatbonus: parseInt(values['cat-subterfuge-stealth'],10)||0,
            pickpocketscatbonus: parseInt(values['cat-subterfuge-stealth'],10)||0,
            stalkingcatbonus: parseInt(values['cat-subterfuge-stealth'],10)||0,
            trickerycatbonus: parseInt(values['cat-subterfuge-stealth'],10)||0
        });
    });
});
  
// <!-- Copy over Technical/Trade-General Category Bonus-->
on('change:cat-tech-general', function() {
    getAttrs(['cat-tech-general'], function(values) {
        setAttrs({
            beggingcatbonus: parseInt(values['cat-tech-general'],10)||0,
            firstaidcatbonus: parseInt(values['cat-tech-general'],10)||0,
            gamblingcatbonus: parseInt(values['cat-tech-general'],10)||0,
            mappingcatbonus: parseInt(values['cat-tech-general'],10)||0,
            operatingequipmentcatbonus: parseInt(values['cat-tech-general'],10)||0,
            orienteeringcatbonus: parseInt(values['cat-tech-general'],10)||0,
            sailingcatbonus: parseInt(values['cat-tech-general'],10)||0,
            tacticalgamescatbonus: parseInt(values['cat-tech-general'],10)||0,
            useprepherbscatbonus: parseInt(values['cat-tech-general'],10)||0
        });
    });
});
  
// <!-- Copy over Technical/Trade-Professional Category Bonus-->
on('change:cat-tech-professional', function() {
    getAttrs(['cat-tech-professional'], function(values) {
        setAttrs({
            advertisingcatbonus: parseInt(values['cat-tech-professional'],10)||0,
            architecturecatbonus: parseInt(values['cat-tech-professional'],10)||0,
            diagnostics1catbonus: parseInt(values['cat-tech-professional'],10)||0,
            dowsingcatbonus: parseInt(values['cat-tech-professional'],10)||0,
            engineering1catbonus: parseInt(values['cat-tech-professional'],10)||0,
            mechanition1catbonus: parseInt(values['cat-tech-professional'],10)||0,
            militaryorg1catbonus: parseInt(values['cat-tech-professional'],10)||0,
            mining1catbonus: parseInt(values['cat-tech-professional'],10)||0,
            secondaidcatbonus: parseInt(values['cat-tech-professional'],10)||0,
            surgerycatbonus: parseInt(values['cat-tech-professional'],10)||0,
            techprof2catbonus: parseInt(values['cat-tech-professional'],10)||0,
            techprof1catbonus: parseInt(values['cat-tech-professional'],10)||0,
            techprof3catbonus: parseInt(values['cat-tech-professional'],10)||0
        });
    });
});
  
// <!-- Copy over Technical/Trade-Vocational Category Bonus-->
on('change:cat-tech-vocational', function() {
    getAttrs(['cat-tech-vocational'], function(values) {
        setAttrs({
            administrationcatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            appraisalcatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            boatpilot1catbonus: parseInt(values['cat-tech-vocational'],10)||0,
            cartographycatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            evalarmorcatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            evalmetalcatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            evalstonecatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            evalweaponcatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            gimmickrycatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            hypnosiscatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            midwiferycatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            navigationcatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            prepareherbscatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            preparepoisonscatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            siegeengineeringcatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            tacticscatbonus: parseInt(values['cat-tech-vocational'],10)||0,
            techvoc1catbonus: parseInt(values['cat-tech-vocational'],10)||0,
            techvoc2catbonus: parseInt(values['cat-tech-vocational'],10)||0
        });
    });
});
  
// <!-- Copy over Urban Category Bonus-->
on('change:cat-urban', function() {
    getAttrs(['cat-urban'], function(values) {
        setAttrs({
            contactingcatbonus: parseInt(values['cat-urban'],10)||0,
            minglingcatbonus: parseInt(values['cat-urban'],10)||0,
            scroungingcatbonus: parseInt(values['cat-urban'],10)||0,
            streetwisecatbonus: parseInt(values['cat-urban'],10)||0
        });
    });
});
  
// <!-- Copy over Weapon-1-H Concussion Category Bonus-->
on('change:cat-weapon-1hconcussion', function() {
    getAttrs(['cat-weapon-1hconcussion'], function(values) {
        setAttrs({
            weapon1hc1catbonus: parseInt(values['cat-weapon-1hconcussion'],10)||0,
            weapon1hc2catbonus: parseInt(values['cat-weapon-1hconcussion'],10)||0,
            weapon1hc3catbonus: parseInt(values['cat-weapon-1hconcussion'],10)||0
        });
    });
});
  
// <!-- Copy over Weapon-1-H Edged Category Bonus-->
on('change:cat-weapon-1hedged', function() {
    getAttrs(['cat-weapon-1hedged'], function(values) {
        setAttrs({
            weapon1he1catbonus: parseInt(values['cat-weapon-1hedged'],10)||0,
            weapon1he2catbonus: parseInt(values['cat-weapon-1hedged'],10)||0,
            weapon1he3catbonus: parseInt(values['cat-weapon-1hedged'],10)||0
        });
    });
});
  
// <!-- Copy over Weapon-2-Handed Category Bonus-->
on('change:cat-weapon-2handed', function() {
    getAttrs(['cat-weapon-2handed'], function(values) {
        setAttrs({
            weapon2hand1catbonus: parseInt(values['cat-weapon-2handed'],10)||0,
            weapon2hand2catbonus: parseInt(values['cat-weapon-2handed'],10)||0,
            weapon2hand3catbonus: parseInt(values['cat-weapon-2handed'],10)||0
        });
    });
});
  
// <!-- Copy over Weapon-Missile Category Bonus-->
on('change:cat-weapon-missile', function() {
    getAttrs(['cat-weapon-missile'], function(values) {
        setAttrs({
            weaponmissile1catbonus: parseInt(values['cat-weapon-missile'],10)||0,
            weaponmissile2catbonus: parseInt(values['cat-weapon-missile'],10)||0,
            weaponmissile3catbonus: parseInt(values['cat-weapon-missile'],10)||0
        });
    });
});
  
// <!-- Copy over Weapon-Missile Artillery Category Bonus-->
on('change:cat-weapon-missileartillery', function() {
    getAttrs(['cat-weapon-missileartillery'], function(values) {
        setAttrs({
            weaponmissileart1catbonus: parseInt(values['cat-weapon-missileartillery'],10)||0,
            weaponmissileart2catbonus: parseInt(values['cat-weapon-missileartillery'],10)||0,
            weaponmissileart3catbonus: parseInt(values['cat-weapon-missileartillery'],10)||0
        });
    });
});
  
// <!-- Copy over Weapon-Pole Arms Category Bonus-->
on('change:cat-weapon-polearms', function() {
    getAttrs(['cat-weapon-polearms'], function(values) {
        setAttrs({
            weaponpolearm1catbonus: parseInt(values['cat-weapon-polearms'],10)||0,
            weaponpolearm2catbonus: parseInt(values['cat-weapon-polearms'],10)||0,
            weaponpolearm3catbonus: parseInt(values['cat-weapon-polearms'],10)||0
        });
    });
});
  
// <!-- Copy over Weapon-Thrown Category Bonus-->
on('change:cat-weapon-thrown', function() {
    getAttrs(['cat-weapon-thrown'], function(values) {
        setAttrs({
            weaponthrown1catbonus: parseInt(values['cat-weapon-thrown'],10)||0,
            weaponthrown2catbonus: parseInt(values['cat-weapon-thrown'],10)||0,
            weaponthrown3catbonus: parseInt(values['cat-weapon-thrown'],10)||0
        });
    });
});
  
// <!-- Copy over Same Realm Own Base Spells Category Bonus-->
on('change:cat-srob', function() {
    getAttrs(['cat-srob'], function(values) {
        setAttrs({
            'srob-list1catbonus': parseInt(values['cat-srob'],10)||0,
            'srob-list2catbonus': parseInt(values['cat-srob'],10)||0,
            'srob-list3catbonus': parseInt(values['cat-srob'],10)||0,
            'srob-list4catbonus': parseInt(values['cat-srob'],10)||0,
            'srob-list5catbonus': parseInt(values['cat-srob'],10)||0,
            'srob-list6catbonus': parseInt(values['cat-srob'],10)||0,
            'srob-list7catbonus': parseInt(values['cat-srob'],10)||0,
            'srob-list8catbonus': parseInt(values['cat-srob'],10)||0,
            'srob-list9catbonus': parseInt(values['cat-srob'],10)||0,
            'srob-list10catbonus': parseInt(values['cat-srob'],10)||0
        });
    });
});
  
// <!-- Copy over Same Realm Open Spells Category Bonus-->
on('change:cat-sropen', function() {
    getAttrs(['cat-sropen'], function(values) {
        setAttrs({
            'sropen-list1catbonus': parseInt(values['cat-sropen'],10)||0,
            'sropen-list2catbonus': parseInt(values['cat-sropen'],10)||0,
            'sropen-list3catbonus': parseInt(values['cat-sropen'],10)||0,
            'sropen-list4catbonus': parseInt(values['cat-sropen'],10)||0,
            'sropen-list5catbonus': parseInt(values['cat-sropen'],10)||0,
            'sropen-list6catbonus': parseInt(values['cat-sropen'],10)||0,
            'sropen-list7catbonus': parseInt(values['cat-sropen'],10)||0,
            'sropen-list8catbonus': parseInt(values['cat-sropen'],10)||0,
            'sropen-list9catbonus': parseInt(values['cat-sropen'],10)||0,
            'sropen-list10catbonus': parseInt(values['cat-sropen'],10)||0
        });
    });
});
  
// <!-- Copy over Same Realm Closed Spells Category Bonus-->
on('change:cat-srclosed', function() {
    getAttrs(['cat-srclosed'], function(values) {
        setAttrs({
            'srclosed-list1catbonus': parseInt(values['cat-srclosed'],10)||0,
            'srclosed-list2catbonus': parseInt(values['cat-srclosed'],10)||0,
            'srclosed-list3catbonus': parseInt(values['cat-srclosed'],10)||0,
            'srclosed-list4catbonus': parseInt(values['cat-srclosed'],10)||0,
            'srclosed-list5catbonus': parseInt(values['cat-srclosed'],10)||0,
            'srclosed-list6catbonus': parseInt(values['cat-srclosed'],10)||0,
            'srclosed-list7catbonus': parseInt(values['cat-srclosed'],10)||0,
            'srclosed-list8catbonus': parseInt(values['cat-srclosed'],10)||0,
            'srclosed-list9catbonus': parseInt(values['cat-srclosed'],10)||0,
            'srclosed-list10catbonus': parseInt(values['cat-srclosed'],10)||0
        });
    });
});
  
// <!-- Copy over Same Realm Other Base Spells Category Bonus-->
on('change:cat-srotherb', function() {
    getAttrs(['cat-srotherb'], function(values) {
        setAttrs({
            'srotherb-list1catbonus': parseInt(values['cat-srotherb'],10)||0,
            'srotherb-list2catbonus': parseInt(values['cat-srotherb'],10)||0,
            'srotherb-list3catbonus': parseInt(values['cat-srotherb'],10)||0,
            'srotherb-list4catbonus': parseInt(values['cat-srotherb'],10)||0,
            'srotherb-list5catbonus': parseInt(values['cat-srotherb'],10)||0
        });
    });
});
  
// <!-- Copy over Other Realm Open Spells Category Bonus-->
on('change:cat-oropen', function() {
    getAttrs(['cat-oropen'], function(values) {
        setAttrs({
            'oropen-list1catbonus': parseInt(values['cat-oropen'],10)||0,
            'oropen-list2catbonus': parseInt(values['cat-oropen'],10)||0,
            'oropen-list3catbonus': parseInt(values['cat-oropen'],10)||0,
            'oropen-list4catbonus': parseInt(values['cat-oropen'],10)||0,
            'oropen-list5catbonus': parseInt(values['cat-oropen'],10)||0
        });
    });
});
  
// <!-- Copy over Other Realm Closed Spells Category Bonus-->
on('change:cat-orclosed', function() {
    getAttrs(['cat-orclosed'], function(values) {
        setAttrs({
            'orclosed-list1catbonus': parseInt(values['cat-orclosed'],10)||0,
            'orclosed-list2catbonus': parseInt(values['cat-orclosed'],10)||0,
            'orclosed-list3catbonus': parseInt(values['cat-orclosed'],10)||0,
            'orclosed-list4catbonus': parseInt(values['cat-orclosed'],10)||0,
            'orclosed-list5catbonus': parseInt(values['cat-orclosed'],10)||0
        });
    });
});
  
// <!-- Copy over Other Realm Base Spells Category Bonus-->
on('change:cat-orbase', function() {
    getAttrs(['cat-orbase'], function(values) {
        setAttrs({
            'orbase-list1catbonus': parseInt(values['cat-orbase'],10)||0,
            'orbase-list2catbonus': parseInt(values['cat-orbase'],10)||0,
            'orbase-list3catbonus': parseInt(values['cat-orbase'],10)||0,
            'orbase-list4catbonus': parseInt(values['cat-orbase'],10)||0,
            'orbase-list5catbonus': parseInt(values['cat-orbase'],10)||0
        });
    });
});
  
// <!-- Copy over Arcane Open Spells Category Bonus-->
on('change:cat-arcopen', function() {
    getAttrs(['cat-arcopen'], function(values) {
        setAttrs({
            'arcopen-list1catbonus': parseInt(values['cat-arcopen'],10)||0,
            'arcopen-list2catbonus': parseInt(values['cat-arcopen'],10)||0,
            'arcopen-list3catbonus': parseInt(values['cat-arcopen'],10)||0,
            'arcopen-list4catbonus': parseInt(values['cat-arcopen'],10)||0,
            'arcopen-list5catbonus': parseInt(values['cat-arcopen'],10)||0
        });
    });
});
  
// <!-- Copy over Arcane Closed Spells Category Bonus-->
on('change:cat-arcclosed', function() {
    getAttrs(['cat-arcclosed'], function(values) {
        setAttrs({
            'arcclosed-list1catbonus': parseInt(values['cat-arcclosed'],10)||0,
            'arcclosed-list2catbonus': parseInt(values['cat-arcclosed'],10)||0,
            'arcclosed-list3catbonus': parseInt(values['cat-arcclosed'],10)||0,
            'arcclosed-list4catbonus': parseInt(values['cat-arcclosed'],10)||0,
            'arcclosed-list5catbonus': parseInt(values['cat-arcclosed'],10)||0
        });
    });
});
  
// <!-- Copy over Arcane Base Spells Category Bonus-->
on('change:cat-arcbase', function() {
    getAttrs(['cat-arcbase'], function(values) {
        setAttrs({
            'arcbase-list1catbonus': parseInt(values['cat-arcbase'],10)||0,
            'arcbase-list2catbonus': parseInt(values['cat-arcbase'],10)||0,
            'arcbase-list3catbonus': parseInt(values['cat-arcbase'],10)||0,
            'arcbase-list4catbonus': parseInt(values['cat-arcbase'],10)||0,
            'arcbase-list5catbonus': parseInt(values['cat-arcbase'],10)||0
        });
    });
});
  
// <!-- Copy over Arcane Other Base Spells Category Bonus-->
on('change:cat-arcotherbase', function() {
    getAttrs(['cat-arcotherbase'], function(values) {
        setAttrs({
            'arcotherbase-list1catbonus': parseInt(values['cat-arcotherbase'],10)||0,
            'arcotherbase-list2catbonus': parseInt(values['cat-arcotherbase'],10)||0,
            'arcotherbase-list3catbonus': parseInt(values['cat-arcotherbase'],10)||0,
            'arcotherbase-list4catbonus': parseInt(values['cat-arcotherbase'],10)||0,
            'arcotherbase-list5catbonus': parseInt(values['cat-arcotherbase'],10)||0
        });
    });
});

//	<!---- Update bonus on current stat change.  Do this for each stat ---->	
// Calculate Base Bonus
on('change:agility change:statcalc', function() {
    getAttrs(['agility', 'statcalc'], function(values) {
        if (parseInt(values.statcalc) == 1){
            setAttrs({
                agbasebonus: StatMod(parseInt(values.agility,10))
            });
        }
    });
});
// Calculate total bonus 
on('sheet:opened change:agbasebonus change:agracial change:agspecial', function() {
    getAttrs(['agbasebonus', 'agracial', 'agspecial'], function(values) {
        setAttrs({
            agbonus: StatCalc(parseInt(values.agbasebonus,10), parseInt(values.agracial,10), parseInt(values.agspecial,10))
        });
    });
});
on('change:constitution change:statcalc', function() {
    getAttrs(['constitution', 'statcalc'], function(values) {
        if (parseInt(values.statcalc) == 1){
            setAttrs({
                cobasebonus: StatMod(parseInt(values.constitution,10))
            });
        }
    });
});	
on('sheet:opened change:cobasebonus change:coracial change:cospecial', function() {
    getAttrs(['cobasebonus', 'coracial', 'cospecial'], function(values) {
        setAttrs({
            cobonus: StatCalc(parseInt(values.cobasebonus,10), parseInt(values.coracial,10), parseInt(values.cospecial,10))
        });
    });
});
on('change:memory change:statcalc', function() {
    getAttrs(['memory', 'statcalc'], function(values) {
        if (parseInt(values.statcalc) == 1){
            setAttrs({
                mebasebonus: StatMod(parseInt(values.memory,10))
            });
        }
    });
});	
on('sheet:opened change:mebasebonus change:meracial change:mespecial', function() {
    getAttrs(['mebasebonus', 'meracial', 'mespecial'], function(values) {
        setAttrs({
            mebonus: StatCalc(parseInt(values.mebasebonus,10), parseInt(values.meracial,10), parseInt(values.mespecial,10))
        });
    });
});
on('change:reasoning change:statcalc', function() {
    getAttrs(['reasoning', 'statcalc'], function(values) {
        if (parseInt(values.statcalc) == 1){
            setAttrs({
                rebasebonus: StatMod(parseInt(values.reasoning,10))
            });
        }
    });
});	
on('sheet:opened change:rebasebonus change:reracial change:respecial', function() {
    getAttrs(['rebasebonus', 'reracial', 'respecial'], function(values) {
        setAttrs({
            rebonus: StatCalc(parseInt(values.rebasebonus,10), parseInt(values.reracial,10), parseInt(values.respecial,10))
        });
    });
});
on('change:selfdiscipline change:statcalc', function() {
    getAttrs(['selfdiscipline', 'statcalc'], function(values) {
        if (parseInt(values.statcalc) == 1){
            setAttrs({
                sdbasebonus: StatMod(parseInt(values.selfdiscipline,10))
            });
        }
    });
});	
on('sheet:opened change:sdbasebonus change:sdracial change:sdspecial', function() {
    getAttrs(['sdbasebonus', 'sdracial', 'sdspecial'], function(values) {
        setAttrs({
            sdbonus: StatCalc(parseInt(values.sdbasebonus,10), parseInt(values.sdracial,10), parseInt(values.sdspecial,10))
        });
    });
});
on('change:empathy change:statcalc', function() {
    getAttrs(['empathy', 'statcalc'], function(values) {
        if (parseInt(values.statcalc) == 1){
            setAttrs({
                embasebonus: StatMod(parseInt(values.empathy,10))
            });
        }
    });
});	
on('sheet:opened change:embasebonus change:emracial change:emspecial', function() {
    getAttrs(['embasebonus', 'emracial', 'emspecial'], function(values) {
        setAttrs({
            embonus: StatCalc(parseInt(values.embasebonus,10), parseInt(values.emracial,10), parseInt(values.emspecial,10))
        });
    });
});
on('change:intuition change:statcalc', function() {
    getAttrs(['intuition', 'statcalc'], function(values) {
        if (parseInt(values.statcalc) == 1){
            setAttrs({
                inbasebonus: StatMod(parseInt(values.intuition,10))
            });
        }
    });
});	
on('sheet:opened change:inbasebonus change:inracial change:inspecial', function() {
    getAttrs(['inbasebonus', 'inracial', 'inspecial'], function(values) {
        setAttrs({
            inbonus: StatCalc(parseInt(values.inbasebonus,10), parseInt(values.inracial,10), parseInt(values.inspecial,10))
        });
    });
});
on('change:presence change:statcalc', function() {
    getAttrs(['presence', 'statcalc'], function(values) {
        if (parseInt(values.statcalc) == 1){
            setAttrs({
                prbasebonus: StatMod(parseInt(values.presence,10))
            });
        }
    });
});	
on('sheet:opened change:prbasebonus change:prracial change:prspecial', function() {
    getAttrs(['prbasebonus', 'prracial', 'prspecial'], function(values) {
        setAttrs({
            prbonus: StatCalc(parseInt(values.prbasebonus,10), parseInt(values.prracial,10), parseInt(values.prspecial,10))
        });
    });
});
on('change:quickness change:statcalc', function() {
    getAttrs(['quickness', 'statcalc'], function(values) {
        if (parseInt(values.statcalc) == 1){
            setAttrs({
                qubasebonus: StatMod(parseInt(values.quickness,10))
            });
        }
    });
});
on('sheet:opened change:qubasebonus change:quracial change:quspecial', function() {
    getAttrs(['qubasebonus', 'quracial', 'quspecial'], function(values) {
        setAttrs({
            qubonus: StatCalc(parseInt(values.qubasebonus,10), parseInt(values.quracial,10), parseInt(values.quspecial,10))
        });
    });
});
on('change:strength change:statcalc', function() {
    getAttrs(['strength', 'statcalc'], function(values) {
        if (parseInt(values.statcalc) == 1){
            setAttrs({
                stbasebonus: StatMod(parseInt(values.strength,10))
            });
        }
    });
});
on('sheet:opened change:stbasebonus change:stracial change:stspecial', function() {
    getAttrs(['stbasebonus', 'stracial', 'stspecial'], function(values) {
        setAttrs({
            stbonus: StatCalc(parseInt(values.stbasebonus,10), parseInt(values.stracial,10), parseInt(values.stspecial,10))
        });
    });
});
  
// Calculate developement points from top 5 stats (ag, co, me, re, sd) if any change.  But only if devpointcalc is set.
on('change:devpointcalc change:agility change:constitution change:memory change:reasoning change:selfdiscipline', function() {
    getAttrs(['agility', 'constitution', 'memory', 'reasoning', 'selfdiscipline', 'devpointcalc'], function(values) {
        if (parseInt(values.devpointcalc) == 1){
            setAttrs({
                devpoints: Math.round((parseInt(values.agility,10)+ parseInt(values.constitution,10)+ parseInt(values.memory,10)+ parseInt(values.reasoning,10)+ parseInt(values.selfdiscipline,10) )/5)		//round((@{agility}+@{constitution}+@{memory}+@{reasoning}+@{selfdiscipline})/5)
            });
        }
    });
});
  
//  <!---- Calc experience for next level if level or levelexpcalc changes ------->
on('change:levelexpcalc change:level', function() {
    getAttrs(['expcurrent_max', 'totalexperience_max', 'level', 'levelexpcalc'], function(values) {
        if (parseInt(values.levelexpcalc) == 1){
            let xpnext = 0;
            let lvlnext = parseInt(values.level,10) + 1;
            if (lvlnext == 1) {xpnext = 10000;} //lvl 1=10000 xp;
            else if (lvlnext == 2) {xpnext = 20000;} //lvl 2=20000 xp;
            else if (lvlnext == 3) {xpnext = 30000;} //lvl 3=30000 xp;
            else if (lvlnext == 4) {xpnext = 40000;} //lvl 4=40000 xp;
            else if (lvlnext == 5) {xpnext = 50000;} //lvl 5=50000 xp;
            else if (lvlnext == 6) {xpnext = 70000;} //lvl 6=70000 xp;
            else if (lvlnext == 7) {xpnext = 90000;} //lvl 7=90000 xp;
            else if (lvlnext == 8) {xpnext = 110000;} //lvl 8=110000 xp;
            else if (lvlnext == 9) {xpnext = 130000;} //lvl 9=130000 xp;
            else if (lvlnext == 10) {xpnext = 150000;} //lvl 10=150000 xp
            else if (lvlnext == 11) {xpnext = 180000;} //lvl 11=180000 xp
            else if (lvlnext == 12) {xpnext = 210000;} //lvl 12=210000 xp
            else if (lvlnext == 13) {xpnext = 240000;} //lvl 13=240000 xp
            else if (lvlnext == 14) {xpnext = 270000;} //lvl 14=270000 xp
            else if (lvlnext == 15) {xpnext = 300000;} //lvl 15=300000 xp
            else if (lvlnext == 16) {xpnext = 340000;} //lvl 16=340000 xp
            else if (lvlnext == 17) {xpnext = 380000;} //lvl 17=380000 xp
            else if (lvlnext == 18) {xpnext = 420000;} //lvl 18=420000 xp
            else if (lvlnext == 19) {xpnext = 460000;} //lvl 19=460000 xp
            else if (lvlnext == 20) {xpnext = 500000;} //lvl 20=500000 xp
            else {xpnext = 500000 + (50000 * (lvlnext - 20));} //lvl 21+=500000+50000*(level-20)
            setAttrs({
                'totalexperience_max': xpnext,
                'expcurrent_max': xpnext
            });
        }
    });
});

//gigs todo
// <!---- Setup Racial Index for autocalculations ---->
on('sheet:opened change:race', function() {
    getAttrs(['race', 'racialindex'], function(values) {
        //   console.log('/* ----------Racial Index Setup; race:' + (values.race.toLowerCase()) + '------------ */'); 
        let rindex; //gigs todo
        if ((values.race.toLowerCase()) === 'common man') { rindex = 10; }
        else if ((values.race.toLowerCase()) === 'common orc') { rindex = 51; }
        else if ((values.race.toLowerCase()) === 'dwarf') { rindex = 30; }
        else if ((values.race.toLowerCase()) === 'grey elf') { rindex = 22; }
        else if ((values.race.toLowerCase()) === 'greater orc') { rindex = 52; }
        else if ((values.race.toLowerCase()) === 'half-elf') { rindex = 20; }
        else if ((values.race.toLowerCase()) === 'half-orc') { rindex = 50; }
        else if ((values.race.toLowerCase()) === 'halfling') { rindex = 40; }
        else if ((values.race.toLowerCase()) === 'high elf') { rindex = 23; }
        else if ((values.race.toLowerCase()) === 'high man') { rindex = 12; }
        else if ((values.race.toLowerCase()) === 'mixed man') { rindex = 11; }
        else if ((values.race.toLowerCase()) === 'wood elf') { rindex = 21; }
        else if ((values.race.toLowerCase()) === 'none') { rindex = 99; }
        else { rindex = 1; }
        setAttrs({
            racialindex: rindex
        });
    });
}); 

//	<!---- Update Body Dev progression,Racial bonuses for RR's and Stats etc when race changes.---->	
on('change:race change:racialcalc', function() {
    getAttrs(['race', 'bodydevprog0', 'bodydevprog10', 'bodydevprog20', 'bodydevprog30', 'bodydevprog31', 'agracial', 'coracial', 'meracial', 'reracial', 'sdracial', 'emracial', 'inracial', 'prracial', 'quracial', 'stracial', 'esssaverace', 'chansaverace', 'mentsaverace', 'poisonsaverace', 'diseasesaverace', 'willsaverace', 'souldepart', 'recoverymult', 'racialnotes', 'racialcalc', 'racetypeforstatloss', 'exhaustmiscbonus'], function(values) {
           console.log('/* ---------- can we set up racial bonuses?------------ */');
        if (parseInt(values.racialcalc) == 1){
               console.log('/* ---------- racial calc is 1; setup racialbonuses etc!------------ */');
			// does it exist in the array?  (one array is in?) then do the stuff with the array.... else. do something else.
			race = values.race.toLowerCase();
            setAttrs({
                bodydevprog0: BodyDevProgMod(race, 0, parseInt(values.bodydevprog0,10)),
                bodydevprog10: BodyDevProgMod(race, 10, parseInt(values.bodydevprog10,10)),
                bodydevprog20: BodyDevProgMod(race, 20, parseInt(values.bodydevprog20,10)),
                bodydevprog30: BodyDevProgMod(race, 30, parseInt(values.bodydevprog30,10)),
                bodydevprog31: BodyDevProgMod(race, 31, parseInt(values.bodydevprog31,10)),
                agracial: RaceFixedInfoSetup(race, 1, parseInt(values.agracial,10)), 
                coracial: RaceFixedInfoSetup(race, 2, parseInt(values.coracial,10)), 
                meracial: RaceFixedInfoSetup(race, 3, parseInt(values.meracial,10)), 
                reracial: RaceFixedInfoSetup(race, 4, parseInt(values.reracial,10)), 
                sdracial: RaceFixedInfoSetup(race, 5, parseInt(values.sdracial,10)), 
                emracial: RaceFixedInfoSetup(race, 6, parseInt(values.emracial,10)), 
                inracial: RaceFixedInfoSetup(race, 7, parseInt(values.inracial,10)), 
                prracial: RaceFixedInfoSetup(race, 8, parseInt(values.prracial,10)), 
                quracial: RaceFixedInfoSetup(race, 9, parseInt(values.quracial,10)), 
                stracial: RaceFixedInfoSetup(race, 10, parseInt(values.stracial,10)), 
                esssaverace: RaceFixedInfoSetup(race, 11, parseInt(values.esssaverace,10)), 
                chansaverace: RaceFixedInfoSetup(race, 12, parseInt(values.chansaverace,10)), 
                mentsaverace: RaceFixedInfoSetup(race, 13, parseInt(values.mentsaverace,10)), 
                poisonsaverace: RaceFixedInfoSetup(race, 14, parseInt(values.poisonsaverace,10)), 
                diseasesaverace: RaceFixedInfoSetup(race, 15, parseInt(values.diseasesaverace,10)), 
                willsaverace: RaceFixedInfoSetup(race, 20, parseInt(values.willsaverace,10)),
                souldepart: RaceFixedInfoSetup(race, 16, parseInt(values.souldepart,10)),
                recoverymult: RaceFixedInfoSetup(race, 17, parseInt(values.recoverymult,10)), 
                racetypeforstatloss: RaceFixedInfoSetup(race, 18, parseInt(values.racetypeforstatloss,10)),
                exhaustmiscbonus: RaceFixedInfoSetup(race, 19, parseInt(values.exhaustmiscbonus,10))
                // racial skill bonuses? Swimming (-50 for dwarves), Scaling(+20 Hillmen), Acrobatics(+20 Hillmen, Woodmen), Public Speaking(+20 Hillmen), Acting(+20 Hillmen), Boat Piloting(+20 Mariners), Navigation(+20 Mariners), Rope Mastery(+20 Mariners), Rowing(+20 Mariners), Sailing(+20 Mariners), Star-gazing(+20 Mariners), Weather Watching(+20 Mariners), Mounted Combat(+20 Nomads), all Outdoor-Animal skills(+20 Nomads), Trickery(+10 Wood-elves), Stalking(+10 Wood-elves), Hiding(+10 Wood-elves), Climbing(+20 Woodmen), Foraging(+10 Woodmen), bard based spell attacks (+10 Wood-elves)?,  Awareness involving hearing (+10 elves)???, + DB/RR for heat and/or cold (various)
                // racial notes?    (maybe but how to keep it from over-writing what's there or inserting itself again everytime??)
            });
        }
    });
   console.log('/* ---------- exiting set up racial bonuses call------------ */');
});
  
//  <!---- Then update Bodydev rank bonus ............ even if rank has not changed ----->
on('change:bodydevprog0 change:bodydevprog10 change:bodydevprog20 change:bodydevprog30 change:bodydevprog31 change:racialcalc change:skillcalc', function() {
    getAttrs(['bodydevranks', 'bodydevprog0', 'bodydevprog10', 'bodydevprog20', 'bodydevprog30', 'bodydevprog31', 'racialcalc', 'skillcalc'], function(values) {
        //   console.log('/* ----------entering bodydevcalc; racialcalc:' + values.racialcalc + '  skillcalc:' + values.skillcalc + '  bodydevranks:' + values.bodydevranks+ '------------ */');
        if ((parseInt(values.skillcalc,10) == 1) && (parseInt(values.racialcalc,10) == 1)) {
            setAttrs({
                bodydevrankbonus: GenSkillMod(parseInt(values.bodydevranks,10), parseFloat(values.bodydevprog0), parseFloat(values.bodydevprog10), parseFloat(values.bodydevprog20), parseFloat(values.bodydevprog30), parseFloat(values.bodydevprog31))
            });
        }
    });
});
  
//	<!---- Update professionindex (skill category) bonuses when professionindex changes---->	
on('change:professionindex change:professioncalc', function() {
    getAttrs(['professionindex', 'cat-armor-heavy-profbonus', 'cat-armor-light-profbonus', 'cat-armor-med-profbonus', 'cat-artistic-active-profbonus', 'cat-artistic-passive-profbonus', 'cat-athletic-brawn-profbonus', 'cat-athletic-endur-profbonus', 'cat-athletic-gym-profbonus', 'cat-aware-percept-profbonus', 'cat-aware-search-profbonus', 'cat-aware-senses-profbonus', 'bodydevcatbonus', 'cat-combat-maneuvers-profbonus', 'cat-communications-profbonus', 'cat-crafts-profbonus', 'cat-directed-spells-profbonus', 'cat-influence-profbonus', 'cat-lore-general-profbonus', 'cat-lore-magical-profbonus', 'cat-lore-obscure-profbonus', 'cat-lore-technical-profbonus', 'cat-ma-striking-profbonus', 'cat-ma-sweeps-profbonus', 'cat-outdoor-animal-profbonus', 'cat-outdoor-environ-profbonus', 'cat-power-awareness-profbonus', 'cat-power-manipulation-profbonus', 'ppdevcatbonus', 'cat-science-basic-profbonus', 'cat-science-specialized-profbonus', 'cat-self-control-profbonus', 'cat-special-attacks-profbonus', 'cat-subterfuge-attack-profbonus', 'cat-subterfuge-mechanics-profbonus', 'cat-subterfuge-stealth-profbonus', 'cat-tech-general-profbonus', 'cat-tech-professional', 'cat-tech-vocational-profbonus', 'cat-urban-profbonus', 'cat-weapon-1hconcussion-profbonus', 'cat-weapon-1hedged-profbonus', 'cat-weapon-2handed-profbonus', 'cat-weapon-missile-profbonus', 'cat-weapon-missileartillery-profbonus', 'cat-weapon-polearms-profbonus', 'cat-weapon-thrown-profbonus', 'cat-srobprofbonus', 'cat-sropenprofbonus', 'cat-srclosedprofbonus', 'cat-srotherbprofbonus', 'cat-oropenprofbonus', 'cat-orclosedprofbonus', 'cat-orbaseprofbonus', 'cat-arcopenprofbonus', 'cat-arcclosedprofbonus', 'cat-arcbaseprofbonus', 'cat-arcotherbaseprofbonus', 'professioncalc'], function(values) {
        if (parseInt(values.professioncalc) == 1) {
            setAttrs({
                'cat-armor-heavy-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 1, parseInt(values['cat-armor-heavy-profbonus'],10)),
                'cat-armor-light-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 2, parseInt(values['cat-armor-light-profbonus'],10)),
                'cat-armor-med-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 3, parseInt(values['cat-armor-med-profbonus'],10)),
                'cat-artistic-active-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 4, parseInt(values['cat-artistic-active-profbonus'],10)),
                'cat-artistic-passive-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 5, parseInt(values['cat-artistic-passive-profbonus'],10)),
                'cat-athletic-brawn-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 6, parseInt(values['cat-athletic-brawn-profbonus'],10)),
                'cat-athletic-endur-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 7, parseInt(values['cat-athletic-endur-profbonus'],10)),
                'cat-athletic-gym-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 8, parseInt(values['cat-athletic-gym-profbonus'],10)),
                'cat-aware-percept-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 9, parseInt(values['cat-aware-percept-profbonus'],10)),
                'cat-aware-search-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 10, parseInt(values['cat-aware-search-profbonus'],10)),
                'cat-aware-senses-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 11, parseInt(values['cat-aware-senses-profbonus'],10)),
                'bodydevcatbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 12, parseInt(values['bodydevcatbonus'],10)),
                'cat-combat-maneuvers-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 13, parseInt(values['cat-combat-maneuvers-profbonus'],10)),
                'cat-communications-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 14, parseInt(values['cat-communications-profbonus'],10)),
                'cat-crafts-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 15, parseInt(values['cat-crafts-profbonus'],10)),
                'cat-directed-spells-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 16, parseInt(values['cat-directed-spells-profbonus'],10)),
                'cat-influence-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 17, parseInt(values['cat-influence-profbonus'],10)),
                'cat-lore-general-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 18, parseInt(values['cat-lore-general-profbonus'],10)),
                'cat-lore-magical-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 19, parseInt(values['cat-lore-magical-profbonus'],10)),
                'cat-lore-obscure-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 20, parseInt(values['cat-lore-obscure-profbonus'],10)),
                'cat-lore-technical-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 21, parseInt(values['cat-lore-technical-profbonus'],10)),
                'cat-ma-striking-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 22, parseInt(values['cat-ma-striking-profbonus'],10)),
                'cat-ma-sweeps-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 23, parseInt(values['cat-ma-sweeps-profbonus'],10)),
                'cat-outdoor-animal-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 24, parseInt(values['cat-outdoor-animal-profbonus'],10)),
                'cat-outdoor-environ-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 25, parseInt(values['cat-outdoor-environ-profbonus'],10)),
                'cat-power-awareness-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 26, parseInt(values['cat-power-awareness-profbonus'],10)),
                'cat-power-manipulation-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 27, parseInt(values['cat-power-manipulation-profbonus'],10)),
                'ppdevcatbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 28, parseInt(values['ppdevcatbonus'],10)),
                'cat-science-basic-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 29, parseInt(values['cat-science-basic-profbonus'],10)),
                'cat-science-specialized-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 30, parseInt(values['cat-science-specialized-profbonus'],10)),
                'cat-self-control-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 31, parseInt(values['cat-self-control-profbonus'],10)),
                'cat-special-attacks-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 32, parseInt(values['cat-special-attacks-profbonus'],10)),
                'cat-subterfuge-attack-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 33, parseInt(values['cat-subterfuge-attack-profbonus'],10)),
                'cat-subterfuge-mechanics-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 34, parseInt(values['cat-subterfuge-mechanics-profbonus'],10)),
                'cat-subterfuge-stealth-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 35, parseInt(values['cat-subterfuge-stealth-profbonus'],10)),
                'cat-tech-general-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 36, parseInt(values['cat-tech-general-profbonus'],10)),
                'cat-tech-professional': ProfessionInfoSetup(parseInt(values.professionindex,10), 37, parseInt(values['cat-tech-professional'],10)),
                'cat-tech-vocational-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 38, parseInt(values['cat-tech-vocational-profbonus'],10)),
                'cat-urban-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 39, parseInt(values['cat-urban-profbonus'],10)),
                'cat-weapon-1hconcussion-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 40, parseInt(values['cat-weapon-1hconcussion-profbonus'],10)),
                'cat-weapon-1hedged-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 41, parseInt(values['cat-weapon-1hedged-profbonus'],10)),
                'cat-weapon-2handed-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 42, parseInt(values['cat-weapon-2handed-profbonus'],10)),
                'cat-weapon-missile-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 43, parseInt(values['cat-weapon-missile-profbonus'],10)),
                'cat-weapon-missileartillery-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 44, parseInt(values['cat-weapon-missileartillery-profbonus'],10)),
                'cat-weapon-polearms-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 45, parseInt(values['cat-weapon-polearms-profbonus'],10)),
                'cat-weapon-thrown-profbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 46, parseInt(values['cat-weapon-thrown-profbonus'],10)),
                'cat-srobprofbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 47, parseInt(values['cat-srobprofbonus'],10)),
                'cat-sropenprofbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 48, parseInt(values['cat-sropenprofbonus'],10)),
                'cat-srclosedprofbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 49, parseInt(values['cat-srclosedprofbonus'],10)),
                'cat-srotherbprofbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 50, parseInt(values['cat-srotherbprofbonus'],10)),
                'cat-oropenprofbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 51, parseInt(values['cat-oropenprofbonus'],10)),
                'cat-orclosedprofbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 52, parseInt(values['cat-orclosedprofbonus'],10)),
                'cat-orbaseprofbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 53, parseInt(values['cat-orbaseprofbonus'],10)),
                'cat-arcopenprofbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 54, parseInt(values['cat-arcopenprofbonus'],10)),
                'cat-arcclosedprofbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 55, parseInt(values['cat-arcclosedprofbonus'],10)),
                'cat-arcbaseprofbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 56, parseInt(values['cat-arcbaseprofbonus'],10)),
                'cat-arcotherbaseprofbonus': ProfessionInfoSetup(parseInt(values.professionindex,10), 57, parseInt(values['cat-arcotherbaseprofbonus'],10))
            });
        }
    });
});	

//	<!---- update realm stat when realm or realm stat changes---->	
on('change:realmselect change:inbonus change:embonus change:prbonus ', function() {
//   console.log('/* ---------- entering realm setup call------------ */');
    getAttrs(['realmselect', 'inbonus', 'embonus', 'prbonus', 'realm'], function(values) {
        setAttrs({
            realm: SetRealm(parseInt(values.realmselect,10), parseInt(values.inbonus,10), parseInt(values.embonus,10), parseInt(values.prbonus,10))
        });
    });
//   console.log('/* ---------- exiting realm setup call------------ */');
}); 
  
//	<!---- update ppdev progression when realm or race change---->	
on('change:realmselect change:race change:racialcalc', function() {
   console.log('/* ---------- entering ppsetup call------------ */');
    getAttrs(['realmselect', 'race', 'ppdevprog0', 'ppdevprog10', 'ppdevprog20', 'ppdevprog30', 'ppdevprog31', 'racialcalc'], function(values) {
        if (parseInt(values.racialcalc,10) == 1){
            console.log('/* ---------- racial calc is 1; setup ppdev!------------ */');
			race = values.race.toLowerCase();
            setAttrs({
                ppdevprog0: PPDevProgMod(parseInt(values.realmselect,10), race, 0, parseFloat(values.ppdevprog0)),
                ppdevprog10: PPDevProgMod(parseInt(values.realmselect,10), race, 10, parseFloat(values.ppdevprog10)),
                ppdevprog20: PPDevProgMod(parseInt(values.realmselect,10), race, 20, parseFloat(values.ppdevprog20)),
                ppdevprog30: PPDevProgMod(parseInt(values.realmselect,10), race, 30, parseFloat(values.ppdevprog30)),
                ppdevprog31: PPDevProgMod(parseInt(values.realmselect,10), race, 31, parseFloat(values.ppdevprog31))
            });
        }
    });
   console.log('/* ---------- exiting ppdev setup call------------ */');
}); 
  
//  <!---- Then update PPdev rank bonus ........... even if rank has not changed ----->
on('change:realm change:ppdevranks change:ppdevprog0 change:ppdevprog10 change:ppdevprog20 change:ppdevprog30 change:ppdevprog31 change:skillcalc change:racialcalc change:inbonus change:embonus change:prbonus', function() {
    getAttrs(['ppdevranks', 'ppdevprog0', 'ppdevprog10', 'ppdevprog20', 'ppdevprog30', 'ppdevprog31', 'skillcalc', 'racialcalc'], function(values) {
        //  console.log('/* ------------------ppdevranks:'+parseInt(values.ppdevranks,10)+' ppdevprog0:'+parseFloat(values.ppdevprog0)+' ppdevprog10:'+parseFloat(values.ppdevprog10)+' ppdevprog20:'+parseFloat(values.ppdevprog20)+' ppdevprog30:'+parseFloat(values.ppdevprog30)+' ppdevprog31:'+parseFloat(values.ppdevprog31)+'-----------*/');
        if ((parseInt(values.skillcalc,10) == 1)) {
            setAttrs({
                ppdevrankbonus: GenSkillMod(parseInt(values.ppdevranks,10), parseFloat(values.ppdevprog0), parseFloat(values.ppdevprog10), parseFloat(values.ppdevprog20), parseFloat(values.ppdevprog30), parseFloat(values.ppdevprog31))
            });
        }
    });
});	
  
//	<!---- Do this for each skill to set up OnChange events ---->	
on('sheet:opened', function() {
//  console.log('/* ----------entering Setup OnChange ------------ */');
    var skills=['cat-srob', 'srob-list1', 'srob-list2', 'srob-list3', 'srob-list4', 'srob-list5', 'srob-list6', 'srob-list7', 'srob-list8', 'srob-list9', 'srob-list10', 'cat-sropen', 'sropen-list1', 'sropen-list2', 'sropen-list3', 'sropen-list4', 'sropen-list5', 'sropen-list6', 'sropen-list7', 'sropen-list8', 'sropen-list9', 'sropen-list10', 'cat-srclosed', 'srclosed-list1', 'srclosed-list2', 'srclosed-list3', 'srclosed-list4', 'srclosed-list5', 'srclosed-list6', 'srclosed-list7', 'srclosed-list8', 'srclosed-list9', 'srclosed-list10', 'cat-srotherb', 'srotherb-list1', 'srotherb-list2', 'srotherb-list3', 'srotherb-list4', 'srotherb-list5', 'srotherb-list6', 'cat-oropen', 'oropen-list1', 'oropen-list2', 'oropen-list3', 'oropen-list4', 'oropen-list5', 'cat-orclosed', 'orclosed-list1', 'orclosed-list2', 'orclosed-list3', 'orclosed-list4', 'orclosed-list5', 'cat-orbase', 'orbase-list1', 'orbase-list2', 'orbase-list3', 'orbase-list4', 'orbase-list5', 'cat-arcopen', 'arcopen-list1', 'arcopen-list2', 'arcopen-list3', 'arcopen-list4', 'arcopen-list5', 'cat-arcclosed', 'arcclosed-list1', 'arcclosed-list2', 'arcclosed-list3', 'arcclosed-list4', 'arcclosed-list5', 'cat-arcbase', 'arcbase-list1', 'arcbase-list2', 'arcbase-list3', 'arcbase-list4', 'arcbase-list5', 'cat-arcotherbase', 'arcotherbase-list1', 'arcotherbase-list2', 'arcotherbase-list3', 'arcotherbase-list4', 'arcotherbase-list5', 'cat-armor-heavy-', 'plate', 'cat-armor-light-', 'softleather', 'rigidleather', 'cat-armor-med-', 'chain', 'cat-artistic-active-', 'acting', 'dancing', 'mimery', 'mimicry', 'playinstrument1', 'playinstrument2', 'playinstrument3', 'poeticimprov', 'singing', 'taletelling', 'ventriloquism', 'cat-artistic-passive-', 'music', 'painting', 'poetry', 'sculpting', 'cat-athletic-brawn-', 'athleticgamesbrawn1', 'athleticgamesbrawn2', 'athleticgamesbrawn3', 'jumping', 'powerstriking', 'powerthrowing', 'weightlifting', 'cat-athletic-endur-', 'athleticgamesendur1', 'athleticgamesendur2', 'athleticgamesendur3', 'distancerunning', 'rowing', 'scaling', 'sprinting', 'swimming', 'cat-athletic-gym-', 'acrobatics', 'athleticgamesgym1', 'athleticgamesgym2', 'athleticgamesgym3', 'climbing', 'contortions', 'diving', 'flyglide', 'juggling', 'polevaulting', 'rappelling', 'skating', 'skiing', 'stiltwalking', 'surfing', 'tightrope', 'tumbling', 'alertness', 'senseambush', 'cat-aware-search-', 'detecttraps', 'lieperception', 'locatehidden', 'observation', 'poisonperception', 'readtracks', 'surveillance', 'tracking', 'cat-aware-senses-', 'directionsense', 'realityawareness', 'senseawareness1', 'sitawareness1', 'sla', 'timesense', 'awaresenses1', 'awaresenses2', 'awaresenses3', 'bodydev', 'adrenaldeflecting', 'mountedcombat', 'quickdraw', 'reversestroke1', 'subdual', 'swashbuckling', 'tumbleevade', 'twoweaponfighting1', 'combatmaneuvers1', 'combatmaneuvers2', 'combatmaneuvers3', 'cat-communications-', 'lipreading', 'signaling', 'cooking', 'fletching', 'leathercrafts', 'metalcrafts', 'ropemastery', 'scribing', 'sewing', 'skinning', 'stonecrafts', 'trapping', 'woodcrafts', 'craft15', 'craft16', 'cat-directed-spells-', 'firebolt', 'icebolt', 'lightningbolt', 'shockbolt', 'waterbolt', 'boltattack6', 'cat-influence-', 'bribery', 'diplomacy', 'duping', 'interrogation', 'leadership', 'propaganda', 'publicspeaking', 'seduction', 'trading', 'cat-lore-general-', 'culturelore1', 'faunalore', 'floralore', 'heraldry', 'history', 'philosophy', 'regionlore1', 'religion', 'loregeneral1', 'loregeneral2', 'loregeneral3', 'cat-lore-magical-', 'artifactlore', 'circlelore', 'planarlore', 'spelllore', 'symbollore', 'undeadlore', 'wardinglore', 'cat-lore-obscure-', 'demondevillore', 'dragonlore', 'faerielore', 'xenolore1', 'xenolore2', 'xenolore3', 'cat-lore-technical-', 'herblore', 'locklore', 'metallore', 'poisonlore', 'stonelore', 'tradinglore', 'cat-ma-striking-', 'boxing', 'striking1', 'striking2', 'striking3', 'striking4', 'tackling', 'cat-ma-sweeps-', 'blocking', 'sweeps1', 'sweeps2', 'sweeps3', 'sweeps4', 'wrestling', 'cat-outdoor-animal-', 'animalhandling1', 'animalhealing1', 'animalmastery', 'animaltraining1', 'driving1', 'herding1', 'riding1', 'outdooranimal1', 'outdooranimal2', 'outdooranimal3', 'cat-outdoor-environ-', 'caving', 'foraging', 'hunting', 'stargazing', 'survival1', 'survival2', 'survival3', 'weatherwatching', 'cat-power-awareness-', 'attunement', 'divination1', 'divination2', 'divination3', 'powerperception', 'readrunes', 'channeling', 'magicritual', 'spellmastery1', 'spellmastery2', 'spellmastery3', 'transcendarmor', 'ppdev', 'cat-science-basic-', 'basicmath', 'research', 'advancedmath', 'anthropology1', 'alchemy', 'astronomy', 'biochemistry', 'psychology', 'specscience1', 'specscience2', 'cat-self-control-', 'adrenalbalance', 'adrenalconcentration', 'adrenallanding', 'adrenalleaping', 'adrenalquickdraw', 'adrenalspeed', 'adrenalstabilization', 'adrenalstrength', 'cleansingtrance', 'controllycanthropy', 'deathtrance', 'frenzy', 'healingtrance', 'meditation', 'mnemonics', 'sleeptrance', 'stunnedmaneuvering', 'brawling', 'disarmarmedvs1h', 'disarmarmedvs2h', 'disarmarmedvspolearm', 'disarmarmedvs2wcombo', 'disarmunarmedvs1hedged', 'disarmunarmedvs2h', 'disarmunarmedvspolearm', 'disarmunarmedvs1hconcussion', 'jousting', 'adrenaldefense', 'adrenaltoughness', 'cat-subterfuge-attack-', 'ambush', 'silentkill', 'cat-subterfuge-mechanics-', 'camouflage', 'disarmingtraps', 'disguise', 'counterfeiting', 'forgery1', 'hidingitems', 'picklocks', 'settraps', 'trapbuilding', 'usepoison', 'subtermech1', 'subtermech2', 'cat-subterfuge-stealth-', 'hiding', 'pickpockets', 'stalking', 'trickery', 'cat-tech-general-', 'begging', 'firstaid', 'gambling', 'mapping', 'operatingequipment', 'orienteering', 'sailing', 'tacticalgames', 'useprepherbs', 'advertising', 'architecture', 'diagnostics1', 'dowsing', 'engineering1', 'mechanition1', 'militaryorg1', 'mining1', 'secondaid', 'surgery', 'techprof1', 'techprof2', 'techprof3', 'administration', 'appraisal', 'boatpilot1', 'cartography', 'evalarmor', 'evalmetal', 'evalstone', 'evalweapon', 'gimmickry', 'hypnosis', 'midwifery', 'navigation', 'prepareherbs', 'preparepoisons', 'siegeengineering', 'tactics', 'techvoc1', 'techvoc2', 'cat-urban-', 'contacting', 'mingling', 'scrounging', 'streetwise', 'cat-weapon-1hconcussion-', 'weapon1hc1', 'weapon1hc2', 'weapon1hc3', 'cat-weapon-1hedged-', 'weapon1he1', 'weapon1he2', 'weapon1he3', 'cat-weapon-2handed-', 'weapon2hand1', 'weapon2hand2', 'weapon2hand3', 'cat-weapon-missile-', 'weaponmissile1', 'weaponmissile2', 'weaponmissile3', 'cat-weapon-missileartillery-', 'weaponmissileart1', 'weaponmissileart2', 'weaponmissileart3', 'cat-weapon-thrown-', 'weaponthrown1', 'weaponthrown2', 'weaponthrown3', 'cat-weapon-polearms-', 'weaponpolearm1', 'weaponpolearm2', 'weaponpolearm3', 'cat-aware-percept-', 'cat-combat-maneuvers-', 'cat-crafts-', 'cat-power-manipulation-', 'cat-science-specialized-', 'cat-special-attacks-', 'cat-tech-professional-', 'cat-tech-vocational-'];   // list of skills
    _.each(skills, function(skill) {
        var event;
        //	calc rank bonuses
        event = 'change:'+skill+'ranks'; 
        on ( event, _.bind(SkillChange,{},skill+'ranks'));
        //	calc skill
        event = 'change:'+skill+'rankbonus change:'+skill+'stat change:'+skill+'catbonus change:'+skill+'specialmod change:'+skill+'itemmod change:'+skill+'statbonus change:'+skill+'profbonus change:'+skill+'specialbonus change:'+skill+'itembonus';
        //	console.log('/* ---------- event: '+event+' ------------ */'); 
        on ( event, _.bind(CalcTotalBonus,{},skill));
    });
//  console.log('/* ----------exiting Setup OnChange ------------ */');
});

//<!---- Calc rank bonus for repeating skills ---->
on('change:repeating_skills', function() {
//			console.log('/*-----------calc rep-skills rank bonus------*/');
    SkillChange('repeating_skills_skillranks');
});

//<!---- Calc rank bonus for repeating languages ---->
on('change:repeating_langs', function() {
//			console.log('/*-----------calc rep-languages rank bonus------*/');
    SkillChange('repeating_langs_languagespokenranks');
    SkillChange('repeating_langs_languagewrittenranks');
});

//  <!---- If repeating_langs_* changes, make a nice summary for the front page for me ---->
on('change:repeating_langs change:embonus change:mebonus change:rebonus change:cat-communications remove:repeating_langs', function () {
    //console.log('/*----------- create rep-languages summary------*/');
    getAttrs(['cat-communications-rankbonus', 'rebonus', 'mebonus', 'embonus', 'cat-communications-profbonus', 'cat-communications-specialbonus', 'cat-communications-itembonus'], function (values) {
        let catbonus = parseInt(values['cat-communications-rankbonus'], 10) + parseInt(values.rebonus, 10) + parseInt(values.mebonus, 10) + parseInt(values['cat-communications-profbonus'], 10) + parseInt(values['cat-communications-specialbonus'], 10) + parseInt(values['cat-communications-itembonus'], 10);
        //console.log("catbonus: "+catbonus);
        getSectionIDs('repeating_langs', function (idarray) {
            let attrArray = _.chain(idarray)
                .map(function (id) {
                    return ['repeating_langs_' + id + '_languagename',
                        'repeating_langs_' + id + '_languagespokenranks',
                        'repeating_langs_' + id + '_languagespokenrankbonus',
                        'repeating_langs_' + id + '_languagespokenspecialmod',
                        'repeating_langs_' + id + '_languagespokenitemmod',
                        'repeating_langs_' + id + '_languagewrittenranks',
                        'repeating_langs_' + id + '_languagewrittenrankbonus',
                        'repeating_langs_' + id + '_languagewrittenspecialmod',
                        'repeating_langs_' + id + '_languagewrittenitemmod'
                    ];
                })
                .flatten().value();
            getAttrs(attrArray, function (x) {
                let count = 0,
                    langs1 = '',
                    langs2 = '';

                const output = {}; // optimise: add this to hold the attributes.

                _.each(idarray, function (currentID) {
                    //console.log("languagename: "+x["repeating_langs_"+currentID+"_languagename"]);
                    let langspokenranks = parseInt(x['repeating_langs_' + currentID + '_languagespokenranks'], 10) || 0;
                    let langspokenspecial = parseInt(x['repeating_langs_' + currentID + '_languagespokenspecialmod'], 10) || 0;
                    //console.log("langspokenspecial: "+langspokenspecial);
                    let langspokenitem = parseInt(x['repeating_langs_' + currentID + '_languagespokenitemmod'], 10) || 0;
                    //console.log("langspokenitem: "+langspokenitem);
                    let langwrittenranks = parseInt(x['repeating_langs_' + currentID + '_languagewrittenranks'], 10) || 0;
                    let langwrittenspecial = parseInt(x['repeating_langs_' + currentID + '_languagewrittenspecialmod'], 10) || 0;
                    //console.log("langwrittenspecial: "+langwrittenspecial);
                    let langwrittenitem = parseInt(x['repeating_langs_' + currentID + '_languagewrittenitemmod'], 10) || 0;
                    //console.log("langwrittenitem: "+langwrittenitem);
                    let langspoken = parseInt(x['repeating_langs_' + currentID + '_languagespokenrankbonus'], 10) + parseInt(values.embonus, 10) + catbonus + langspokenspecial + langspokenitem;
                    //console.log("langspoken: "+langspoken);
                    let langwritten = parseInt(x['repeating_langs_' + currentID + '_languagewrittenrankbonus'], 10) + parseInt(values.embonus, 10) + catbonus + langwrittenspecial + langwrittenitem;
                    //console.log("langwritten: "+langwritten);
                    // setAttrs here to spit out the values to the skill tab; these aren't read in directly so should not interfere with building the summary and no point in calculating them again elsewhere.                
                     //optimise next 4 lines by replacing setAttrs with output[]
                    output['repeating_langs_' + currentID + '_languagespoken'] = langspoken;
                    output['repeating_langs_' + currentID + '_languagespokencatbonus'] = catbonus;
                    output['repeating_langs_' + currentID + '_languagespokenstat'] = parseInt(values.embonus, 10);
                    output['repeating_langs_' + currentID + '_languagewritten'] = langwritten;

                    let langpt1 = x['repeating_langs_' + currentID + '_languagename'] +
                        ' S:' + langspokenranks +
                        '/' + langspoken +
                        ' W:' + langwrittenranks +
                        '/' + langwritten + '  \n';
                    if (x['repeating_langs_' + currentID + '_languagename']) {
                        if ((count % 2) == 1) {
                            langs1 += langpt1;
                        } else {
                            langs2 += langpt1;
                        }
                    }
                    //console.log("Langs1: "+langs1);
                    //console.log("Langs2: "+langs2);
                    count++;
                });
                //console.log("end langs?");
                //optimise next 3 lines: replace setAttrs with output[]
                output['knownlanguagesr'] = langs1;
                output['knownlanguagesl'] = langs2;
                setAttrs(output);
            });
        });
    });
});

// <!---- Calculate total experience ---->
on('change:repeating_exp remove:repeating_exp', function(){
//        console.log("Changing exp")
    getSectionIDs('repeating_exp', function(idarray){
        let xptotal = 0;
        let myVars = [];
            
        for( var i=0; i < idarray.length; i++){
            myVars.push('repeating_exp_' + idarray[i] + '_xpawarded');
        }
              
        getAttrs( myVars , function( values ){
            for( i in values){
                xptotal += (values[i] * 1);
            }
                  
            //					console.log(xptotal);
            setAttrs({
                totalexperience : xptotal					
            });
              
        });
    });
          
//    });
});

//  <!---- Copy experience from totalexperience to expcurrent on PC/Char tab if wanted ---->
on('change:totalexperience change:xpcopy', function() {
    getAttrs(['totalexperience', 'xpcopy', 'expcurrent', 'expcurrent_max', 'totalexperience_max'], function(values) {
        if (values.xpcopy == 1) {
            setAttrs({
                'expcurrent': parseInt(values.totalexperience,10),
                'expcurrent_max': parseInt(values['totalexperience_max'],10)
            });
        }
    });
});

//  <!---- Calculate total coin count and weight for each column ----> //gigs done
on('change:coinsperpound change:mithril1 change:platinum1 change:gold1 change:silver1 change:bronze1 change:copper1 change:tin1 change:iron1 change:mithril2 change:platinum2 change:gold2 change:silver2 change:bronze2 change:copper2 change:tin2 change:iron2 change:mithril3 change:platinum3 change:gold3 change:silver3 change:bronze3 change:copper3 change:tin3 change:iron3 change:coinlocationcat1 change:coinlocationcat2 change:coinlocationcat3', function() {
    getAttrs(['coinsperpound', 'mithril1', 'platinum1', 'gold1', 'silver1', 'bronze1', 'copper1', 'tin1', 'iron1', 'mithril2', 'platinum2', 'gold2', 'silver2', 'bronze2', 'copper2', 'tin2', 'iron2', 'mithril3', 'platinum3', 'gold3', 'silver3', 'bronze3', 'copper3', 'tin3', 'iron3', 'coincolumn1', 'coincolumn2', 'coincolumn3', 'coinweight1', 'coinweight2', 'coinweight3', 'coinlocationcat1', 'coinlocationcat2', 'coinlocationcat3'], function(values) {
        let coinspp = +values.coinsperpound || 0,
            mp1 = +values.mithril1 || 0,
            pp1 = +values.platinum1 || 0,
            gp1 = +values.gold1 || 0,
            sp1 = +values.silver1 || 0, 
            bp1 = +values.bronze1 || 0, 
            cp1 = +values.copper1 || 0, 
            tp1 = +values.tin1 || 0, 
            ip1 = +values.iron1 || 0,
            mp2 = +values.mithril2 || 0,
            pp2 = +values.platinum2 || 0,
            gp2 = +values.gold2 || 0,
            sp2 = +values.silver2 || 0, 
            bp2 = +values.bronze2 || 0, 
            cp2 = +values.copper2 || 0, 
            tp2 = +values.tin2 || 0, 
            ip2 = +values.iron2 || 0,
            mp3 = +values.mithril3 || 0,
            pp3 = +values.platinum3 || 0,
            gp3 = +values.gold3 || 0,
            sp3 = +values.silver3 || 0, 
            bp3 = +values.bronze3 || 0, 
            cp3 = +values.copper3 || 0, 
            tp3 = +values.tin3 || 0, 
            ip3 = +values.iron3 || 0,
            coins1 = mp1 + pp1 + gp1 + sp1 + bp1 + cp1 + tp1 + ip1,
            cweight1 = coins1/coinspp,
            coins2 = mp2 + pp2 + gp2 + sp2 + bp2 + cp2 + tp2 + ip2,
            cweight2 = coins2/coinspp,
            coins3 = mp3 + pp3 + gp3 + sp3 + bp3 + cp3 + tp3 + ip3,
            cweight3 = coins3/coinspp;
        //console.log("Mithril1:" + mp1 + ";  Platinum1:" + pp1 + ";  Gold1:" + gp1 + ";  Silver1:" + sp1 + ";  Bronze1:" + bp1 + ";  Copper1:" + cp1 + ";  Tin1:" + tp1 + ";  Iron1:" + ip1 + ";  CoinsCol1:" + coins1 + ";  CoinWeight1:" + cweight1 + ";  /  Mithril2:" + mp2 + ";  Platinum2:" + pp2 + ";  Gold2:" + gp2 + ";  Silver2:" + sp2 + ";  Bronze2:" + bp2 + ";  Copper2:" + cp2 + ";  Tin2:" + tp2 + ";  Iron2:" + ip2 + ";  CoinsCol2:" + coins2 + ";  CoinWeight2:" + cweight2 + ";  /  Mithril3:" + mp3 + ";  Platinum3:" + pp3 + ";  Gold3:" + gp3 + ";  Silver3:" + sp3 + ";  Bronze3:" + bp3 + ";  Copper3:" + cp3 + ";  Tin3:" + tp3 + ";  Iron3:" + ip3 + ";  CoinsCol3:" + coins3 + ";  CoinWeight3:" + cweight3);
        
        setAttrs({
            'coincolumn1': Math.round(coins1*100)/100,
            'coinweight1': Math.round(cweight1*100)/100,
            'coincolumn2': Math.round(coins2*100)/100,
            'coinweight2': Math.round(cweight2*100)/100,
            'coincolumn3': Math.round(coins3*100)/100,
            'coinweight3': Math.round(cweight3*100)/100
        });
    });
});

// <!----Calculates the total weight/row and total weight for each weight category. ---->
on('change:repeating_equipment:equipmentquantity change:repeating_equipment:equipmentweight change:repeating_equipment:equipmentlocationtype', function() {
    getAttrs(['repeating_equipment_equipmentweight','repeating_equipment_equipmentquantity', 'repeating_equipment_equipmentlocationtype'], function(values) {
        //console.log('======================= repeating_equipment_row entered');
        //console.log(values);
        
        const locations = ['repeating_equipment_othernone','repeating_equipment_worn', 'repeating_equipment_pack', 'repeating_equipment_stash1', 'repeating_equipment_stash2', 'repeating_equipment_armorclothing'];
        const upgrade = {
            repeating_equipment_worn : 0,
            repeating_equipment_pack : 0,
            repeating_equipment_stash1 : 0,
            repeating_equipment_stash2 : 0,
            repeating_equipment_armorclothing : 0,
            repeating_equipment_othernone : 0 };
        
        const num = parseInt(values.repeating_equipment_equipmentquantity) || 0;
        const wt = parseFloat(values.repeating_equipment_equipmentweight) || 0;
        const total = num * wt;
        //console.log(`==================== num: ${num}; wt: ${wt}; total: ${total}`);
        
        upgrade['repeating_equipment_equipmentweighttotal'] = total;
        upgrade[locations[parseInt(values.repeating_equipment_equipmentlocationtype) || 0] || 0] = total;
        //console.log(upgrade);
        setAttrs(upgrade); 
    });
});

on('change:repeating_equipment:equipmentweighttotal change:repeating_equipment:equipmentlocationtype remove:repeating_equipment change:coinweight1 change:coinweight2 change:coinweight3 change:coinlocationcat1 change:coinlocationcat2 change:coinlocationcat3', function(){
    // always do the getSectionIds BEFORE the getAttrs
    console.log('===================== entering repeating equip');
    
    getSectionIDs('repeating_equipment', function(idarray){
        // build an array of the names within the repeating section we are interested in, of ecah type - worn, pack, stash1, etc
        // so that we can do just one getAttrs and one setAttrs.
        const fieldnames = [];
        idarray.forEach(id => {
            fieldnames.push(
                'repeating_equipment_' + id + '_equipmentweighttotal', 
                'repeating_equipment_' + id + '_equipmentlocationtype'
            );
        });
        [1,2,3].forEach(i => {
            fieldnames.push(
                'coinweight' + i,
                'coinlocationcat' +i
            );
        });
        // grab ALL the attribute values we might need
        // ... is the spread operator. it expands an array into all of its individual elements
        getAttrs(['weightcarried', 'weightbackpack', 'weightstored1', 'weightstored2', 'weightarmor', 'weightothernone',  ...fieldnames], function(values){
            console.log('========= entering equip getAttrs');
            // create a relationship between location to be saved, and value to be grabbed
            const locations = {
                weightothernone: 'othernone',
                weightcarried: 'worn',
                weightbackpack: 'pack',
                weightstored1: 'stash1',
                weightstored2: 'stash2',
                weightarmor: 'armorclothing'
            };
                
            // initialise a holding object for all the values to be saved
            const upgrade = {
                weightothernone: 0,
                weightcarried: 0,
                weightbackpack: 0,
                weightstored1: 0,
                weightstored2: 0,
                weightarmor: 0
            };
            
            // loop through each row of the repeating section
            idarray.forEach(id => {
                // get item weight, and item location
                const locindex = parseInt(values['repeating_equipment_' + id + '_equipmentlocationtype']) || 0;
                const loc = Object.keys(locations)[locindex];
                const wt = parseFloat(values['repeating_equipment_' + id + '_equipmentweighttotal']) ||0;
                // save it to the appropriate location type
                upgrade[loc] = upgrade[loc] + wt;
                
            });
            console.log(upgrade);
            
            // repeat as above for the coins
            [1,2,3].forEach(i => {
                const locindex = parseInt(values['coinlocationcat' +i]) || 0;
                const loc = Object.keys(locations)[locindex];
                const wt = parseFloat(values['coinweight' + i]) ||0;
                upgrade[loc] = upgrade[loc] + wt;
            });

            // go through the saved values, and apply the desired rounding.
            Object.keys(upgrade).forEach(loc => {
                upgrade[loc] = (Math.round(upgrade[loc] *100)/100).toString();
            });

            setAttrs(upgrade); 
        });
        
    });
    
});


//  <!---- Copy from equipment weights to totalweightcarried if wanted ---->
on('change:weightcarried change:weightcarriedcopy change:weightbackpack change:weightbackpackcopy change:weightstored1 change:weightstored2 change:weightstored1copy change:weightstored2copy', function() {
    getAttrs(['weightcarried', 'weightcarriedcopy', 'totalweightcarried', 'weightbackpackcopy', 'weightbackpack', 'weightstored1copy', 'weightstored2copy', 'weightstored1', 'weightstored2', 'totalweightcarried'], function(values) {
        if ( (values.weightcarriedcopy == 1) || (values.weightbackpackcopy == 1) || (values.weightstored1copy == 1) || (values.weightstored2copy == 1) ) {
            let newtotal = 0; 
            if (values.weightcarriedcopy == 1) {newtotal += +values.weightcarried || 0;}
            if (values.weightbackpackcopy == 1) {newtotal += +values.weightbackpack || 0;}
            if (values.weightstored1copy == 1) {newtotal += +values.weightstored1 || 0;}
            if (values.weightstored2copy == 1) {newtotal += +values.weightstored2 || 0;}
            setAttrs({ 'totalweightcarried': Math.round(newtotal *100)/100 });
        }
    });
});

/* <!----- Close other skill categories when one is open to help with lag -----> */
const categories = ['armor', 'artistic', 'athletic', 'awareness', 'bodydev', 'combatman', 'communications', 'crafts', 'dirspells', 'influence',
    'lore', 'martialarts', 'outdoor', 'power', 'powerpointdev', 'science', 'selfcontrol', 'special', 'spellsskills', 'subterfuge', 'technical',
    'urban', 'weapon', 'other'];
categories.forEach(cat => {
    const fullcat = `skill${cat}-show`;
    on(`change:${fullcat}`, function(event) {
        if(event.newValue == 1) {
            const upgrade = categories.reduce((obj,category) => {
                if(category != cat) obj[`skill${category}-show`] = 0;
                return obj;
            }, {});
            setAttrs(upgrade);
        }
    });
});

/* Setup for when a character sheet gets opened for the first time.  -Calc ability and ability mods as well as encumbrance. */
function StartingSetup(version, cversion, calc, langsmoved) {
    let mod = version;
    console.log('/* ----------entering StartingSetup; sheetversion:' + version + '  cversion:' + cversion + '  calc:' + calc + '------------ */' + langsmoved);
    if (version < cversion) {mod = cversion;}
    if ((version < 4.00) || (isNaN(version))) {
        mod = cversion;
        if (version < 4.00) {
            getAttrs(['level'], function(values) {
                setAttrs({ 'npclevel': values.level }); 	// fix npclevel to be the same as level if this is the first time run
            });
        }
        if ((isNaN(version)) || (calc == 0)) {
            //				copy repeating_skills_skillranksbonus to repeating_skills_skillrankbonus to fix typo so that the calc function works on these.
            getSectionIDs('repeating_skills', function(idarray){
                if (idarray.length>0) {
                    _.each(idarray, function(currentID) {
                        getAttrs(['repeating_skills_'+currentID+'_skillranksbonus', 'repeating_skills_'+currentID+'_skillrankbonus'], function(values) {
                            var update = {};
                            update['repeating_skills_'+currentID+'_skillrankbonus'] = parseInt(values['repeating_skills_'+currentID+'_skillranksbonus'],10);
                            setAttrs(update);
                        });
                    });
                }				
            });
        }
    }
    if ((version < 4.00) || (isNaN(version))) {
        mod = cversion;
        getAttrs(['dbvsspellworn', 'dbvsspell1', 'dbvsspell2'], function(values) {
            let defnoteupdate= '(RR/DB) vs Evil Spell Casters:  Worn:' + values.dbvsspellworn + '; 1:' + values.dbvsspell1 + '; 2:' + values.dbvsspell2;
            setAttrs({ 'conditionaldefensesnotes': defnoteupdate }); //removed vs Evil Spell casters; here is its new home.
        });
    }
    if ((version < 4.09) || (isNaN(version))) {	
        mod = cversion;
        //fixed syntax for spell lists so they match skills; a couple things need to be moved to the new syntax:
        getAttrs(['srob-catprofbonus', 'srob-catspecialbonus', 'sropen-catprofbonus', 'sropen-catspecialbonus', 'srclosed-catprofbonus', 'srclosed-catspecialbonus', 'srotherb-catprofbonus', 'srotherb-catspecialbonus', 'oropen-catprofbonus', 'oropen-catspecialbonus', 'orclosed-catprofbonus', 'orclosed-catspecialbonus', 'orbase-catprofbonus', 'orbase-catspecialbonus', 'arcopen-catprofbonus', 'arcopen-catspecialbonus', 'arcclosed-catprofbonus', 'arcclosed-catspecialbonus', 'arcbase-catprofbonus', 'arcbase-catspecialbonus', 'arcotherbase-catprofbonus', 'arcotherbase-catspecialbonus'], function(values) {
            setAttrs({ 
                'cat-srobprofbonus': parseInt(values['srob-catprofbonus'],10)||0,
                'cat-srobspecialbonus': parseInt(values['srob-catspecialbonus'],10)||0,
                'cat-sropenprofbonus': parseInt(values['sropen-catprofbonus'],10)||0,
                'cat-sropenspecialbonus': parseInt(values['sropen-catspecialbonus'],10)||0,
                'cat-srclosedprofbonus': parseInt(values['srclosed-catprofbonus'],10)||0,
                'cat-srclosedspecialbonus': parseInt(values['srclosed-catspecialbonus'],10)||0,
                'cat-srotherbprofbonus': parseInt(values['srotherb-catprofbonus'],10)||0,
                'cat-srotherbspecialbonus': parseInt(values['srotherb-catspecialbonus'],10)||0,
                'cat-oropenprofbonus': parseInt(values['oropen-catprofbonus'],10)||0,
                'cat-oropenspecialbonus': parseInt(values['oropen-catspecialbonus'],10)||0,
                'cat-orclosedprofbonus': parseInt(values['orclosed-catprofbonus'],10)||0,
                'cat-orclosedspecialbonus': parseInt(values['orclosed-catspecialbonus'],10)||0,
                'cat-orbaseprofbonus': parseInt(values['orbase-catprofbonus'],10)||0,
                'cat-orbasespecialbonus': parseInt(values['orbase-catspecialbonus'],10)||0,
                'cat-arcopenprofbonus': parseInt(values['arcopen-catprofbonus'],10)||0,
                'cat-arcopenspecialbonus': parseInt(values['arcopen-catspecialbonus'],10)||0,
                'cat-arcclosedprofbonus': parseInt(values['arcclosed-catprofbonus'],10)||0,
                'cat-arcclosedspecialbonus': parseInt(values['arcclosed-catspecialbonus'],10)||0,
                'cat-arcbaseprofbonus': parseInt(values['arcbase-catprofbonus'],10)||0,
                'cat-arcbasespecialbonus': parseInt(values['arcbase-catspecialbonus'],10)||0,
                'cat-arcotherbaseprofbonus': parseInt(values['arcotherbase-catprofbonus'],10)||0,
                'cat-arcotherbasespecialbonus': parseInt(values['arcotherbase-catspecialbonus'],10)||0
            }); 
        });
        // recalc skill totals (copy stats and categories, etc since this is just put in with sheetworkers instead of disabled totals
        setAttrs({
            skillrecalc:0
        });
        // new setup for the dropdown stats for the customizable skills.  Copy over the old data.  NYI
        /*		FixDropdownStats('awaresenses1');
      FixDropdownStats('awaresenses2');
      FixDropdownStats('awaresenses3');
      FixDropdownStats('combatmaneuvers1');
      FixDropdownStats('combatmaneuvers2');
      FixDropdownStats('combatmaneuvers3');*/
        //		FixDropdownStats("craft15");
        /*		FixDropdownStats('craft16');
      FixDropdownStats('boltattack6');
      FixDropdownStats('loregeneral1');
      FixDropdownStats('loregeneral2');
      FixDropdownStats('loregeneral3');
      FixDropdownStats('outdooranimal1');
      FixDropdownStats('outdooranimal2');
      FixDropdownStats('outdooranimal3');
      FixDropdownStats('specscience1');
      FixDropdownStats('specscience2');
      FixDropdownStats('subtermech1');
      FixDropdownStats('subtermech2');
      FixDropdownStats('techprof1');
      FixDropdownStats('techprof2');
      FixDropdownStats('techprof3');
      FixDropdownStats('techvoc1');
      FixDropdownStats('techvoc2');*/
    }	
    if ((version < 4.11) || (isNaN(version))) {	
        mod = cversion;
        //	fix weaponxtype to weaponxselect.  should cascade through rest of setup:  
        console.log('/*------------- entering fix weapontype to weaponselect ------------*/');
        getAttrs(['attack1type', 'attack2type', 'attack3type', 'attack4type', 'attack5type', 'attack6type', 'attack7type', 'attack8type', 'npcattack1type', 'npcattack2type', 'npcattack3type', 'npcattack4type', 'npcattack5type', 'npcattack6type', 'npcattack7type', 'npcattack8type', 'attack1select', 'attack2select', 'attack3select', 'attack4select', 'attack5select', 'attack6select', 'attack7select', 'attack8select', 'npcattack1select', 'npcattack2select', 'npcattack3select', 'npcattack4select', 'npcattack5select', 'npcattack6select', 'npcattack7select', 'npcattack8select'], function(values) {
            let update = {};
            console.log('/*---------- attack1type:'+values.attack1type+';-- npcattack1type:'+values.npcattack1type+'----*/');
            if (values.attack1type == '[[1d100!>96cf<@{attack1fumble}+@{attack1bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]') { update['attack1select'] = 'melee'; }
            else if (values.attack1type == '[[1d100!>96cf<@{attack1fumble}+@{attack1bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]') { update['attack1select'] = 'ranged'; }
            else if (values.attack1type == '[[1d100cf<2cs>96+@{attack1bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]') { update['attack1select'] = 'basic'; }
            else if (values.attack1type == '[[1d100!>96cf<2cs=100+@{attack1bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { update['attack1select'] = 'directed'; }
            else if (values.attack1type == '[[1d100cf<4cs>96+@{attack1bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]') { update['attack1select'] = 'area'; }
            else if (values.attack1type == 'no type') { update['attack1select'] = 'none'; }
            else { update['attack1select'] = 'none';}
            if (values.attack2type == '[[1d100!>96cf<@{attack2fumble}+@{attack2bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]') { update['attack2select'] = 'melee'; }
            else if (values.attack2type == '[[1d100!>96cf<@{attack2fumble}+@{attack2bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]') { update['attack2select'] = 'ranged'; }
            else if (values.attack2type == '[[1d100cf<2cs>96+@{attack2bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]') { update['attack2select'] = 'basic'; }
            else if (values.attack2type == '[[1d100!>96cf<2cs=100+@{attack2bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { update['attack2select'] = 'directed'; }
            else if (values.attack2type == '[[1d100cf<4cs>96+@{attack2bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]') { update['attack2select'] = 'area'; }
            else if (values.attack2type == 'no type') { update['attack2select'] = 'none'; }
            else { update['attack2select'] = 'none';}
            if (values.attack3type == '[[1d100!>96cf<@{attack3fumble}+@{attack3bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]') { update['attack3select'] = 'melee'; }
            else if (values.attack3type == '[[1d100!>96cf<@{attack3fumble}+@{attack3bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]') { update['attack3select'] = 'ranged'; }
            else if (values.attack3type == '[[1d100cf<2cs>96+@{attack3bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]') { update['attack3select'] = 'basic'; }
            else if (values.attack3type == '[[1d100!>96cf<2cs=100+@{attack3bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { update['attack3select'] = 'directed'; }
            else if (values.attack3type == '[[1d100cf<4cs>96+@{attack3bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]') { update['attack3select'] = 'area'; }
            else if (values.attack3type == 'no type') { update['attack3select'] = 'none'; }
            else { update['attack3select'] = 'none';}
            if (values.attack4type == '[[1d100!>96cf<@{attack4fumble}+@{attack4bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]') { update['attack4select'] = 'melee'; }
            else if (values.attack4type == '[[1d100!>96cf<@{attack4fumble}+@{attack4bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]') { update['attack4select'] = 'ranged'; }
            else if (values.attack4type == '[[1d100cf<2cs>96+@{attack4bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]') { update['attack4select'] = 'basic'; }
            else if (values.attack4type == '[[1d100!>96cf<2cs=100+@{attack4bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { update['attack4select'] = 'directed'; }
            else if (values.attack4type == '[[1d100cf<4cs>96+@{attack4bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]') { update['attack4select'] = 'area'; }
            else if (values.attack4type == 'no type') { update['attack4select'] = 'none'; }
            else { update['attack4select'] = 'none';}
            if (values.attack5type == '[[1d100!>96cf<@{attack5fumble}+@{attack5bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]') { update['attack5select'] = 'melee'; }
            else if (values.attack5type == '[[1d100!>96cf<@{attack5fumble}+@{attack5bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]') { update['attack5select'] = 'ranged'; }
            else if (values.attack5type == '[[1d100cf<2cs>96+@{attack5bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]') { update['attack5select'] = 'basic'; }
            else if (values.attack5type == '[[1d100!>96cf<2cs=100+@{attack5bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { update['attack5select'] = 'directed'; }
            else if (values.attack5type == '[[1d100cf<4cs>96+@{attack5bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]') { update['attack5select'] = 'area'; }
            else if (values.attack5type == 'no type') { update['attack5select'] = 'none'; }
            else { update['attack5select'] = 'none';}
            if (values.attack6type == '[[1d100!>96cf<@{attack6fumble}+@{attack6bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]') { update['attack6select'] = 'melee'; }
            else if (values.attack6type == '[[1d100!>96cf<@{attack6fumble}+@{attack6bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]') { update['attack6select'] = 'ranged'; }
            else if (values.attack6type == '[[1d100cf<2cs>96+@{attack6bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]') { update['attack6select'] = 'basic'; }
            else if (values.attack6type == '[[1d100!>96cf<2cs=100+@{attack6bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { update['attack6select'] = 'directed'; }
            else if (values.attack6type == '[[1d100cf<4cs>96+@{attack6bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]') { update['attack6select'] = 'area'; }
            else if (values.attack6type == 'no type') { update['attack6select'] = 'none'; }
            else { update['attack6select'] = 'none';}
            if (values.attack7type == '[[1d100!>96cf<@{attack7fumble}+@{attack7bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]') { update['attack7select'] = 'melee'; }
            else if (values.attack7type == '[[1d100!>96cf<@{attack7fumble}+@{attack7bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]') { update['attack7select'] = 'ranged'; }
            else if (values.attack7type == '[[1d100cf<2cs>96+@{attack7bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]') { update['attack7select'] = 'basic'; }
            else if (values.attack7type == '[[1d100!>96cf<2cs=100+@{attack7bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { update['attack7select'] = 'directed'; }
            else if (values.attack7type == '[[1d100cf<4cs>96+@{attack7bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]') { update['attack7select'] = 'area'; }
            else if (values.attack7type == 'no type') { update['attack7select'] = 'none'; }
            else { update['attack7select'] = 'none';}
            if (values.attack8type == '[[1d100!>96cf<@{attack8fumble}+@{attack8bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]') { update['attack8select'] = 'melee'; }
            else if (values.attack8type == '[[1d100!>96cf<@{attack8fumble}+@{attack8bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]') { update['attack8select'] = 'ranged'; }
            else if (values.attack8type == '[[1d100cf<2cs>96+@{attack8bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]') { update['attack8select'] = 'basic'; }
            else if (values.attack8type == '[[1d100!>96cf<2cs=100+@{attack8bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { update['attack8select'] = 'directed'; }
            else if (values.attack8type == '[[1d100cf<4cs>96+@{attack8bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]') { update['attack8select'] = 'area'; }
            else if (values.attack8type == 'no type') { update['attack8select'] = 'none'; }
            else { update['attack8select'] = 'none';}
            if (values.npcattack1type == '[[1d100!>96cf<@{npcattack1fumble}+@{npcattack1bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]') { 
                update['npcattack1select'] = 'npcmelee'; 
                update['npcattack1attackcalc'] = '@{npcattack1bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack1rolltype'] = '1d100!>96cf<@{npcattack1fumble}';
                update['npcattack1type'] = '[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
            }
            else if (values.npcattack1type == '[[1d100!>96cf<@{npcattack1fumble} +@{npcattack1bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack1select'] = 'npcmelee'; 
                update['npcattack1attackcalc'] = '@{npcattack1bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack1rolltype'] = '1d100!>96cf<@{npcattack1fumble}';
                update['npcattack1type'] = '[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
            }
            else if (values.npcattack1type == '[[1d100!>96cf<@{npcattack1fumble}+@{npcattack1bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]') { 
                update['npcattack1select'] = 'npcranged'; 
                update['npcattack1attackcalc'] = '@{npcattack1bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack1rolltype'] = '1d100!>96cf<@{npcattack1fumble}';
                update['npcattack1type'] = '[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
            }
            else if (values.npcattack1type == '[[1d100!>96cf<@{npcattack2fumble} +@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack1select'] = 'npcranged'; 
                update['npcattack1attackcalc'] = '@{npcattack1bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack1rolltype'] = '1d100!>96cf<@{npcattack1fumble}';
                update['npcattack1type'] = '[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
            }
            else if (values.npcattack1type == '[[1d100!>96cf<@{npcattack1fumble} +@{npcattack1bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack1select'] = 'npcranged'; 
                update['npcattack1attackcalc'] = '@{npcattack1bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack1rolltype'] = '1d100!>96cf<@{npcattack1fumble}';
                update['npcattack1type'] = '[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
            }
            else if (values.npcattack1type == '[[1d100cf<2cs>96+@{npcattack1bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] ]]') { 
                update['npcattack1select'] = 'npcbasic'; 
                update['npcattack1attackcalc'] = '@{npcattack1bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack1rolltype'] = '1d100cf<2cs>96';
                update['npcattack1type'] = '[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
            }
            else if (values.npcattack1type == '[[1d100cf<2cs>96+@{npcattack1bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { 
                update['npcattack1select'] = 'npcbasic'; 
                update['npcattack1attackcalc'] = '@{npcattack1bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack1rolltype'] = '1d100cf<2cs>96';
                update['npcattack1type'] = '[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
            }
            else if (values.npcattack1type == '[[1d100!>96cf<2cs=100+@{npcattack1bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]') { 
                update['npcattack1select'] = 'npcdirected'; 
                update['npcattack1attackcalc'] = '@{npcattack1bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack1rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack1type'] = '[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
            }
            else if (values.npcattack1type == '[[1d100!>96cf<2cs=100+@{npcattack1bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack1select'] = 'npcdirected'; 
                update['npcattack1attackcalc'] = '@{npcattack1bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack1rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack1type'] = '[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
            }
            else if (values.npcattack1type == '[[1d100cf<4cs>96+@{npcattack1bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]') { 
                update['npcattack1attackcalc'] = '@{npcattack1bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack1rolltype'] = '1d100cf<4cs>96';
                update['npcattack1type'] = '[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
            }
            else if (values.npcattack1type == '[[1d100cf<4cs>96+@{npcattack1bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus] ]]') { 
                update['npcattack1attackcalc'] = '@{npcattack1bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack1rolltype'] = '1d100cf<4cs>96';
                update['npcattack1type'] = '[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
            }
            else if (values.npcattack1type == 'no type') { update['npcattack1select'] = 'none'; }
            else { update['npcattack1select'] = 'none';}
            if (values.npcattack2type == '[[1d100!>96cf<@{npcattack2fumble}+@{npcattack2bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]') { 
                update['npcattack2select'] = 'npcmelee'; 
                update['npcattack2attackcalc'] = '@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack2rolltype'] = '1d100!>96cf<@{npcattack2fumble}';
                update['npcattack2type'] = '[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
            }
            else if (values.npcattack2type == '[[1d100!>96cf<@{npcattack2fumble} +@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack2select'] = 'npcmelee'; 
                update['npcattack2attackcalc'] = '@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack2rolltype'] = '1d100!>96cf<@{npcattack2fumble}';
                update['npcattack2type'] = '[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
            }
            else if (values.npcattack2type == '[[1d100!>96cf<@{npcattack2fumble}+@{npcattack2bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]') { 
                update['npcattack2select'] = 'npcranged'; 
                update['npcattack2attackcalc'] = '@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack2rolltype'] = '1d100!>96cf<@{npcattack2fumble}';
                update['npcattack2type'] = '[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
            }
            else if (values.npcattack2type == '[[1d100!>96cf<@{npcattack2fumble} +@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack2select'] = 'npcranged'; 
                update['npcattack2attackcalc'] = '@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack2rolltype'] = '1d100!>96cf<@{npcattack2fumble}';
                update['npcattack2type'] = '[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
            }
            else if (values.npcattack2type == '[[1d100!>96cf<@{npcattack2fumble} +@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack2select'] = 'npcranged'; 
                update['npcattack2attackcalc'] = '@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack2rolltype'] = '1d100!>96cf<@{npcattack2fumble}';
                update['npcattack2type'] = '[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
            }
            else if (values.npcattack2type == '[[1d100cf<2cs>96+@{npcattack2bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] ]]') { 
                update['npcattack2select'] = 'npcbasic'; 
                update['npcattack2attackcalc'] = '@{npcattack2bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack2rolltype'] = '1d100cf<2cs>96';
                update['npcattack2type'] = '[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
            }
            else if (values.npcattack2type == '[[1d100cf<2cs>96+@{npcattack2bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { 
                update['npcattack2select'] = 'npcbasic'; 
                update['npcattack2attackcalc'] = '@{npcattack2bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack2rolltype'] = '1d100cf<2cs>96';
                update['npcattack2type'] = '[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
            }
            else if (values.npcattack2type == '[[1d100!>96cf<2cs=100+@{npcattack2bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]') { 
                update['npcattack2select'] = 'npcdirected'; 
                update['npcattack2attackcalc'] = '@{npcattack2bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack2rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack2type'] = '[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
            }
            else if (values.npcattack2type == '[[1d100!>96cf<2cs=100+@{npcattack2bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack2select'] = 'npcdirected'; 
                update['npcattack2attackcalc'] = '@{npcattack2bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack2rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack2type'] = '[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
            }
            else if (values.npcattack2type == '[[1d100cf<4cs>96+@{npcattack2bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]') { 
                update['npcattack2attackcalc'] = '@{npcattack2bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack2rolltype'] = '1d100cf<4cs>96';
                update['npcattack2type'] = '[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
            }
            else if (values.npcattack2type == '[[1d100cf<4cs>96+@{npcattack2bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus] ]]') { 
                update['npcattack2attackcalc'] = '@{npcattack2bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack2rolltype'] = '1d100cf<4cs>96';
                update['npcattack2type'] = '[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
            }
            else if (values.npcattack2type == 'no type') { update['npcattack2select'] = 'none'; }
            else { update['npcattack2select'] = 'none';}
            if (values.npcattack3type == '[[1d100!>96cf<@{npcattack3fumble}+@{npcattack3bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]') { 
                update['npcattack3select'] = 'npcmelee'; 
                update['npcattack3attackcalc'] = '@{npcattack3bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack3rolltype'] = '1d100!>96cf<@{npcattack3fumble}';
                update['npcattack3type'] = '[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
            }
            else if (values.npcattack3type == '[[1d100!>96cf<@{npcattack3fumble} +@{npcattack3bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack3select'] = 'npcmelee'; 
                update['npcattack3attackcalc'] = '@{npcattack3bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack3rolltype'] = '1d100!>96cf<@{npcattack3fumble}';
                update['npcattack3type'] = '[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
            }
            else if (values.npcattack3type == '[[1d100!>96cf<@{npcattack3fumble}+@{npcattack3bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]') { 
                update['npcattack3select'] = 'npcranged'; 
                update['npcattack3attackcalc'] = '@{npcattack3bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack3rolltype'] = '1d100!>96cf<@{npcattack3fumble}';
                update['npcattack3type'] = '[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
            }
            else if (values.npcattack3type == '[[1d100!>96cf<@{npcattack2fumble} +@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack3select'] = 'npcranged'; 
                update['npcattack3attackcalc'] = '@{npcattack3bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack3rolltype'] = '1d100!>96cf<@{npcattack3fumble}';
                update['npcattack3type'] = '[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
            }
            else if (values.npcattack3type == '[[1d100!>96cf<@{npcattack3fumble} +@{npcattack3bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack3select'] = 'npcranged'; 
                update['npcattack3attackcalc'] = '@{npcattack3bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack3rolltype'] = '1d100!>96cf<@{npcattack3fumble}';
                update['npcattack3type'] = '[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
            }
            else if (values.npcattack3type == '[[1d100cf<2cs>96+@{npcattack3bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] ]]') { 
                update['npcattack3select'] = 'npcbasic'; 
                update['npcattack3attackcalc'] = '@{npcattack3bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack3rolltype'] = '1d100cf<2cs>96';
                update['npcattack3type'] = '[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
            }
            else if (values.npcattack3type == '[[1d100cf<2cs>96+@{npcattack3bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { 
                update['npcattack3select'] = 'npcbasic'; 
                update['npcattack3attackcalc'] = '@{npcattack3bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack3rolltype'] = '1d100cf<2cs>96';
                update['npcattack3type'] = '[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
            }
            else if (values.npcattack3type == '[[1d100!>96cf<2cs=100+@{npcattack3bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]') { 
                update['npcattack3select'] = 'npcdirected'; 
                update['npcattack3attackcalc'] = '@{npcattack3bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack3rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack3type'] = '[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
            }
            else if (values.npcattack3type == '[[1d100!>96cf<2cs=100+@{npcattack3bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack3select'] = 'npcdirected'; 
                update['npcattack3attackcalc'] = '@{npcattack3bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack3rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack3type'] = '[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
            }
            else if (values.npcattack3type == '[[1d100cf<4cs>96+@{npcattack3bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]') { 
                update['npcattack3attackcalc'] = '@{npcattack3bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack3rolltype'] = '1d100cf<4cs>96';
                update['npcattack3type'] = '[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
            }
            else if (values.npcattack3type == '[[1d100cf<4cs>96+@{npcattack3bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus] ]]') { 
                update['npcattack3attackcalc'] = '@{npcattack3bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack3rolltype'] = '1d100cf<4cs>96';
                update['npcattack3type'] = '[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
            }
            else if (values.npcattack3type == 'no type') { update['npcattack3select'] = 'none'; }
            else { update['npcattack3select'] = 'none';}
            if (values.npcattack4type == '[[1d100!>96cf<@{npcattack4fumble}+@{npcattack4bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]') { 
                update['npcattack4select'] = 'npcmelee'; 
                update['npcattack4attackcalc'] = '@{npcattack4bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack4rolltype'] = '1d100!>96cf<@{npcattack4fumble}';
                update['npcattack4type'] = '[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
            }
            else if (values.npcattack4type == '[[1d100!>96cf<@{npcattack4fumble} +@{npcattack4bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack4select'] = 'npcmelee'; 
                update['npcattack4attackcalc'] = '@{npcattack4bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack4rolltype'] = '1d100!>96cf<@{npcattack4fumble}';
                update['npcattack4type'] = '[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
            }
            else if (values.npcattack4type == '[[1d100!>96cf<@{npcattack4fumble}+@{npcattack4bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]') { 
                update['npcattack4select'] = 'npcranged'; 
                update['npcattack4attackcalc'] = '@{npcattack4bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack4rolltype'] = '1d100!>96cf<@{npcattack4fumble}';
                update['npcattack4type'] = '[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
            }
            else if (values.npcattack4type == '[[1d100!>96cf<@{npcattack2fumble} +@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack4select'] = 'npcranged'; 
                update['npcattack4attackcalc'] = '@{npcattack4bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack4rolltype'] = '1d100!>96cf<@{npcattack4fumble}';
                update['npcattack4type'] = '[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
            }
            else if (values.npcattack4type == '[[1d100!>96cf<@{npcattack4fumble} +@{npcattack4bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack4select'] = 'npcranged'; 
                update['npcattack4attackcalc'] = '@{npcattack4bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack4rolltype'] = '1d100!>96cf<@{npcattack4fumble}';
                update['npcattack4type'] = '[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
            }
            else if (values.npcattack4type == '[[1d100cf<2cs>96+@{npcattack4bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] ]]') { 
                update['npcattack4select'] = 'npcbasic'; 
                update['npcattack4attackcalc'] = '@{npcattack4bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack4rolltype'] = '1d100cf<2cs>96';
                update['npcattack4type'] = '[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
            }
            else if (values.npcattack4type == '[[1d100cf<2cs>96+@{npcattack4bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { 
                update['npcattack4select'] = 'npcbasic'; 
                update['npcattack4attackcalc'] = '@{npcattack4bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack4rolltype'] = '1d100cf<2cs>96';
                update['npcattack4type'] = '[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
            }
            else if (values.npcattack4type == '[[1d100!>96cf<2cs=100+@{npcattack4bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]') { 
                update['npcattack4select'] = 'npcdirected'; 
                update['npcattack4attackcalc'] = '@{npcattack4bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack4rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack4type'] = '[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
            }
            else if (values.npcattack4type == '[[1d100!>96cf<2cs=100+@{npcattack4bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack4select'] = 'npcdirected'; 
                update['npcattack4attackcalc'] = '@{npcattack4bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack4rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack4type'] = '[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
            }
            else if (values.npcattack4type == '[[1d100cf<4cs>96+@{npcattack4bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]') { 
                update['npcattack4attackcalc'] = '@{npcattack4bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack4rolltype'] = '1d100cf<4cs>96';
                update['npcattack4type'] = '[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
            }
            else if (values.npcattack4type == '[[1d100cf<4cs>96+@{npcattack4bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus] ]]') { 
                update['npcattack4attackcalc'] = '@{npcattack4bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack4rolltype'] = '1d100cf<4cs>96';
                update['npcattack4type'] = '[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
            }
            else if (values.npcattack4type == 'no type') { update['npcattack4select'] = 'none'; }
            else { update['npcattack4select'] = 'none';}
            if (values.npcattack5type == '[[1d100!>96cf<@{npcattack5fumble}+@{npcattack5bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]') { 
                update['npcattack5select'] = 'npcmelee'; 
                update['npcattack5attackcalc'] = '@{npcattack5bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack5rolltype'] = '1d100!>96cf<@{npcattack5fumble}';
                update['npcattack5type'] = '[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
            }
            else if (values.npcattack5type == '[[1d100!>96cf<@{npcattack5fumble} +@{npcattack5bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack5select'] = 'npcmelee'; 
                update['npcattack5attackcalc'] = '@{npcattack5bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack5rolltype'] = '1d100!>96cf<@{npcattack5fumble}';
                update['npcattack5type'] = '[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
            }
            else if (values.npcattack5type == '[[1d100!>96cf<@{npcattack5fumble}+@{npcattack5bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]') { 
                update['npcattack5select'] = 'npcranged'; 
                update['npcattack5attackcalc'] = '@{npcattack5bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack5rolltype'] = '1d100!>96cf<@{npcattack5fumble}';
                update['npcattack5type'] = '[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
            }
            else if (values.npcattack5type == '[[1d100!>96cf<@{npcattack2fumble} +@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack5select'] = 'npcranged'; 
                update['npcattack5attackcalc'] = '@{npcattack5bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack5rolltype'] = '1d100!>96cf<@{npcattack5fumble}';
                update['npcattack5type'] = '[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
            }
            else if (values.npcattack5type == '[[1d100!>96cf<@{npcattack5fumble} +@{npcattack5bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack5select'] = 'npcranged'; 
                update['npcattack5attackcalc'] = '@{npcattack5bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack5rolltype'] = '1d100!>96cf<@{npcattack5fumble}';
                update['npcattack5type'] = '[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
            }
            else if (values.npcattack5type == '[[1d100cf<2cs>96+@{npcattack5bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] ]]') { 
                update['npcattack5select'] = 'npcbasic'; 
                update['npcattack5attackcalc'] = '@{npcattack5bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack5rolltype'] = '1d100cf<2cs>96';
                update['npcattack5type'] = '[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
            }
            else if (values.npcattack5type == '[[1d100cf<2cs>96+@{npcattack5bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { 
                update['npcattack5select'] = 'npcbasic'; 
                update['npcattack5attackcalc'] = '@{npcattack5bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack5rolltype'] = '1d100cf<2cs>96';
                update['npcattack5type'] = '[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
            }
            else if (values.npcattack5type == '[[1d100!>96cf<2cs=100+@{npcattack5bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]') { 
                update['npcattack5select'] = 'npcdirected'; 
                update['npcattack5attackcalc'] = '@{npcattack5bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack5rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack5type'] = '[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
            }
            else if (values.npcattack5type == '[[1d100!>96cf<2cs=100+@{npcattack5bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack5select'] = 'npcdirected'; 
                update['npcattack5attackcalc'] = '@{npcattack5bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack5rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack5type'] = '[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
            }
            else if (values.npcattack5type == '[[1d100cf<4cs>96+@{npcattack5bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]') { 
                update['npcattack5attackcalc'] = '@{npcattack5bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack5rolltype'] = '1d100cf<4cs>96';
                update['npcattack5type'] = '[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
            }
            else if (values.npcattack5type == '[[1d100cf<4cs>96+@{npcattack5bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus] ]]') { 
                update['npcattack5attackcalc'] = '@{npcattack5bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack5rolltype'] = '1d100cf<4cs>96';
                update['npcattack5type'] = '[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
            }
            else if (values.npcattack5type == 'no type') { update['npcattack5select'] = 'none'; }
            else { update['npcattack5select'] = 'none';}
            if (values.npcattack6type == '[[1d100!>96cf<@{npcattack6fumble}+@{npcattack6bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]') { 
                update['npcattack6select'] = 'npcmelee'; 
                update['npcattack6attackcalc'] = '@{npcattack6bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack6rolltype'] = '1d100!>96cf<@{npcattack6fumble}';
                update['npcattack6type'] = '[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
            }
            else if (values.npcattack6type == '[[1d100!>96cf<@{npcattack6fumble} +@{npcattack6bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack6select'] = 'npcmelee'; 
                update['npcattack6attackcalc'] = '@{npcattack6bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack6rolltype'] = '1d100!>96cf<@{npcattack6fumble}';
                update['npcattack6type'] = '[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
            }
            else if (values.npcattack6type == '[[1d100!>96cf<@{npcattack6fumble}+@{npcattack6bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]') { 
                update['npcattack6select'] = 'npcranged'; 
                update['npcattack6attackcalc'] = '@{npcattack6bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack6rolltype'] = '1d100!>96cf<@{npcattack6fumble}';
                update['npcattack6type'] = '[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
            }
            else if (values.npcattack6type == '[[1d100!>96cf<@{npcattack2fumble} +@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack6select'] = 'npcranged'; 
                update['npcattack6attackcalc'] = '@{npcattack6bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack6rolltype'] = '1d100!>96cf<@{npcattack6fumble}';
                update['npcattack6type'] = '[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
            }
            else if (values.npcattack6type == '[[1d100!>96cf<@{npcattack6fumble} +@{npcattack6bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack6select'] = 'npcranged'; 
                update['npcattack6attackcalc'] = '@{npcattack6bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack6rolltype'] = '1d100!>96cf<@{npcattack6fumble}';
                update['npcattack6type'] = '[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
            }
            else if (values.npcattack6type == '[[1d100cf<2cs>96+@{npcattack6bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] ]]') { 
                update['npcattack6select'] = 'npcbasic'; 
                update['npcattack6attackcalc'] = '@{npcattack6bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack6rolltype'] = '1d100cf<2cs>96';
                update['npcattack6type'] = '[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
            }
            else if (values.npcattack6type == '[[1d100cf<2cs>96+@{npcattack6bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { 
                update['npcattack6select'] = 'npcbasic'; 
                update['npcattack6attackcalc'] = '@{npcattack6bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack6rolltype'] = '1d100cf<2cs>96';
                update['npcattack6type'] = '[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
            }
            else if (values.npcattack6type == '[[1d100!>96cf<2cs=100+@{npcattack6bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]') { 
                update['npcattack6select'] = 'npcdirected'; 
                update['npcattack6attackcalc'] = '@{npcattack6bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack6rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack6type'] = '[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
            }
            else if (values.npcattack6type == '[[1d100!>96cf<2cs=100+@{npcattack6bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack6select'] = 'npcdirected'; 
                update['npcattack6attackcalc'] = '@{npcattack6bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack6rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack6type'] = '[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
            }
            else if (values.npcattack6type == '[[1d100cf<4cs>96+@{npcattack6bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]') { 
                update['npcattack6attackcalc'] = '@{npcattack6bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack6rolltype'] = '1d100cf<4cs>96';
                update['npcattack6type'] = '[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
            }
            else if (values.npcattack6type == '[[1d100cf<4cs>96+@{npcattack6bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus] ]]') { 
                update['npcattack6attackcalc'] = '@{npcattack6bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack6rolltype'] = '1d100cf<4cs>96';
                update['npcattack6type'] = '[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
            }
            else if (values.npcattack6type == 'no type') { update['npcattack6select'] = 'none'; }
            else { update['npcattack6select'] = 'none';}
            if (values.npcattack7type == '[[1d100!>96cf<@{npcattack7fumble}+@{npcattack7bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]') { 
                update['npcattack7select'] = 'npcmelee'; 
                update['npcattack7attackcalc'] = '@{npcattack7bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack7rolltype'] = '1d100!>96cf<@{npcattack7fumble}';
                update['npcattack7type'] = '[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
            }
            else if (values.npcattack7type == '[[1d100!>96cf<@{npcattack7fumble} +@{npcattack7bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack7select'] = 'npcmelee'; 
                update['npcattack7attackcalc'] = '@{npcattack7bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack7rolltype'] = '1d100!>96cf<@{npcattack7fumble}';
                update['npcattack7type'] = '[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
            }
            else if (values.npcattack7type == '[[1d100!>96cf<@{npcattack7fumble}+@{npcattack7bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]') { 
                update['npcattack7select'] = 'npcranged'; 
                update['npcattack7attackcalc'] = '@{npcattack7bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack7rolltype'] = '1d100!>96cf<@{npcattack7fumble}';
                update['npcattack7type'] = '[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
            }
            else if (values.npcattack7type == '[[1d100!>96cf<@{npcattack2fumble} +@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack7select'] = 'npcranged'; 
                update['npcattack7attackcalc'] = '@{npcattack7bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack7rolltype'] = '1d100!>96cf<@{npcattack7fumble}';
                update['npcattack7type'] = '[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
            }
            else if (values.npcattack7type == '[[1d100!>96cf<@{npcattack7fumble} +@{npcattack7bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack7select'] = 'npcranged'; 
                update['npcattack7attackcalc'] = '@{npcattack7bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack7rolltype'] = '1d100!>96cf<@{npcattack7fumble}';
                update['npcattack7type'] = '[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
            }
            else if (values.npcattack7type == '[[1d100cf<2cs>96+@{npcattack7bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] ]]') { 
                update['npcattack7select'] = 'npcbasic'; 
                update['npcattack7attackcalc'] = '@{npcattack7bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack7rolltype'] = '1d100cf<2cs>96';
                update['npcattack7type'] = '[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
            }
            else if (values.npcattack7type == '[[1d100cf<2cs>96+@{npcattack7bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { 
                update['npcattack7select'] = 'npcbasic'; 
                update['npcattack7attackcalc'] = '@{npcattack7bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack7rolltype'] = '1d100cf<2cs>96';
                update['npcattack7type'] = '[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
            }
            else if (values.npcattack7type == '[[1d100!>96cf<2cs=100+@{npcattack7bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]') { 
                update['npcattack7select'] = 'npcdirected'; 
                update['npcattack7attackcalc'] = '@{npcattack7bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack7rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack7type'] = '[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
            }
            else if (values.npcattack7type == '[[1d100!>96cf<2cs=100+@{npcattack7bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack7select'] = 'npcdirected'; 
                update['npcattack7attackcalc'] = '@{npcattack7bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack7rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack7type'] = '[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
            }
            else if (values.npcattack7type == '[[1d100cf<4cs>96+@{npcattack7bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]') { 
                update['npcattack7attackcalc'] = '@{npcattack7bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack7rolltype'] = '1d100cf<4cs>96';
                update['npcattack7type'] = '[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
            }
            else if (values.npcattack7type == '[[1d100cf<4cs>96+@{npcattack7bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus] ]]') { 
                update['npcattack7attackcalc'] = '@{npcattack7bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack7rolltype'] = '1d100cf<4cs>96';
                update['npcattack7type'] = '[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
            }
            else if (values.npcattack7type == 'no type') { update['npcattack7select'] = 'none'; }
            else { update['npcattack7select'] = 'none';}
            if (values.npcattack8type == '[[1d100!>96cf<@{npcattack8fumble}+@{npcattack8bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]') { 
                update['npcattack8select'] = 'npcmelee'; 
                update['npcattack8attackcalc'] = '@{npcattack8bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack8rolltype'] = '1d100!>96cf<@{npcattack8fumble}';
                update['npcattack8type'] = '[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
            }
            else if (values.npcattack8type == '[[1d100!>96cf<@{npcattack8fumble} +@{npcattack8bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack8select'] = 'npcmelee'; 
                update['npcattack8attackcalc'] = '@{npcattack8bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] -(100-?{% Activity used on attack|100}) -[[@{target|dbworn}]][target db]';
                update['npcattack8rolltype'] = '1d100!>96cf<@{npcattack8fumble}';
                update['npcattack8type'] = '[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
            }
            else if (values.npcattack8type == '[[1d100!>96cf<@{npcattack8fumble}+@{npcattack8bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]') { 
                update['npcattack8select'] = 'npcranged'; 
                update['npcattack8attackcalc'] = '@{npcattack8bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack8rolltype'] = '1d100!>96cf<@{npcattack8fumble}';
                update['npcattack8type'] = '[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
            }
            else if (values.npcattack8type == '[[1d100!>96cf<@{npcattack2fumble} +@{npcattack2bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbworn}]][target db] ]]') { 
                update['npcattack8select'] = 'npcranged'; 
                update['npcattack8attackcalc'] = '@{npcattack8bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack8rolltype'] = '1d100!>96cf<@{npcattack8fumble}';
                update['npcattack8type'] = '[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
            }
            else if (values.npcattack8type == '[[1d100!>96cf<@{npcattack8fumble} +@{npcattack8bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack8select'] = 'npcranged'; 
                update['npcattack8attackcalc'] = '@{npcattack8bonus}[OB] +?{Position Bonus?|0}[Position] +?{Status Bonus/Penalty?|0}[Status] +?{Parry(db adjust)|0}[Parry] +?{Range Modification|0}[Range] +?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60}) -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack8rolltype'] = '1d100!>96cf<@{npcattack8fumble}';
                update['npcattack8type'] = '[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
            }
            else if (values.npcattack8type == '[[1d100cf<2cs>96+@{npcattack8bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] ]]') { 
                update['npcattack8select'] = 'npcbasic'; 
                update['npcattack8attackcalc'] = '@{npcattack8bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack8rolltype'] = '1d100cf<2cs>96';
                update['npcattack8type'] = '[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
            }
            else if (values.npcattack8type == '[[1d100cf<2cs>96+@{npcattack8bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]') { 
                update['npcattack8select'] = 'npcbasic'; 
                update['npcattack8attackcalc'] = '@{npcattack8bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                update['npcattack8rolltype'] = '1d100cf<2cs>96';
                update['npcattack8type'] = '[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
            }
            else if (values.npcattack8type == '[[1d100!>96cf<2cs=100+@{npcattack8bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]') { 
                update['npcattack8select'] = 'npcdirected'; 
                update['npcattack8attackcalc'] = '@{npcattack8bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack8rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack8type'] = '[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
            }
            else if (values.npcattack8type == '[[1d100!>96cf<2cs=100+@{npcattack8bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db] ]]') { 
                update['npcattack8select'] = 'npcdirected'; 
                update['npcattack8attackcalc'] = '@{npcattack8bonus}[OB] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] -[[@{target|dbwornranged}]][target ranged db]';
                update['npcattack8rolltype'] = '1d100!>@{oeuproll}cf<2cs=100';
                update['npcattack8type'] = '[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
            }
            else if (values.npcattack8type == '[[1d100cf<4cs>96+@{npcattack8bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]') { 
                update['npcattack8attackcalc'] = '@{npcattack8bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack8rolltype'] = '1d100cf<4cs>96';
                update['npcattack8type'] = '[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
            }
            else if (values.npcattack8type == '[[1d100cf<4cs>96+@{npcattack8bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus] ]]') { 
                update['npcattack8attackcalc'] = '@{npcattack8bonus}[List Ranks] +?{Special Item Bonus?|0}[Item] +?{Status Bonus/Penalty?|0}[Status] +?{Range Modification|0}[Range] +20*?{Center point of spell?(1=yes)|0}[Spell Center] -[[((@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})) + abs(@{target|dbquickbonworn} -abs(@{target|dbquickpenworn})))/2]][target quickness bonus] - [[.5*(@{target|dbarmdbworn})]][1/2 armor bonus to db] -[[@{target|dbmagicbonworn}]][magical(item) db bonus]'; 
                update['npcattack8rolltype'] = '1d100cf<4cs>96';
                update['npcattack8type'] = '[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
            }
            else if (values.npcattack8type == 'no type') { update['npcattack8select'] = 'none'; }
            else { update['npcattack8select'] = 'none';}
            setAttrs(update); 
            //	Also set weapon breakage stuff.            
            BreakageMacroSetup('attack1');
            BreakageMacroSetup('attack2');
            BreakageMacroSetup('attack3');
            BreakageMacroSetup('attack4');
            BreakageMacroSetup('attack5');
            BreakageMacroSetup('attack6');
            BreakageMacroSetup('attack7');
            BreakageMacroSetup('attack8');
            BreakageMacroSetup('npcattack1');
            BreakageMacroSetup('npcattack2');
            BreakageMacroSetup('npcattack3');
            BreakageMacroSetup('npcattack4');
            BreakageMacroSetup('npcattack5');
            BreakageMacroSetup('npcattack6');
            BreakageMacroSetup('npcattack7');
            BreakageMacroSetup('npcattack8');
        });
    }	
    if ((langsmoved == 0) || (isNaN(langsmoved))) {       //if the languages have already been moved; don't do it again!
        //  Copy/create languages   Move this outside of calc == 0......
        getSectionIDs('repeating_languages', function(idarray){
            if (idarray.length>0) {
                console.log('Language ID array length: '+idarray.length);
                _.each(idarray, function(currentID) {
                    getAttrs(['repeating_languages_'+currentID+'_languagename', 'repeating_languages_'+currentID+'_languagespoken-rank', 'repeating_languages_'+currentID+'_languagespoken-skill', 'repeating_languages_'+currentID+'_languagewritten-rank', 'repeating_languages_'+currentID+'_languagewritten-skill', 'repeating_languages2_'+currentID+'_language2name', 'repeating_languages2_'+currentID+'_language2spoken-rank', 'repeating_languages2_'+currentID+'_language2spoken-skill', 'repeating_languages2_'+currentID+'_language2written-rank', 'repeating_languages2_'+currentID+'_language2written-skill'], function(values) {
                        var update = {};
                        var newID = generateRowID();
                        if (values['repeating_languages_'+currentID+'_languagename']){						//   Check for languagename
                            update['repeating_langs_'+newID+'_languagename'] = values['repeating_languages_'+currentID+'_languagename'];
                        } else {			                												//   Else set the name to 'Trade' in case folks didn't change from what was diplayed.
                            //	console.log("Not a lang1");
                            update['repeating_langs_'+newID+'_languagename'] = 'Trade';
                        }
                        if (values['repeating_languages_'+currentID+'_languagespoken-rank']){				//   Check for languagespoken-rank
                            update['repeating_langs_'+newID+'_languagespokenranks'] = values['repeating_languages_'+currentID+'_languagespoken-rank'];
                        } else {																			//   Else set it to the default 4 in case folks didn't change from what was diplayed.
                            update['repeating_langs_'+newID+'_languagespokenranks'] = 4;
                        }
                        if (values['repeating_languages_'+currentID+'_languagewritten-rank']){				//   Check for languagewritten-rank
                            update['repeating_langs_'+newID+'_languagewrittenranks'] = values['repeating_languages_'+currentID+'_languagewritten-rank'];
                        } else {																			//   Else set it to the default 4 in case folks didn't change from what was diplayed.
                            update['repeating_langs_'+newID+'_languagewrittenranks'] = 4;
                        }
                        //		if the sheet does not do the calc for you, then copy the skills as well.
                        if (calc == 0) {
                            if (values['repeating_languages_'+currentID+'_languagespoken-skill']){			//   Check for languagespoken-skill
                                update['repeating_langs_'+newID+'_languagespokenrankbonus'] = values['repeating_languages_'+currentID+'_languagespoken-skill'];
                            } else {																		//   Else set it to the default 45 in case folks didn't change from what was diplayed.
                                update['repeating_langs_'+newID+'_languagespokenrankbonus'] = 45;
                            }							
                            if (values['repeating_languages_'+currentID+'_languagewritten-skill']){			//   Check for languagewritten-skill
                                update['repeating_langs_'+newID+'_languagewrittenrankbonus'] = values['repeating_languages_'+currentID+'_languagewritten-skill'];
                            } else {																		//   Else set it to the default 45 in case folks didn't change from what was diplayed.
                                update['repeating_langs_'+newID+'_languagewrittenrankbonus'] = 45;
                            }
                        }
                        setAttrs(update);
                    });
                });
            }
        });
      
        getSectionIDs('repeating_languages2', function(idarray2){
            if (idarray2.length>0) {
                console.log('Language2 ID array length: '+idarray2.length);
                _.each(idarray2, function(currentID2) {
                    getAttrs(['repeating_languages_'+currentID2+'_languagename', 'repeating_languages_'+currentID2+'_languagespoken-rank', 'repeating_languages_'+currentID2+'_languagespoken-skill', 'repeating_languages_'+currentID2+'_languagewritten-rank', 'repeating_languages_'+currentID2+'_languagewritten-skill', 'repeating_languages2_'+currentID2+'_language2name', 'repeating_languages2_'+currentID2+'_language2spoken-rank', 'repeating_languages2_'+currentID2+'_language2spoken-skill', 'repeating_languages2_'+currentID2+'_language2written-rank', 'repeating_languages2_'+currentID2+'_language2written-skill'], function(values) {
                        var update = {};
                        var newID2 = generateRowID();
                        if (values['repeating_languages2_'+currentID2+'_language2name']){  			//   If there is no languagename, then try language2name
                            //	console.log("Not a lang1");
                            update['repeating_langs_'+newID2+'_languagename'] = values['repeating_languages2_'+currentID2+'_language2name'];
                        } else {			                												//   Else set the name to 'Trade' in case folks didn't change from what was diplayed.
                            //	console.log("Not a lang1");
                            update['repeating_langs_'+newID2+'_languagename'] = 'Trade';
                        }
                        if (values['repeating_languages2_'+currentID2+'_language2spoken-rank']){		//   If there is no languagespoken-rank, then try language2spoken-rank
                            update['repeating_langs_'+newID2+'_languagespokenranks'] = values['repeating_languages2_'+currentID2+'_language2spoken-rank'];
                        } else {																			//   Else set it to the default 4 in case folks didn't change from what was diplayed.
                            update['repeating_langs_'+newID2+'_languagespokenranks'] = 4;
                        }
                        if (values['repeating_languages2_'+currentID2+'_language2written-rank']){		// 	  If there is no languagewritten-rank, then try language2written-rank
                            update['repeating_langs_'+newID2+'_languagewrittenranks'] = values['repeating_languages2_'+currentID2+'_language2written-rank'];
                        } else {																			//   Else set it to the default 4 in case folks didn't change from what was diplayed.
                            update['repeating_langs_'+newID2+'_languagewrittenranks'] = 4;
                        }
                        //		if the sheet does not do the calc for you, then copy the skills as well.
                        if (calc == 0) {
                            if (values['repeating_languages_'+currentID2+'_language2spoken-skill']){	//   If there is no languagespoken-skill, then try language2spoken-skill
                                update['repeating_langs_'+newID2+'_languagespokenrankbonus'] = values['repeating_languages2_'+currentID2+'_language2spoken-skill'];
                            } else {																		//   Else set it to the default 45 in case folks didn't change from what was diplayed.
                                update['repeating_langs_'+newID2+'_languagespokenrankbonus'] = 45;
                            }							
                            if (values['repeating_languages_'+currentID2+'_language2written-skill']){	//   If there is no languagewritten-skill, then try language2written-skill
                                update['repeating_langs_'+newID2+'_languagewrittenrankbonus'] = values['repeating_languages2_'+currentID2+'_language2written-skill'];
                            } else {																		//   Else set it to the default 45 in case folks didn't change from what was diplayed.
                                update['repeating_langs_'+newID2+'_languagewrittenrankbonus'] = 45;
                            }
                        }
                        setAttrs(update);
                    });
                });
            }
        });
      
        setAttrs({
            languagesmoved: 1	// set the languages as moved
        });
    }

    console.log('/* ----------leaving StartingSetup; mod:' + mod + '------------ */');
    setAttrs({
        character_sheet: 'RMSS-FullCalcs v3.'+mod
    });
    return mod;
}
// gigs todo
// <!---- Setup Profession Index for autocalculations ---->
on('sheet:opened change:profession', function() {
    getAttrs(['profession', 'professionindex'], function(values) {
        let profindex; // gigs todo
        if ((values.profession.toLowerCase()) === 'fighter') { profindex = 1; }
        else if ((values.profession.toLowerCase()) === 'thief') { profindex = 2; }
        else if ((values.profession.toLowerCase()) === 'rogue') { profindex = 3; }
        else if ((values.profession.toLowerCase()) === 'warrior monk') { profindex = 4; }
        else if ((values.profession.toLowerCase()) === 'layman') { profindex = 5; }
        else if ((values.profession.toLowerCase()) === 'magician') { profindex = 6; }
        else if ((values.profession.toLowerCase()) === 'illusionist') { profindex = 7; }
        else if ((values.profession.toLowerCase()) === 'cleric') { profindex = 8; }
        else if ((values.profession.toLowerCase()) === 'animist') { profindex = 9; }
        else if ((values.profession.toLowerCase()) === 'mentalist') { profindex = 10; }
        else if ((values.profession.toLowerCase()) === 'lay healer') { profindex = 11; }
        else if ((values.profession.toLowerCase()) === 'healer') { profindex = 12; }
        else if ((values.profession.toLowerCase()) === 'mystic') { profindex = 13; }
        else if ((values.profession.toLowerCase()) === 'sorcerer') { profindex = 14; }
        else if ((values.profession.toLowerCase()) === 'ranger') { profindex = 15; }
        else if ((values.profession.toLowerCase()) === 'paladin') { profindex = 16; }
        else if ((values.profession.toLowerCase()) === 'monk') { profindex = 17; }
        else if ((values.profession.toLowerCase()) === 'dabbler') { profindex = 18; }
        else if ((values.profession.toLowerCase()) === 'bard') { profindex = 19; }
        else if ((values.profession.toLowerCase()) === 'magent') { profindex = 20; }
        else if ((values.profession.toLowerCase()) === 'none') { profindex = 99; }
        else { profindex = 21; }
        setAttrs({
            professionindex: profindex
        });
    });
});


//  <!---- Run the setup if the sheet is opened or the recalc box is clicked ---->
on('sheet:opened change:skillcalc', function() {
    getAttrs(['sheetversion', 'currentsheetversion', 'skillcalc', 'languagesmoved'], function(values) {
        setAttrs({
            sheetversion: StartingSetup(parseFloat(values.sheetversion), parseFloat(values.currentsheetversion), parseInt(values.skillcalc,10), parseInt(values.languagesmoved,10))
        });
    });
});

// <!---- Change checkboxes for statcalc, skillcalc, levelexpcalc, racialcalc, and professioncalc if allcalc is changed. ---->
on('change:allcalc', function() {
    getAttrs(['allcalc'], function(values) {
		const output = {};
		var allcalc = parseInt(values.allcalc, 10);
        if (allcalc == 0) {
			output['statcalc']= 0;
			output['devpointcalc']= 0;
			output['levelexpcalc']= 0;
			output['skillcalc']= 0;
			output['racialcalc']= 0;
			output['professioncalc']= 0;
			output['copyob']= 0;
        } else if (allcalc == 1) {
			output['statcalc']= 1;
			output['devpointcalc']= 1;
			output['levelexpcalc']= 1;
			output['skillcalc']= 1;
			output['racialcalc']= 1;
			output['professioncalc']= 1;
			output['copyob']= 1;
        }
		setAttrs(output);
    });
});

// <!---- If skillcalc gets changed, check and update the skills. ---->
on('change:skillcalc', function() {
    getAttrs(['skillcalc'], function(values) {
        //		console.log('/* ----------entering SkillCalc Change; skillcalc:' + values.skillcalc + '  allcalc:' + values.allcalc + '------------ */');
        if (parseInt(values.skillcalc, 10) == 1) {
            var skills=['srob-list1', 'srob-list2', 'srob-list3', 'srob-list4', 'srob-list5', 'srob-list6', 'srob-list7', 'srob-list8', 'srob-list9', 'srob-list10', 'sropen-list1', 'sropen-list2', 'sropen-list3', 'sropen-list4', 'sropen-list5', 'sropen-list6', 'sropen-list7', 'sropen-list8', 'sropen-list9', 'sropen-list10', 'srclosed-list1', 'srclosed-list2', 'srclosed-list3', 'srclosed-list4', 'srclosed-list5', 'srclosed-list6', 'srclosed-list7', 'srclosed-list8', 'srclosed-list9', 'srclosed-list10', 'srotherb-list1', 'srotherb-list2', 'srotherb-list3', 'srotherb-list4', 'srotherb-list5', 'srotherb-list6', 'oropen-list1', 'oropen-list2', 'oropen-list3', 'oropen-list4', 'oropen-list5', 'orclosed-list1', 'orclosed-list2', 'orclosed-list3', 'orclosed-list4', 'orclosed-list5', 'orbase-list1', 'orbase-list2', 'orbase-list3', 'orbase-list4', 'orbase-list5', 'arcopen-list1', 'arcopen-list2', 'arcopen-list3', 'arcopen-list4', 'arcopen-list5', 'arcclosed-list1', 'arcclosed-list2', 'arcclosed-list3', 'arcclosed-list4', 'arcclosed-list5', 'arcbase-list1', 'arcbase-list2', 'arcbase-list3', 'arcbase-list4', 'arcbase-list5', 'arcotherbase-list1', 'arcotherbase-list2', 'arcotherbase-list3', 'arcotherbase-list4', 'arcotherbase-list5', 'cat-armor-heavy-', 'plate', 'cat-armor-light-', 'softleather', 'rigidleather', 'cat-armor-med-', 'chain', 'cat-artistic-active-', 'acting', 'dancing', 'mimery', 'mimicry', 'playinstrument1', 'playinstrument2', 'playinstrument3', 'poeticimprov', 'singing', 'taletelling', 'ventriloquism', 'cat-artistic-passive-', 'music', 'painting', 'poetry', 'sculpting', 'cat-athletic-brawn-', 'athleticgamesbrawn1', 'athleticgamesbrawn2', 'athleticgamesbrawn3', 'jumping', 'powerstriking', 'powerthrowing', 'weightlifting', 'cat-athletic-endur-', 'athleticgamesendur1', 'athleticgamesendur2', 'athleticgamesendur3', 'distancerunning', 'rowing', 'scaling', 'sprinting', 'swimming', 'cat-athletic-gym-', 'acrobatics', 'athleticgamesgym1', 'athleticgamesgym2', 'athleticgamesgym3', 'climbing', 'contortions', 'diving', 'flyglide', 'juggling', 'polevaulting', 'rappelling', 'skating', 'skiing', 'stiltwalking', 'surfing', 'tightrope', 'tumbling', 'alertness', 'senseambush', 'cat-aware-search-', 'detecttraps', 'lieperception', 'locatehidden', 'observation', 'poisonperception', 'readtracks', 'surveillance', 'tracking', 'cat-aware-senses-', 'directionsense', 'realityawareness', 'senseawareness1', 'sitawareness1', 'sla', 'timesense', 'awaresenses1', 'awaresenses2', 'awaresenses3', 'bodydev', 'adrenaldeflecting', 'mountedcombat', 'quickdraw', 'reversestroke1', 'subdual', 'swashbuckling', 'tumbleevade', 'twoweaponfighting1', 'combatmaneuvers1', 'combatmaneuvers2', 'combatmaneuvers3', 'cat-communications-', 'lipreading', 'signaling', 'cooking', 'fletching', 'leathercrafts', 'metalcrafts', 'ropemastery', 'scribing', 'sewing', 'skinning', 'stonecrafts', 'trapping', 'woodcrafts', 'craft15', 'craft16', 'cat-directed-spells-', 'firebolt', 'icebolt', 'lightningbolt', 'shockbolt', 'waterbolt', 'boltattack6', 'cat-influence-', 'bribery', 'diplomacy', 'duping', 'interrogation', 'leadership', 'propaganda', 'publicspeaking', 'seduction', 'trading', 'cat-lore-general-', 'culturelore1', 'faunalore', 'floralore', 'heraldry', 'history', 'philosophy', 'regionlore1', 'religion', 'loregeneral1', 'loregeneral2', 'loregeneral3', 'cat-lore-magical-', 'artifactlore', 'circlelore', 'planarlore', 'spelllore', 'symbollore', 'undeadlore', 'wardinglore', 'cat-lore-obscure-', 'demondevillore', 'dragonlore', 'faerielore', 'xenolore1', 'xenolore2', 'xenolore3', 'cat-lore-technical-', 'herblore', 'locklore', 'metallore', 'poisonlore', 'stonelore', 'tradinglore', 'cat-ma-striking-', 'boxing', 'striking1', 'striking2', 'striking3', 'striking4', 'tackling', 'cat-ma-sweeps-', 'blocking', 'sweeps1', 'sweeps2', 'sweeps3', 'sweeps4', 'wrestling', 'cat-outdoor-animal-', 'animalhandling1', 'animalhealing1', 'animalmastery', 'animaltraining1', 'driving1', 'herding1', 'riding1', 'outdooranimal1', 'outdooranimal2', 'outdooranimal3', 'cat-outdoor-environ-', 'caving', 'foraging', 'hunting', 'stargazing', 'survival1', 'survival2', 'survival3', 'weatherwatching', 'cat-power-awareness-', 'attunement', 'divination1', 'divination2', 'divination3', 'powerperception', 'readrunes', 'channeling', 'magicritual', 'spellmastery1', 'spellmastery2', 'spellmastery3', 'transcendarmor', 'ppdev', 'cat-science-basic-', 'basicmath', 'research', 'advancedmath', 'anthropology1', 'alchemy', 'astronomy', 'biochemistry', 'psychology', 'specscience1', 'specscience2', 'cat-self-control-', 'adrenalbalance', 'adrenalconcentration', 'adrenallanding', 'adrenalleaping', 'adrenalquickdraw', 'adrenalspeed', 'adrenalstabilization', 'adrenalstrength', 'cleansingtrance', 'controllycanthropy', 'deathtrance', 'frenzy', 'healingtrance', 'meditation', 'mnemonics', 'sleeptrance', 'stunnedmaneuvering', 'brawling', 'disarmarmedvs1h', 'disarmarmedvs2h', 'disarmarmedvspolearm', 'disarmarmedvs2wcombo', 'disarmunarmedvs1hedged', 'disarmunarmedvs2h', 'disarmunarmedvspolearm', 'disarmunarmedvs1hconcussion', 'jousting', 'adrenaldefense', 'adrenaltoughness', 'cat-subterfuge-attack-', 'ambush', 'silentkill', 'cat-subterfuge-mechanics-', 'camouflage', 'disarmingtraps', 'disguise', 'counterfeiting', 'forgery1', 'hidingitems', 'picklocks', 'settraps', 'trapbuilding', 'usepoison', 'subtermech1', 'subtermech2', 'cat-subterfuge-stealth-', 'hiding', 'pickpockets', 'stalking', 'trickery', 'cat-tech-general-', 'begging', 'firstaid', 'gambling', 'mapping', 'operatingequipment', 'orienteering', 'sailing', 'tacticalgames', 'useprepherbs', 'advertising', 'architecture', 'diagnostics1', 'dowsing', 'engineering1', 'mechanition1', 'militaryorg1', 'mining1', 'secondaid', 'surgery', 'techprof1', 'techprof2', 'techprof3', 'administration', 'appraisal', 'boatpilot1', 'cartography', 'evalarmor', 'evalmetal', 'evalstone', 'evalweapon', 'gimmickry', 'hypnosis', 'midwifery', 'navigation', 'prepareherbs', 'preparepoisons', 'siegeengineering', 'tactics', 'techvoc1', 'techvoc2', 'cat-urban-', 'contacting', 'mingling', 'scrounging', 'streetwise', 'cat-weapon-1hconcussion-', 'weapon1hc1', 'weapon1hc2', 'weapon1hc3', 'cat-weapon-1hedged-', 'weapon1he1', 'weapon1he2', 'weapon1he3', 'cat-weapon-2handed-', 'weapon2hand1', 'weapon2hand2', 'weapon2hand3', 'cat-weapon-missile-', 'weaponmissile1', 'weaponmissile2', 'weaponmissile3', 'cat-weapon-missileartillery-', 'weaponmissileart1', 'weaponmissileart2', 'weaponmissileart3', 'cat-weapon-thrown-', 'weaponthrown1', 'weaponthrown2', 'weaponthrown3', 'cat-weapon-polearms-', 'weaponpolearm1', 'weaponpolearm2', 'weaponpolearm3'];   // list of skills
            _.each(skills, function(skill) {
                //	console.log('/* ---------- event: '+event+' ------------ */');  
                SkillChange(skill+'ranks');
            });
            getSectionIDs('repeating_skills', function(idarray) {
                for (var i=0 ; i<=idarray.length; i++) {
                    SkillChange('repeating_skills_'+ idarray[i]+'_skillranks');
                }
            });
            getSectionIDs('repeating_langs', function(idarray) {
                for (var i=0 ; i<=idarray.length; i++) {
                    SkillChange('repeating_langs_'+ idarray[i]+'_languagewrittenranks');
                    SkillChange('repeating_langs_'+ idarray[i]+'_languagespokenranks');
                }
            });
        }
    });
});

//  <!---- Run the setup to fix the npc Base Hits Code based on npchitscode (depreciated) once when the sheet is first opened ---->
on('sheet:opened', function() {
    getAttrs(['sheetversion', 'npchitscode'], function(values) {
		const output = {};
		var npchitscode = parseFloat(values.npchitscode);
        if (parseFloat(values.sheetversion) < 3.13){
            if (npchitscode == .01){		//-
                output['npcbasehitscode']= 0; 
                output['npcexhaustmiscbonus']= 0;
                output['npchitsperleveldiff']= 0;
                output['npcstaminabonus']= '-';
            } else if (npchitscode == .02){		//A
                output['npcbasehitscode']= 1;
                output['npcexhaustmiscbonus']= 0;
                output['npchitsperleveldiff']= 1;
                output['npcstaminabonus']= '-7(01); -5(02-09); -3(10-25); -2(26-30); 0(31-70); 2(71-75); 3(76-92); 5(93-99); 7(100)';
            } else if (npchitscode == .03){		//B
                output['npcbasehitscode']= 2;
                output['npcexhaustmiscbonus']= 0;
                output['npchitsperleveldiff']= 2;
                output['npcstaminabonus']= '-8(01); -7(02-04); -5(05-11); -3(12-31); -2(32-35); 0(36-65); 2(66-69); 3(70-89); 5(90-96); 7(97-99); 8(100)';
            } else if (npchitscode == .04){		//C
                output['npcbasehitscode']= 3;
                output['npcexhaustmiscbonus']= 0;
                output['npchitsperleveldiff']= 3;
                output['npcstaminabonus']= '-10(01); -8(02-03); -7(04-08); -5(09-23); -3(24-74); -2(75-79); 0(75-89); 2(86-89); 3(90-94); 5(95-97); 7(98-99); 8(100)';
            } else if (npchitscode == .05){		//D
                output['npcbasehitscode']= 4;
                output['npcexhaustmiscbonus']= 0;
                output['npchitsperleveldiff']= 5;
                output['npcstaminabonus']= '-10(01); -8(02); -7(03-04); -5(05-09); -3(10-25); -2(26-30); 0(31-70); 2(71-75); 3(76-89); 5(90-94); 7(95-97); 8(98-99); 10(100)';
            } else if (npchitscode == 50){		//E;
                output['npcbasehitscode']= 5;
                output['npcexhaustmiscbonus']= 50;
                output['npchitsperleveldiff']= 8;
                output['npcstaminabonus']= '-10(01); -8(02); -7(03-04); -5(05-09); -3(10-24); -2(25-29); 0(30-67); 2(68-72); 3(73-87); 5(88-92); 7(93-95); 8(96-97); 10(98); 12(99); 13(100)';
            } else if (npchitscode == 100){		//F
                output['npcbasehitscode']= 6;
                output['npcexhaustmiscbonus']= 100;
                output['npchitsperleveldiff']= 10;
                output['npcstaminabonus']= '-10(01); -8(02); -7(03); -5(04-05); -3(06-10); -2(11-15); 0(16-20); 2(21-25); 3(26-72); 5(73-87); 7(88-92); 8(93-95); 10(96-97); 12(98); 13(99); 17(100)';
            } else if (npchitscode == 150){		//G
                output['npcbasehitscode']= 7;
                output['npcexhaustmiscbonus']= 150;
                output['npchitsperleveldiff']= 12;
                output['npcstaminabonus']= '-10(01); -8(02); -7(03); -5(04); -3(05-06); -2(07-11); 0(12-16); 2(17-31); 3(32-36); 5(37-71); 7(72-86); 8(87-91); 10(92-94); 12(95-96); 13(97-98); 17(99); 22(100)';
            } else if (npchitscode == 200){		//H
                output['npcbasehitscode']= 8;
                output['npcexhaustmiscbonus']= 200;
                output['npchitsperleveldiff']= 15;
                output['npcstaminabonus']= '-10(01); -8(02); -7(03); -5(04); -3(05); -2(06-07); 0(08-12); 2(13-17); 3(18-32); 5(32-37); 7(38-72); 8(73-88); 10(89-93); 12(94-96); 13(97-98); 17(99); 22(100)';
            } else {
                output['npcbasehitscode']= 0;
                output['npcexhaustmiscbonus']= 0;
                output['npchitsperleveldiff']= 0;
                output['npcstaminabonus']= '-';
            }
		setAttrs(output);
        }
    });
});

//  <!---- Run the setup if the npc Base Hits code changes ---->
on('change:npcbasehitscode', function() {
//console.log('------------entering npcbasehitscode change---------------');
    getAttrs(['npcbasehitscode'], function(values) {
		const output = {};
		var npcbasehitscode = parseFloat(values.npcbasehitscode);
        //	console.log('/* ---------- npcbasehitscode: '+values.npcbasehitscode+' ------------ */'); 
        if (npcbasehitscode == 1){   //A
            output['npcexhaustmiscbonus']= 0;
            output['npchitsperleveldiff']= 1;
            output['npcstaminabonus']= '-7(01); -5(02-09); -3(10-25); -2(26-30); 0(31-70); 2(71-75); 3(76-92); 5(93-99); 7(100)';
        } else if (npcbasehitscode == 2){   //B
            output['npcexhaustmiscbonus']= 0;
            output['npchitsperleveldiff']= 2;
            output['npcstaminabonus']= '-8(01); -7(02-04); -5(05-11); -3(12-31); -2(32-35); 0(36-65); 2(66-69); 3(70-89); 5(90-96); 7(97-99); 8(100)';
        } else if (npcbasehitscode == 3){   //C
            output['npcexhaustmiscbonus']= 0;
            output['npchitsperleveldiff']= 3;
            output['npcstaminabonus']= '-10(01); -8(02-03); -7(04-08); -5(09-23); -3(24-74); -2(75-79); 0(75-89); 2(86-89); 3(90-94); 5(95-97); 7(98-99); 8(100)';
        } else if (npcbasehitscode == 4){   //D
            output['npcexhaustmiscbonus']= 0;
            output['npchitsperleveldiff']= 5;
            output['npcstaminabonus']= '-10(01); -8(02); -7(03-04); -5(05-09); -3(10-25); -2(26-30); 0(31-70); 2(71-75); 3(76-89); 5(90-94); 7(95-97); 8(98-99); 10(100)';
        } else if (npcbasehitscode == 5){   //E
            output['npcexhaustmiscbonus']= 50;
            output['npchitsperleveldiff']= 8;
            output['npcstaminabonus']= '-10(01); -8(02); -7(03-04); -5(05-09); -3(10-24); -2(25-29); 0(30-67); 2(68-72); 3(73-87); 5(88-92); 7(93-95); 8(96-97); 10(98); 12(99); 13(100)';
        } else if (npcbasehitscode == 6){   //F
            output['npcexhaustmiscbonus']= 100;
            output['npchitsperleveldiff']= 10;
            output['npcstaminabonus']= '-10(01); -8(02); -7(03); -5(04-05); -3(06-10); -2(11-15); 0(16-20); 2(21-25); 3(26-72); 5(73-87); 7(88-92); 8(93-95); 10(96-97); 12(98); 13(99); 17(100)';
        } else if (npcbasehitscode == 7){   //G
            output['npcexhaustmiscbonus']= 150;
            output['npchitsperleveldiff']= 12;
             output['npcstaminabonus']= '-10(01); -8(02); -7(03); -5(04); -3(05-06); -2(07-11); 0(12-16); 2(17-31); 3(32-36); 5(37-71); 7(72-86); 8(87-91); 10(92-94); 12(95-96); 13(97-98); 17(99); 22(100)';
        } else if (npcbasehitscode == 8){   //H
            output['npcexhaustmiscbonus']= 200;
            output['npchitsperleveldiff']= 15;
            output['npcstaminabonus']= '-10(01); -8(02); -7(03); -5(04); -3(05); -2(06-07); 0(08-12); 2(13-17); 3(18-32); 5(32-37); 7(38-72); 8(73-88); 10(89-93); 12(94-96); 13(97-98); 17(99); 22(100)';
        } else {
            output['npcexhaustmiscbonus']= 0;
            output['npchitsperleveldiff']= 0;
            output['npcstaminabonus']= '-';
        }
		setAttrs(output);
    });
});

//  <!---- Run the setup if the npc Habitat code clear box is clicked ---->
on('change:habitatclear', function() {
    setAttrs({
        habitat1code: 0,
        habitat2code: 0,
        habitat3code: 0,
        habitat4code: 0,
        habitat5code: 0,
        habitat6code: 0,
        habitat7code: 0,
        habitat8code: 0,
        habitat9code: 0,
        habitat10code: 0,
        habitat11code: 0,
        habitat12code: 0,
        habitatclear: 0
    });
});

//  <!---- Run the setup if the npc Environmental Special Features code clear box is clicked ---->
on('change:spfeaturesclear', function() {
    setAttrs({
        spfeatures1code: 0,
        spfeatures2code: 0,
        spfeatures3code: 0,
        spfeatures4code: 0,
        spfeatures5code: 0,
        spfeatures6code: 0,
        spfeatures7code: 0,
        spfeatures8code: 0,
        spfeatures9code: 0,
        spfeatures10code: 0,
        spfeatures11code: 0,
        spfeatures12code: 0,
        spfeaturesclear: 0
    });
});

//  <!---- Run the setup if the npc Environmental Water Sources code clear box is clicked ---->
on('change:watersourcesclear', function() {
    setAttrs({
        watersources1code: 0,
        watersources2code: 0,
        watersources3code: 0,
        watersources4code: 0,
        watersources5code: 0,
        watersources6code: 0,
        watersources7code: 0,
        watersources8code: 0,
        watersources9code: 0,
        watersources10code: 0,
        watersources11code: 0,
        watersources12code: 0,
        watersourcesclear: 0
    });
});

//  <!---- Run the setup if the npc Environmental Terrain code clear box is clicked ---->
on('change:terrainclear', function() {
    setAttrs({
        terrain1code: 0,
        terrain2code: 0,
        terrain3code: 0,
        terrain4code: 0,
        terrain5code: 0,
        terrain6code: 0,
        terrainclear: 0
    });
});

//  <!---- Run the setup if the npc Environmental Vegetation code clear box is clicked ---->
on('change:vegetationclear', function() {
    setAttrs({
        vegetation1code: 0,
        vegetation2code: 0,
        vegetation3code: 0,
        vegetation4code: 0,
        vegetation5code: 0,
        vegetation6code: 0,
        vegetation7code: 0,
        vegetation8code: 0,
        vegetationclear: 0
    });
});

//  <!---- Parse the treasures out of the treasure codes ---->
on('change:treasurecode', function() {
//console.log('------------looks like we got us some treasure, lads---------------');
    getAttrs(['treasurecode'], function(values) {
        //console.log('/* ---------- treasurecode: '+values.treasurecode+' ------------ */');
        var treasure='';
        var count=0;
        if((values.treasurecode)==null)
            values.treasurecode = '-';
        //console.log('/* 0---------- treasurecode: '+values.treasurecode+' ---- treasure: '+values.treasure+'---count:'+values.count+' ------------ */');
        if(values.treasurecode.includes('a')) {
            //console.log('------------it be an a, eh?---------------');
            count=values.treasurecode.split('a').length-1;
            //console.log('/* 1---------- treasure: '+values.treasure+'---count:'+values.count+' ------------ */');
            treasure += count+'x Items= Very Poor & '+ count+'x Wealth = Very Poor; ';
            //console.log('/* 2---------- treasure: '+values.treasure+'---count:'+values.count+' ------------ */');
        }	
        if(values.treasurecode.includes('b')){
            count=values.treasurecode.split('b').length-1;
            treasure += count+'x Items= Very Poor & '+ count+'x Wealth = Poor; ';
        }	
        if(values.treasurecode.includes('c')){
            count=values.treasurecode.split('c').length-1;
            treasure += count+'x Items= Very Poor & '+ count+'x Wealth = Normal; ';
        }	
        if(values.treasurecode.includes('d')){
            count=values.treasurecode.split('d').length-1;
            treasure += count+'x Items= Very Poor & '+ count+'x Wealth = Rich; ';
        }	
        if(values.treasurecode.includes('e')){
            count=values.treasurecode.split('e').length-1;
            treasure += count+'x Items= Very Poor & '+ count+'x Wealth = Very Rich; ';
        }	
        if(values.treasurecode.includes('f')){
            count=values.treasurecode.split('f').length-1;
            treasure += count+'x Items= Poor & '+ count+'x Wealth = Very Poor; ';
        }	
        if(values.treasurecode.includes('g')){
            count=values.treasurecode.split('g').length-1;
            treasure += count+'x Items= Poor & '+ count+'x Wealth = Poor; ';
        }	
        if(values.treasurecode.includes('h')){
            count=values.treasurecode.split('h').length-1;
            treasure += count+'x Items= Poor & '+ count+'x Wealth = Normal; ';
        }	
        if(values.treasurecode.includes('i')){
            count=values.treasurecode.split('i').length-1;
            treasure += count+'x Items= Poor & '+ count+'x Wealth = Rich; ';
        }	
        if(values.treasurecode.includes('j')){
            count=values.treasurecode.split('j').length-1;
            treasure += count+'x Items= Poor & '+ count+'x Wealth = Very Rich; ';
        }	
        if(values.treasurecode.includes('k')){
            count=values.treasurecode.split('k').length-1;
            treasure += count+'x Items= Normal & '+ count+'x Wealth = Very Poor; ';	
        }	
        if(values.treasurecode.includes('l')){
            count=values.treasurecode.split('l').length-1;
            treasure += count+'x Items= Normal & '+ count+'x Wealth = Poor; ';
        }	
        if(values.treasurecode.includes('m')){
            count=values.treasurecode.split('m').length-1;
            treasure += count+'x Items= Normal & '+ count+'x Wealth = Normal; ';
        }	
        if(values.treasurecode.includes('n')){
            count=values.treasurecode.split('n').length-1;
            treasure += count+'x Items= Normal & '+ count+'x Wealth = Rich; ';
        }	
        if(values.treasurecode.includes('o')){
            count=values.treasurecode.split('o').length-1;
            treasure += count+'x Items= Normal & '+ count+'x Wealth = Very Rich; ';
        }	
        if(values.treasurecode.includes('p')){
            count=values.treasurecode.split('p').length-1;
            treasure += count+'x Items= Rich & '+ count+'x Wealth = Very Poor; ';
        }	
        if(values.treasurecode.includes('q')){
            count=values.treasurecode.split('q').length-1;
            treasure += count+'x Items= Rich & '+ count+'x Wealth = Poor; ';
        }	
        if(values.treasurecode.includes('r')){
            count=values.treasurecode.split('r').length-1;
            treasure += count+'x Items= Rich & '+ count+'x Wealth = Normal; ';
        }	
        if(values.treasurecode.includes('s')){
            count=values.treasurecode.split('s').length-1;
            treasure += count+'x Items= Rich & '+ count+'x Wealth = Rich; ';
        }	
        if(values.treasurecode.includes('t')){
            count=values.treasurecode.split('t').length-1;
            treasure += count+'x Items= Rich & '+ count+'x Wealth = Very Rich; ';
        }	
        if(values.treasurecode.includes('u')){
            count=values.treasurecode.split('u').length-1;
            treasure += count+'x Items= Very Rich & '+ count+'x Wealth = Very Poor; ';
        }	
        if(values.treasurecode.includes('v')){
            count=values.treasurecode.split('v').length-1;
            treasure += count+'x Items= Very Rich & '+ count+'x Wealth = Poor; ';
        }	
        if(values.treasurecode.includes('w')){
            count=values.treasurecode.split('w').length-1;
            treasure += count+'x Items= Very Rich & '+ count+'x Wealth = Normal; ';
        }	
        if(values.treasurecode.includes('x')){
            count=values.treasurecode.split('x').length-1;
            treasure += count+'x Items= Very Rich & '+ count+'x Wealth = Rich; ';
        }	
        if(values.treasurecode.includes('y')){
            count=values.treasurecode.split('y').length-1;
            treasure += count+'x Items= Very Rich & '+ count+'x Wealth = Very Rich; ';
        }	
        if(values.treasurecode.includes('z')){
            count=values.treasurecode.split('z').length-1;
            treasure += count+'x Items= Special & '+ count+'x Wealth = Special; ';
        }	
        if(values.treasurecode.includes('*'))
            treasure += 'Special, see description.  ';
        if(values.treasurecode.includes('-'))
            treasure = '--';
        if(values.treasurecode.includes(' '))
            treasure = '-';
        setAttrs({
            npctreasure: treasure
        });
    });
});
//						npctreasure= the treasures  
//						treasurecode= the codes
//  						"Special; see description" = *
//							"Items= Very Poor; Wealth = Very Poor;" = a
//							"Items= Very Poor; Wealth = Poor;" = b
//							"Items= Very Poor; Wealth = Normal;" = c
//							"Items= Very Poor; Wealth = Rich;" = d
//							"Items= Very Poor; Wealth = Very Rich;" = e
//							"Items= Poor; Wealth = Very Poor;" = f
//							"Items= Poor; Wealth = Poor;" = g
//							"Items= Poor; Wealth = Normal;" = h
//							"Items= Poor; Wealth = Rich;" = i
//							"Items= Poor; Wealth = Very Rich;" = j
//							"Items= Normal; Wealth = Very Poor;" = k		
//							"Items= Normal; Wealth = Poor;" = l
//							"Items= Normal; Wealth = Normal;" = m
//							"Items= Normal; Wealth = Rich;" = n
//							"Items= Normal; Wealth = Very Rich;" = o
//							"Items= Rich; Wealth = Very Poor;" = p
//							"Items= Rich; Wealth = Poor;" = q
//							"Items= Rich; Wealth = Normal;" = r
//							"Items= Rich; Wealth = Rich;" = s
//							"Items= Rich; Wealth = Very Rich;" = t
//							"Items= Very Rich; Wealth = Very Poor;" = u
//							"Items= Very Rich; Wealth = Poor;" = v
//							"Items= Very Rich; Wealth = Normal;" = w
//							"Items= Very Rich; Wealth = Rich;" = x
//							"Items= Very Rich; Wealth = Very Rich;" = y
//							"Items= Special; Wealth = Special;" = z


//  <!---- Parse the NPC JSON code to import an NPC ---->
on('change:npcimportcheckbox', function(){
//console.log('------------entering NPC Import change---------------');
    getAttrs(['npcinput','npcimportcheckbox'], function(text) {
        if(text.npcimportcheckbox=='1'){
            var goodcode=true;
            var error='';
            //console.log('------------checkbox is 1---------------');
            try{
                var npcinputfile=JSON.parse(text.npcinput);
            }catch(err){
                goodcode=false;
            }
            if(goodcode){
                var attributes={};
                try{
                    if(npcinputfile.category!=null)
                        attributes.npccategory=npcinputfile.category;
                    if(npcinputfile.type!=null)
                        attributes.type=npcinputfile.type;
                    if(npcinputfile.class!=null)
                        attributes.class=npcinputfile.class;
                    if(npcinputfile.level!=null)
                        attributes.npclevel=npcinputfile.level;
                    if(npcinputfile.levelcode!=null)
                        attributes.levelcode=npcinputfile.levelcode;
                    if(npcinputfile.carrycapacity!=null)
                        attributes.npccarrycapacity=npcinputfile.carrycapacity;
                    if(npcinputfile.ridingbonus!=null)
                        attributes.npcridingbonus=npcinputfile.ridingbonus;
                    if(npcinputfile.description!=null)
                        attributes.npcdescription=npcinputfile.description;
                    if(npcinputfile.lifestyle!=null)
                        attributes.npclifestyle=npcinputfile.lifestyle;
                    if(npcinputfile.combat!=null)
                        attributes.npccombatnotes=npcinputfile.combat;
                    if(npcinputfile.background!=null)
                        attributes.npcbackgroundnotes=npcinputfile.background;
                    if(npcinputfile.observations!=null)
                        attributes.npcobservationsnotes=npcinputfile.observations;
                    if(npcinputfile.notes!=null)
                        attributes.npcothernotes=npcinputfile.notes;
                    if(npcinputfile.numenc!=null)
                        attributes.npcnumenc=npcinputfile.numenc;
                    if(npcinputfile.height!=null)
                        attributes.npcheight=npcinputfile.height;
                    if(npcinputfile.offspring!=null)
                        attributes.npcoffspring=npcinputfile.offspring;
                    if(npcinputfile.treasure!=null){
                        attributes.treasurecode=npcinputfile.treasure;
                    }
                    if(npcinputfile.bonusxp!=null){
                        if(npcinputfile.bonusxp=='-'){
                            attributes.bonusxpcode='  --(1-2)/   --(3)/   --(5)/   --(7)/   --(9)/   --(11)/   --(13)/   --(15)/   --(17)/   --(19)/   --(21+)';
                        }else if(npcinputfile.bonusxp=='A'){
                            attributes.bonusxpcode='  50(1-2)/   40(3)/   30(5)/   20(7)/   10(9)/   --(11)/   --(13)/   --(15)/   --(17)/   --(19)/   --(21+)';
                        }else if(npcinputfile.bonusxp=='B'){
                            attributes.bonusxpcode='  75(1-2)/   60(3)/   50(5)/   40(7)/   30(9)/   20(11)/   10(13)/   --(15)/   --(17)/   --(19)/   --(21+)';
                        }else if(npcinputfile.bonusxp=='C'){
                            attributes.bonusxpcode=' 100(1-2)/   95(3)/   90(5)/   85(7)/   80(9)/   75(11)/   70(13)/   65(15)/   60(17)/   55(19)/   50(21+)';
                        }else if(npcinputfile.bonusxp=='D'){
                            attributes.bonusxpcode=' 200(1-2)/  190(3)/  180(5)/  170(7)/  160(9)/  150(11)/  140(13)/  130(15)/  120(17)/  110(19)/  100(21+)';
                        }else if(npcinputfile.bonusxp=='E'){
                            attributes.bonusxpcode=' 400(1-2)/  380(3)/  360(5)/  340(7)/  320(9)/  300(11)/  280(13)/  260(15)/  240(17)/  220(19)/  210(21+)';
                        }else if(npcinputfile.bonusxp=='F'){
                            attributes.bonusxpcode=' 800(1-2)/  760(3)/  720(5)/  680(7)/  640(9)/  600(11)/  560(13)/  520(15)/  480(17)/  440(19)/  400(21+)';
                        }else if(npcinputfile.bonusxp=='G'){
                            attributes.bonusxpcode='1200(1-2)/ 1140(3)/ 1080(5)/ 1020(7)/  960(9)/  900(11)/  840(13)/  780(15)/  720(17)/  660(19)/  600(21+)';
                        }else if(npcinputfile.bonusxp=='H'){
                            attributes.bonusxpcode='1600(1-2)/ 1520(3)/ 1440(5)/ 1360(7)/ 1280(9)/ 1200(11)/ 1120(13)/ 1040(15)/  960(17)/  880(19)/  800(21+)';
                        }else if(npcinputfile.bonusxp=='I'){
                            attributes.bonusxpcode='2000(1-2)/ 1900(3)/ 1800(5)/ 1700(7)/ 1600(9)/ 1500(11)/ 1400(13)/ 1300(15)/ 1200(17)/ 1100(19)/ 1000(21+)';
                        }else if(npcinputfile.bonusxp=='J'){
                            attributes.bonusxpcode='3000(1-2)/ 2850(3)/ 2700(5)/ 2550(7)/ 2400(9)/ 2250(11)/ 2100(13)/ 1950(15)/ 1800(17)/ 1650(19)/ 1500(21+)';
                        }else if(npcinputfile.bonusxp=='K'){
                            attributes.bonusxpcode='4000(1-2)/ 3800(3)/ 3600(5)/ 3400(7)/ 3200(9)/ 3000(11)/ 2800(13)/ 2600(15)/ 2400(17)/ 2200(19)/ 2000(21+)';
                        }else if(npcinputfile.bonusxp=='L'){
                            attributes.bonusxpcode='5000(1-2)/ 4750(3)/ 4500(5)/ 4250(7)/ 4000(9)/ 3750(11)/ 3500(13)/ 3250(15)/ 3000(17)/ 2750(19)/ 2500(21+)';
                        }else {
                            attributes.bonusxpcode='  --(1-2)/   --(3)/   --(5)/   --(7)/   --(9)/   --(11)/   --(13)/   --(15)/   --(17)/   --(19)/   --(21+)';
                        }
                    }
                    if(npcinputfile.outlook!=null){
                        if(npcinputfile.outlook=='-'){
                            attributes.outlookcode='---';
                        }else if(npcinputfile.outlook=='---'){
                            attributes.outlookcode='---';
                        }else if(npcinputfile.outlook=='Aggres'){
                            attributes.outlookcode='Aggressive and will attack if provoked or hungry.';
                        }else if(npcinputfile.outlook=='Agress'){
                            attributes.outlookcode='Aggressive and will attack if provoked or hungry.';
                        }else if(npcinputfile.outlook=='Agress.'){
                            attributes.outlookcode='Aggressive and will attack if provoked or hungry.';
                        }else if(npcinputfile.outlook=='Aggres.'){
                            attributes.outlookcode='Aggressive and will attack if provoked or hungry.';
                        }else if(npcinputfile.outlook=='Aloof'){
                            attributes.outlookcode='Ignores other creatures unless interfered with or attacked.';
                        }else if(npcinputfile.outlook=='Altru'){
                            attributes.outlookcode='Altruistic, has an unselfish regard for the interests of others, often to the extent of risking own safety.';
                        }else if(npcinputfile.outlook=='Altru.'){
                            attributes.outlookcode='Altruistic, has an unselfish regard for the interests of others, often to the extent of risking own safety.';
                        }else if(npcinputfile.outlook=='Belig'){
                            attributes.outlookcode='Belligerent, often attacks without provocation.';
                        }else if(npcinputfile.outlook=='Belig.'){
                            attributes.outlookcode='Belligerent, often attacks without provocation.';
                        }else if(npcinputfile.outlook=='Bellig'){
                            attributes.outlookcode='Belligerent, often attacks without provocation.';
                        }else if(npcinputfile.outlook=='Bellig.'){
                            attributes.outlookcode='Belligerent, often attacks without provocation.';
                        }else if(npcinputfile.outlook=='Berserk'){
                            attributes.outlookcode='Attacks closest living creature until it is destroyed.';
                        }else if(npcinputfile.outlook=='Carefree'){
                            attributes.outlookcode='Does not believe danger or misfortune exists for it.';
                        }else if(npcinputfile.outlook=='Cruel'){
                            attributes.outlookcode='Not only hostile, but delights in death, pain, and suffering.';
                        }else if(npcinputfile.outlook=='Domin'){
                            attributes.outlookcode='Desires power, attempts to control or dominate other creatures.';
                        }else if(npcinputfile.outlook=='Domin.'){
                            attributes.outlookcode='Desires power, attempts to control or dominate other creatures.';
                        }else if(npcinputfile.outlook=='Good'){
                            attributes.outlookcode='Opposed to those who are evil(cruel, hostile, belligerent, etc); supportive of those who are also good.';
                        }else if(npcinputfile.outlook=='Greedy'){
                            attributes.outlookcode='Will attack or attempt to steal from other creatures if risk does not seem too high.';
                        }else if(npcinputfile.outlook=='Hostile'){
                            attributes.outlookcode='Normally attacks other creatures on sight.';
                        }else if(npcinputfile.outlook=='Hungry'){
                            attributes.outlookcode='If hungry, will attack anything edible; otherwise normal.';
                        }else if(npcinputfile.outlook=='Inquis'){
                            attributes.outlookcode='Inquisitive and curious; will approach and examine unusual situations.';
                        }else if(npcinputfile.outlook=='Inquis.'){
                            attributes.outlookcode='Inquisitive and curious; will approach and examine unusual situations.';
                        }else if(npcinputfile.outlook=='Jumpy'){
                            attributes.outlookcode='Normally bolts at any sign of other creatures.';
                        }else if(npcinputfile.outlook=='Mission'){
                            attributes.outlookcode='Created with a specific purpose or mission.';
                        }else if(npcinputfile.outlook=='Normal'){
                            attributes.outlookcode='Watches and is wary of other creatures; will sometimes attack if hungry.';
                        }else if(npcinputfile.outlook=='Passive'){
                            attributes.outlookcode='Ignores the presence of other creatures unless threatened.';
                        }else if(npcinputfile.outlook=='Playful'){
                            attributes.outlookcode='Mischievous but playful; will attempt to play with or play pranks on other creatures.';
                        }else if(npcinputfile.outlook=='Protect'){
                            attributes.outlookcode='Protective of a thing, place, other creature, etc.';
                        }else if(npcinputfile.outlook=='Timid'){
                            attributes.outlookcode='Skittish around other creatures, runs at the slightest hint of danger.';
                        }else if(npcinputfile.outlook=='Varies'){
                            attributes.outlookcode='Varies by individual.';
                        }else if(npcinputfile.outlook=='Special'){
                            attributes.outlookcode='See description.';
                        }else {
                            attributes.outlookcode='Unknown';
                        }
                    }
                    if(npcinputfile.iq!=null){
                        if(npcinputfile.iq=='NO'){
                            attributes.iqcode='None; Animal Instincts';
                        }else if(npcinputfile.iq=='VL'){
                            attributes.iqcode='Very Low; Re/Me=1-5';
                        }else if(npcinputfile.iq=='LO'){
                            attributes.iqcode='Low; Re/Me=3-12';
                        }else if(npcinputfile.iq=='LI'){
                            attributes.iqcode='Little; Re/Me=7-25';
                        }else if(npcinputfile.iq=='IN'){
                            attributes.iqcode='Inferior; Re/Me=13-40';
                        }else if(npcinputfile.iq=='MD'){
                            attributes.iqcode='Mediocre; Re/Me=23-50';
                        }else if(npcinputfile.iq=='AV'){
                            attributes.iqcode='Average; Re/Me=35-65';
                        }else if(npcinputfile.iq=='AA'){
                            attributes.iqcode='Above Average; Re/Me=50-77';
                        }else if(npcinputfile.iq=='SU'){
                            attributes.iqcode='Superior; Re/Me=60-86';
                        }else if(npcinputfile.iq=='HI'){
                            attributes.iqcode='High; Re/Me=80-98';
                        }else if(npcinputfile.iq=='VH'){
                            attributes.iqcode='Very High; Re/Me=94-99';
                        }else if(npcinputfile.iq=='EX'){
                            attributes.iqcode='Exceptional; Re/Me=100-102';
                        }else if(npcinputfile.iq=='*'){
                            attributes.iqcode='*';
                        }else {
                            attributes.iqcode='Unknown';
                        }
                    }
                    if(npcinputfile.habitat!=null){
                        if(npcinputfile.habitat.includes('-')){
                            attributes.habitat1code='1';
                        }else if(npcinputfile.habitat.includes('ø')){
                            attributes.habitat2code='1';
                        }else if(npcinputfile.habitat.includes('(')){
                            attributes.habitat3code='1';
                            attributes.habitat4code='1';
                            attributes.habitat5code='1';
                            attributes.habitat6code='1';
                            attributes.habitat7code='1';
                            attributes.habitat8code='1';
                            attributes.habitat9code='1';
                            attributes.habitat10code='1';
                            attributes.habitat11code='1';
                            attributes.habitat12code='1';
                            state='0';
                        }else {
                            state='1';
                        }
                        if(npcinputfile.habitat.includes('a'))
                            attributes.habitat5code=state;
                        if(npcinputfile.habitat.includes('c'))
                            attributes.habitat11code=state;
                        if(npcinputfile.habitat.includes('f'))
                            attributes.habitat12code=state;
                        if(npcinputfile.habitat.includes('h'))
                            attributes.habitat3code=state;
                        if(npcinputfile.habitat.includes('k'))
                            attributes.habitat9code=state;
                        if(npcinputfile.habitat.includes('m'))
                            attributes.habitat7code=state;
                        if(npcinputfile.habitat.includes('n'))
                            attributes.habitat4code=state;
                        if(npcinputfile.habitat.includes('s'))
                            attributes.habitat8code=state;
                        if(npcinputfile.habitat.includes('t'))
                            attributes.habitat10code=state;
                        if(npcinputfile.habitat.includes('w'))
                            attributes.habitat6code=state;
                    }
                    if(npcinputfile.specialfeatures!=null){
                        if(npcinputfile.specialfeatures.includes('-')){
                            attributes.spfeatures1code='1';
                        }else if(npcinputfile.specialfeatures.includes('ø')){
                            attributes.spfeatures2code='1';
                        }else if(npcinputfile.specialfeatures.includes('(')){
                            attributes.spfeatures3code='1';
                            attributes.spfeatures4code='1';
                            attributes.spfeatures5code='1';
                            attributes.spfeatures6code='1';
                            attributes.spfeatures7code='1';
                            attributes.spfeatures8code='1';
                            attributes.spfeatures9code='1';
                            attributes.spfeatures10code='1';
                            attributes.spfeatures11code='1';
                            attributes.spfeatures12code='1';
                            state='0';
                        }else {
                            state='1';
                        }
                        if(npcinputfile.specialfeatures.includes('E'))
                            attributes.spfeatures3code=state;
                        if(npcinputfile.specialfeatures.includes('K'))
                            attributes.spfeatures4code=state;
                        if(npcinputfile.specialfeatures.includes('N'))
                            attributes.spfeatures5code=state;
                        if(npcinputfile.specialfeatures.includes('V'))
                            attributes.spfeatures6code=state;
                        if(npcinputfile.specialfeatures.includes('X'))
                            attributes.spfeatures7code=state;
                        if(npcinputfile.specialfeatures.includes('Y'))
                            attributes.spfeatures8code=state;
                        if(npcinputfile.specialfeatures.includes('†'))
                            attributes.spfeatures9code=state;
                        if(npcinputfile.specialfeatures.includes('@'))
                            attributes.spfeatures10code=state;
                        if(npcinputfile.specialfeatures.includes('§'))
                            attributes.spfeatures11code=state;
                        if(npcinputfile.specialfeatures.includes('#'))
                            attributes.spfeatures12code=state;
                    }
                    if(npcinputfile.watersources!=null){
                        if(npcinputfile.watersources.includes('-')){
                            attributes.watersources1code='1';
                        }else if(npcinputfile.watersources.includes('ø')){
                            attributes.watersources2code='1';
                        }else if(npcinputfile.watersources.includes('(')){
                            attributes.watersources3code='1';
                            attributes.watersources4code='1';
                            attributes.watersources5code='1';
                            attributes.watersources6code='1';
                            attributes.watersources7code='1';
                            attributes.watersources8code='1';
                            attributes.watersources9code='1';
                            attributes.watersources10code='1';
                            attributes.watersources11code='1';
                            attributes.watersources12code='1';
                            state='0';
                        }else {
                            state='1';
                        }
                        if(npcinputfile.watersources.includes('B'))
                            attributes.watersources3code=state;
                        if(npcinputfile.watersources.includes('F'))
                            attributes.watersources4code=state;
                        if(npcinputfile.watersources.includes('G'))
                            attributes.watersources5code=state;
                        if(npcinputfile.watersources.includes('I'))
                            attributes.watersources6code=state;
                        if(npcinputfile.watersources.includes('L'))
                            attributes.watersources7code=state;
                        if(npcinputfile.watersources.includes('M'))
                            attributes.watersources8code=state;
                        if(npcinputfile.watersources.includes('O'))
                            attributes.watersources9code=state;
                        if(npcinputfile.watersources.includes('Q'))
                            attributes.watersources10code=state;
                        if(npcinputfile.watersources.includes('S'))
                            attributes.watersources11code=state;
                        if(npcinputfile.watersources.includes('Z'))
                            attributes.watersources12code=state;
                    }
                    if(npcinputfile.terrain!=null){
                        if(npcinputfile.terrain.includes('-')){
                            attributes.terrain1code='1';
                        }else if(npcinputfile.terrain.includes('ø')){
                            attributes.terrain2code='1';
                        }else if(npcinputfile.terrain.includes('(')){
                            attributes.terrain3code='1';
                            attributes.terrain4code='1';
                            attributes.terrain5code='1';
                            attributes.terrain6code='1';
                            state='0';
                        }else {
                            state='1';
                        }
                        if(npcinputfile.terrain.includes('A'))
                            attributes.terrain3code=state;
                        if(npcinputfile.terrain.includes('R'))
                            attributes.terrain4code=state;
                        if(npcinputfile.terrain.includes('U'))
                            attributes.terrain5code=state;
                        if(npcinputfile.terrain.includes('W'))
                            attributes.terrain6code=state;
                    }
                    if(npcinputfile.vegetation!=null){
                        if(npcinputfile.vegetation.includes('-')){
                            attributes.vegetation1code='1';
                        }else if(npcinputfile.vegetation.includes('ø')){
                            attributes.vegetation2code='1';
                        }else if(npcinputfile.vegetation.includes('(')){
                            attributes.vegetation3code='1';
                            attributes.vegetation4code='1';
                            attributes.vegetation5code='1';
                            attributes.vegetation6code='1';
                            attributes.vegetation7code='1';
                            attributes.vegetation8code='1';
                            state='0';
                        }else {
                            state='1';
                        }
                        if(npcinputfile.vegetation.includes('C'))
                            attributes.vegetation3code=state;
                        if(npcinputfile.vegetation.includes('D'))
                            attributes.vegetation4code=state;
                        if(npcinputfile.vegetation.includes('H'))
                            attributes.vegetation5code=state;
                        if(npcinputfile.vegetation.includes('J'))
                            attributes.vegetation6code=state;
                        if(npcinputfile.vegetation.includes('P'))
                            attributes.vegetation7code=state;
                        if(npcinputfile.vegetation.includes('T'))
                            attributes.vegetation8code=state;
                    }
                    if(npcinputfile.frequency!=null){
                        if(npcinputfile.frequency=='1'){
                            attributes.frequencycode='Hunting modifier=+30; Frequency Occurring=100%';
                        }else if(npcinputfile.frequency=='2'){
                            attributes.frequencycode='Hunting modifier=+20; Frequency Occurring=90%';
                        }else if(npcinputfile.frequency=='3'){
                            attributes.frequencycode='Hunting modifier=+10; Frequency Occurring=75%';
                        }else if(npcinputfile.frequency=='4'){
                            attributes.frequencycode='Hunting modifier=+0;   Frequency Occurring=50%';
                        }else if(npcinputfile.frequency=='5'){
                            attributes.frequencycode='Hunting modifier=-10; Frequency Occurring=40%';
                        }else if(npcinputfile.frequency=='6'){
                            attributes.frequencycode='Hunting modifier=-20; Frequency Occurring=30%';
                        }else if(npcinputfile.frequency=='7'){
                            attributes.frequencycode='Hunting modifier=-30; Frequency Occurring=20%';
                        }else if(npcinputfile.frequency=='8'){
                            attributes.frequencycode='Hunting modifier=-50; Frequency Occurring=9%';
                        }else if(npcinputfile.frequency=='9'){
                            attributes.frequencycode='Hunting modifier=-70; Frequency Occurring=4%';
                        }else {
                            attributes.frequencycode='Unknown';
                        }
                    }
                    attributes.frequency=npcinputfile.frequency;
                    if(npcinputfile.size!=null)
                        attributes.npcsize=npcinputfile.size;
                    if(npcinputfile.basemove!=null)
                        attributes.npcbmmr=npcinputfile.basemove;
                    if(npcinputfile.maxpace!=null){
                        if(npcinputfile.maxpace=='Walk'){
                            attributes.npcmaxpace='1';
                        }else if(npcinputfile.maxpace=='Jog'){
                            attributes.npcmaxpace='1.5';
                        }else if(npcinputfile.maxpace=='Run'){
                            attributes.npcmaxpace='2';
                        }else if(npcinputfile.maxpace=='Spt'){
                            attributes.npcmaxpace='3';
                        }else if(npcinputfile.maxpace=='FSpt'){
                            attributes.npcmaxpace='4';
                        }else if(npcinputfile.maxpace=='Dash'){
                            attributes.npcmaxpace='5';
                        }else if(npcinputfile.maxpace=='Var'){
                            attributes.npcmaxpace='0 [varies]';
                        }else {
                            attributes.npcmaxpace='Unknown';
                        }
                    }
                    if(npcinputfile.mmbonus!=null)
                        attributes.npcmmbonus=npcinputfile.mmbonus;
                    if(npcinputfile.ms!=null){
                        if(npcinputfile.ms=='IN'){
                            attributes.npcms='-25';
                        }else if(npcinputfile.ms=='CR'){
                            attributes.npcms='-20';
                        }else if(npcinputfile.ms=='VS'){
                            attributes.npcms='-10';
                        }else if(npcinputfile.ms=='SL'){
                            attributes.npcms='0';
                        }else if(npcinputfile.ms=='MD'){
                            attributes.npcms='10';
                        }else if(npcinputfile.ms=='MF'){
                            attributes.npcms='20';
                        }else if(npcinputfile.ms=='FA'){
                            attributes.npcms='30';
                        }else if(npcinputfile.ms=='VF'){
                            attributes.npcms='40';
                        }else if(npcinputfile.ms=='BF'){
                            attributes.npcms='50';
                        }else {
                            attributes.npcms='0.5';
                        }
                    }
                    if(npcinputfile.aq!=null){
                        if(npcinputfile.aq=='IN'){
                            attributes.npcaq='-16';
                        }else if(npcinputfile.aq=='CR'){
                            attributes.npcaq='-12';
                        }else if(npcinputfile.aq=='VS'){
                            attributes.npcaq='-8';
                        }else if(npcinputfile.aq=='SL'){
                            attributes.npcaq='-4';
                        }else if(npcinputfile.aq=='MD'){
                            attributes.npcaq='0';
                        }else if(npcinputfile.aq=='MF'){
                            attributes.npcaq='4';
                        }else if(npcinputfile.aq=='FA'){
                            attributes.npcaq='8';
                        }else if(npcinputfile.aq=='VF'){
                            attributes.npcaq='12';
                        }else if(npcinputfile.aq=='BF'){
                            attributes.npcaq='16';
                        }else {
                            attributes.npcaq='0.5';
                        }
                    }
                    if(npcinputfile.hits!=null){
                        attributes.npchitpoints=npcinputfile.hits;
                        attributes.npchitpoints_max=npcinputfile.hits;
                    }
                    if(npcinputfile.hitcode!=null){
                        if(npcinputfile.hitcode=='A'){
                            attributes.npcbasehitscode='1';
                        } else if(npcinputfile.hitcode=='B'){
                            attributes.npcbasehitscode='2';
                        } else if(npcinputfile.hitcode=='C'){
                            attributes.npcbasehitscode='3';
                        } else if(npcinputfile.hitcode=='D'){
                            attributes.npcbasehitscode='4';
                        } else if(npcinputfile.hitcode=='E'){
                            attributes.npcbasehitscode='5';
                        } else if(npcinputfile.hitcode=='F'){
                            attributes.npcbasehitscode='6';
                        } else if(npcinputfile.hitcode=='G'){
                            attributes.npcbasehitscode='7';
                        } else if(npcinputfile.hitcode=='H'){
                            attributes.npcbasehitscode='8';
                        } else {
                            attributes.npcbasehitscode='0';
                        }
                    }	
                    if(npcinputfile.crit!=null){
                        if(npcinputfile.crit=='I'){
                            attributes.npccritscode1='Decrease crit severity by 1 (A mod by -20; B becomes A, etc.).';
                        } else if(npcinputfile.crit=='II'){
                            attributes.npccritscode1='Decrease crit severity by 2 (A mod by -50; B by -20; C becomes A, etc).';
                        } else if(npcinputfile.crit=='LA'){
                            attributes.npccritscode1='Use Large Creature Critical Strike Table.';
                        } else if(npcinputfile.crit=='SL'){
                            attributes.npccritscode1='Use Super Large Creature Critical Strike Table.';
                        } else if(npcinputfile.crit=='-'){
                            attributes.npccritscode1='Normal crits.';
                        } else {
                            attributes.npccritscode1='Normal crits.';
                        }
                    }
                    if(npcinputfile.critcode!=null){
                        if(npcinputfile.critcode=='-'){
                            attributes.npccritscode2='---';
                        } else if(npcinputfile.critcode=='@'){
                            attributes.npccritscode2='Stun results do not affect creature.';
                        } else if(npcinputfile.critcode=='#'){
                            attributes.npccritscode2='Stun results and bleeders do not affect creature.';
                        } else {
                            attributes.npccritscode2='---';
                        }
                    }
                    if(npcinputfile.at!=null)
                        attributes.npcat=npcinputfile.at;
                    if(npcinputfile.db!=null)
                        attributes.npcdb=npcinputfile.db;
                    if(npcinputfile.othercombatinformation!=null)
                        attributes.npcspecialdefences=npcinputfile.othercombatinformation;
                    // <<<<<<<<<<<<<<<<<<<<<<<<<<< Attack Parsing Stuff >>>>>>>>>>>>>>>>>>>>>>>>>>>
                    if(npcinputfile.attack!=null)						// old attack field
                        attributes.npcatts=npcinputfile.attack;
                    if(npcinputfile.attack1name!=null)					
                        attributes.npcattack1name=npcinputfile.attack1name;
                    if(npcinputfile.attack1ob!=null)
                        attributes.npcattack1bonus=npcinputfile.attack1ob;
                    if(npcinputfile.attack1perc!=null)					
                        attributes.npcattack1percent=npcinputfile.attack1perc;
                    if(npcinputfile.attack1type!=null){
                        if(npcinputfile.attack1type=='Melee'){
                            attributes.npcattack1select='npcmelee';
                            attributes.npcattack1type='[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
                            attributes.npcattack1rolltype='1d100!>@{oeuproll}cf<@{npcattack1fumble}';
                            attributes.npcattack1attackcalc='@{npcattack1bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]';
                        } else if(npcinputfile.attack1type=='Ranged'){
                            attributes.npcattack1select='npcranged';
                            attributes.npcattack1type='[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
                            attributes.npcattack1rolltype='1d100!>@{oeuproll}cf<@{npcattack1fumble}';
                            attributes.npcattack1attackcalc='@{npcattack1bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action]';
                        } else if(npcinputfile.attack1type=='Basic Spell'){
                            attributes.npcattack1select='npcbasic';
                            attributes.npcattack1type='[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
                            attributes.npcattack1rolltype='1d100cf<2cs>96';
                            attributes.npcattack1attackcalc='@{npcattack1bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}';
                        } else if(npcinputfile.attack1type=='Directed Spell'){
                            attributes.npcattack1select='npcdirected';
                            attributes.npcattack1type='[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
                            attributes.npcattack1rolltype='1d100!>@{oeuproll}cf<2cs=100';
                            attributes.npcattack1attackcalc='@{npcattack1bonus}Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                        } else if(npcinputfile.attack1type=='Area Spell'){
                            attributes.npcattack1select='npcarea';
                            attributes.npcattack1type='[[@{npcattack1rolltype} +@{npcattack1attackcalc}]]';
                            attributes.npcattack1rolltype='1d100cf<4cs>96';
                            attributes.npcattack1attackcalc='@{npcattack1bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]';
                        } else {
                            attributes.npcattack1select='none';
                        }
                    }
                    if(npcinputfile.attack2name!=null)					
                        attributes.npcattack2name=npcinputfile.attack2name;
                    if(npcinputfile.attack2ob!=null)
                        attributes.npcattack2bonus=npcinputfile.attack2ob;
                    if(npcinputfile.attack2perc!=null)					
                        attributes.npcattack2percent=npcinputfile.attack2perc;
                    if(npcinputfile.attack2type!=null){
                        if(npcinputfile.attack2type=='Melee'){
                            attributes.npcattack2select='npcmelee';
                            attributes.npcattack2type='[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
                            attributes.npcattack2rolltype='1d100!>@{oeuproll}cf<@{npcattack2fumble}';
                            attributes.npcattack2attackcalc='@{npcattack2bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]';
                        } else if(npcinputfile.attack2type=='Ranged'){
                            attributes.npcattack2select='npcranged';
                            attributes.npcattack2type='[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
                            attributes.npcattack2rolltype='1d100!>@{oeuproll}cf<@{npcattack2fumble}';
                            attributes.npcattack2attackcalc='@{npcattack2bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action]';
                        } else if(npcinputfile.attack2type=='Basic Spell'){
                            attributes.npcattack2select='npcbasic';
                            attributes.npcattack2type='[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
                            attributes.npcattack2rolltype='1d100cf<2cs>96';
                            attributes.npcattack2attackcalc='@{npcattack2bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}';
                        } else if(npcinputfile.attack2type=='Directed Spell'){
                            attributes.npcattack2select='npcdirected';
                            attributes.npcattack2type='[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
                            attributes.npcattack2rolltype='1d100!>@{oeuproll}cf<2cs=100';
                            attributes.npcattack2attackcalc='@{npcattack2bonus}Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                        } else if(npcinputfile.attack2type=='Area Spell'){
                            attributes.npcattack2select='npcarea';
                            attributes.npcattack2type='[[@{npcattack2rolltype} +@{npcattack2attackcalc}]]';
                            attributes.npcattack2rolltype='1d100cf<4cs>96';
                            attributes.npcattack2attackcalc='@{npcattack2bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]';
                        } else {
                            attributes.npcattack2select='none';
                        }
                    }
                    if(npcinputfile.attack3name!=null)					
                        attributes.npcattack3name=npcinputfile.attack3name;
                    if(npcinputfile.attack3ob!=null)
                        attributes.npcattack3bonus=npcinputfile.attack3ob;
                    if(npcinputfile.attack3perc!=null)					
                        attributes.npcattack3percent=npcinputfile.attack3perc;
                    if(npcinputfile.attack3type!=null){
                        if(npcinputfile.attack3type=='Melee'){
                            attributes.npcattack3select='npcmelee';
                            attributes.npcattack3type='[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
                            attributes.npcattack3rolltype='1d100!>@{oeuproll}cf<@{npcattack3fumble}';
                            attributes.npcattack3attackcalc='@{npcattack3bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]';
                        } else if(npcinputfile.attack3type=='Ranged'){
                            attributes.npcattack3select='npcranged';
                            attributes.npcattack3type='[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
                            attributes.npcattack3rolltype='1d100!>@{oeuproll}cf<@{npcattack3fumble}';
                            attributes.npcattack3attackcalc='@{npcattack3bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action]';
                        } else if(npcinputfile.attack3type=='Basic Spell'){
                            attributes.npcattack3select='npcbasic';
                            attributes.npcattack3type='[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
                            attributes.npcattack3rolltype='1d100cf<2cs>96';
                            attributes.npcattack3attackcalc='@{npcattack3bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}';
                        } else if(npcinputfile.attack3type=='Directed Spell'){
                            attributes.npcattack3select='npcdirected';
                            attributes.npcattack3type='[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
                            attributes.npcattack3rolltype='1d100!>@{oeuproll}cf<2cs=100';
                            attributes.npcattack3attackcalc='@{npcattack3bonus}Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                        } else if(npcinputfile.attack3type=='Area Spell'){
                            attributes.npcattack3select='npcarea';
                            attributes.npcattack3type='[[@{npcattack3rolltype} +@{npcattack3attackcalc}]]';
                            attributes.npcattack3rolltype='1d100cf<4cs>96';
                            attributes.npcattack3attackcalc='@{npcattack3bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]';
                        } else {
                            attributes.npcattack3select='none';
                        }
                    }
                    if(npcinputfile.attack4name!=null)					
                        attributes.npcattack4name=npcinputfile.attack4name;
                    if(npcinputfile.attack4ob!=null)
                        attributes.npcattack4bonus=npcinputfile.attack4ob;
                    if(npcinputfile.attack4perc!=null)					
                        attributes.npcattack4percent=npcinputfile.attack4perc;
                    if(npcinputfile.attack4type!=null){
                        if(npcinputfile.attack4type=='Melee'){
                            attributes.npcattack4select='npcmelee';
                            attributes.npcattack4type='[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
                            attributes.npcattack4rolltype='1d100!>@{oeuproll}cf<@{npcattack4fumble}';
                            attributes.npcattack4attackcalc='@{npcattack4bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]';
                        } else if(npcinputfile.attack4type=='Ranged'){
                            attributes.npcattack4select='npcranged';
                            attributes.npcattack4type='[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
                            attributes.npcattack4rolltype='1d100!>@{oeuproll}cf<@{npcattack4fumble}';
                            attributes.npcattack4attackcalc='@{npcattack4bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action]';
                        } else if(npcinputfile.attack4type=='Basic Spell'){
                            attributes.npcattack4select='npcbasic';
                            attributes.npcattack4type='[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
                            attributes.npcattack4rolltype='1d100cf<2cs>96';
                            attributes.npcattack4attackcalc='@{npcattack4bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}';
                        } else if(npcinputfile.attack4type=='Directed Spell'){
                            attributes.npcattack4select='npcdirected';
                            attributes.npcattack4type='[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
                            attributes.npcattack4rolltype='1d100!>@{oeuproll}cf<2cs=100';
                            attributes.npcattack4attackcalc='@{npcattack4bonus}Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                        } else if(npcinputfile.attack4type=='Area Spell'){
                            attributes.npcattack4select='npcarea';
                            attributes.npcattack4type='[[@{npcattack4rolltype} +@{npcattack4attackcalc}]]';
                            attributes.npcattack4rolltype='1d100cf<4cs>96';
                            attributes.npcattack4attackcalc='@{npcattack4bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]';
                        } else {
                            attributes.npcattack4select='none';
                        }
                    }
                    if(npcinputfile.attack5name!=null)					
                        attributes.npcattack5name=npcinputfile.attack5name;
                    if(npcinputfile.attack5ob!=null)
                        attributes.npcattack5bonus=npcinputfile.attack5ob;
                    if(npcinputfile.attack5perc!=null)					
                        attributes.npcattack5percent=npcinputfile.attack5perc;
                    if(npcinputfile.attack5type!=null){
                        if(npcinputfile.attack5type=='Melee'){
                            attributes.npcattack5select='npcmelee';
                            attributes.npcattack5type='[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
                            attributes.npcattack5rolltype='1d100!>@{oeuproll}cf<@{npcattack5fumble}';
                            attributes.npcattack5attackcalc='@{npcattack5bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]';
                        } else if(npcinputfile.attack5type=='Ranged'){
                            attributes.npcattack5select='npcranged';
                            attributes.npcattack5type='[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
                            attributes.npcattack5rolltype='1d100!>@{oeuproll}cf<@{npcattack5fumble}';
                            attributes.npcattack5attackcalc='@{npcattack5bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action]';
                        } else if(npcinputfile.attack5type=='Basic Spell'){
                            attributes.npcattack5select='npcbasic';
                            attributes.npcattack5type='[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
                            attributes.npcattack5rolltype='1d100cf<2cs>96';
                            attributes.npcattack5attackcalc='@{npcattack5bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}';
                        } else if(npcinputfile.attack5type=='Directed Spell'){
                            attributes.npcattack5select='npcdirected';
                            attributes.npcattack5type='[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
                            attributes.npcattack5rolltype='1d100!>@{oeuproll}cf<2cs=100';
                            attributes.npcattack5attackcalc='@{npcattack5bonus}Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                        } else if(npcinputfile.attack5type=='Area Spell'){
                            attributes.npcattack5select='npcarea';
                            attributes.npcattack5type='[[@{npcattack5rolltype} +@{npcattack5attackcalc}]]';
                            attributes.npcattack5rolltype='1d100cf<4cs>96';
                            attributes.npcattack5attackcalc='@{npcattack5bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]';
                        } else {
                            attributes.npcattack5select='none';
                        }
                    }
                    if(npcinputfile.attack6name!=null)					
                        attributes.npcattack6name=npcinputfile.attack6name;
                    if(npcinputfile.attack6ob!=null)
                        attributes.npcattack6bonus=npcinputfile.attack6ob;
                    if(npcinputfile.attack6perc!=null)					
                        attributes.npcattack6percent=npcinputfile.attack6perc;
                    if(npcinputfile.attack6type!=null){
                        if(npcinputfile.attack6type=='Melee'){
                            attributes.npcattack6select='npcmelee';
                            attributes.npcattack6type='[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
                            attributes.npcattack6rolltype='1d100!>@{oeuproll}cf<@{npcattack6fumble}';
                            attributes.npcattack6attackcalc='@{npcattack6bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]';
                        } else if(npcinputfile.attack6type=='Ranged'){
                            attributes.npcattack6select='npcranged';
                            attributes.npcattack6type='[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
                            attributes.npcattack6rolltype='1d100!>@{oeuproll}cf<@{npcattack6fumble}';
                            attributes.npcattack6attackcalc='@{npcattack6bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action]';
                        } else if(npcinputfile.attack6type=='Basic Spell'){
                            attributes.npcattack6select='npcbasic';
                            attributes.npcattack6type='[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
                            attributes.npcattack6rolltype='1d100cf<2cs>96';
                            attributes.npcattack6attackcalc='@{npcattack6bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}';
                        } else if(npcinputfile.attack6type=='Directed Spell'){
                            attributes.npcattack6select='npcdirected';
                            attributes.npcattack6type='[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
                            attributes.npcattack6rolltype='1d100!>@{oeuproll}cf<2cs=100';
                            attributes.npcattack6attackcalc='@{npcattack6bonus}Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                        } else if(npcinputfile.attack6type=='Area Spell'){
                            attributes.npcattack6select='npcarea';
                            attributes.npcattack6type='[[@{npcattack6rolltype} +@{npcattack6attackcalc}]]';
                            attributes.npcattack6rolltype='1d100cf<4cs>96';
                            attributes.npcattack6attackcalc='@{npcattack6bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]';
                        } else {
                            attributes.npcattack6select='none';
                        }
                    }
                    if(npcinputfile.attack7name!=null)					
                        attributes.npcattack7name=npcinputfile.attack7name;
                    if(npcinputfile.attack7ob!=null)
                        attributes.npcattack7bonus=npcinputfile.attack7ob;
                    if(npcinputfile.attack7perc!=null)					
                        attributes.npcattack7percent=npcinputfile.attack7perc;
                    if(npcinputfile.attack7type!=null){
                        if(npcinputfile.attack7type=='Melee'){
                            attributes.npcattack7select='npcmelee';
                            attributes.npcattack7type='[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
                            attributes.npcattack7rolltype='1d100!>@{oeuproll}cf<@{npcattack7fumble}';
                            attributes.npcattack7attackcalc='@{npcattack7bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]';
                        } else if(npcinputfile.attack7type=='Ranged'){
                            attributes.npcattack7select='npcranged';
                            attributes.npcattack7type='[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
                            attributes.npcattack7rolltype='1d100!>@{oeuproll}cf<@{npcattack7fumble}';
                            attributes.npcattack7attackcalc='@{npcattack7bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action]';
                        } else if(npcinputfile.attack7type=='Basic Spell'){
                            attributes.npcattack7select='npcbasic';
                            attributes.npcattack7type='[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
                            attributes.npcattack7rolltype='1d100cf<2cs>96';
                            attributes.npcattack7attackcalc='@{npcattack7bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}';
                        } else if(npcinputfile.attack7type=='Directed Spell'){
                            attributes.npcattack7select='npcdirected';
                            attributes.npcattack7type='[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
                            attributes.npcattack7rolltype='1d100!>@{oeuproll}cf<2cs=100';
                            attributes.npcattack7attackcalc='@{npcattack7bonus}Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                        } else if(npcinputfile.attack7type=='Area Spell'){
                            attributes.npcattack7select='npcarea';
                            attributes.npcattack7type='[[@{npcattack7rolltype} +@{npcattack7attackcalc}]]';
                            attributes.npcattack7rolltype='1d100cf<4cs>96';
                            attributes.npcattack7attackcalc='@{npcattack7bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]';
                        } else {
                            attributes.npcattack7select='none';
                        }
                    }
                    if(npcinputfile.attack8name!=null)					
                        attributes.npcattack8name=npcinputfile.attack8name;
                    if(npcinputfile.attack8ob!=null)
                        attributes.npcattack8bonus=npcinputfile.attack8ob;
                    if(npcinputfile.attack8perc!=null)					
                        attributes.npcattack8percent=npcinputfile.attack8perc;
                    if(npcinputfile.attack8type!=null){
                        if(npcinputfile.attack8type=='Melee'){
                            attributes.npcattack8select='npcmelee';
                            attributes.npcattack8type='[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
                            attributes.npcattack8rolltype='1d100!>@{oeuproll}cf<@{npcattack8fumble}';
                            attributes.npcattack8attackcalc='@{npcattack8bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]';
                        } else if(npcinputfile.attack8type=='Ranged'){
                            attributes.npcattack8select='npcranged';
                            attributes.npcattack8type='[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
                            attributes.npcattack8rolltype='1d100!>@{oeuproll}cf<@{npcattack8fumble}';
                            attributes.npcattack8attackcalc='@{npcattack8bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust: should be negative)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action]';
                        } else if(npcinputfile.attack8type=='Basic Spell'){
                            attributes.npcattack8select='npcbasic';
                            attributes.npcattack8type='[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
                            attributes.npcattack8rolltype='1d100cf<2cs>96';
                            attributes.npcattack8attackcalc='@{npcattack8bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}';
                        } else if(npcinputfile.attack8type=='Directed Spell'){
                            attributes.npcattack8select='npcdirected';
                            attributes.npcattack8type='[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
                            attributes.npcattack8rolltype='1d100!>@{oeuproll}cf<2cs=100';
                            attributes.npcattack8attackcalc='@{npcattack8bonus}Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]';
                        } else if(npcinputfile.attack8type=='Area Spell'){
                            attributes.npcattack8select='npcarea';
                            attributes.npcattack8type='[[@{npcattack8rolltype} +@{npcattack8attackcalc}]]';
                            attributes.npcattack8rolltype='1d100cf<4cs>96';
                            attributes.npcattack8attackcalc='@{npcattack8bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]';
                        } else {
                            attributes.npcattack8select='none';
                        }
                    }
                      
                    if(npcinputfile.creature!=null){
                        attributes.npcname=npcinputfile.creature;
                        attributes.character_name=npcinputfile.creature;	
                    }
                  
                    attributes.npcimportcheckbox='0';
                    attributes.npcinput='';
                }catch(err){
                    goodcode=false;
                    error='Error with Character Info';
                }
                try{
                    setAttrs(attributes);
                }catch(err){
                    setAttrs({
                        npcinput:'Error setting Attributes',
                        npcimportcheckbox:'0',
                        warningcheckbox:'0'
                    });
                }
            }else{
                setAttrs({
                    npcinput:'Error: invalid Structure',
                    npcimportcheckbox:'0'  //,  <-- last item should not have a comma
                    //                   warningcheckbox:"0"
                });
            }
        }
    });
});
