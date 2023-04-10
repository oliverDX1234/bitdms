<?php

namespace App\Http\Services;
use App\Http\Repositories\Interfaces\CustomerRepositoryInterface;
use Exception;
use Illuminate\Support\Str;

class CustomerService
{
    protected $customerRepository;

    public function __construct(CustomerRepositoryInterface $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    public function index($search)
    {
        try{
            return $this->customerRepository->index($search);
        }catch(Exception $e){
            throw new Exception($e->getMessage());
        }

    }

    public function show($id)
    {
        try{
            return $this->customerRepository->show($id);
        }catch(Exception $e){
            throw new Exception($e->getMessage());
        }

    }

    public function update($request, $id)
    {
        try{
            return $this->customerRepository->update($request, $id);
        }catch(Exception $e){
            throw new Exception($e->getMessage());
        }

    }

    public function store($request)
    {
        try{
            return $this->customerRepository->store($request);
        }catch(Exception $e){
            dd($e->getMessage());
            throw new Exception($e->getMessage());
        }
    }
}
