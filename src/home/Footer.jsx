import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="footer-home mt-15 bg-[#0F7B65] lg:h-[350px] py-20 sm:h-auto">
                <div class="container w-[80%] m-auto ">
                    <div class="grid sm:grid-cols-3 md:grid-cols-7">

                        <div class="sm:col-span-3 md:col-span-4 text-center mb-3 text-white my-5">
                            <h4 class="text-xl font-semibold mb-2 ">Madrasty</h4>
                            <p>The best collection of international schools For All Student In All <br/>
                                different Ages From six years to 15 years
                            </p>
                        </div>
                        <div class="flex flex-col text-center mb-3">
                            <h4 class="text-[orange] text-xl">Stydent</h4>
                            <a href="#" class="text-white mt-2">Result</a>
                            <a href="#" class="text-white mt-2">Exams</a>
                            <a href="#" class="text-white mt-2">Quizes</a>
                            <a href="#" class="text-white mt-2">Courses</a>
                        </div>
                        <div class="flex flex-col text-center mb-3">
                            <h4 class="text-[orange] text-xl">News</h4>
                            <a href="#" class="text-white mt-2">Uniform</a>
                            <a href="#" class="text-white mt-2">champion</a>
                            <a href="#" class="text-white mt-2">Tables</a>
                        </div>

                        <div class="flex flex-col text-center mb-3">
                            <h4 class="text-[orange] text-xl">Contact</h4>
                            <a href="#" class="text-white mt-2">2011500394</a>
                            <a href="#" class="text-white mt-2">Dr32@Yahoo.com</a>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer