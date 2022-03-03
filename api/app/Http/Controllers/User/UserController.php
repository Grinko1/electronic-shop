<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index() 
    {
        $user = auth()->user();
        // dd($user);
        return  response (['user' => $user]);
    }


    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        // dd($data);
        $data['password'] = Hash::make($data['password']);
        $user = User::where('email', $data['email'])->first();
        if ($user) return response(['error' => 'User with this email already exists'], 403);

        $user = User::create($data);
        $token = auth()->tokenById($user->id);
     
           return response(['access_token' => $token, 'user' => $user]);
    }
}
