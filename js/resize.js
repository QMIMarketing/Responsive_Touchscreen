
		function alignSizes(){

            var w = $(window).width();
			var p = (w / 100);
			$("#pagesize").text(w);

				console.log('p - ' + p + '\n' + 'w - ' + w);

				var nav_width = p * 12.9;
				var nav_height = (nav_width / 100) * 28;
				var nav_line_height = nav_height + "px";
				var nav_font = (nav_width / 100) * 0.5 + "em";
				var nav_bkgd = (nav_width / 100) * 17;
				var nav_border_width = (nav_width / 100) * 0.5;


				var circleW = $(".main-link").width();
				var circleP = ($(".main-link").width() / 100);
				var logo_size = circleP * 25;
				var logo_margin = -(circleP * 11);
				var name_width = circleP * 76;
				var name_height = (name_width / 100) * 17.91;
				var name_margin = -(circleP * 36);
				var title_font = (circleP * 0.75) + "em";
				var border_width = circleP * 6.6;




			if((w < 1800) && (w > 1200)){



				$(".main-link").css({
					'width': p * 20,
					'height': p * 20,
					'border-width': border_width 
				});

				$(".logo").css({
					'width': logo_size,
					'height': logo_size,
					'margin-left': logo_margin
				});
				$(".name").css({
					'width': name_width,
					'height': name_height,
					'margin-left': name_margin
				});
				$(".title").css({
					'font-size': title_font
				});



				$("#nav-left ul a li").css({
					'width': nav_width,
					'height': nav_height,
					'line-height': nav_line_height,
					'font-size': nav_font,
					'background-size': nav_bkgd
				});
				$("#nav-left ul a li:before").css('border-width', nav_border_width);





			}
			if(w > 1800){
				$(".logo").css({
					'width': '80px',
					'height': '80px',
					'margin-left': '-40px'
				});
				$(".name").css({
					'width': '240px',
					'height': '43px',
					'margin-left': '-118px'
				});
				$(".title").css({
					'font-size': '2.5em'
				});


				$("#nav-left ul a li").css({
					'width': '230px',
					'height': '65px',
					'line-height': '65px',
					'font-size': '1.2em',
					'background-size': '40px'
				});
				$("#nav-left ul a li:before").css('border-width', '4px');




			}


			if(w < 1200){

				$(".main-link").css({
					'width': p * 30,
					'height': p * 30,
					'border-width': border_width 
				});


				$(".logo").css({
					'width': logo_size,
					'height': logo_size,
					'margin-left': logo_margin
				});
				$(".name").css({
					'width': name_width,
					'height': name_height,
					'margin-left': name_margin
				});
				$(".title").css({
					'font-size': title_font
				});
				



				$("#nav-left ul a li").css({
					'width': '175px',
					'height': '49px',
					'line-height': '49px',
					'font-size': '1.15em',
					'background-size': '30px'
				});
				$("#nav-left ul a li:before").css('border-width', '4px');

			}

			console.log("Nav Width: " + nav_width);

		}




