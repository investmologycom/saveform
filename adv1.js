setInterval(saveData, 5000);
function saveData(){
 
 var postid = $('#postid').val();
 var title = $('#title').val().trim();
 var content = $('#description').val().trim();
 if(title != '' || content != ''){
  
  $.ajax({
   url: 'autosave.php',
   type: 'post',
   data: {postid:postid,title:title,content:content},
   success: function(response){
    $('#postid').val(response);
   } 
  });
 }
 
}