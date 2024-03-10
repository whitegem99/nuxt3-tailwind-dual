# Additional ideas

1.	Improve the styling of the Wide Sidebar content. You can see when hovering over the icons, the Wide Sidebar represents the subitems. I did it very quickly this morning but it would be nice to have your input on improving the look and feel of this.

2.	I think we should move the dashboard concept to its own layout, maybe `./layouts/default.vue`.

3.	Now for the behaviours. I have to demonstrate a Proof of Concept for a multi-tenant system. I will provide backend services and Auth0 connection when I am back in my office, but here are some details:

    a.	Assume two types of users (Relationship is User has one-to-many relationship with Organisation)

    - **User 1:** `user.with.some.orgs@example.com` (has 3 dummy organisations in the dummy mock API)
    
    - **User 2:** `user.with.no.org@example.com` (has 0 dummy organisations in the dummy mock API)
    
    b.	Relationship: User has one-to-many relationship with Organisation. Organisation has `uuid`, `name` (human readable) and `slug` (machine readable)

    c.	**Dummy mock API:** Nuxt: `./server/api/organisation `

    d.	**For User 1: (user with 3 dummy orgs)**
        
    - accessing `/` should redirect to `/organisations` and will display a list of organisations that are associated with the user. 
        
    - when the user clicks a specific organisation, we want to have a URL like `/{organisation-slug}` and from this, the correct organisation context is yielded from the same Organisation API (and can show the Organisation name in the header bar).
    
    e.	**For User 2: (user with 0 orgs)**

    - accessing `/` should redirect to `/organisations` and will display a simple form for the user to enter Name (name) and confirm a generated slug (lower-case-with-hyphen)

    - when user submits the data, information would be sent to the API (do we need to use Pinia state management here for the mockup? Will this need to change when using backend?)
        
    - if it is possible, its helpful to have an additional field for the user to type additional brands names they have under the company. Example: if Organisation is “Samsung”, other brand could be “Galaxy”. I am open to suggestion on which is a good UI/UX for this (multiple single-line fields, or one large field with comma or line separated data).

Overall I am open to using standard Tailwind CSS components from their site and also Tailwind Forms, Headless UI and Hero Icons. If you have any other thoughts and questions, let me know.

Please also tell me if you prefer to use Jira or other way to present the data. This is a quick note from my memory until I am back in my office.
