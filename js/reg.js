$('#b1').click(function(){
    
    var name=$('#name').val();
    var email=$('#email').val();
    var college=$('#college').val();
    var department=$('#department').val();
    var age=$('#age').val();
    var why1=$('#why1').val();
    var why2=$('#why2').val();
    console.log(name);

    $.ajax({
        url:'server/server.php',
        dataType:'text',
        type:'POST',
        data:{name:name,email:email,college:college,department:department,age:age,why1:why1,why2:why2},
        success: function( data, textStatus, jQxhr ){
            alertify.alert('Dear C.A Applicant', 'You are regestered Sucessfully', function(){ 
                
            });
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });

});