export default function Contact(){
    return(
        <>
         <div class="area">
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
        <div class="h-screen flex justify-center items-center">
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
        
        
        </>
    );
}