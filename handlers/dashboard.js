var dashboard = {
	load: function()
	{
		if(!turtl.profile || !turtl.profile.profile_data)
		{
			turtl.controllers.pages.trigger('loaded');
			return;
		}
		turtl.controllers.pages.load(DashboardController, {});
	}
};
