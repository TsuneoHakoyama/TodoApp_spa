<?php

namespace Tests\Feature;

use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function getAllTasks(): void
    {
        $tasks = Task::factory()->count(10)->create();

        $response = $this->getJson('api/tasks');

        $response
            ->assertStatus(200)
            ->assertJsonCount($tasks->count());
    }

    #[Test]
    public function storeTasks(): void
    {
        $data = ['title' => 'テスト投稿'];

        $response = $this->postJson('api/tasks', $data);

        $response
            ->assertStatus(201)
            ->assertJsonFragment($data);
    }

    #[Test]
    public function updateTasks(): void
    {
        $task = Task::factory()->create();
        $task->title = '書き換え';

        $response = $this->patchJson("api/tasks/{$task->id}", $task->toArray());
        $response
            ->assertStatus(200)
            ->assertJsonFragment($task->toArray());
    }

    #[Test]
    public function deleteTasks(): void
    {
        $tasks = Task::factory()->count(10)->create();

        $response = $this->deleteJson("api/tasks/1");
        $response
            ->assertStatus(200);
        
        $response = $this->getJson("api/tasks");
        $response
            ->assertJsonCount($tasks->count() - 1);
    }
}