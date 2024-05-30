from django.http import Http404
from django.shortcuts import render
from HolidayHoots.views import base_context


base_context = {
    "main_site": "Holiday Hoots",
    "title": "Holiday Hoots | Valentine",
    "hostUrl": "http://localhost:8000/",
    "navigation": [
        {
            "name": "Home",
            "url": "#main"
        },
        {
            "name": "Favorites",
            "url": "#favorites"
        }
    ]
}


def index(request):
    return render(request, 'valentine_home.html', base_context)
