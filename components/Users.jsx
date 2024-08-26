import React from 'react';

const Users = () => {
    return (
        <div>
                <h2>Users List</h2>
                <div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
      <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, age, email and job/hobby.</p>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button type="button" class="block rounded-md bg-balck px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Add user</button>
    </div>
  </div>
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm front-semibold text-black sm:pl-0">Name</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-blue-500">Age</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-orange-500">Email</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">job/hobby</th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
            <tbody class="">
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Najib Ahmed</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-black">39 years old</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-white">najibahmed@example.com</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-black">web developer</td>
              <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="#" class="text-black hover:text-white">Edit<span class="sr-only">, Najib Ahmed</span></a>
              </td>
            </tr>
<tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Shehab Najib</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-black">13 years old</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-white">shehabahmed@example.com</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-black">football player</td>
              <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="#" class="text-black hover:text-white">Edit<span class="sr-only">, Shehab Najib</span></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default Users;
