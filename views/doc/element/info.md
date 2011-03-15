Element information
===================

Get the complete set of information about a specific element of a story.

URL
---
  
  *GET* storify.com/**:username**/**:story**/elements/**:index**.**:format**[?callback=**:callback**]

Parameters
----------

  * **username** - *required*
    
    The username for the user who owns the story in which the element is located.
    
  * **story** - *required*

    The slug name of the element's parent story as defined in it's perspective permalink.
    
  * **index** - *required*
  
    The index of the element.
  
  * **format** - *required* - json
  
    The desired response format.
    
    
  * **callback**
  
    JSONP callback function.
  
Example
-------

### JSON

  [storify.com/**storify**/**testimonials**/elements/**0**.**json**?callback=**cb**](http://storify.com/storify/testimonials/elements/0.json?callback=cb)
    
    cb({
      "curator": {
        "username": "storify",
        "name": "Storify",
        "avatar": "http://a1.twimg.com/profile_images/1073747161/apple-touch-icon_normal.png",
        "description": "Making stories from the social Web, finding moments to remember in the real-time stream. Co-founded by @xdamman and @burtherman",
        "location": "Global",
        "website": "",
        "permalink": "http://storify.com/storify",
        "appname": null
      },
      "source": "twitter",
      "image": "",
      "elementClass": "tweet",
      "permalink": "http://twitter.com/zseward/status/19579515667746816",
      "title": "I'm a @Storify convert.",
      "description": "I'm a @Storify convert.",
      "thumbnail": "http://a2.twimg.com/profile_images/261431736/Me_and_Mom_2_normal.jpg",
      "favicon": "",
      "author": {
        "username": "zseward",
        "avatar": "http://a2.twimg.com/profile_images/261431736/Me_and_Mom_2_normal.jpg",
        "href": "http://twitter.com/zseward",
        "name": "zseward"
      },
      "created_at": "1293503094",
      "added_at": "1293516866",
      "oembed": ""
    })