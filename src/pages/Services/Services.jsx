import ServiceCard from "../../components/ServiceCard";
import DashboardLaout from "../../layout/DashboardLaout";


function Services() {

  // Using Dummy Data for now, will replace with API data later
  const services = [
    {
      "_id": "64f1a2b3c9e77b001f8e4a11",
      "name": "AC Regular Servicing",
      "category": "AC Repair",
      "short-details": "Basic cleaning of filters, cooling coils, and outer panel. Includes a general performance check.",
      "long-details": "Maintaining your air conditioning unit through regular servicing is crucial for ensuring optimal cooling performance, improving energy efficiency, and extending the overall lifespan of the appliance. Over time, dust, dirt, and debris accumulate inside the filters, coils, and fins, which forces the compressor to work harder, leading to higher electricity bills and potential hardware failures. Our comprehensive regular servicing includes a meticulous inspection of all core components, professional cleaning of the indoor and outdoor units, and clearing of the drainage pipes to prevent any annoying water leakage issues.<br />Furthermore, our certified technicians will check the refrigerant gas levels, inspect the electrical connections for safety, and measure the airflow to guarantee your room cools down as quickly as it did when the unit was brand new. By scheduling this routine maintenance, you not only ensure a comfortable environment for your home or office during the peak summer months but also safeguard your family's health by eliminating mold, bacteria, and allergens that thrive in uncleaned AC systems. We recommend booking this service at least twice a year for the best results.",
      "image": "https://placehold.co/600x400/1E2939/white?text=AC+Servicing"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a12",
      "name": "AC Installation",
      "category": "AC Repair",
      "short-details": "Professional installation of Split or Window AC units, including drilling and pipe fitting.",
      "long-details": "A flawless AC installation is the foundation for a highly efficient and long-lasting cooling system in your home or commercial space. Improper installation can lead to a host of problems, including gas leaks, strange noises, uneven cooling, and significantly higher energy consumption. Our professional AC installation service ensures that your Split or Window AC unit is mounted securely and accurately. The process involves precise drilling, optimal placement of both the indoor and outdoor units for maximum airflow, and high-quality copper pipe fitting to ensure zero leakage and perfect insulation from day one.\n\nOur expert technicians handle everything from start to finish, including wiring, vacuuming the lines to remove moisture, and conducting a thorough post-installation testing phase to ensure the compressor and thermostat are communicating perfectly. We take special care to maintain the aesthetic appeal of your walls, cleaning up any drilling dust and sealing gaps efficiently. Whether you are moving into a new apartment, upgrading your old unit, or setting up a new office, our installation service guarantees peace of mind and immediate comfort without any hidden hassles.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=AC+Installation"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a13",
      "name": "AC Gas Refill",
      "category": "AC Repair",
      "short-details": "Leakage check and complete refrigerant gas refill for optimal cooling performance.",
      "long-details": "If your air conditioner is running constantly but failing to cool the room, or if you notice ice forming on the evaporator coils, there is a very high chance that your unit is suffering from low refrigerant levels. AC units do not consume gas like a car consumes fuel; a drop in gas level means there is a leak somewhere in the system. Our AC Gas Refill service starts with a rigorous diagnostic check to identify and seal any micro-leaks in the copper tubing or connection joints, ensuring that the new gas we pump in won't just escape again within a few weeks.\n\nOnce the system is fully sealed and vacuumed to remove unwanted air and moisture, we inject the precise amount of high-grade, eco-friendly refrigerant gas (such as R-32 or R-410A) required by your specific AC model. This meticulous process restores your air conditioner's cooling capacity to its factory-level peak performance, drastically reducing the strain on your compressor. Proper gas levels also prevent the compressor from overheating and burning out, saving you from massive repair bills down the line and keeping your indoor environment refreshingly cool.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=AC+Gas+Refill"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a14",
      "name": "AC Master Wash",
      "category": "AC Repair",
      "short-details": "Deep cleaning of the entire AC unit using a high-pressure water pump and cleaning chemicals.",
      "long-details": "When a standard servicing is no longer enough to clear out months or years of deeply embedded grime, our AC Master Wash service provides the ultimate rejuvenation for your air conditioning unit. Over time, a thick layer of sludge, dust, and microbiological growth can coat the hidden inner workings of your AC, particularly the blower fan and the innermost cooling coils. This not only chokes the airflow but also creates a breeding ground for foul odors and harmful bacteria. Our Master Wash involves partially dismantling the indoor unit, applying specialized, non-corrosive foaming chemicals that break down stubborn dirt, and then using a high-pressure water jet to flush everything out completely.\n\nThe transformation after a Master Wash is immediate and highly noticeable. The airflow volume increases significantly, the air smells fresh and clean, and the cooling speed of the room improves dramatically. By removing this heavy insulating layer of dirt from the coils, the heat exchange process becomes highly efficient again, which directly translates to lower electricity consumption. This service is highly recommended for units that haven't been serviced in over a year, or for ACs located in highly dusty environments or commercial kitchens.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=AC+Master+Wash"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a15",
      "name": "Refrigerator Compressor Repair",
      "category": "Appliance Repair",
      "short-details": "Diagnosis and replacement of faulty refrigerator compressors to restore cooling.",
      "long-details": "The compressor is essentially the heart of your refrigerator, responsible for circulating the refrigerant that absorbs heat and keeps your food fresh and your freezer freezing. When the compressor fails, the entire cooling system shuts down, putting your expensive groceries at risk of spoiling within hours. Signs of a failing compressor include strange clicking noises, excessive heat radiating from the back of the fridge, or the appliance running non-stop without actually dropping the internal temperature. Our expert repair service begins with a comprehensive electrical and mechanical diagnostic to confirm whether the compressor is dead, or if the issue lies with a smaller, cheaper component like the start relay or capacitor.\n\nIf a replacement is indeed necessary, our skilled technicians will safely extract the old compressor, flush the internal lines to remove any contaminated oil or debris, and expertly weld a brand-new, high-efficiency compressor in its place. We finish the job by vacuuming the system and recharging it with the exact specification of refrigerant gas required. Our meticulous approach ensures that your refrigerator is brought back to life with reliable, long-lasting cooling power, saving you the immense cost and hassle of having to buy a completely new appliance.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Fridge+Repair"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a16",
      "name": "Washing Machine Motor Fixing",
      "category": "Appliance Repair",
      "short-details": "Repair or replacement of washing machine motors for top-load and front-load models.",
      "long-details": "A washing machine relies heavily on its motor to perform the rigorous tasks of agitating heavy loads of wet clothes and spinning them at high speeds to extract water. When this vital component starts to malfunction, you might notice your machine making loud humming noises, refusing to spin, or stopping abruptly mid-cycle. These issues are often caused by worn-out carbon brushes, burnt copper windings due to overloading, or a faulty drive belt connection. Our Washing Machine Motor Fixing service is designed to tackle all these problems across both top-load and front-load models of all major brands, providing a swift and reliable solution to get your laundry routine back on track.\n\nOur technicians will carefully dismantle the required panels to access the motor assembly, running multimeter tests to pinpoint the exact electrical or mechanical failure. Whenever possible, we focus on repairing the motor by replacing specific worn parts like bearings or brushes, which is highly cost-effective. However, if the motor is completely burnt out, we provide genuine replacement parts and install them with precision. We also recalibrate the tension belts and ensure the drum balance is perfect, leaving your washing machine running smoothly and quietly as if it were brand new.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Washing+Machine"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a17",
      "name": "Microwave Panel Servicing",
      "category": "Appliance Repair",
      "short-details": "Fixing unresponsive buttons, display issues, and general circuit board repairs for microwaves.",
      "long-details": "The control panel is the main communication interface between you and your microwave. When the touchpad becomes unresponsive, the LED display starts flickering, or certain buttons flat-out refuse to work, a highly convenient kitchen appliance suddenly becomes an incredibly frustrating metal box. These panel issues are typically caused by moisture seeping into the membrane switch, repeated heavy pressing wearing out the conductive layers, or a short circuit within the main control board caused by power fluctuations. Our Microwave Panel Servicing addresses these exact electronic faults with high precision and care.\n\nOur specialized electronics technicians will carefully extract the front fascia of your microwave to assess the damage to the printed circuit board (PCB) and the membrane keypad. Depending on the severity of the issue, we will either perform micro-soldering to fix broken circuit tracks, clean the carbon contacts to restore button responsiveness, or completely replace the membrane sticker and display unit if it is beyond repair. We ensure that every button registers perfectly and all safety mechanisms are fully operational before putting the appliance back together, restoring the fast and easy cooking experience you rely on.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Microwave+Repair"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a18",
      "name": "LED TV Screen Repair",
      "category": "Appliance Repair",
      "short-details": "Screen replacement and backlight repair for all major LED and Smart TV brands.",
      "long-details": "Encountering display issues on your LED or Smart TV can be incredibly disheartening, especially when it disrupts your daily entertainment or family movie nights. The most common problems include a completely black screen while the sound still plays, vertical or horizontal colored lines running across the display, or dark patches clouding the picture. These issues are almost always related to either burnt-out LED backlight strips hiding behind the LCD panel, or physical/water damage to the delicate T-CON board and screen matrix. Our LED TV Screen Repair service is equipped to handle these fragile components with the utmost precision in a dust-free environment.\n\nIf the issue is a backlight failure—which is highly common—we will meticulously dismantle the TV, lift the ultra-thin, fragile LCD glass, and replace the entire array of LED strips to restore uniform, brilliant brightness to your screen. If the display panel itself is cracked or severely damaged, we can source and install an exact-match replacement panel for your specific model. We finish the repair by updating the TV firmware and calibrating the picture settings, ensuring vibrant colors and sharp contrasts so you can go back to enjoying your favorite shows in perfect high-definition quality.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=TV+Repair"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a19",
      "name": "Water Purifier Filter Change",
      "category": "Appliance Repair",
      "short-details": "Replacement of RO, UV, and UF filters to ensure safe and clean drinking water.",
      "long-details": "Access to clean, safe drinking water is a fundamental health requirement, and your home water purifier is the primary defense against harmful waterborne diseases, heavy metals, and chemical contaminants. However, the filters inside your RO (Reverse Osmosis), UV (Ultraviolet), or UF (Ultrafiltration) system have a limited lifespan. Over time, they become clogged with mud, rust, chlorine, and dissolved solids, which not only drastically reduces the water flow rate but also compromises the quality and taste of your drinking water. Regularly changing these filters is non-negotiable for the health of your family and the longevity of the purifier's water pump.\n\nOur comprehensive filter change service includes the systematic replacement of the pre-filter, sediment filter, carbon block, and the core RO membrane using 100% genuine, food-grade spares. We also clean the internal water storage tank and check the UV lamp intensity to ensure all bacteria and viruses are being effectively neutralized. Finally, our technicians will measure the TDS (Total Dissolved Solids) level of the output water to ensure it falls perfectly within the healthy, sweet-tasting range. Don't compromise on hydration; let us keep your water purification system running flawlessly.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Water+Purifier"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a1a",
      "name": "Pipe Leakage Repair",
      "category": "Plumbing",
      "short-details": "Identifying and sealing leaks in bathroom, kitchen, or main water supply pipes.",
      "long-details": "A leaking pipe might seem like a minor annoyance initially, but if left unattended, it can escalate into a massive structural nightmare. Continuous water leakage can ruin your expensive cabinetry, peel off wall paint, promote the growth of toxic black mold, and even weaken the structural integrity of your floors and ceilings. Furthermore, hidden leaks in the main supply line can lead to an inexplicably high monthly water bill. Our professional Pipe Leakage Repair service is designed to track down the exact source of the moisture, whether it is concealed deep behind tiled walls, under the kitchen sink, or buried in the ground outside.\n\nWe utilize advanced leak detection techniques to minimize the need for destructive wall breaking. Once the compromised pipe section is located—whether it's PVC, CPVC, or galvanized iron—our expert plumbers will cleanly cut out the damaged segment and fuse or thread a new, high-pressure pipe fitting securely in place. We ensure a perfect, watertight seal using professional-grade sealants and pressure-test the entire line before closing up the area. With our swift and durable repair service, you can put an end to water wastage and protect your property from expensive water damage.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Pipe+Leakage"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a1b",
      "name": "Tap & Sink Installation",
      "category": "Plumbing",
      "short-details": "Installing new faucets, sinks, and fixing drainage issues in kitchens and bathrooms.",
      "long-details": "Upgrading the taps and sinks in your home is one of the quickest and most effective ways to modernize your kitchen or bathroom, improving both aesthetics and functionality. However, proper installation is critical; a poorly fitted sink can lead to wobbly fixtures, continuous base leaks that rot your wooden cabinets, and foul-smelling drainage backups. Our comprehensive Tap & Sink Installation service covers everything from removing your old, rusted fixtures to perfectly aligning and securing modern, heavy-duty stainless steel or ceramic sinks. We handle all varieties of faucets, including mixer taps, pull-out sprayers, and sensor-activated models.\n\nBeyond just dropping the sink into the counter, our plumbers meticulously manage the entire under-sink plumbing network. We install new P-traps to block sewer gases from entering your home, ensure the angle valves are functioning perfectly, and apply high-grade plumber’s putty and silicone sealants to guarantee a 100% waterproof finish. We also test the water pressure and drainage speed to ensure everything flows smoothly without any blockages or leaks. Whether it's a simple bathroom vanity upgrade or a complete kitchen sink overhaul, we provide a clean, professional, and hassle-free installation experience.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Tap+Installation"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a1c",
      "name": "Geyser Installation & Repair",
      "category": "Plumbing",
      "short-details": "Mounting, wiring, and plumbing setup for new water heaters, plus thermostat repairs.",
      "long-details": "A reliable supply of hot water is an absolute necessity during the colder months, making your geyser one of the most critical appliances in your bathroom. Whether you have purchased a brand-new storage water heater or an instant tankless model, our Geyser Installation service guarantees a safe and structurally sound setup. Geysers are heavy when filled with water and require robust wall mounting using heavy-duty anchor bolts. Furthermore, because geysers mix high-voltage electricity with water, improper installation can lead to fatal short circuits or dangerous pressure build-ups. We handle the secure mounting, precision plumbing of the hot and cold inlet/outlet pipes, and safe electrical grounding.\n\nIf you already own a geyser that has stopped heating, is dispensing rusty water, or is leaking from the tank, our repair team is fully equipped to diagnose and fix the issue on the spot. Common problems include burnt-out heating elements due to hard water scaling, faulty thermostats that fail to regulate the temperature, and blown safety valves. We descale the inner tank, replace the damaged electrical components with original parts, and calibrate the thermostat to ensure your water reaches the perfect temperature safely and efficiently, extending the life of your appliance.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Geyser+Service"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a1d",
      "name": "Ceiling Fan Repair",
      "category": "Electrical",
      "short-details": "Fixing noisy fans, replacing burnt coils, and installing new capacitors or regulators.",
      "long-details": "Ceiling fans are the unsung heroes of home comfort, often running non-stop for months on end to keep the air circulating. Due to this relentless usage, they inevitably develop mechanical and electrical issues. You might notice your fan moving sluggishly even on the highest setting, making an annoying ticking or grinding noise, or violently wobbling, which can be quite dangerous. Our Ceiling Fan Repair service is dedicated to diagnosing these exact issues quickly and efficiently. A slow fan is most commonly cured by replacing a weakened capacitor, which restores the necessary electrical kick to get the blades spinning at maximum RPM.\n\nFor more severe issues, such as a fan that won't turn on at all or smells like burning plastic, the problem usually lies within the copper winding of the stator motor. Our electricians can unmount the fan, replace burnt coils, and lubricate the dry ball bearings to eliminate those irritating squeaks. We also fix faulty wall regulators and balance the blades to ensure smooth, whisper-quiet operation. Instead of throwing away a perfectly good fan, let our experts repair it and restore the cool, relaxing breeze to your room at a fraction of the cost of buying a new unit.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Fan+Repair"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a1e",
      "name": "Switchboard Rewiring",
      "category": "Electrical",
      "short-details": "Replacing old switches, fixing loose connections, and organizing messy switchboard wiring.",
      "long-details": "The electrical switchboard is the control hub for all the lights and appliances in a room, but it is also one of the most common sources of electrical hazards in a home. Over time, repeated flipping of switches can wear out their internal spring mechanisms, leading to loose connections that create microscopic electric arcs. This arcing generates intense heat, which can melt the plastic faceplate, cause a burning smell, and eventually lead to a dangerous house fire. Our Switchboard Rewiring service addresses these safety concerns by overhauling old, faulty, and disorganized electrical boxes.\n\nOur certified electricians will carefully open the board, trace every wire, and replace burnt-out switches, dead sockets, and faulty fan regulators with high-quality, modern modular fittings. We meticulously strip and reconnect wires, ensuring every terminal is screwed down tightly to prevent future sparking. We also organize the internal wiring",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Switchboard+Wiring"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a1f",
      "name": "Inverter & Battery Setup",
      "category": "Electrical",
      "short-details": "Complete installation of home inverters, battery maintenance, and water top-up.",
      "long-details": "Frequent power cuts can severely disrupt your daily life, making a reliable inverter and battery system an absolute necessity for modern homes and offices. However, setting up a backup power system requires deep technical knowledge to ensure that the load is balanced correctly and that the transition during a power failure is seamless. Our Inverter & Battery Setup service covers the complete end-to-end installation of your UPS system. We calculate your total wattage requirement, help you select the right capacity inverter, and integrate it safely into your home's main distribution board so that your essential lights, fans, and Wi-Fi routers stay powered without overloading the system.\n\nIn addition to new installations, we provide crucial maintenance services for your heavy-duty tubular batteries. A battery's lifespan heavily depends on regular upkeep, particularly monitoring the distilled water levels and cleaning the lead terminals. Our technicians will safely top up the battery water, apply anti-corrosion petroleum jelly to the terminals to prevent acid build-up, and test the gravity of the battery acid to ensure it is holding a full charge. With our professional setup and maintenance, you can enjoy uninterrupted power supply and maximize the lifespan of your expensive battery investment.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Inverter+Setup"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a20",
      "name": "Deep Home Cleaning",
      "category": "Cleaning",
      "short-details": "Intensive cleaning of all rooms, including floor scrubbing, window wiping, and dusting.",
      "long-details": "Daily sweeping and mopping are great for maintaining surface-level neatness, but they rarely address the hidden dirt, grime, and allergens that accumulate in the hard-to-reach corners of your home over time. Our Deep Home Cleaning service is an intensive, top-to-bottom sanitization process designed to transform your living space into a pristine, hygienic sanctuary. A dedicated team of professional cleaners will systematically tackle every room, starting with the removal of high-level cobwebs and the wiping down of ceiling fans, light fixtures, and AC vents. We move heavy furniture to vacuum the forgotten dust bunnies underneath, ensuring no corner is left untouched.\n\nIn the kitchen, we aggressively degrease the countertops, backsplash tiles, and the exterior of appliances, removing sticky oil residues that attract pests. Bathrooms receive specialized attention with the application of industrial-grade, safe chemicals to remove hard water stains, soap scum, and tile grout discoloration, leaving your fixtures sparkling clean. We finish the process by machine-scrubbing the floors and wiping down all windows and glass panels for a streak-free shine. This service is highly recommended before moving into a new house, preparing for a major festival, or simply giving your home a refreshing, spotless reset.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Deep+Cleaning"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a21",
      "name": "Sofa Dry Cleaning",
      "category": "Cleaning",
      "short-details": "Professional vacuuming and chemical shampooing to remove stains and dirt from fabric sofas.",
      "long-details": "Your living room sofa is the centerpiece of your home, bearing the brunt of daily use, accidental food spills, pet hair, and sweaty lounging. Over time, fabric sofas absorb a massive amount of dust, body oils, and odors, causing them to look dull and become a breeding ground for microscopic dust mites that trigger allergies. Our Professional Sofa Dry Cleaning service uses advanced extraction technology to deeply rejuvenate your upholstery without the risk of shrinking or damaging the delicate fabric. The process begins with a high-powered industrial vacuuming phase to pull out the loose, dry dirt embedded deep within the cushioning.\n\nNext, our trained specialists apply an eco-friendly, fabric-safe foaming shampoo that breaks down stubborn stains like coffee, ink, or grease. We gently agitate the fabric using soft-bristled motorized brushes to lift the soil to the surface. Finally, we use a powerful wet-vacuum extraction machine to instantly suck out the dirty lather and moisture, leaving the sofa merely damp and ready to air-dry within a few hours. The result is a sofa that not only looks remarkably brighter and smells factory-fresh but is also thoroughly sanitized and safe for your children and pets to relax on.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Sofa+Cleaning"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a22",
      "name": "Carpet Shampooing",
      "category": "Cleaning",
      "short-details": "Deep cleaning of carpets using industrial-grade machines to remove dust mites and odors.",
      "long-details": "Carpets add a touch of luxury and warmth to any room, but they also act like giant filters, trapping an incredible amount of dirt, dead skin cells, pet dander, and outdoor pollutants deep within their fibers. Standard household vacuum cleaners simply lack the suction power to pull this trapped debris out from the base of the carpet, which eventually leads to fiber degradation, a flattened appearance, and persistent musty odors. Our Carpet Shampooing service utilizes heavy-duty, industrial-grade equipment to provide a restorative deep clean that dramatically extends the life of your expensive rugs and wall-to-wall carpeting.\n\nOur methodical cleaning process starts with a thorough dry vacuuming, followed by the application of specialized stain pre-treatments on heavily soiled traffic areas. We then employ a rotary scrubbing machine combined with premium carpet shampoo to gently but effectively loosen the embedded grime. The magic happens during the hot water extraction phase, where high-pressure water flushes the fibers while a massive vacuum instantly extracts the muddy water, bacteria, and allergens back into the machine. The carpet fibers are lifted, colors are revitalized, and your home is left with a vastly improved indoor air quality that feels incredibly fresh.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Carpet+Cleaning"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a23",
      "name": "Kitchen Chimney Cleaning",
      "category": "Cleaning",
      "short-details": "Dismantling and degreasing of kitchen chimney filters and exhaust fans.",
      "long-details": "The kitchen chimney is an essential appliance for keeping your home free from heavy cooking smoke, pungent spices, and airborne grease. However, as it relentlessly sucks up these cooking fumes, thick layers of sticky, highly flammable oil and carbon deposits coat the baffle filters, the internal motor casing, and the exhaust duct. A clogged chimney not only loses its suction power—allowing smoke to spread through your house—but also poses a severe fire hazard. Our Kitchen Chimney Cleaning service is a highly specialized, messy job that we handle so you don't have to.\n\nOur technicians will carefully dismantle the removable parts of your chimney, including the heavy steel filters, the oil collector bowls, and the outer mesh. These parts are then soaked in a bath of powerful, industrial-grade degreasing chemicals that aggressively dissolve the hardened, baked-on grease. While the parts are soaking, we manually scrub the interior canopy and carefully wipe down the sensitive motor and fan blades to restore balance and quiet operation. After everything is thoroughly rinsed, dried, and reassembled, your chimney's suction efficiency will be restored to its peak, ensuring a clean, smoke-free cooking environment once again.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Chimney+Cleaning"
    },
    {
      "_id": "64f1a2b3c9e77b001f8e4a24",
      "name": "General Pest Control",
      "category": "Cleaning",
      "short-details": "Spraying odorless and safe chemicals to eliminate cockroaches, ants, and spiders.",
      "long-details": "Dealing with a pest infestation is incredibly stressful and poses significant health risks to your family. Cockroaches spread bacteria across your kitchen counters, ants invade your pantry, and spiders create unsightly webs in every corner of your ceiling. Over-the-counter pest sprays usually only provide a temporary fix, merely scattering the bugs rather than eliminating the root of the colony hidden inside your walls and drains. Our General Pest Control service provides a comprehensive, scientifically backed solution to eradicate these common household nuisances and prevent them from returning.\n\nWe utilize advanced, odorless, and highly effective chemicals that are strictly approved by environmental safety boards, ensuring they are lethal to pests but completely safe for humans, children, and pets. Our expert exterminators systematically spray the entire perimeter of your home, focusing heavily on dark, damp areas like under the kitchen sink, behind appliances, inside bathroom drain pipes, and along baseboards where pests breed. For severe cockroach issues, we also apply specialized gel baits inside cabinet hinges and cracks, which the roaches carry back to destroy the entire nest. Enjoy a peaceful, hygienic home environment completely free from creepy crawlies with our guaranteed pest control service.",
      "image": "https://placehold.co/600x400/1E2939/FFFFFF?text=Pest+Control"
    }
  ]

  // Using Dummy Data for now, will replace with API data later
  const categories = [
    {
      "_id": "64f1b3c4d9e88b001f8e5b01",
      "name": "AC Repair",
      "slug": "ac-repair",
      "description": "Expert AC servicing, installation, gas refill, and repair.",
      "icon": "https://placehold.co/200x200/1E2939/FFFFFF?text=AC+Repair"
    },
    {
      "_id": "64f1b3c4d9e88b001f8e5b02",
      "name": "Appliance Repair",
      "slug": "appliance-repair",
      "description": "Fixing refrigerators, washing machines, microwaves, and TVs.",
      "icon": "https://placehold.co/200x200/1E2939/FFFFFF?text=Appliance"
    },
    {
      "_id": "64f1b3c4d9e88b001f8e5b03",
      "name": "Plumbing",
      "slug": "plumbing",
      "description": "Leakage repair, tap installations, and geyser servicing.",
      "icon": "https://placehold.co/200x200/1E2939/FFFFFF?text=Plumbing"
    },
    {
      "_id": "64f1b3c4d9e88b001f8e5b04",
      "name": "Electrical",
      "slug": "electrical",
      "description": "Fan repair, switchboard rewiring, and inverter setup.",
      "icon": "https://placehold.co/200x200/1E2939/FFFFFF?text=Electrical"
    },
    {
      "_id": "64f1b3c4d9e88b001f8e5b05",
      "name": "Cleaning",
      "slug": "cleaning",
      "description": "Deep home cleaning, sofa dry cleaning, and pest control.",
      "icon": "https://placehold.co/200x200/1E2939/FFFFFF?text=Cleaning"
    }
  ]


  return (
    <>
      <DashboardLaout>
        {/* Page content goes here. */}
        

          <h1 className="text-2xl font-bold">All Services</h1>

          <div className="divider"></div>

          {
            categories.map(category =>
              <div key={category._id} className="">

                <h2 className="font-bold uppercase">{category.name}</h2>

                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {
                    services.filter(service => service.category === category.name)
                      .map(
                        service =>
                          <ServiceCard key={service._id} service={service} />
                      )
                  }
                </div>
              </div>

            )

          }
        
      </DashboardLaout>

      
    </>
  )
}

export default Services;