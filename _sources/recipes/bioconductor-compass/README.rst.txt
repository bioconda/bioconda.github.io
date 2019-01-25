.. _`bioconductor-compass`:

bioconductor-compass
====================

|downloads|

COMPASS is a statistical framework that enables unbiased analysis of antigen\-specific T\-cell subsets. COMPASS uses a Bayesian hierarchical framework to model all observed cell\-subsets and select the most likely to be antigen\-specific while regularizing the small cell counts that often arise in multi\-parameter space. The model provides a posterior probability of specificity for each cell subset and each sample\, which can be used to profile a subject\'s immune response to external stimuli such as infection or vaccination.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/COMPASS.html
Versions      1.18.1, 1.18.0, 1.16.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-compass/meta.yaml



Links         biotools: :biotools:`compass`, doi: :doi:`10.1038/nbt.3187`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-compass

and update with::

   conda update bioconductor-compass



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-compass.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-compass/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-compass/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-compass/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-compass
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-compass/status
                :target: https://quay.io/repository/biocontainers/bioconductor-compass

