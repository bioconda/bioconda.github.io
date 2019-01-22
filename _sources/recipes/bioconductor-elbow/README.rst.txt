.. _`bioconductor-elbow`:

bioconductor-elbow
==================

|downloads|

Elbow an improved fold change test that uses cluster analysis and pattern recognition to set cut off limits that are derived directly from intrareplicate variance without assuming a normal distribution for as few as 2 biological replicates. Elbow also provides the same consistency as fold testing in cross platform analysis. Elbow has lower false positive and false negative rates than standard fold testing when both are evaluated using T testing and Statistical Analysis of Microarray using 12 replicates \(six replicates each for initial and final conditions\). Elbow provides a null value based on initial condition replicates and gives error bounds for results to allow better evaluation of significance.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/ELBOW.html
Versions      
License       file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elbow



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-elbow

and update with::

   conda update bioconductor-elbow



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-elbow.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-elbow/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-elbow/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-elbow/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-elbow
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-elbow/status
                :target: https://quay.io/repository/biocontainers/bioconductor-elbow

