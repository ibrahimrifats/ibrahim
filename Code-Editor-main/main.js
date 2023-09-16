// Create and configure the code editors for each editor container
const editors = document.querySelectorAll(".editor");

editors.forEach((editor, index) => {
  ace.edit(editor, {
    theme: "ace/theme/cobalt",
    mode: "ace/mode/javascript",
  });
});
