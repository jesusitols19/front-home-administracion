import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-postulante',
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './form-postulante.component.html',
  styleUrl: './form-postulante.component.css'
})
export class FormPostulanteComponent {

  formulario: FormGroup;
  archivoCV!: File;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formulario = this.fb.group({
      usuario: [''],
      fecha_nacimiento: [''],  // CORREGIDO
      nombres: [''],
      apellidos: [''],
      correo: [''],
      celular: [''],
      dni: ['']
    });

  }

  onArchivoSeleccionado(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.archivoCV = input.files[0];
    }
  }

  enviarSolicitud() {
    if (this.formulario.invalid || !this.archivoCV) return;

    const formData = new FormData();
    Object.entries(this.formulario.value).forEach(
      ([key, val]) => formData.append(key, val as string)
    );
    formData.append('cv', this.archivoCV, this.archivoCV.name);

    this.http.post('https://apinexuserv-ftdtfjdbc9aegrht.brazilsouth-01.azurewebsites.net/postulaciones', formData)
      .subscribe({
        next: () => alert('✅ Postulación enviada con éxito'),
        error: () => alert('❌ Error al enviar postulación')
      });
  }

}
