$(document).ready(function(){
                $("#carouselButton").click(function()
                {
                if ($("#carouselButton").children("span").hasClass('fa-pause'))
                {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play'))
                {
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
        });

$(document).ready(function () {

            //reserve modal
            $('#btn-reserve').click(() => {
                $('#reserveform').modal('show');
            });

            //login modal 
            $('#btn-login').click(() => {
                $('#loginModal').modal('show');
            })

            //close reserve
            $('#btn-close-reserve').click(() => {
                $('#reserveform').modal('hide');
            })

            //cancel reserve
            $('#btn-cancel-reserve').click(() => {
                $('#reserveform').modal('hide');
            })

            //close login 
            $('#btn-close-sign').click(() => {
                $('#loginModal').modal('hide');
            })

            //cancel login
            $('#btn-cancel-sign').click(() => {
                $('#loginModal').modal('hide');
            })

        });

