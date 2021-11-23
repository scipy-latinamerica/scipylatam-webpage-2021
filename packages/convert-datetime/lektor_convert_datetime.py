# -*- coding: utf-8 -*-
from lektor.pluginsystem import Plugin

from dateutil import parser


class ConvertDatetimePlugin(Plugin):
    name = 'ConvertDatetime'
    description = u'Filter that converts str field to datetime.'

    def on_setup_env(self, **extra):
        self.env.jinja_env.filters['str2datetime'] = str2datetime


def str2datetime(iterable, attribute, new_field):
    result = []

    for i in iterable:
        str2datetime = i[attribute]
        setattr(i, new_field, parser.parse(str2datetime))
        result.append(i)
    return result
