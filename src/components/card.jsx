import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import agromartshot from "../assets/AgroMart.png";
import onyxcinemashot from "../assets/OnyxCinema.png";
import decor from "../assets/Decor.png";

const projects = [
  {
    name: 'Agromart',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    image: agromartshot,
  },
  {
    name: 'Onyx Cinema',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    image: onyxcinemashot,
  },
  {
    name: 'Decor Pro',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    image: decor,
  },
]

export default function Card() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            These are my projects
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {projects.map((project) => (
              <div key={project.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <project.image className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {project.name}
                </dt>
                <li className="col-span-1 md:col-span-1 sm:col-span-3 ">
              <div class="group relative align-center rounded-2xl overflow-hidden h-5/6">
                <figure class="rounded-2xl h-96  img-holder overflow-hidden">
                  <img
                    src={agromartshot}
                    className="w-full h-full transition delay-150 duration-700 ease-in-out focus:scale-100 hover:scale-100 focus:brightness-50 hover:brightness-50"
                    loading="lazy"
                    alt="Book art design"
                  />
                </figure>

                <div class="absolute top-3 text-center sm:right-60 opacity-0 group-hover:translate-y-16 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left-3 bg-violet-700 rounded-xl px-14 py-4 sm:px-32 sm:py-16 translate-y-2/4 transition delay-50 duration-500 ease-in-out">
                  <h2 class="h3">
                    <a href="#" class="text-white">
                      AgroMart
                    </a>
                  </h2>

                  <Link
                    to="https://onyx-agro-mart-eta.vercel.app/products"
                    target="_blank"
                    class="text-xs text-white decoration-none"
                  >
                    Live <i class="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div class="group relative align-center rounded-2xl overflow-hidden h-5/6">
                <figure class="rounded-2xl img-holder overflow-hidden">
                  <img
                    src={onyxcinemashot}
                    class="w-full h-80 transition delay-150 duration-700 ease-in-out focus:scale-110 hover:scale-110 focus:brightness-50 hover:brightness-50"
                    loading="lazy"
                    alt="3d Didita Art"
                  />
                </figure>

                <div class="absolute top-[40%] text-center right-24 opacity-0  group-hover:-translate-y-6 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left=-5 bg-violet-700 rounded-xl px-16 py-10 translate-y-6 transition delay-50 duration-500 ease-in-out">
                  <h2 class="h3">
                    <a href="#" class="text-white">
                      OnyxCinema
                    </a>
                  </h2>

                  <Link
                    to="https://onyx-movie-search-app-hazel.vercel.app/"
                    target="_blank"
                    class="text-xs text-white decoration-none"
                  >
                    Live <i class="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div class="group relative align-center rounded-2xl overflow-hidden h-5/6">
                <figure class="rounded-2xl img-holder overflow-hidden">
                  <img
                    src={decor}
                    class="w-full h-80 transition delay-150 duration-700 ease-in-out focus:scale-110 hover:scale-110 focus:brightness-50 hover:brightness-50"
                    loading="lazy"
                    alt="3d Didita Art"
                  />
                </figure>

                <div class="absolute top-[40%] text-center right-24 opacity-0  group-hover:-translate-y-6 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left=-5 bg-violet-700 rounded-xl px-16 py-10 translate-y-6 transition delay-50 duration-500 ease-in-out">
                  <h2 class="h3">
                    <a href="#" class="text-white">
                      Decor Pro
                    </a>
                  </h2>

                  <Link
                    to="https://decor-pro.vercel.app/"
                    target="_blank"
                    class="text-xs text-white decoration-none"
                  >
                    Live <i class="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
            </li>
                <dd className="mt-2 text-base leading-7 text-gray-600">{project.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
