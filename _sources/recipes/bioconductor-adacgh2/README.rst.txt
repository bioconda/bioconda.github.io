:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adacgh2'
.. highlight: bash

bioconductor-adacgh2
====================

.. conda:recipe:: bioconductor-adacgh2
   :replaces_section_title:

   Analysis of big data from aCGH experiments using parallel computing and ff objects

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/ADaCGH2.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-adacgh2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adacgh2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adacgh2/meta.yaml>`_

   Analysis and plotting of array CGH data. Allows usage of Circular Binary Segementation\, wavelet\-based smoothing \(both as in Liu et al.\, and HaarSeg as in Ben\-Yaacov and Eldar\)\, HMM\, BioHMM\, GLAD\, CGHseg. Most computations are parallelized \(either via forking or with clusters\, including MPI and sockets clusters\) and use ff for storing data.


.. conda:package:: bioconductor-adacgh2

   |downloads_bioconductor-adacgh2| |docker_bioconductor-adacgh2|

   :versions: 2.28.0-0, 2.26.0-0, 2.24.0-1
   
   :depends bioconductor-acgh: >=1.66.0,<1.67.0
   :depends bioconductor-dnacopy: >=1.62.0,<1.63.0
   :depends bioconductor-glad: >=2.52.0,<2.53.0
   :depends bioconductor-snapcgh: >=1.58.0,<1.59.0
   :depends bioconductor-tilingarray: >=1.66.0,<1.67.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-bit: 
   :depends r-cluster: 
   :depends r-ff: 
   :depends r-ffbase: 
   :depends r-waveslim: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-adacgh2

   and update with::

      conda update bioconductor-adacgh2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adacgh2:<tag>

   (see `bioconductor-adacgh2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adacgh2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adacgh2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adacgh2
   :alt:   (downloads)
.. |docker_bioconductor-adacgh2| image:: https://quay.io/repository/biocontainers/bioconductor-adacgh2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adacgh2
.. _`bioconductor-adacgh2/tags`: https://quay.io/repository/biocontainers/bioconductor-adacgh2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adacgh2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adacgh2/README.html