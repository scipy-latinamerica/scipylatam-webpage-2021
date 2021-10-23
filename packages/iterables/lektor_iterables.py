# -*- coding: utf-8 -*-
from lektor.pluginsystem import Plugin
from itertools import zip_longest


def grouped(iterable, n, fillvalue=None):
    "s -> (s0,s1,s2,...sn-1), (sn,sn+1,sn+2,...s2n-1), (s2n,s2n+1,s2n+2,...s3n-1), ..."
    args = [iter(iterable)] * n
    return zip_longest(*args, fillvalue=fillvalue)


class IterablesPlugin(Plugin):
    name = 'Iterables'
    description = u'Add iterables to Jinja.'

    def on_setup_env(self, **extra):
        self.env.jinja_env.globals['zip'] = zip
        self.env.jinja_env.globals['grouped'] = grouped
