# NotCanvas
														
	PROJECT NAME/TITLE							
		The app is called 'NotCanvas'.						
		This document gives a high-level overview of how the app is set up.						
	REQUIREMENTS:							
		The app serves as a tool for manually creating images.						
		The app is designed to operate independently of any text-based information for the user, relying on intuitiveness.						
	USER NOTES:							
		The app has five main buttons at the top of the page:						
		Button			Element			
		1	Style	clicking opens a dropdown menu:				
					1	Slider	choose line width	
					2	Button	70% canvas opacity	
					3	Button	100% canvas opacity	
					4	Button	fill colour tool	
					5	Button	use colour (after mixing colour or selecting colour below)	
					6	Slider	add colour to mix (red)	
					7	Slider	add colour to mix (green)	
					8	Slider	add colour to mix (blue)	
					9	Panel	view mixed colour/currently selected colour	
					10	Button Group	panel of default colours which can be selected on-click.	
		2	Draw	clicking opens a dropdown menu:				
					1	Button	free draw	
					2	Button	draw straight line	
					3	Button	draw curve	
					4	Button	draw rectangle	
					5	Button	draw circle	
					6	Button	draw triangle	
					7	Button	create text box	
					8	Button	eraser	
		3	Undo	undo last edit made to the canvas				
		4	Redo	redo last edit made to the canvas				
		5	Settings	clicking opens a dropdown menu:  (clicking 10 times reveals hidden button)				
					1	Button	clear canvas	
					2	Button	upload background image	
					3	Button	save canvas as png file	
					4	Button	animation for drawn circles	
						Hidden Button	start hidden game:	
								survive by manouevring the black circle with the mouse, so that it avoids all the moving red viruses !
	PROJECT NOTES:							
								
		As of 28th April 2019:						
			Use of latest Fontawesome 5 icons restricted , apparently due to the CDN link tags being out of date.
			So choice of icons was limited, necessitating use of google icons with an additional Google CDN link. This needs more investigation.					
	DESIGN NOTES:							
		HTML:						
			external scripts should be placed in the header or the bottom of the body section.					
				local scripts in the bottom of the body section.				
			all buttons and controls are to be situated in the large nav bar section, leaving the rest of the body section contianing only the canvas.					
			the aim is to have no written text on the HTML page, so the code for each button should be marked with a comment in the HTML sheet, for readability.					
			as little JS as possible on the HTML page					
				The only JS on the HTML page is currently two page-load functions:				
					draw image: instructs a snapshot to be taken of the canvas as a clean, blank, white JPG image.			
					current function: instructs that the drawing tool be default on page-load.			
		JS:						
			Component-based approach, with separate JS files containing the code for each tool.					
			Separate JS file named 'init' contains all 'click' event listeners and handlers for the buttons on the HTML page.					
			Separate JS file named 'canvas-common' contains code related to global mouse tracking and mouse click-activated toggle variables.					
		CSS:						
			Separate CSS local style sheet named 'style', with the general aim being to keep all CSS on this sheet and off the HTML sheet.					
	SOURCE JS FILES:							
		External scripts:						
			Fontawesome JS					
			Bootstrap JS					
			Google Icons					
			Jquery					
			Tether					
		Local scripts (Including:)						
			Canvas-common					
			Init					
			Drawing					
			Drawing-line					
			Drawing-curve					
			Drawing-circle					
			Drawing-rectangle					
			Drawing-triangle					
			Text					
			Fill					
			Color-picker					
			Pick-color					
			Eraser					
			Undo-redo					
			Upload-background					
			Save					
	CSS/SASS FILES:							
			Fontawesome CSS					
			Bootstrap CSS					
	CREDITS:							
	Built & designed by Choi Kin Lung (Jacky) and Christophe Elisha 							
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								

