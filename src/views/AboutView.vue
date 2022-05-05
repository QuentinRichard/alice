<template>
  <div class="about">
    <h1>This project was created for the application at alice-iw.</h1>
    <p>It uses the French government's API on geographic risk.</p>
    <h2>Pages and components</h2>
    <p>This project uses several pages :
      <ol>
        <li><strong>Home</strong>: Used to define the search criteria</li>
        <li><strong>Search</strong>: Used to display the search result</li>
        <li><strong>Show</strong>: Used to display the detail for a search item</li>
        <li><strong>Show</strong>: Displayed when the network error occured</li>
        <li><strong>About</strong>: This page</li>
      </ol> 
    </p>
    <p>This project uses 2 components:
      <ol>
        <li><strong>ListComponent</strong>: Component used to display a list of item. It is used by Search and Show Pages</li>
        <li><strong>PaginationComponent</strong>: Component to manage the Pagination, It is used by Search and Show Pages.</li>
      </ol> 
    </p>
    
    <h2>Improvement</h2>
    
    <h3>VueJs V3</h3>
    <p>At first I wanted to use VueJs version 3, but I ran into a problem when I wanted to integrate components. These packages are not fully implemented for the Typescript environment. As this project is not used to check my skills in VueJs, I prefer to use VueJS V2, but I keep the source file of the Pagination component in my source code (I could have directly used the package via the npm repository).</p>

    <h3>Typescript</h3>
    <p>Some variables are defined as being of type "any", it is better to define the appropriate type. </p>

    <h3>Others</h3>
    <p>Add the Toaster</p>
    <p>Improve the Style</p>

  </div>
</template>

<style>
.about {
  text-align: left;
  margin-left: 15px;
}
</style>
