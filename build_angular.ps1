Set-Location ./resources/frontend;

ng build --prod --aot;

Remove-Item ../../public/*.js;
Remove-Item ../../public/*.js;
Remove-Item ../../public/*.css;
Remove-Item ../../public/*.ico;

Copy-Item dist/frontend/*.js ../../public/;
Copy-Item dist/frontend/*.css ../../public/;
Copy-Item dist/frontend/*.ico ../../public/;
Copy-Item dist/frontend/index.html ../views/index.html;

Set-Location ../../;
