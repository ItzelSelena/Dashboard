# Generated by Django 3.2.23 on 2024-01-14 02:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Agente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('no_registro', models.IntegerField(unique=True)),
                ('nombre', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Sitio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='SitioUnidad',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sitio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='m2m_unidad', to='reportes.sitio')),
            ],
        ),
        migrations.CreateModel(
            name='Unidad',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=30)),
                ('sitios', models.ManyToManyField(related_name='unidades_sitio', through='reportes.SitioUnidad', to='reportes.Sitio')),
            ],
        ),
        migrations.AddField(
            model_name='sitiounidad',
            name='unidad',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='m2m_sitio', to='reportes.unidad'),
        ),
        migrations.CreateModel(
            name='Gerente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('no_registro', models.IntegerField(unique=True)),
                ('nombre', models.CharField(max_length=50)),
                ('sitio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sitio_gerente', to='reportes.sitio')),
                ('sitio_unidad', models.ManyToManyField(related_name='unidad_gerente', to='reportes.SitioUnidad')),
            ],
        ),
        migrations.CreateModel(
            name='Evaluacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num_evaluacion', models.IntegerField()),
                ('evaluacion', models.FloatField()),
                ('mes', models.PositiveIntegerField()),
                ('anio', models.PositiveIntegerField()),
                ('agente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='evaluaciones', to='reportes.agente')),
            ],
        ),
        migrations.CreateModel(
            name='Asesor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('no_registro', models.IntegerField(unique=True)),
                ('nombre', models.CharField(max_length=50)),
                ('sitio_unidad', models.ManyToManyField(related_name='unidad_asesores', to='reportes.SitioUnidad')),
            ],
        ),
        migrations.AddField(
            model_name='agente',
            name='sitio_unidad',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='unidad_agentes', to='reportes.sitiounidad'),
        ),
    ]
