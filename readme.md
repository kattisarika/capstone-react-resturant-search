#MovieDB Search App

Thinkful (https://www.thinkful.com) Capstone project - React application

##Background
MovieDB Search App uses 3rd party API from moviedb.org to search for movies, tvshows. The returned list of movies 
show the popularity/rating of the movie and movie description.

##Use Case 
Moviedb.org have released API's to fetch movies based on a given search criteria.This app provides the user interface, to input the search item and query the moviedb through the API call & helps search for movies & tv shows, movie details, & be displayed on the UI.. 

##Initial UX 
The initial UX is present in (https://github.com/kattisarika/capstone-react-resturant-search/blob/master/readmeImages/)

##Working Prototype
You can access a working prototype of the app here: https://lit-tundra-59229.herokuapp.com/ 

Screenshot
![Screenshot](https://github.com/kattisarika/capstone-react-resturant-search/blob/master/readmeImages/homePage.png)


![Screenshot](https://github.com/kattisarika/capstone-react-resturant-search/blob/master/readmeImages/homePageWidSearchResults.png)

##Functionality 
The app includes :

1. Home Page 
2. An input Search text , where the user can enter any word or movie name
3. The application calls the 3rd party API call to  searches for all the movies/ tv shows based on the input or query.
4. The search brings the desired results and the results are displayed back on the UI

##Technical
The application is built on React.The data is being called from 3rd party API from moviedb.org. The api currently being used is https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}. On providing the search query the API provides a list of movies based on the inputted query , and the search results are displayed back on the UI.

##Development RoadMap
This is just the initial working prototype. More workflows would be added :-
1. Another 3rd party API is added to get complete list of movie details. 
2. Display of the data on another page other than HomePage.
