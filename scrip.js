
        $(document).ready(function(){
         var popup="<div class='popup'></div>";
           var menudata =[
           'កីឡា',
           'Cloth',
           'សៀវភៅនិទាន',
            ] ;
              get_menu();
              function get_menu(){
            /* var li="<li><a href=''>Apple</a></li><li>"+
                    "<a href=''>Goole</a></li>"*/
              var txt='';
              for(i in menudata){
               txt+="<li><a href=''>"+menudata[i]+"</a></li>" ; 
              }      
            // menubox.find('ul').append(txt);
             $('.popMenu').find('ul').html(txt);
           // menubox.find('ul').html("<li><a href=''>Apple</a></li>");
        } 
        $('.demo').click(function(){
        $('body').append(popup);
        $('.popMenu').css({"left":"0"});
        });
        $('body').on('click','.popup',function(){
            $(this).remove();
            $('.popMenu').css({"left":"-280px"});
        });

       $(".box-book1").on('click','.box-book1-txt',function(){
          alert('ទិញតាមរយះលេខទូរស័ព្ទ​ facebook Telegrameខាងក្រេាម៕');
       });
       
       });
