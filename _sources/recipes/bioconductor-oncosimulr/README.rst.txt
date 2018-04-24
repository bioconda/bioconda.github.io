.. _`bioconductor-oncosimulr`:

bioconductor-oncosimulr
=======================

|downloads|

Functions for forward population genetic simulation in asexual populations\, with special focus on cancer progression. Fitness can be an arbitrary function of genetic interactions between multiple genes or modules of genes\, including epistasis\, order restrictions in mutation accumulation\, and order effects.  Mutation rates can differ between genes\, and we can include mutator\/antimutator genes \(to model mutator phenotypes\). Simulations use continuous\-time models and can include driver and passenger genes and modules.  Also included are functions for\: simulating random DAGs of the type found in Oncogenetic Tress\, Conjunctive Bayesian Networks\, and other tumor progression models\; plotting and sampling from single or multiple realizations of the simulations\, including single\-cell sampling\; plotting the parent\-child relationships of the clones\; generating random fitness landscapes \(Rough Mount Fuji\, House of Cards\, and additive models\) and plotting them.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/OncoSimulR.html
Versions      2.8.0
License       GPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncosimulr



Links         biotools: :biotools:`oncosimulr`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-oncosimulr

and update with::

   conda update bioconductor-oncosimulr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-oncosimulr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-oncosimulr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-oncosimulr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-oncosimulr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-oncosimulr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-oncosimulr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-oncosimulr

