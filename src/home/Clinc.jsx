import React from 'react'

function Clinc() {
  return (
    <div>
            <section class="clinic-home">
        <div class="container w-[80%] m-auto">

            <div class="grid sm:gird-cols-1 md:grid-cols-2 gap-3">

                <div class="md:col-span-2">

                    <h3 class=" text-center mb-3 text-2xl font-bold mt-5 mb-2">School clinic</h3>
                    <hr class="w-40 h-1 bg-[orange] border-0 m-auto mb-10"/>
                </div>

                <img src="media/compo (1).png" alt="" class="sm:w-80 w-[110] mt-18 col-span-1"/>
                <div class="col-span-1 mt-10">
                    <h4 class="text-xl font-bold">The school clinic services</h4>
                    <p class="w-full">Conducting periodic checks for students. Implementing vaccination programs to
                        prevent diseases
                        according to the instructions of the Ministry of Health. Follow-up of sick cases and contact
                        with parents to attend if the case requires. Providing a healthy environment in the school
                        community.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Clinc