	$(function() {

		$(".theme").on("click", function() {
			$( "ul li a.character1" ).addClass( "funkyLinks1 funkyLinks" );
			$( "ul li a.character2" ).addClass( "funkyLinks2 funkyLinks" );
			$( "ul li a.character3" ).addClass( "funkyLinks3 funkyLinks" );
			$( "ul li a.character4" ).addClass( "funkyLinks4 funkyLinks" );
			$( "ul li a.character5" ).addClass( "funkyLinks5 funkyLinks" );
			
		});
		$(".themeOg").on("click", function() {
			$( "ul li a.character1" ).removeClass( "funkyLinks1 funkyLinks" );
			$( "ul li a.character2" ).removeClass( "funkyLinks2 funkyLinks" );
			$( "ul li a.character3" ).removeClass( "funkyLinks3 funkyLinks" );
			$( "ul li a.character4" ).removeClass( "funkyLinks4 funkyLinks" );
			$( "ul li a.character5" ).removeClass( "funkyLinks5 funkyLinks" );
			
		});

		$("a").on("click", function(){
			var image = $(this).data("image");
			var name = $(this).text();
			$('.mainImage').empty();
			$('.quoteContainer').empty();
			$(image).appendTo(".mainImage");
			$('p.title').html('Touch my face.');
			$('h1.title').html('What would ' + name + ' say?');
		});

		$(".mainImage").on("click", function() {
			var imageClass = $(this).find("img").attr("class");
			if (imageClass === "image3"){
				drew.talk();
			}
			else if (imageClass === "image4"){
				ryan.talk();
			}
			else if (imageClass === "image2"){
				mrT.talk();
			}
			else if (imageClass === "image1"){
				homer.talk();
			}
			else if (imageClass === "image5"){
				robFord.talk();
			}
		});
	});

	var homer = {
		quote: ["'I'd be a vegetarian if bacon grew on trees'",
		"'The information superhighway showed the average person what some nerd thinks about Star Trek.'",
		"'Pffft. Who needs English? I'm never going to England.'",
		"'Shut up, brain, or I'll stab you with a Q-Tip!'",
		"'To Start Press Any Key'. Where's the ANY key?'"],
		talk: function(){
			var i = Math.random() * 5;
			var quote = this.quote[Math.floor(i)];
			console.log(quote);
			$(".quoteContainer").empty();
			$(".quoteContainer").append(quote);
		}
	}

	var mrT = {
		quote: ["'I pity the FOOL!'",
		"'You aint hurt, you pathetic!'",
		"'Quit yo Jibba Jabba!'",
		"'Shut up, fool!'",
		"'You're gonna meet my friend, PAIN!'"],
		talk: function(){
			var i = Math.random() * 5;
			var quote = this.quote[Math.floor(i)];
			console.log(quote);
			$(".quoteContainer").empty();
			$(".quoteContainer").append(quote);
		}
	}


	var drew = {
		quote: ["'High Fives!'",
		"'I fight bears in the forest.'",
		"'The name of the variable is up to you. You can call it burnt farts if you want'",
		"'It's a scary thing to think about; The parent collapsing when its children are floating!'", 
		"'Booleans; A ghosts favourite data type.'"],
		talk: function(){
			var i = Math.random() * 5;
			var quote = this.quote[Math.floor(i)];
			console.log(quote);
			$(".quoteContainer").empty();
			$(".quoteContainer").append(quote);
		}
	}

	var ryan = {
		quote: ["'Because FUCK IT, Ice cream is delicious.'", 
		"'Beep Beep Boop Beep = Japanese Train sounds.'", 
		"'You can use floats to make elephants fit snugly beside each other.'", 
		"'I wanted to shake things up so instead of using .box I started using .square.'", 
		"'Hands up if you're excited by html forms. Hands up if you're not. Hands up if you're lying.'"],
		talk: function(){
			var i = Math.random() * 5;
			var quote = this.quote[Math.floor(i)];
			console.log(quote);
			$(".quoteContainer").empty();
			$(".quoteContainer").append(quote);
		}
	}

	var robFord = {
		quote: ["'I've just got to maybe slow down on my drinking.'",
		"'What does OxyContin go for on the street, so I have an idea?'",
		"'I don't want to brag, but when I go out people treat me like a rock star.'",
		"'I made mistakes, I drank too much, I smoked some crack some time. What can I say? I made a mistake, I’m human.'",
		"'I didn’t lie. I don’t smoke crack, I haven’t smoked crack in OVER A YEAR.'"],
		talk: function(){
			var i = Math.random() * 5;
			var quote = this.quote[Math.floor(i)];
			console.log(quote);
			$(".quoteContainer").empty();
			$(".quoteContainer").append(quote);
		}
	}