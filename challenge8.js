// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.



	function timeForMilkAndCookies(date) {
        let day = date.getDate()
      let month = date.getMonth();
      
      if (day == 24 && month == 11) {
        return true
      }
      else {
        console.log('its not xmas :(' )
        return false
      }
    }
