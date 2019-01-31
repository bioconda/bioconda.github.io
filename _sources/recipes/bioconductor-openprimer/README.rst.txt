.. _`bioconductor-openprimer`:

bioconductor-openprimer
=======================

|downloads|

An implementation of methods for designing\, evaluating\, and comparing primer sets for multiplex PCR. Primers are designed by solving a set cover problem such that the number of covered template sequences is maximized with the smallest possible set of primers. To guarantee that high\-quality primers are generated\, only primers fulfilling constraints on their physicochemical properties are selected. A Shiny app providing a user interface for the functionalities of this package is provided by the \'openPrimeRui\' package.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/openPrimeR.html
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-openprimer/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-openprimer

and update with::

   conda update bioconductor-openprimer



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-openprimer.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-openprimer/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-openprimer/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-openprimer/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-openprimer
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-openprimer/status
                :target: https://quay.io/repository/biocontainers/bioconductor-openprimer

