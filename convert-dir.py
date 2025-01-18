import os
from PIL import Image

def convert_and_remove_non_webp(input_folder):
    """
    Convierte todas las imágenes que no son WebP a formato WebP y elimina los archivos originales.
    
    :param input_folder: Carpeta con las imágenes.
    """
    try:
        # Iterar sobre los archivos de la carpeta
        for file_name in os.listdir(input_folder):
            input_path = os.path.join(input_folder, file_name)
            
            # Saltar carpetas y archivos ya en formato WebP
            if os.path.isfile(input_path) and not file_name.lower().endswith('.webp'):
                # Generar el nombre de salida con la misma base
                output_path = os.path.join(input_folder, f"{os.path.splitext(file_name)[0]}.webp")
                
                # Abrir, convertir y guardar la imagen
                with Image.open(input_path) as img:
                    img.save(output_path, format="WEBP")
                    print(f"Convertido: {input_path} -> {output_path}")
                
                # Eliminar el archivo original
                os.remove(input_path)
                print(f"Eliminado: {input_path}")
    except Exception as e:
        print(f"Error al procesar imágenes: {e}")

# Ejemplo de uso
convert_and_remove_non_webp("./src/assets/images/Discounts")
