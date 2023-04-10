<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCustomerRequest;
use App\Http\Requests\CustomerSearchRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Http\Services\CustomerService;
use Exception;

class CustomerController extends Controller
{
    protected $customerService;

    public function __construct(CustomerService $customerService)
    {
        $this->customerService = $customerService;
    }

    public function index(CustomerSearchRequest $request)
    {
        try{
            $customers = $this->customerService->index($request->search);
        }catch(Exception $e){
            return response()->json(['message' => "Problem while accessing the customers"], 400);
        }

        return response()->json(["payload" => $customers, "success" => true]);
    }

    public function show($id)
    {
        try{
            $customer = $this->customerService->show($id);
        }catch(Exception $e){
            return response()->json(['message' => "Problem while accessing the customer"], 400);
        }

        return response()->json(["payload" => $customer, "success" => true]);
    }

    public function store(AddCustomerRequest $request)
    {
        try{
            $this->customerService->store($request->validated());
        }catch(Exception $e){
            return response()->json(['message' => "Problem while creating the customer"], 400);
        }

        return response()->json(["message" => "The customer was successfully created", "success" => true]);
    }

    public function update(UpdateCustomerRequest $request, $id)
    {
        try{
            $this->customerService->update($request->validated(), $id);
        }catch(Exception $e){
            return response()->json(['message' => "Problem while updating the customer"], 400);
        }

        return response()->json(["message" => "The customer was successfully updated", "success" => true]);
    }
}
