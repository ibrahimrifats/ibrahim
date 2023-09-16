// Create and configure the code editors for each editor container
const editors = document.querySelectorAll(".editor");

editors.forEach((editor, index) => {
  ace.edit(editor, {
    theme: "ace/theme/cobalt",
    mode: "ace/mode/javascript",
  });
});



      //   function toggleContent(id) {
      //     var content = document.getElementById(id);
      //     content.style.display = content.style.display === 'block' ? 'none' : 'block';
      // }        

    //   function toggleContent(id) {
    //     var content = document.getElementById(id);
    //     if (content.style.display === 'block' || content.style.display === '') {
    //         content.style.display = 'none';
    //     } else {
    //         content.style.display = 'block';
    //     }
    // }
    

    function scrollToTopic(topic) {
      const element = document.getElementById(topic);
      element.scrollIntoView({ behavior: 'smooth' });
      toggleContent(topic); // Call the toggleContent function to show/hide content
  }
  
  function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'; // Show the content
    } else {
        content.style.display = 'none'; // Hide the content
    }
}




 







