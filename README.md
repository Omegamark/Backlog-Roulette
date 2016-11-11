# Q1 Project Proposal

* Fork this repo and update this README file with your proposal.
* Make sure to preview your proposal in a markdown preview and [use valid markdown syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
  * Unformatted/unreadable proposals will be rejected

## Project Description
# Basic Concept:
I want to use the Giant Bomb API to find suggestions for similar games as the one input by the user. So for example if they enter Baldur's Gate, a Computer Role Playing game by genre, it will give 10 suggestions for other CRPGs for the user to consider.



## What problem does your project solve?
* Finding experiences similar to one they loved in the past.
* A way to decide which game to play next on their backlog.

## Who has this problem?
People with excessively long backlogs of games.

## How will your project solve this problem?
By narrowing down your prospects for what to play next.

## What inputs does it need?
* Just a game title for the search
* Multiple titles for the My games list

## What outputs does it produce?
* A list of suggestions
* Potentially box art
* Potentially scores

## What web API(s) will it use?
* Giantbomb API
* Maybe a score aggregator, I want to make sure I can get the first one working first.

## What technologies do you plan to use?
* Materialize or Bootstrap
* jQuery, AJAX

## Feature list
* Searchbox
* My Game list
* Wishlist
* Box art display
* Score display

# Stretches:
* The title the user inputs will display the box art for that style.

* The suggestion list will include the box art next to the each suggested title.

* The suggestion list will include a score for the games, potentially an aggregate score if I'm able to tap into a second API.

* The user will be able to input their list of owned games and have the suggestion list return either games only on their list or only games not on their list.
