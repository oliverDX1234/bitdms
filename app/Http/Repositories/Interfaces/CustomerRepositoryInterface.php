<?php

namespace App\Http\Repositories\Interfaces;

interface CustomerRepositoryInterface
{
    public function index($search);

    public function show($id);

    public function update($request, $id);

    public function store($request);
}
