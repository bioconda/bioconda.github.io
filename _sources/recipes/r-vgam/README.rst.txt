.. _`r-vgam`:

r-vgam
======

|downloads|

An implementation of about 6 major classes of statistical regression models. At the heart of it are the vector generalized linear and additive model (VGLM/VGAM) classes, and the book "Vector Generalized Linear and Additive Models: With an Implementation in R" (Yee, 2015) <DOI:10.1007/978-1-4939-2818-7> gives details of the statistical framework and VGAM package. Currently only fixed-effects models are implemented, i.e., no random-effects models. Many (150+) models and distributions are estimated by maximum likelihood estimation (MLE) or penalized MLE, using Fisher scoring. VGLMs can be loosely thought of as multivariate GLMs. VGAMs are data-driven VGLMs (i.e., with smoothing). The other classes are RR-VGLMs (reduced-rank VGLMs), quadratic RR-VGLMs, reduced-rank VGAMs, RCIMs (row-column interaction models)---these classes perform constrained and unconstrained quadratic ordination (CQO/UQO) models in ecology, as well as constrained additive ordination (CAO). Note that these functions are subject to change; see the NEWS and ChangeLog files for latest changes.

======== ===========
Home     https://www.stat.auckland.ac.nz/~yee/VGAM
Versions 1.0_2
License  GPL-2 | GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-vgam
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-vgam

and update with::

   conda update r-vgam



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-vgam.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-vgam/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-vgam/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-vgam/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-vgam
.. |docker| image:: https://quay.io/repository/biocontainers/r-vgam/status
                :target: https://quay.io/repository/biocontainers/r-vgam


