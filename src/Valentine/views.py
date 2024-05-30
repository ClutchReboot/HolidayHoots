from django.http import Http404
from django.shortcuts import render
from HolidayHoots.views import base_context


base_context['title'] = 'Holiday Hoots | Valentine'


def index(request):
    return render(request, 'valentine_home.html', base_context)
