Publish story
=============

URL
---
  
  *POST* storify.com/**:username**/**:story**/publish

Parameters
----------

  * **username** - *required*
    
    The username of the story's author.
    
  * **story** - *required*
  
    The slug name of the desired story as defined in it's perspective permalink.
    
  * **token** - *required if not user specified in **username***
  
    The auth token if not logged in.
    
  * **api_key** - *required*

    Key available on settings page (storify.com/**:username**/settings)
  
Example
-------

### Request

    $ curl http://storify.com/storify_apidemo/storify-the-web/publish \
       -F "username=storify_apidemo" \
       -F "api_key=ee4c5544cfb2e3c487a3e002bf9a274b"
    
### Response

    {
      "code": 200,
      "status": "Story published successfully",
      "story": {
        "published_at": 1290475588,
        "permalink": "http://storify.com/storify_apidemo/storify-the-web",
        "title": "Storify the Web",
        "description": "Use Storify tools to create stories wherever you are.",
        "author": {
          "username": "storify_apidemo",
          "name": "storify_apidemo",
          "avatar": "http://a3.twimg.com/profile_images/1147140959/angry_unicorn_normal.png",
          "description": "",
          "location": "",
          "website": "",
          "permalink": "http://storify.com/storify_apidemo",
          "appname": null
        },
        "thumbnail": null,
        "draft": {
          "title": "Storify the Web",
          "description": "Use Storify tools to create stories wherever you are.",
          "thumbnail": null,
          "updated_at": 1290475588,
          "elements": {}
        },
        "created_at": 1290471473,
        "updated_at": 1290475588,
        "deleted": null,
        "social_pingbacks": null,
        "comments": null,
        "stats": {
          "embeds": []
        },
        "elements": {},
        "history": [
        {
          "ts": 1290475588,
          "method": "publish",
          "arguments": null
        }
        ],
        "_id": "4ceb0830d51246e51c00001b"
      }
    }
