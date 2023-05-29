// < !DOCTYPE html >
//     <html>
//         <head>
//             <style>
//                 ul.tree,
//                 ul.tree ul {
//                     list - style - type: none;
//                 margin: 0;
//                 padding: 0;
//     }

//                 ul.tree ul {
//                     margin - left: 1em;
//     }

//                 ul.tree li:before {
//                     content: "";
//                 display: inline-block;
//                 width: 0;
//                 height: 1em;
//                 vertical-align: middle;
//                 margin-left: -1em;
//                 margin-right: 0.5em;
//                 border-left: 1px solid #000;
//     }

//                 ul.tree li:last-child:before {
//                     border - left: 1px solid transparent;
//     }

//                 ul.tree li {
//                     margin: 0;
//                 padding: 0 1em;
//                 line-height: 2em;
//                 color: #369;
//                 cursor: pointer;
//     }

//                 ul.tree li.closed:before {
//                     border - top: 1px solid #000;
//                 border-bottom: 1px solid #000;
//                 border-left: 1px solid #000;
//                 transform: rotate(-90deg);
//     }

//                 ul.tree li.open:before {
//                     border - top: 1px solid transparent;
//                 border-bottom: 1px solid transparent;
//                 border-left: 1px solid #000;
//                 transform: rotate(0deg);
//     }
//             </style>
//         </head>
//         <body>
//             <ul id="tree" class="tree">
//                 <li class="closed">Root
//                     <ul>
//                         <li class="closed">Child 1
//                             <ul>
//                                 <li>Grandchild 1</li>
//                                 <li>Grandchild 2</li>
//                             </ul>
//                         </li>
//                         <li>Child 2</li>
//                     </ul>
//                 </li>
//             </ul>

//             <script>
//     // Get all the tree nodes
//                 var treeNodes = document.querySelectorAll('#tree li');

//                 // Add event listener to each tree node
//                 treeNodes.forEach(function(node) {
//                     node.addEventListener('click', function () {
//                         toggleNode(node);
//                     });
//     });

//                 // Function to toggle the visibility of child nodes
//                 function toggleNode(node) {
//       if (node.classList.contains('closed')) {
//                     node.classList.remove('closed');
//                 node.classList.add('open');
//       } else if (node.classList.contains('open')) {
//                     node.classList.remove('open');
//                 node.classList.add('closed');
//       }
//     }
//             </script>
//         </body>
//     </html>
