<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel-React</title>
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/ts/index.tsx'])
</head>

<body>
    <div id="app"></div>
</body>

</html>