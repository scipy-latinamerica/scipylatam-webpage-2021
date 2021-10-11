# -*- coding: utf-8 -*-
from lektor.pluginsystem import Plugin

import datetime


class DatetimenowPlugin(Plugin):
    name = 'DatetimeNow'
    description = u'Add now() to Jinja Templates.'

    def on_setup_env(self, **extra):
        self.env.jinja_env.globals['now'] = datetime.datetime.utcnow
