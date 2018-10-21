.. _`bioconductor-classifyr`:

bioconductor-classifyr
======================

|downloads|

The software formalises a framework for classification in R. There are four stages\; Data transformation\, feature selection\, classifier training\, and prediction. The requirements of variable types and names are fixed\, but specialised variables for functions can also be provided. The classification framework is wrapped in a driver loop\, that reproducibly carries out a number of cross\-validation schemes. Functions for differential expression\, differential variability\, and differential distribution are included. Additional functions may be developed by the user\, by creating an interface to the framework.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/ClassifyR.html
Versions      1.12.2, 2.0.10
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-classifyr



Links         biotools: :biotools:`classifyr`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-classifyr

and update with::

   conda update bioconductor-classifyr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-classifyr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-classifyr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-classifyr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-classifyr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-classifyr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-classifyr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-classifyr

