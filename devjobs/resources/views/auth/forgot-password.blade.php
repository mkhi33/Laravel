<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </x-slot>

        <div class="mb-4 text-sm text-gray-600">
            {{ __('¿Olvidaste tu password? coloca tu email de registro y te enviaremos un enlace para que puedas crear uno nuevo') }}
        </div>

        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('password.email') }}">
            @csrf

            <!-- Email Address -->
            <div>
                <x-label for="email" :value="__('Email')" />

                <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus />
            </div>

            <div class="flex justify-between my-5">
                <x-link   :href="route('login')">
                    Iniciar Sesión
                </x-link>
                <x-link :href="route('register')" >
                    Crear cuenta
                </x-link>

            </div>
            <x-button class="w-full justify-center" type="submit">
                {{ __('Enviar instrucciones') }}
            </x-button>
        </form>
    </x-auth-card>
</x-guest-layout>
