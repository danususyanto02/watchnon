<?php

namespace Database\Seeders;

use App\Models\Video;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class VideoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $video = [
            [
                'name' => 'Avatar 2',
                'slug' => 'avatar-2',
                'category' => 'Fantasy',
                'video_url' => 'https://youtu.be/rfvYiRUeK0I',
                'thumbnail' => 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/05/10/4110451475.jpg',
                'rating' => 8.7,
                'is_featured' => true
            ],
            [
                'name' => 'The Menu',
                'slug' => 'the-menu',
                'category' => 'Drama',
                'video_url' => 'https://youtu.be/VPSoNx1gyQ4',
                'thumbnail' => 'https://jadwalnonton.com/data/upload/movies/2022/the-menu-dc5720bb.jpg',
                'rating' => 8.7,
                'is_featured' => false
            ]
        ];
        Video::insert($video);
    }
}
