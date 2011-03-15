User information
================

Get the complete set of information about the specified user, including the stories they've posted.

URL
---
  
  *GET* storify.com/**:username**.**:format**[?callback=**:callback**]

Parameters
----------

  * **username** - *required*
    
    The username of the desired user.
    
  * **format** - *required* - json
  
    The desired response format.
    
  * **callback**
  
    JSONP callback function.
  
Example
-------

### JSON

  [storify.com/**xdamman**.**json**?callback=**cb**](http://storify.com/xdamman.json?callback=cb)
    
    cb({
      "count": 20,
      "stories": [ ... ],
      "page": 1,
      "limit": 20,
      "next_page": "http://storify.com/xdamman.json?&page=2",
      "author": {
        "username": "xdamman",
        "name": "Xavier Damman",
        "avatar": "http://a2.twimg.com/profile_images/1148328740/sf-mbargo_normal.png",
        "description": "Passionate web entrepreneur/developer with values and ideals. Cofounder of @storify. \r\nFounder of @HackDemocracy.",
        "location": "San Francisco",
        "website": "",
        "permalink": "http://storify.com/xdamman",
        "appname": null
      }
    })
