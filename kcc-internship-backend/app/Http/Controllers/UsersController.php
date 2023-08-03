<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UsersController extends Controller
{
    //
    public function register(Request $request)
    {

        $username = $request->input('username');
        $usernameExists = User::where('username', $username)->first();

        if($usernameExists){
            return response()->json(['message' => 'User already exists'], 410);
        }

        $user = new User;

        $user->username = $request->input('username');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        $user->repeat_password = $request->input('repeat_password');

        $user->save();

        $user = User::all();

        return $user;
    }
}
