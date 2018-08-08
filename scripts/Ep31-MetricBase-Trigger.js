function onTrigger(/*String*/ metric, /*GlideRecord*/ current, /*GlideDateTime*/ start, /*int*/ level) {

    // Get the sensor name
    var sensorName = current.getDisplayValue();

    // Set the due date for 5 minutes from now
    var dueDate = start;
    dueDate.addSeconds(300);

    // Create the safety issue record
    var issue = new GlideRecord('x_163438_safety_issue');
    issue.newRecord();
    issue.category = 'Big';
    issue.opened_by.setDisplayValue('Safety Bot');
    issue.short_description = 'Temperature overload on ' + sensorName;
    issue.description = 'The automated monitoring system has detected a temperature overload on ' + sensorName;
    issue.due_date = dueDate;
    issue.priority = 1;
    issue.insert();
}