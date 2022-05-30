# Back_end_api

## Purpose

This project is to demonstrate an understanding of how to create a back end database structure without the use of SQL structuring. The project gives the user the ability to add a user name with email, and gives other's the ability to add comments to the user as well as reactions to the thoughts. 

## Guide 

First step would be to create a user in Insomnia. Select the Put route under the User folder. This will populate a user Id number. It is important to keep that number for reference through out the project. 

Once you have the number, select the Post thought route and add the user number at the end of the URL. Add any text and a name to the json and hit send! Select the get user by id or the get all user routes and notice your information is now added. 

Finally, lets add a reaction to the thought. Grab the unique thought ID and add it to the end of the URL in the Post Reaction route. Add in any name or text to the json and hit send! Boom! GREAT SUCCESS! The put and delete routes work the same as the post. 

Watch and follow the following videos for more information on how to work the database. 

[![TUTORIAL VIDEO 1](https://studio.youtube.com/video/DoP3Y4YvhhA/edit)](https://youtu.be/DoP3Y4YvhhA)

[![TUTORIAL VIDEO 2](https://studio.youtube.com/video/DoP3Y4YvhhA/edit)](https://youtu.be/0ti3ocpPUjY)