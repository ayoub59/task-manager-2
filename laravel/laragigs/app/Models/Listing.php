<?php


namespace App\Models;

class Listing {
    public static function all() {
        return [
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
            ];
    }
    public static function find($id) {
        $items = self::all();
        foreach ($items as $item) {
            if ($item["id"] == $id) {
                return $item;
            }
        }
    }

};