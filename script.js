//your JS code here. If required.
function removeColor() {
  const selected = document.getElementById("colorSelect");
  const selectedInde = selected.selectedIndex;
  selected.options[selectedInde].remove();
}