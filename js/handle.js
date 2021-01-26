function addToolTips(content_tooltips,title){
  var content = (content_tooltips.trim())+`
    <span class="tooltip-content">
      <span class="tooltip-text">
        <span class="tooltip-inner">`+title+`</span>
      </span>
    </span>
  `;
  return content;
}
if ($(".tooltips_pro").hasClass("tooltips_pro")) {
  $(".tooltips_pro").mouseenter(function(){
    $('.tooltips_pro span').remove();
    let tooltips_title = $(this).attr('data-tooltips-title');
    let content_tooltips = $(this).html();
    let last_content_tooltips = addToolTips(content_tooltips,tooltips_title)
    $(this).html(last_content_tooltips);
  })
}