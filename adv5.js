function saveToDB()
      {
          console.log('Saving to the db');
          
      // autosave( document.getElementById('msgid').value, document.getElementById('counselorid').value, document.getElementById('template_text').value );
          
          form = $('.autosave-form');

       $.ajax({
          url: "autosave.php",
          type: "POST",
          data: form.serialize(), // serializes the form's elements.
          beforeSend: function(xhr) {
              // Let them know we are saving
             $('.form-status-holder').html('Saving...');
          },
          success: function(data) {
             var jqObj = jQuery(data); 
             // data returned from your ajax call here. // ex. jqObj.find('.returned-data').html()
                  $('.form-status-holder').html('Last Saved: ' 
                  + d.toLocaleTimeString());
          },
       });

      }