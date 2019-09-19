define({ "api": [
  {
    "type": "post",
    "url": "/api/book",
    "title": "Create book",
    "version": "0.2.0",
    "name": "CreateBook",
    "group": "Book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the book (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Author of the book (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>Summary of the book (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isbn",
            "description": "<p>ISBN of the book (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "genre",
            "description": "<p>Genre of the book</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the book</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "description": "<p>This holds all record of books.</p>",
    "filename": "./routes/catalog.js",
    "groupTitle": "Book",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Thing not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/book",
    "title": "Update book",
    "version": "0.2.0",
    "name": "UpdateBook",
    "group": "Book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "recordId",
            "description": "<p>ID of the book (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the book (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Author of the book (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>Summary of the book (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isbn",
            "description": "<p>ISBN of the book (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "genre",
            "description": "<p>Genre of the book</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the book</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "description": "<p>This holds all record of books.</p>",
    "filename": "./routes/catalog.js",
    "groupTitle": "Book",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Thing not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    }
  }
] });
