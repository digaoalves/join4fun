
var preferencesArray = [];


/**
* Author: Rodrigo Costa
* Description: Function responsible to receive the onclick event from a flex category display the check and
* store the selected preference in an array and update the local store.
* Version: 1.0
*/
function checkUnchckPreference(objectSelected){
  
  var preference;
  
  if (objectSelected.id == "flxBasketball"){
    
    	if (!frmPreferences.flxBasketBallCheck.isVisible)
          frmPreferences.flxBasketBallCheck.isVisible = true;
        else
          frmPreferences.flxBasketBallCheck.isVisible = false; 
    
        preference = "Basketball";
    
  } else if (objectSelected.id == "flxSoccer"){
    
    	if (!frmPreferences.flxSoccerCheck.isVisible)
          frmPreferences.flxSoccerCheck.isVisible = true;
        else
          frmPreferences.flxSoccerCheck.isVisible = false; 
    
        preference = "Soccer";
          
  } else if (objectSelected.id == "flxCricket"){
    
    	if (!frmPreferences.flxCricketCheck.isVisible)
          frmPreferences.flxCricketCheck.isVisible = true;
        else
          frmPreferences.flxCricketCheck.isVisible = false; 

		preference = "Cricket";	        
          
  } else if (objectSelected.id == "flxTennis"){
    
    	if (!frmPreferences.flxTennisCheck.isVisible)
          frmPreferences.flxTennisCheck.isVisible = true;
        else
          frmPreferences.flxTennisCheck.isVisible = false; 
    
        preference = "Tennis";
          
  } else if (objectSelected.id == "flxFootball"){
    
    	if (!frmPreferences.flxFootballCheck.isVisible)
          frmPreferences.flxFootballCheck.isVisible = true;
       	else
          frmPreferences.flxFootballCheck.isVisible = false; 
             
        preference = "Football";	
          
  } else if (objectSelected.id == "flxRun"){
    
    	if (!frmPreferences.flxRunCheck.isVisible)
          frmPreferences.flxRunCheck.isVisible = true;
        else
          frmPreferences.flxRunCheck.isVisible = false; 
    
         preference = "Run";	

  }  
  
  setPreference(preference);
  
  frmPreferences.forceLayout();
  
}


/**
* Author: Rodrigo Costa
* Description: Function responsible set/remove a particular categeory from the preferencesArray array.
* Version: 1.0
*/
function setPreference(preference){
  
  for (var i = 0; i < preferencesArray.length; i++) {
    
    	if (preferencesArray[i] == preference){
          preferencesArray.splice(i, 1);
          return;
        }
    
  }
  
  preferencesArray.push(preference);
  
  return;
  
}

/**
* Author: Rodrigo Costa
* Description: Function responsible to store the preferences array on local store using Kony API.
* Version: 1.0
*/
function setPreferencesOnLocalStore(){
  
  kony.store.setItem("preferences", preferencesArray);
  alert("Preferences stored successfully: " + JSON.stringify(kony.store.getItem("preferences")));
  
}
