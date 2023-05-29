function stringPicker(string_arg) {
    var pattern = /\${([A-Za-z0-9\s]+)}/g;
    var matches = string_arg.match(pattern);
    console.log(matches);
}

// Example usage
var arg = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur sagittis risus ${PRICE}, sed finibus ante ornare a. Donec a dolor ultricies, bibendum eros in ${Ticket 09}, commodo nibh. Morbi eget dui facilisis, imperdiet quam vitae, faucibus sem.";
stringPicker(arg);
  // Output: ["PRICE", "Ticket 09"]
