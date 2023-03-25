<?php

use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Request;

Route::get('/', function () {
    return view('listings', [
        "heading" => "akhir makayn", 
        "listings" => 
        [
            [
            "id" => 1,
            "title" => "listing one",
            "discriptions" => "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "
            ], 
            [
                "id" => 2,
                "title" => "listing two",
                "discriptions" => "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "
                ]


        ]
    ]);
});
// when you get the hello, the response is that "hellow world"
Route::get('/hello', function () {
    return response('<h1>Hello, world!</h1>');
});
// get the data from the request 
Route::get('/product/{id}', function ($id) {
    return response('product '. $id);
});
// get data from the request it self
Route::get('/search', function (Request $request) {
    return $request->name . " " . $request->age;
});