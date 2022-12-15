<?php

namespace Database\Seeders;

use App\Models\PricingPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PricingPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pricingPlan = [
            [
                'name' => 'Basic',
                'price' => 2000,
                'active_period_in_months' => 5,
                'features' => json_encode(['feature 1', 'feature 2'])
            ],
            [
                'name' => 'Premium',
                'price' => 4000,
                'active_period_in_months' => 9,
                'features' => json_encode(['feature 1', 'feature 2','feature 4','feature 5'])
            ]
        ];

        PricingPlan::insert($pricingPlan);
    }
}
