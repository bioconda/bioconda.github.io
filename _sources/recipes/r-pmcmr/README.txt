.. _`r-pmcmr`:

r-pmcmr
=======

|downloads|

The Kruskal and Wallis one-way analysis of variance by ranks  or van der Waerden's normal score test can be employed,  if the data do not meet the assumptions  for one-way ANOVA. Provided that significant differences  were detected by the omnibus test, one may be interested  in applying post-hoc tests for pairwise multiple comparisons  (such as Nemenyi's test, Dunn's test, Conover's test, van der Waerden's test). Similarly, one-way ANOVA with repeated  measures that is also referred to as ANOVA with unreplicated  block design can also be conducted via the Friedman-Test  or the Quade-test. The consequent post-hoc pairwise  multiple comparison tests according to Nemenyi, Conover and Quade are also provided in this package. Finally Durbin's test for  a two-way balanced incomplete block design (BIBD) is also given in this package.

======== ===========
Home     
Versions 4.1
License  GPL (>= 3)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pmcmr
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-pmcmr

and update with::

   conda update r-pmcmr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-pmcmr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-pmcmr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-pmcmr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-pmcmr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-pmcmr
.. |docker| image:: https://quay.io/repository/biocontainers/r-pmcmr/status
                :target: https://quay.io/repository/biocontainers/r-pmcmr


