$(document).ready(function(){  
      function autoSave()  
      {  
           var post_title = $('#post_title').val();  
           var post_description = $('#post_description').val();  
           var post_id = $('#post_id').val();  
           if(post_title != '' && post_description != '')  
           {  
                $.ajax({  
                     url:"save_post.php",  
                     method:"POST",  
                     data:{postTitle:post_title, postDescription:post_description, postId:post_id},  
                     dataType:"text",  
                     success:function(data)  
                     {  
                          if(data != '')  
                          {  
                               $('#post_id').val(data);  
                          }  
                          $('#autoSave').text("Post save as draft");  
                          setInterval(function(){  
                               $('#autoSave').text('');  
                          }, 5000);  
                     }  
                });  
           }            
      }  
      setInterval(function(){   
           autoSave();   
           }, 10000);  
 });  