import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

// Function to transform quiz markdown to HTML using Quizdown library
const transformQuiz = (quizContent: string): string => {
  return `
    <div class="quiz">
      ${quizContent}
    </div>
    <script>
      console.log('Initializing Quizdown...');
      function loadScript(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = function() {
          console.log('Successfully loaded script: ' + url);
          callback();
        };
        script.onerror = function() {
          console.error('Failed to load script: ' + url);
        };
        document.head.appendChild(script);
      }
      function loadCSS(url) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.onload = function() {
          console.log('Successfully loaded CSS: ' + url);
        };
        link.onerror = function() {
          console.error('Failed to load CSS: ' + url);
        };
        document.head.appendChild(link);
      }
      document.addEventListener("DOMContentLoaded", function() {
        console.log('DOM fully loaded and parsed');
        loadCSS("https://cdn.jsdelivr.net/npm/quizdown@latest/public/build/quizdown.css");
        loadScript("https://cdn.jsdelivr.net/npm/quizdown@latest/public/build/quizdown.js", function() {
          console.log('Quizdown loaded');
          loadScript("https://cdn.jsdelivr.net/npm/quizdown@latest/public/build/extensions/quizdownKatex.js", function() {
            console.log('Quizdown KaTeX extension loaded');
            loadScript("https://cdn.jsdelivr.net/npm/quizdown@latest/public/build/extensions/quizdownHighlight.js", function() {
              console.log('Quizdown Highlight extension loaded');
              if (typeof quizdown !== 'undefined') {
                console.log('Quizdown is defined');
                quizdown.register(quizdownHighlight).register(quizdownKatex).init();
                console.log('Quizdown initialized');
              } else {
                console.error('Quizdown is not defined');
              }
            });
          });
        });
      });
    </script>
  `
}

export const HugoQuiz: QuartzTransformerPlugin = () => {
  return {
    name: "HugoQuiz",
    markdownPlugins() {
      return [
        () => {
          return (tree, file) => {
            visit(tree, "code", (node: any) => {
              if (node.lang === "quiz") {
                const quizContent = node.value
                const quizHtml = transformQuiz(quizContent)
                node.type = "html"
                node.value = quizHtml
                node.lang = undefined
              }
            })
          }
        },
      ]
    },
    externalResources() {
      return {
        js: [],
        css: []
      }
    },
  }
}