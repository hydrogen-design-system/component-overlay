// Hydrogen / Component / Module JS

// This file is designed to be the location in which all scripting for the component's functionality exists. This file should export all relevant functionality so that it can be imported by Hydrogen and other systems.

// Development Notes:
// - please ensure all functions are defined with "_VERSION" at the end of their name.
// - please ensure all references to the parent component's selector also include "_VERSION" (e.g. [data-h2-accordion_VERSION])
//   This is so that when the component is built, it produces a version-locked set of code that can me manually imported to override newer versions.
// - please ensure that when event listeners are added to a trigger, that the script is checking for the system variable (see an example below).

// Trigger example.
// function h2TestFunction_VERSION(system) {

//   // Determine where the module is being loaded from. If the module is being loaded from the system, the event should only be applied to the component when it exists within the system's enabler selector (data-h2-system). This check ensures that any code that is loaded by the system is instanced and can be overridden by previous versions if need be.
//   if (system == null || system == "") {
//     var triggers = document.querySelectorAll("[data-h2-component_VERSION] [data-h2-component-trigger]");
//   } else {
//     var components = document.querySelectorAll("[data-h2-component_VERSION] [data-h2-component-trigger]");
//     components.forEach(function(component) {
//       if (component.closest("[data-h2-system]").getAttribute("data-h2-system" == system)) {
//         triggers.push(component);
//       }
//     });
//   }

//   // Loop through all triggers and add the click event listener to them.
//   triggers.forEach(function(trigger) {
//     trigger.addEventListener("click", function(e) {myCustomFunction()});
//   });

// }

// Export the module.
// export {
//   h2TestFunction_VERSION
// };