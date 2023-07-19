from django.db import models

class RandomModel(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class RandomView(View):
    def get(self, request):
        random_objects = RandomModel.objects.all()
        return render(request, 'random_template.html', {'random_objects': random_objects})

class RandomTemplate(TemplateView):
    template_name = "random_template.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['random_text'] = "Hello, this is some random text!"
        return context
