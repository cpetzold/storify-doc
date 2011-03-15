Story elements
==============

Get the specified story's elements.

URL
---
  
  *GET* storify.com/**:user**/**:story**/elements.**:format**[?callback=**:callback**]

Parameters
----------

  * **user** - *required*
    
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

[storify.com/**storify**/**testimonials**/elements.**json**?callback=**cb**](http://storify.com/storify/testimonials/elements.json?callback=cb)
    
    cb([
      {
        "source": "twitter",
        "permalink": "http://twitter.com/zseward/status/19579515667746816",
        "author": { ... }
        ...
      },
      ...
    ])
