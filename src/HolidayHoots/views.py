from django.shortcuts import render


base_context = {
    "main_site": "Holiday Hoots",
    "title": "Holiday Hoots",
    "hostUrl": "http://localhost:8000/",
    "navigation": [
        {
            "name": "Valentine's Day",
            "url": "valentine/"
        }
    ]
}


def index(request):
    return render(request, 'home.html', base_context)
