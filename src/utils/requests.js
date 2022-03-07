import { shuffle } from "./helpers";

export const getRealEstates = (dispatch, isShuffle = false, cb) => {
  dispatch({ type: "realEstates/setLoadingTrue" });
  fetch('api/realEstates.json', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
    }).then(function(response){
      return response.json();
    }).then(function(myJson) {
      if(isShuffle) {
        let shuffleArr = shuffle(myJson);
        dispatch({ type: "realEstates/getRealEstates", data: shuffleArr });
      } else {
        dispatch({ type: "realEstates/getRealEstates", data: myJson });
      }
      setTimeout(() => {
        dispatch({ type: "realEstates/setLoadingFalse" });
        if(cb) {
          cb(false);
        } 
    }, 2000)
  });
}