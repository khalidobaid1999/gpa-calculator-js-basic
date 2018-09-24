	$(document).ready(function(){

		$('.calc').click(function(){
			var subject_count = $('.subject').length;
			var total_hours = 0.0;
			var total_gpa = 0.0;
			for(i=1;i<=subject_count;i++){
				var grade = $('.grade'+i).val();
				var hour = $('.hours'+i).val();
				hour = parseInt(hour);
				total_hours = total_hours + hour;
				total_gpa = total_gpa + (grade*hour);
			}
			var gpa = (total_gpa/total_hours).toFixed(2);
			if(gpa === 0){gpa = 'set subjects first';}
			$('.gpa-grade').html(gpa);
		});

		$('.add_subject').click(function(){
			$('.subject:last').clone().insertAfter('.subject:last');	
			var subject_count = $('.subject').length;	
			$('.subject:last').attr('id', 'subject'+subject_count);
			$('.subject:last .subject-number').html(subject_count);
			$('.subject:last .grade'+(subject_count-1)).removeClass().addClass('grade'+subject_count);
			$('.subject:last .hours'+(subject_count-1)).removeClass().addClass('hours'+subject_count);
		});
	});