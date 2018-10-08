$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
});

function toggleSnipet(elementId) {
  const snippetName = "selectable" + elementId;
  const toolName = "toggle" + elementId;
  const counterName = "counter" + elementId;
  const countdown = 20;
  $("#" + toolName).hide();
  $("#" + counterName).show();
  selectText(snippetName);
  $("#" + counterName).text(countdown + " seconds");
  const counterObj = counter(countdown - 1, false);
  changeToggle(snippetName, "code-snip-noline");
  let interval = setInterval(function() {
    $("#" + counterName).text(counterObj() + " seconds");
  }, 1000);
  setTimeout(function() {
    clearInterval(interval);
    $("#" + counterName).text("");
    $("#" + toolName).show();
    $("#" + counterName).hide();
    changeToggle(snippetName, "code-snip-line");
  }, countdown * 1000);
}

function selectText(containerid) {
  containerid = "selectable1";
  if (document.selection) {
    // IE
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  }
}

function counter(counter, flag) {
  let i = counter;
  return function() {
    return flag ? i++ : i--;
  };
}

function changeToggle(elementId, className) {
  var $element = $("#" + elementId);
  var $children = $element.children("li");
  $children.each(function(idx, li) {
    var codeItem = $(li);
    codeItem.attr("class", className);
  });
}

function componentVisibility(component, flag) {
  if (component.contains(flag ? "hide-component" : "show-component")) {
    component.remove(flag ? "hide-component" : "show-component");
  }
  component.add(flag ? "show-component" : "hide-component");
}
