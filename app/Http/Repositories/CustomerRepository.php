<?php

namespace App\Http\Repositories;

use App\Http\Repositories\Interfaces\CustomerRepositoryInterface;
use App\Models\Customer;

class CustomerRepository implements CustomerRepositoryInterface
{
    public function index($search)
    {
        return Customer::where("last_name", $search)->orWhere("uuid", $search)->orWhere("phone_number", "like", "%".$search."%")->get();
    }

    public function show($id)
    {
        return Customer::findOrFail($id);
    }

    public function update($request, $id)
    {
        return Customer::findOrFail($id)->update($request);
    }

    public function store($request)
    {
        return Customer::create($request);
    }
}
