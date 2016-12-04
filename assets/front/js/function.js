// JavaScript Document
function is_number( $num )
{
	return !isNaN(parseFloat( $num) ) && isFinite( $num);	
}
Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
	places = !isNaN(places = Math.abs(places)) ? places : 2;
	symbol = symbol !== undefined ? symbol : "$";
	thousand = thousand || ",";
	decimal = decimal || ".";
	var number = this, 
	    negative = number < 0 ? "-" : "",
	    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
	    j = (j = i.length) > 3 ? j % 3 : 0;
	return negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "") + symbol;
};
//---------
function limitText(field, textcount, limit) {
	
	var $field = field.val();
	var $f_legth = $field.length;
	
	if( $f_legth > limit )
	{
		field.val( $field.substr(0,limit) );
		
	}else{
		
		var count = limit - $f_legth;
		textcount.html( count);
	}
	
	
}//modal
function show_modal( $data )
{
	//$('#myModal').modal('hide');
	$('#myModal .modal-dialog .modal-content').html( $data);	
	//$('#myModal').modal('show');
	$('#myModal').modal({
	  backdrop: false,
	  show:	true,
	})	
	
}
function hide_modal()
{
	$('#myModal .modal-dialog .modal-content').html('');	
	$('#myModal').modal('hide');
}
function remove_img( $checkin, $file, $checkout, $field)
{
	//alert( $this);
	if( confirm( 'Bạn có muốn chắn xóa hình này hay không?') == true )
	{
		$.post( site_url + 'remove-fileupload', {'checkin': $checkin, 'file': $file }, function( $reponse){
			$('#plugin_uploadfile_before li[data-check='+$checkin+']').remove();
			//-------
			/**/
			if( $checkout != '' )
			{
				$.post( site_url+'plugin/upload', {'checkout': true, 'checkin': $checkout, 'field': $field }, function( $data){
					
						var modal_height = $('#myModal .modal-dialog .modal-content').height();
						$('#myModal .modal-dialog .modal-content').html('');
						$('#myModal .modal-dialog .modal-content').html($data);
							//$('#myModal .modal-dialog').height('').find('.modal-content');
						
				});
				
			}
			
			
			
		});
		
		//-------------
		/*
		var img_item = $('#plugin_uploadfile_success li').length;
		//alert( $('#plugin_uploadfile_success').attr('data-count')  );
		if( img_item < $('#plugin_uploadfile_success').attr('data-count') )
		{
			$('#pdetail-addfile').show();	
		}
		*/
		
	}
	//$( $this).remove();
}
function reupload( $this, $checkin, $field)
{
	//alert( $this);
	if( true) //confirm( 'Bạn có muốn chắn xóa hình này hay không?') == true )
	{
		$.post( site_url + 'reupload', {'time': $this, 'checkin': $checkin, 'field': $field }, function( $data){
			
			show_modal( $data);
		});
		
		//$('#plugin_uploadfile_success li.uploadfile_item_'+$this).remove();
		//-------------
		var img_item = $('#plugin_uploadfile_success li').length;
		//alert( $('#plugin_uploadfile_success').attr('data-count')  );
		if( img_item < $('#plugin_uploadfile_success').attr('data-count') )
		{
			$('#pdetail-addfile').show();	
		}
		
		
	}
	//$( $this).remove();
}


//---
function view_cart()
{
	$.post( site_url + 'cart/view', function($data){
		show_modal( $data);	
	});	
}
//----------
function check_formregister( $url, $data, $element, $url_redirect)
{
	
	$.post( $url, $data, function( $result){
		
		$result =	$.parseJSON( $result);
		if( $result.checkout == false)
		{
			$error = $result.data;
			$.each( $error, function( index, value ){
				
				$( $element ).find( '[name='+index+']').after( value);
				//alert( index +'='+value );
				
			});
		}else{
			
			window.location.href = 	$url_redirect;
		}
		//alert( $result);
		
	});
	return false;
	
}
//------------
//plugin upload
function plugin_uploadfile( event, files, checkin, $field, $url, $time )
{
	var files;
	
	event.stopPropagation(); // Stop stuff happening
	event.preventDefault(); // Totally stop stuff happening
	
	// START A LOADING SPINNER HERE
	
	// Create a formdata object and add the files
	var data = new FormData();
	$.each( files, function(key, value)
	{
		data.append(key, value);
	});
	
		data.append('checkin', checkin);
		data.append('field', $field);
		
		
		if( $time != '' )
		{
			data.append('time', $time);
		}
	
	$.ajax({
		url: $url,
		type: 'POST',
		data: data,
		cache: false,
		//dataType: 'json',
		processData: false, // Don't process the files
		contentType: false, // Set content type to false as jQuery will tell the server its a query string request
		success: function(data, textStatus, jqXHR)
		{
			if(typeof data.error === 'undefined')
			{
				// Success so call function to process the form
				show_modal( data );
				//submitForm(event, data);
			}
			else
			{
				// Handle errors here
				console.log('ERRORS: ' + data.error);
			}
		},
		error: function(jqXHR, textStatus, errorThrown)
		{
			// Handle errors here
			console.log('ERRORS: ' + textStatus);
			// STOP LOADING SPINNER
		}
	});
	
		
		
	return false;
}
//------------
//plugin upload
function plugin_uploadfile_exists( event, data, $url )
{
	var files;
	
	event.stopPropagation(); // Stop stuff happening
	event.preventDefault(); // Totally stop stuff happening
	
	// Create a formdata object and add the files
	
	$.ajax({
		url: $url,
		type: 'POST',
		data: data,
		cache: false,
		//dataType: 'json',
		processData: false, // Don't process the files
		contentType: false, // Set content type to false as jQuery will tell the server its a query string request
		success: function(data, textStatus, jqXHR)
		{
			if(typeof data.error === 'undefined')
			{
				// Success so call function to process the form
				show_modal( data );
				//submitForm(event, data);
			}
			else
			{
				// Handle errors here
				console.log('ERRORS: ' + data.error);
			}
		},
		error: function(jqXHR, textStatus, errorThrown)
		{
			// Handle errors here
			console.log('ERRORS: ' + textStatus);
			// STOP LOADING SPINNER
		}
	});
	
		
		
	return false;
}



function get_pluginuploadfile_success( $data )
{
	$data = $.parseJSON( $data);	
	//------------
	if( $data.checkout == true )
	{
		
		$check_item = $('#pform-control #plugin_uploadfile_success.uploadfile_item'+$data.field+' li.uploadfile_item_'+$data.time);
		if( $check_item.length >= 1)
		{
			$check_item.find('img').attr( 'src', site_url +'uploads/data/files/'+ $data.img );
			$check_item.find('input[type=hidden]').val( $data.img );
			
			
		}else{
			//$('#pform-control #plugin_uploadfile_success.uploadfile_item'+$data.field ).append( '<li class="uploadfile_item_'+$data.time+'" onclick="javascript:reupload( '+$data.time+', '+$data.checkin+', '+$data.field+')"><img src="'+site_url +'uploads/data/crop/'+ $data.img+'" class="img-responsive"><span class="glyphicon glyphicon-refresh"></span><input type="hidden" value="'+$data.img+'" name="fileupload['+$data.field+'||'+$data.time+']"></li>').show('slow');
			
			$('#pform-control #plugin_uploadfile_success.uploadfile_item'+$data.field ).append( '<li class="uploadfile_item_'+$data.time+'" onclick="javascript:reupload( '+$data.time+', '+$data.checkin+', '+$data.field+')"><img src="'+site_url +'uploads/data/files/'+ $data.img+'" class="img-responsive"><span class="glyphicon glyphicon-refresh"></span><input type="hidden" value="'+$data.img+'" name="fileupload['+$data.field+'||'+$data.time+']"></li>').show('slow');
		}
		hide_modal();
		//----------
		var img_item = $('#pform-control #plugin_uploadfile_success.uploadfile_item'+$data.field+' li').length;
		//alert( $('#plugin_uploadfile_success').attr('data-count')  );
		if( img_item >= $('#pform-control #plugin_uploadfile_success.uploadfile_item'+$data.field ).attr('data-count') )
		{
			$('#pform-control #pdetail-addfile[data-field='+$data.field+']').hide();	
		}
		
	}
}
//----------
function remove_cartitem( $rowid)
{
	$.post( site_url + 'cart/remove', {'checkin': $rowid}, function($data){
		view_cart();
	});	

}
//----------
function update_cartitem( $this)
{
	
	//alert( $($this).serialize() );
	$.post( site_url + 'cart/update', $($this).serialize(), function($data){
		view_cart();
	});	

}
//--------------
$(document).ready(function(e) {
    
	//----------
	setTimeout( function(){
		
		$('[data-close=true]').fadeOut('slow'); 	
		
	}, 5000);
		//-------------------------
	$('.scroll-slide-sp').bind('click', function(){
		//var target = $(this).attr('href');
		$('html,body').animate({ scrollTop: $('#home_scrollproduct').offset().top - 50 }, 'slow');
		return false;
	});	
		//-------------------------
	$('#pdetail-info .rbox-price .pright_comment_scroll').bind('click', function(){
		//var target = $(this).attr('href');
		$('html,body').animate({ scrollTop: $('#fcomment').offset().top - 50 }, 'slow');
		return false;
	});	
		//-------------------------
		
		
	
});