<?php

namespace App\Http\Livewire;

use App\Models\Vacante;
use Livewire\Component;
use Livewire\WithFileUploads;
use App\Notifications\NuevoCandidato;

class PostularVacante extends Component
{
    public $cv;
    public $vacante;
    
    use WithFileUploads;

    protected $rules = [
        'cv' => 'required|file|mimes:pdf',

    ];
    public function mount(Vacante $vacante) {
        $this->vacante = $vacante;
    }

    public function postularme(){
        $datos = $this->validate();

        // Almacenar CV en el disco duro
        $cv = $this->cv->store('public/cv');
        $datos['cv'] = str_replace('public/cv/', '', $cv);
        // Crear candidato a la vacante

        $this->vacante->candidatos()->create([
            'cv' => $datos['cv'],
            'user_id' => auth()->user()->id,
        ]);

        // Crear notificación y enviar email
        $this->vacante->reclutador->notify(new NuevoCandidato($this->vacante->id, $this->vacante->titulo, auth()->user()->id));

        // Mostrar al usuario un mensaje de OK
        session()->flash('mensaje', 'Se envio correctamente tu información, gracias por postularte a la vacante');
        return redirect()->back();
    }

    public function render()
    {
        return view('livewire.postular-vacante');
    }
}
