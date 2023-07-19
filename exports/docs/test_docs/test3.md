# Django Documentation for `from django.db import models`

## `RandomModel` class

### Fields:
1. `name` - CharField with a maximum length of 100 characters
2. `age` - IntegerField
3. `is_active` - BooleanField with a default value of `True`

### Methods:
1. `__str__(self)` - Returns the name of the object as a string representation

## `RandomView` class

### Methods:
1. `get(self, request)` - Handles the GET request and returns a rendered template with all objects in `RandomModel`

## `RandomTemplate` class

### Properties:
1. `template_name` - Specifies the template name for rendering

### Methods:
1. `get_context_data(self, **kwargs)` - Adds the `random_text` variable to the context and returns the updated context

Note: This documentation provides an overview of the classes and their attributes and methods imported from `django.db.models`. For a more detailed explanation, please refer to the official Django documentation.