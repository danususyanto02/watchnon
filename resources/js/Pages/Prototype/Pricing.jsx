import Authenticated from "@/Layouts/Authenticated/Index"
import PricingCard from "@/Components/PricingCard"

export default function Pricing() {
    return <Authenticated>    <div className="mx-auto max-w-screen hidden lg:block">
        <div className="">
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>
                <PricingCard name="Basic" price={28888} durationInMonth={3} features={["feature 1","feature 2","feature 3", ]}/>
                <PricingCard isPremium={true}  name="Basic" price={58888} durationInMonth={9} features={["premium 1","premium 2","premium 3", ]}/>


            </div>
        </div>

    </div></Authenticated>
}
