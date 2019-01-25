.. _`bioconductor-samspectral`:

bioconductor-samspectral
========================

|downloads|

Samples large data such that spectral clustering is possible while preserving density information in edge weights. More specifically\, given a matrix of coordinates as input\, SamSPECTRAL first builds the communities to sample the data points. Then\, it builds a graph and after weighting the edges by conductance computation\, the graph is passed to a classic spectral clustering algorithm to find the spectral clusters. The last stage of SamSPECTRAL is to combine the spectral clusters. The resulting \"connected components\" estimate biological cell populations in the data. See the vignette for more details on how to use this package\, some illustrations\, and simple examples.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/SamSPECTRAL.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-samspectral/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-samspectral

and update with::

   conda update bioconductor-samspectral



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-samspectral.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-samspectral/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-samspectral/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-samspectral/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-samspectral
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-samspectral/status
                :target: https://quay.io/repository/biocontainers/bioconductor-samspectral

