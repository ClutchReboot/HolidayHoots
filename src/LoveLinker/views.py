from django.shortcuts import render


base_context = {
    "main_site": "Love Linker",
    "title": "Love Linker",
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
    return render(request, 'home.html', base_context)
