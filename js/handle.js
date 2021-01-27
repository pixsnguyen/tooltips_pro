$(".tooltips_pro").on('mouseenter',function(){
	$('.tooltips_pro span').remove();
	let tooltips_title = $(this).attr('data-tooltips-title');
  let last_content_tooltips =`
    <span class="tooltip-pro-content">
      <span class="tooltip-pro-text">
        <span class="tooltip-pro-inner">`+tooltips_title+`</span>
      </span>
    </span>
  `;
	$(this).append(last_content_tooltips);
})

$(".datatable").on('mouseenter','tbody tr td .tooltips_pro',function(){
	$('.datatable  tr td .tooltips_pro span').remove();
	let tooltips_title = $(this).attr('data-tooltips-title');
	let last_content_tooltips =`
    <span class="tooltip-pro-content">
      <span class="tooltip-pro-text">
        <span class="tooltip-pro-inner">`+tooltips_title+`</span>
      </span>
    </span>
  `;
	$(this).append(last_content_tooltips);
})