from django.contrib import admin
from .models import Sitio, Unidad, SitioUnidad, Agente, Asesor, Gerente, Evaluacion
# Register your models here.
# va a registrar a todos los administradores 
# aqui se importar a los adm
# se importan por cada tabla que se tenga en los modelos :0
admin.site.register(Sitio) 
admin.site.register(SitioUnidad)
admin.site.register(Agente)
admin.site.register(Asesor)
admin.site.register(Evaluacion)
#
class GerenteAdmin(admin.ModelAdmin):
    list_display= ["nombre", "no_registro"]

class UnidadAdmin(admin.ModelAdmin):
    """
    Admin panel management for Alumni
    """
    list_display = ["nombre","get_sitios"]

    def get_sitios(self,obj):
        return [sitio.nombre for sitio in obj.sitios.all()]

admin.site.register(Unidad, UnidadAdmin)

admin.site.register(Gerente, GerenteAdmin)

