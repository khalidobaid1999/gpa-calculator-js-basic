	$(document).ready(function(){


	//five-point gpa system

		$('.five-gpa').click(function(){
			$('option[data-option=1]').val('5.00');
			$('option[data-option=2]').val('4.75');
			$('option[data-option=3]').val('4.50');
			$('option[data-option=4]').val('4.00');
			$('option[data-option=5]').val('3.50');
			$('option[data-option=6]').val('3.00');
			$('option[data-option=7]').val('2.50');
			$('option[data-option=8]').val('2.00');
			$('option[data-option=9]').val('1.00');
		});


		//four-point gpa system

			$('.four-gpa').click(function(){
				$('option[data-option=1]').val('4.00');
				$('option[data-option=2]').val('3.75');
				$('option[data-option=3]').val('3.50');
				$('option[data-option=4]').val('3.00');
				$('option[data-option=5]').val('2.50');
				$('option[data-option=6]').val('2.00');
				$('option[data-option=7]').val('1.50');
				$('option[data-option=8]').val('1.00');
				$('option[data-option=9]').val('0.00');
			});


//calculate gpa on button click
		$('.calc').click(function(){
			var subject_count = $('.subject').length;
			var total_hours = 0.0;
			var total_gpa = 0.0;
			for(i=1;i<=subject_count;i++){
				var grade = $('.grade'+i).val();
				var hour = $('.hours'+i).val();
				//grade = parseFloat(grade); //added grade parsing just incase
				hour = parseInt(hour);
				total_hours = total_hours + hour;
				total_gpa = total_gpa + (grade*hour);
			}
			var gpa = (total_gpa/total_hours).toFixed(2);
			if(gpa === 0){gpa = 'set subjects first';}
			$('.gpa-grade').html(gpa);
		});

//add subject on button click
		$('.add_subject').click(function(){
			$('.subject:last').clone().insertAfter('.subject:last');
			var subject_count = $('.subject').length;
			$('.subject:last').attr('id', 'subject'+subject_count);
			$('.subject:last .subject-number').html(subject_count);
			$('.subject:last .grade'+(subject_count-1)).removeClass().addClass('grade'+subject_count);
			$('.subject:last .hours'+(subject_count-1)).removeClass().addClass('hours'+subject_count);
		});
	});
