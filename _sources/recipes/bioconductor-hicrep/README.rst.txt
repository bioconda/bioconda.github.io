.. _`bioconductor-hicrep`:

bioconductor-hicrep
===================

|downloads|

Hi\-C is a powerful technology for studying genome\-wide chromatin interactions. However\, current methods for assessing Hi\-C data reproducibility can produce misleading results because they ignore spatial features in Hi\-C data\, such as domain structure and distance\-dependence. We present a novel reproducibility measure that systematically takes these features into consideration. This measure can assess pairwise differences between Hi\-C matrices under a wide range of settings\, and can be used to determine optimal sequencing depth. Compared to existing approaches\, it consistently shows higher accuracy in distinguishing subtle differences in reproducibility and depicting interrelationships of cell lineages than existing approaches. This R package \`hicrep\` implements our approach.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/hicrep.html
Versions      1.0.0, 1.2.0
License       GPL (>= 2.0)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicrep



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-hicrep

and update with::

   conda update bioconductor-hicrep



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-hicrep.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-hicrep/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-hicrep/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-hicrep/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-hicrep
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-hicrep/status
                :target: https://quay.io/repository/biocontainers/bioconductor-hicrep

