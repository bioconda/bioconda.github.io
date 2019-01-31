.. _`bioconductor-perturbatr`:

bioconductor-perturbatr
=======================

|downloads|

perturbatr does stage\-wise analysis of large\-scale genetic perturbation screens for integrated data sets consisting of multiple screens. For multiple integrated perturbation screens a hierarchical model that considers the variance between different biological conditions is fitted. The resulting list of gene effects is then further extended using a network propagation algorithm to correct for false negatives.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/perturbatr.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-perturbatr/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-perturbatr

and update with::

   conda update bioconductor-perturbatr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-perturbatr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-perturbatr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-perturbatr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-perturbatr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-perturbatr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-perturbatr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-perturbatr

