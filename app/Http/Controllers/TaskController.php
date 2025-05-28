<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return Task::where('user_id', Auth::id())->orderByDesc('id')->get();
    }

    /**
     * Store a newly created resource in storage.
     * @param \App\Http\Requests\StoreTaskRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreTaskRequest $request)
    {
        $request->merge(['user_id' => Auth::id()]);
        $task = Task::create($request->all());

        return $task
            ? response()->json($task, 201)
            : response()->json([], 500);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     * @param \App\Http\Requests\UpdateTaskRequest $request
     * @param \App\Models\Task $task
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        Gate::authorize('update', $task);
        $task->title = $request->title;

        return $task->update()
            ? response()->json($task, 200)
            : response()->json([], 500);
    }

    /**
     * Remove the specified resource from storage.
     * @param \App\Models\Task $task
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Task $task)
    {
        Gate::authorize('delete', $task);
        return $task->delete()
            ? response()->json($task, 200)
            : response()->json([], 500);
    }

    /**
     * Update is_done state for the specified resource in storage.
     * @param \App\Models\Task $task
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateDone(Task $task, Request $request)
    {
        Gate::authorize('update', $task);
        $task->is_done = $request->is_done;

        return $task->update()
            ? response()->json($task)
            : response([], 500);
    }
}
