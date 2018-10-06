$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
});

function toggleSnipet(elementId) {
  changeToggle(elementId, 'code-snip-noline')

  setTimeout(function()
  { 
    document.getElementById(elementId).className = "mystyle";
    changeToggle(elementId, 'code-snip-line')
  }, 10000);

}

function changeToggle(elementId, className) {
  var $element = $('#' + elementId);
  var $children = $element.children('li');
  $children.each(function(idx, li)
  {
    var codeItem = $(li);
    codeItem.attr('class', className);
    console.log(codeItem)
  });
}

function componentVisibility(component, flag) {
  if (component.contains(flag ? "hide-component" : "show-component")) {
    component.remove(flag ? "hide-component" : "show-component");
  }
  component.add(flag ? "show-component" : "hide-component");
}
