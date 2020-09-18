// Javascript skeleton. // Edit and adapt to your needs. // The documentation of the NeoLoad Javascript API // is available in the appendix of the documentation.

// Get variable value from VariableManager 
var choix = context.variableManager.getValue("animal"); var time = context.variableManager.getValue("time");

if (choix==null) { context.fail("Variable 'item' not found"); }

// Do some computation using the methods // you defined in the JS Library 
logger.debug("The item is:   "+choix+"  The time is:   "+time+"  The LG is:   "+context.currentLG.name);