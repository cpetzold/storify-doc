New story
=========

URL
---
  
  *POST* storify.com/story/new

Parameters
----------

  * **username** - *required*
    
    The username of the story's author.
    
  * **token** - *required if not user specified in **username***
  
    The auth token if not logged in.
    
  * **api_key** - *required*

    Key available on settings page (storify.com/**:username**/settings)
  
  * **title** - *required*
  
    The title of the story.
    
  * **description**
  
    The description of the story.
  
Example
-------

### Request

    $ curl http://storify.com/story/new \
       -F "username=storify_apidemo" \
       -F "api_key=ee4c5544cfb2e3c487a3e002bf9a274b" \
       -F "title=Storify the Web" \
       -F "description=Use Storify tools to create stories wherever you are."
    
### Response

    cb({
      "permalink": "http://storify.com/storify/testimonials",
      "published_at": 1293517224,
      "author": { ... },
      "editors": null,
      "shorturl": null,
      "title": "Testimonials",
      "description": "What people are saying about Storify",
      "thumbnail": "http://a1.twimg.com/profile_images/1073747161/apple-touch-icon_normal.png",
      "topics": null,
      "elements": { ... }
    })
