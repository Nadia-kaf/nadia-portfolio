

export default function Contact(){
    return(

<><div class="area">
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>  
<section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
            class="lg:w-2/3 md:w-1/2 h-screen bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0"
                marginwidth="0" scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.474003742265!2d-0.15429542603023783!3d5.6443429327571355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b550b4b1287%3A0x5bfe4abfd88d302b!2sMEST%20Africa!5e0!3m2!1sen!2sgh!4v1708957868601!5m2!1sen!2sgh"></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div class="lg:w-1/2 px-6">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p class="mt-1">No. 20 Aluguntugui Street, Ambassadorial Enclave,
                    <br />
                     East Legon, Accra, Ghana</p>
                </div>
                <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a class="text-black leading-relaxed">nadiabokordedzi@gmail.com</a>
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <p class="leading-relaxed">+233 558 311 93</p>
                </div>
            </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-mine-blue">
        <div class="h-screen flex justify-center items-center" id="contact">
    <div class="py-8 w-80 px-6 max-w-md bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
        <p class="text-lg text-center text-gray-700 mb-8">Contact Me</p>
        <form class="flex flex-col">
            <div class="mb-5">
                <label class="text-gray-700 font-semibold mb-2" for="name">Name</label>
                <input class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" type="text" id="name" name="name" required/>
            </div>
            <div class="mb-5">
                <label class="text-gray-700 font-semibold mb-2" for="email">Email</label>
                <input class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" type="email" id="email" name="email" required/>
            </div>
            <div class="mb-5">
                <label class="text-gray-700 font-semibold mb-2" for="message">Message</label>
                <textarea class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" id="message" name="message" rows="5" required></textarea>
            </div>
            <button class="bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5" type="submit">Send Message</button>
        </form>
    </div>
</div>
</div>
    </div>
</section>
</>
    )
}