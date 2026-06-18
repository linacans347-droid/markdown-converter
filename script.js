
function convertMarkdown(){
  const markdownText = document.getElementById("markdown-input").value;
  const lines = markdownText.split("\n");

  const html = lines.map(line => {
    line = line.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');
    line = line.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    line = line.replace(/__(.*?)__/g, '<strong>$1</strong>');
    line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
    line = line.replace(/_(.*?)_/g, '<em>$1</em>');

    if (line.startsWith("### ")) {
      return "<h3>" + line.slice(4) + "</h3>";    
    } else if (line.startsWith("## ")) {
      return "<h2>" + line.slice(3) + "</h2>";
    } else if (line.startsWith("# ")) {
      return "<h1>" + line.slice(2) + "</h1>";
    } else if (line.startsWith("> ")) {
      return "<blockquote>" + line.slice(2) + "</blockquote>";
    }
    return line;
  });

  const htmlOutput = document.getElementById("html-output");
  const preview = document.getElementById("preview");
  const finalHTML = html.join("");
  
  if (htmlOutput) {
    htmlOutput.textContent = finalHTML;
  }

  if (preview) {
preview.innerHTML = finalHTML;
      }
  
  return finalHTML;
}
const markdownInput = document.getElementById("markdown-input");

if (markdownInput) {

  markdownInput.addEventListener("input", convertMarkdown);
}