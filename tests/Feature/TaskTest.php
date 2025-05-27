<?php

namespace Tests\Feature;

use App\Models\Task;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $user = User::factory()->create();
        $this->actingAs($user);
    }

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
    public function storeTasks_WithNoTitle(): void
    {
        $data = ['title' => ''];

        $response = $this->postJson('api/tasks', $data);

        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'title' => 'タイトルは必ず入力してください'
            ]);
    }

    #[Test]
    public function storeTasks_TooManyLetters(): void
    {
        $data = ['title' => str_repeat('あ', 101)];

        $response = $this->postJson('api/tasks', $data);

        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'title' => 'タイトルは100文字以内で入力してください'
            ]);
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
    public function updateTasks_WithNoTitle(): void
    {
        $task = Task::factory()->create();
        $task->title = '';

        $response = $this->patchJson("api/tasks/{$task->id}", $task->toArray());

        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'title' => 'タイトルは必ず入力してください'
            ]);
    }

    #[Test]
    public function updateTasks_TooManyLetters(): void
    {
        $task = Task::factory()->create();
        $task->title = str_repeat('あ', 101);

        $response = $this->patchJson("api/tasks/{$task->id}", $task->toArray());

        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'title' => 'タイトルは100文字以内で入力してください'
            ]);
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