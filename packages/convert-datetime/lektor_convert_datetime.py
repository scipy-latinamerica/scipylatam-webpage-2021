# -*- coding: utf-8 -*-
from lektor.pluginsystem import Plugin
from datetime import timedelta
from dateutil import parser

FORMAT_SCHEDULE = "%H:%M"


class ConvertDatetimePlugin(Plugin):
    name = 'ConvertDatetime'
    description = u'Filter that converts str field to datetime.'

    def on_setup_env(self, **extra):
        self.env.jinja_env.filters['str2datetime'] = str2datetime
        self.env.jinja_env.filters['schedule_datetime'] = format_schedule_datetime


def format_schedule_datetime(value, duration=0):
    start = parser.parse(value)
    end = start + timedelta(minutes=int(duration))
    start_str = start.strftime(FORMAT_SCHEDULE)
    end_str = end.strftime(FORMAT_SCHEDULE)
    return f"{start_str} - {end_str}"


def str2datetime(iterable, attribute, new_field):
    result = []

    for i in iterable:
        str2datetime = i[attribute]
        setattr(i, new_field, parser.parse(str2datetime))
        result.append(i)
    return result
