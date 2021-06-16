from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.views.decorators.cache import cache_control
from django.views.generic import TemplateView
import debug_toolbar

urlpatterns = [
    url(r"^__debug__/", include(debug_toolbar.urls)),
    url(r"^", include("files.urls")),
    url(r"^", include("users.urls")),
    url(r"^accounts/", include("allauth.urls")),
    url(r"^api-auth/", include("rest_framework.urls")),
    path("admin/", admin.site.urls),
    url(r'^service-worker.js', cache_control(max_age=2592000)(TemplateView.as_view(
    template_name="service-worker.js",
    content_type='application/javascript',
)), name='service-worker.js'),
]
