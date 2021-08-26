# Event Propagation: Bubbling & Capturing

## **_Bubbling & Capturing_**

```
<html>
<head>
  <title> A Simple Page</title>
</head>
<body>
  <section>
    <p>A paragram with a <a>link</a></p>
    <p>A secon paragraph</p>
  </section>
  <section>
    <img src="dom.png" alt="The DOM" />
  </section>
</body>
</html>
```

DOCUMENT >>>>>>>>>>>> 1) CAPTURING PHASE:click event begins here and cascades down to target event<br>
VVVVVVVV<br>
ELEMENT(html)<br>
VVVVVVVV<br>
ELEMENT(body)<br>
VVVVVVVV<br>
ELEMENT(section)<br>
VVVVVVVV<br>
ELEMENT(p)<br>
VVVVVVVV<br>
ELEMENT(a)<br> >>>>>>>>>>>>>> 2) TARGET PHASE: event listeners sit and wait for a certain event to occur to it's target element and then initiates the connected callback function

\3) BUBBLING PHASE: events bubble up from target back to root document (parents not siblings)

- what this means is if we connect a listener to the parent element it will also trigger, which allows us to program powerful patterns
- generally happen in bubbling phase but we can coerce them to happen in the capturing phase
- capturing & bubbling also known as propagating
