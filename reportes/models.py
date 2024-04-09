from django.db import models

# Create your models here.}
# Hereda el comportamiendo de models para la base de datos}
# models es una libreria
# Model es la clase de la libreria c: 
# Lo que está dentro del parentésis de una clase es lo que va a heredar :0


###################################################################################### 
class Sitio(models.Model):
    nombre = models.CharField(max_length=30)
    def __str__(self):
        #nos regresa el propio valor de la unidad  :(
        return self.nombre

class Unidad(models.Model): 

    nombre = models.CharField(max_length=30)
    #Es un llamado método mágico, 
    sitios = models.ManyToManyField(Sitio, related_name='unidades_sitio', through="SitioUnidad")

    def __str__(self):
        #nos regresa el propio valor de la unidad 
        return self.nombre 
    
class SitioUnidad(models.Model): 
    #desde unidad se hace la consulta inversa a la tabla SitioUnidad con related_name para buscar sitio
    unidad = models.ForeignKey(Unidad, on_delete= models.CASCADE, related_name='m2m_sitio')
    sitio = models.ForeignKey(Sitio, on_delete= models.CASCADE, related_name='m2m_unidad')

    def __str__(self):
        #nos regresa el propio valor de la unidad 
        #return f"{self.unidad.nombre} : {self.sitio.nombre}"
        return f"{self.unidad.nombre} : {self.sitio.nombre}"

class Agente(models.Model):
    
    no_registro = models.IntegerField(unique=True)
    nombre = models.CharField(max_length=50)
    sitio_unidad = models.ForeignKey(SitioUnidad, on_delete= models.CASCADE, related_name='unidad_agentes')
    def __str__(self):
        #nos regresa el propio valor de la unidad 
        return self.nombre

class Asesor(models.Model):
    
    no_registro = models.IntegerField(unique=True)
    nombre = models.CharField(max_length=50)
    #cuando tienes una tabla que depende otra :0 
    #¿? es una estrategia de borrado para que no se quede sola (?):00
    sitio_unidad = models.ManyToManyField(SitioUnidad, related_name='unidad_asesores')
    def __str__(self):
        #nos regresa el propio valor de la unidad 
        return self.nombre

class Gerente(models.Model):
    # Se define un diccionario de datos 
   
    no_registro = models.IntegerField(unique=True)
    #De la libbreria models se llama a la clase charfield que establece un máximo de caracteres
    #Se establecen los campos de la base de datos para la clase gerente C: 
    nombre = models.CharField(max_length=50)
    #En la clase CharField se tienen dos parametros ya que pueden recibir mas y al establecer en la variable choices pasan los parámetros del diccionario que establecimos en la parte superior :0
    #choises es una variale definida de la claseCharFied
    sitio =  models.ForeignKey(Sitio, on_delete= models.CASCADE, related_name='sitio_gerente')
    sitio_unidad = models.ManyToManyField(SitioUnidad, related_name='unidad_gerente')
    # ManyToManyField noS ayuda a que pueda tomar los distintos datos a la vez de la clase unidad o LIGARLOS C:
    # Otra explicacion de ello es que se crea una tabla intermedia  en donde el gerente puede tener varias unidades c; 
    # como en probabilidad y estadistica los círculos que se intersección.  Salu2.
    
    def __str__(self):
        #nos regresa el propio valor de la unidad 
        return self.nombre

class Evaluacion(models.Model): 
    
    num_evaluacion = models.IntegerField()
    agente = models.ForeignKey(Agente, on_delete= models.CASCADE, related_name='evaluaciones')
    evaluacion = models.FloatField()
    mes = models.PositiveIntegerField()
    anio = models.PositiveIntegerField()
    def __str__ (self):
        return f"{self.agente.no_registro} - {self.agente.nombre} : {self.evaluacion} del {self.mes}/{self.anio}"
    
    ######################################################################################    