# django-multilang-demo

A Django project/app demonstrating how to create a multi-language website (with localized URLs and a language switcher).

Messages are stored in `.po` files (generated with `python manage.py makemessages -l sk` and `python manage.py makemessages -l sk -d djangojs)` and then compiled using `python manage.py compilemessages`.

Reffer to commit history for a step-by-step guide on adding i18n support to views/templates and JavaScript files as well.


Related links
 * [django-translation-demo](https://github.com/radzhome/django-translation-demo)
 * [INTERNATIONALIZATION WITH DJANGO, BACKBONE, UNDERSCORE TEMPLATES, AND SASS (LTR AND RTL LANGUAGES)](http://monicalent.com/blog/2014/08/10/internationalization-with-django-backbone-underscore-template-and-sass-ltr-and-rtl-languages/)
 * [Configuring static files](https://docs.djangoproject.com/en/1.11/howto/static-files/#configuring-static-files)
 * [The javascript_catalog view](https://docs.djangoproject.com/en/1.11/topics/i18n/translation/#the-javascript-catalog-view)
 * [The set_language redirect view](https://docs.djangoproject.com/en/1.11/topics/i18n/translation/#the-set-language-redirect-view)
