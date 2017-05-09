
An explanation of this project:

This project is designed to be the initial build out for a website I want to have in the future.
The original concept is to have an online store dedicated to selling violin family
instruments to musicians in Boston. I want users to be able to sign up and add instruments or
view and buy them all online with very little human intervention. This idea was too large a project for
the three days of work we were given for this sprint so the project presented here
designs and builds the back end server and the front end "business" side of the website.
It allows for luthiers, people who build and repair instruments, to sign up and
load their instruments onto the website. They can then view, edit and remove those instruments.

Approach:

Since I had experienced working with user authentication before I built this part of the app first.
It was fairly straightforward and went smoothly. My next step was to roughly design the web site.
At first all of my user info forms and instrument info forms were right on the webpage. I used these forms
to test my ajax requests. My biggest problem came at this point. When trying to get the ajax requests two
add instruments to the forms I built I had two major problems. The first was understanding how getFormFields worked
to turn form data into an object that got sent to the server. When I started looking at the object on my server logs
as it was getting rejected and changing the forms around and experimenting with them I was able to understand how to
properly lable the forms so the objects were built correctly. Following that I had to develop an understanding of
the controllers in the API. This took me the longest amount of time to solve, though ended up being just two lines of
code to change. 

Future goals:

My immediate goals are to add an image link collumn and description collumn to the instruments table. Right
now the website loads a hard coded image and hard coded text with each instrument add but it shouldn't be
to difficult to use handlbars to replace that text with variables. I also want to standardize the type of photos
that will be added to the site to present a stylized proffesional looking product to the end user.

After finalizing the "business" side I want to add a "customers" table. People who log in as customers can't add instruments. However they can log in and see every instrument available for purchase on the website. This is different from luthiers who only see the instruments they load. They of course won't be able to edit or remove these instruments, but they will be able to buy them online.



User stories:
  As a luthier, I want to be able to post an insturmnet that I have for sale/rent.

  As a luthier, I want to be able to list the instruments type, price, details, and an image of
  the instrument.

  As a luthier, I want to be able to see and manage/every every instrument that I've posted for sale.

  As a luthier I want to know when I user has bought my instrument so I can send it to them.

Wireframe: https://goo.gl/photos/3wXmteyvq8yNapJH9
Links to the repos: https://github.com/Anddrew914/luthier-project-front-end
                    https://github.com/Anddrew914/luthier-project-rails-api

Link to the live application: https://anddrew914.github.io/luthier-project-front-end/
