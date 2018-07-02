// Create a new record on the incident table based on values from the current record
var inc = new GlideRecord('incident');
inc.newRecord();
inc.short_description = '(Safety): ' + current.short_description;
inc.caller_id = current.opened_by;
inc.description = current.description;
inc.insert();

// Display a (language independent) message for feedback
var msg = gs.getMessage('safety_incident_created', [inc.number]);
gs.addInfoMessage(msg);

// Redirect to the new incident
action.setRedirectURL('/incident.do?sys_id=' + inc.sys_id);