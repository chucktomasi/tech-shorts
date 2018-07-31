var SafetyUtils = Class.create();

TASK_TABLE = 'x_163438_safety_task';
ISSUE_TABLE = 'x_163438_safety_issue';

SafetyUtils.prototype = {
    initialize: function() {
    },
	
	countActiveTasks : function(taskGr) {
		
		var taskGa = new GlideAggregate(TASK_TABLE);
		var count = -1;
		
		taskGa.addAggregate('COUNT');
		taskGa.addQuery('issue', taskGr.getValue('issue'));
		taskGa.addQuery('active', true);
		taskGa.query();
		
		if (taskGa.next()) {
			count = taskGa.getAggregate('COUNT');
		}
		
		return count;
	},
	
	updateIssueState : function(issueId, stateVal) {
		
		var issueGr = new GlideRecord(ISSUE_TABLE);
		
		if (issueGr.get(issueId)) {
			issueGr.setValue('state', stateVal);
			issueGr.update();
			
			return true;
		}
		
		return false;
		
	},

    type: 'SafetyUtils'
};