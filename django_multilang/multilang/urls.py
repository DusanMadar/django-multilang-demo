from django.conf.urls import url
from django.utils.translation import ugettext_lazy as _

from . import views


app_name = 'multilang'


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(_(r'^hello-world/'), views.greeting, name='greeting'),
]
