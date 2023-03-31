<?php

use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Models\Listing;

Route::get('/', function () {
    return view('listings', [
        "heading" => "akhir makayn", 
        "listings" => Listing::all()
    ]);
});

Route::get("/listings/{id}", function($id){
    return view("listing", [
        "listing" => Listing::find($id)
    ]);
});
