Story information
=================

Get the complete set of information about the specified story, including it's list of elements and all relevant metadata.

URL
---
  
  *GET* storify.com/**:username**/**:story**.**:format**[?callback=**:callback**]

Parameters
----------

  * **username** - *required*
    
    The username of the desired user.
    
  * **story** - *required*

    The slug name of the desired story as defined in it's perspective permalink.
  
  * **format** - *required* - json
  
    The desired response format.
    
  * **callback**
  
    JSONP callback function.
  
Example
-------

### JSON

  [storify.com/**storify**/**testimonials**.**json**?callback=**cb**](http://storify.com/storify/testimonials.json?callback=cb)
    
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
