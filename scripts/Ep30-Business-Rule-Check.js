// Condition: current.active.changesTo(false) && new SafetyUtils().countActiveTasks(current) >= 0
(function executeRule(current, previous /*null when async*/) {

	if (new SafetyUtils().updateIssueState(current.getValue('issue'), 10)) {
		gs.addInfoMessage('Updated parent issue to Approval');
	} else {
		gs.addErrorMessage('Error updating parent issue');
	}
})(current, previous);