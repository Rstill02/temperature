from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=100)

def _str_(self):
    return self.name


class Project(models.Model):
    name= models.CharField(max_length=225)
    description = models.TextField()
    year = models.IntegerField()
    image = models.ImageField(upload_to='static/img')
    repository = models.URLField()
    skill = models.ManyToManyField(Skill)

def _str_(self):
    return f"{self.name} - ({self.year})"

