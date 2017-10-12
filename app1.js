 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAJO73caz293kb6Po56wuq7wMgcXh1TCU68ZB9bOv6hKj12wdoLfGZCRomeeBZChZBpv6bTii7N3ZCfR8TO2hii0jQeU8mVd5dMH2IZBFEHhvNsLIrxc8zE4BmOZAcVLUr6lU6NRYbNZAqScYZCNBAKf2dwVa7tv4CTnBIhxUomG6DKpJhuTOcPkBRbW76ij32kAZDZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?fields=email,hometown,posts&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);
                    $("#PostId1").text(response.posts.data[0].story);
                    $("#PostId2").text(response.posts.data[1].story);
                    $("#PostId3").text(response.posts.data[2].story);
                    $("#PostId4").text(response.posts.data[3].story);
                    $("#PostId5").text(response.posts.data[4].story);
                    $("#PostId6").text(response.posts.data[5].story);
                    $("#PostId7").text(response.posts.data[6].story);
                    $("#PostId8").text(response.posts.data[7].story);
                    $("#PostId9").text(response.posts.data[8].story);
                    $("#PostId10").text(response.posts.data[9].story);

                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)



  });