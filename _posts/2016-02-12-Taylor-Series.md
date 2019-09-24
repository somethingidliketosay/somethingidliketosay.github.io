---
title: Some Observations on Taylor Series
author: Daniel McNeela
layout: home_page
categories: math
preview_img: images/Second_Order_Taylor.svg
excerpt_separator: <!--more-->
---
Often in mathematics, it is useful to be able to compute an approximation to a given function $$f(x)$$.
One way of doing this is to find some $$a$$ for which $$f(x)$$ is easy to compute. We can then calculate
the approximate value of $$f(x)$$ when $$x$$ is near $$a$$. We will call this approximation $$f_{a}(x)$$.
More concretely, we might say $$x$$ *is near* $$a$$ when $$\left|x - a\right| < \varepsilon$$ for some 
threshold value of $$\varepsilon$$ our choosing. One way of settling upon such an $$\varepsilon$$ might be
by determining an acceptable upper bound $$U$$ on the error of our approximation $$\left|f(x) - f_{a}(x)\right|$$ and
then finding the greatest $$\varepsilon$$ such that: 
\\[\left|f(x) - f_{a}(x)\right| < U \quad \forall x \in (a - \varepsilon,\ a + \varepsilon)\\]
<!--more-->
The simplest such approximation is called the *tangent line approximation* and is given by:
	\\[f_{a}(x) = f(a) + f'(a)(x - a)\\] 
Let's try to understand intuitively what this approximation is computing. We start by calculating
$$f(a)$$, so you can visualize the initial approximation as a point resting on the graph of
$$f(x)$$ at the point $$x = a$$. This approximation is acceptable only for values of $$x$$ that
lie exceedingly close to $$a$$. To improve the approximation, we then calculate $$x - a$$.
Note that if $$x < a$$ then $$x - a < 0$$. Conversely, if $$x > a$$ then $$x - a > 0$$. The
sign of $$x - a$$ tells us the direction we will be moving along the tangent line to
$$f(x)$$ at the point $$x = a$$. If $$x - a$$ is negative we will move to the left of $$a$$,
and if $$x - a$$ is positive we will move to the right. Now we calculate the value of
$$f'(a)$$. Recall that $$f'(a)$$ is the slope of the tangent line to the graph of $$f(x)$$
at the point $$x = a$$. Remember too that a slope $$m$$ is defined as $$\frac{\text{rise}}{\text{run}}$$.
Therefore, when we multiply $$f'(a)(x-a)$$ conceptually we are multiplying our \textit{run} ($$x - a$$)
by $$\frac{\text{rise}}{\text{run}}$$ ($$f'(a)$$). The runs will cancel out in the multiplication
leaving us with a rise, i.e. $$f_{a}(x) - f(a)$$. We add $$f(a)$$ to this expression to obtain
our final approximation $$f_{a}(x)$$.
\\
\\
**Example:**  Let $$f(x) = x^4 + 4x^3 + 2x^2 - x + 1$$, and suppose we want to approximate $$f$$ near $$x = 1$$.
To compute our approximation, we will need to know $$f'(x)$$ so let's calculate that.
\\[f'(x) = 4x^3 + 12x^2 + 4x - 1\\]
Now we can compute our approximation. We have:
\begin{align}
	\begin{split}
		f_{1}(x) & = f(1) + f'(1)(x - 1) \\
		& = 7 + 19(x - 1) \\
		& = 19x - 12
	\end{split}
\end{align}
 Notice that this is exactly the equation of the tangent line to $$f(x)$$ at $$x = 1$$.
\\
now, we need to find the interval $$(a - \varepsilon,\ a + \varepsilon)$$ such that for $$x \in (a - \varepsilon,\ a + \varepsilon)$$ we have:
	\\[\left|f(x) - f_{1}(x)\right| = 0.1\\]
So we solve for $$x$$ as follows:
\begin{align}
	\begin{split}
		x^4 + 4x^3 + 2x^2 - x + 1 - 19x + 12 &= 0.1 \\
		x^4 + 4x^3 + 2x^2 - 20x + 12.9 &= 0
	\end{split}
\end{align}
This quartic would be quite difficult to solve by hand, so we utilize the help of a computational
mathematics software package such as Matlab to calculate the zeros. We find that $$x = 0.928262$$ or
$$x = 1.06974$$. Now, keep in mind that these $$x$$-values that we found represent the endpoints of our interval $$(a - \varepsilon,\ a + \varepsilon)$$. Since $$a = 1$$, we find that $$\varepsilon = .06974$$ or $$\varepsilon = .071738$$. We want $$\varepsilon$$ to equal the minimum of these two values in order to ensure that we stay within our error bound to both the left and right of $$a$$. Therefore, we have $$\varepsilon = .06974$$ and the interval in which our approximation falls within $$0.1$$ of the actual value of $$f(x)$$ is $$(0.93026,\ 1.069745)$$.
\\
\\
There are a few observations we should make regarding this example. First, note how small the
interval is in which our approximation is accurate to within $$0.1$$ of $$f(x)$$. Why is this?
Well, there are a few reasons. First off, the tangent line approximation is not, in general, a 
very accurate approximation of the global behavior of $$f$$.
This is because the tangent line approximates based on the value of the slope at the point $$x = a$$,
and for most functions the actual graph of $$f(x)$$ stays close to the tangent line at $$a$$ for only
a very short time before curving away. Of course, this is not true universally, for if $$f(x)$$
is of the form $$mx+b$$ then, in fact, we have:
	\\[f_{a}(x) = f(x) \quad \forall x \in \mathbb{R}\\]

The foregoing analysis of our approximation begs the following question: 
*How can we quantify the rate at which $$f(x)$$ curves away from it's tangent line approximation
	at any given point?*
The answer is that we can use $$f''(x)$$ to calculate the rate at which our function
deviates from it's tangent line approximation. For more general curves, the concept
of *curvature* from differential geometry is used. More on this later.
\\
\\
Now that we know we can approximate a function using it's derivative, we might begin to wonder
whether it would be possible to increase the accuracy of such an approximation by incorporating
the use of higher degree derivatives of $$f$$. Indeed, one might postulate that for a function
having $$n$$ derivatives a function $$g$$ exists for which $$f^{(i)}(x) = g^{(i)}(x) \quad \forall i \ \text{such that} \ 0 \leq i \leq n$$.
Indeed, for any function $$f(x)$$, such a function $$g$$ exists called the $$n$$-th degree Taylor Polynomial.
\\
\\
The $$n$$-th degree Taylor Polynomial centered at $$a$$, designated $$P_{n}(x)$$, is given by:

\\[P_{n}(x) = \sum_{i = 0}^n \frac{f^{(i)}(x)}{i!}(x-a)^i\\]
Note first that in the case where $$n = 1$$ the Taylor polynomial $$P_{1}(x)$$ reduces to the tangent line
approximation $$f_a(x)$$. As previously mentioned, one of the problems with this approximation is that it
does a rather poor job of representing our function's curvature on anything but a small interval. One
might then reason that a quadratic function might better approximate the value of $$f(x)$$ for a wider
range of values. This is indeed the case, and such an approximating quadratic is given by $$P_2(x)$$.
Similarly, the cubic approximation given by $$P_3(x)$$ provides an incremental improvement over the quadratic,
the quartic, $$P_4(x)$$, gives greater accuracy than the cubic, and so on and so forth. Let's try to approximate
the function given in our tangent approximation example using a Taylor polynomial.

**Example:**  Let $$f(x) = x^4 + 4x^3 + 2x^2 - x + 1$$, and suppose we want to approximate $$f$$ near $$x = 1$$.
