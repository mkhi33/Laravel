<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class NotificacionController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $notificaciones = auth()->user()->unreadNotifications ?? [];


        // Limpiar las notificaciones 
        auth()->user()->unreadNotifications->markAsRead();
        return View('notificaciones.index', [
            'notificaciones' => $notificaciones,
        ]);
    }
}
