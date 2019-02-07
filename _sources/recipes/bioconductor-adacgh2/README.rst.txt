.. title:: Package Recipe 'bioconductor-adacgh2'
.. highlight: bash


bioconductor-adacgh2
====================

.. conda:recipe:: bioconductor-adacgh2
   :replaces_section_title:

   Analysis and plotting of array CGH data. Allows usage of Circular Binary Segementation\, wavelet\-based smoothing \(both as in Liu et al.\, and HaarSeg as in Ben\-Yaacov and Eldar\)\, HMM\, BioHMM\, GLAD\, CGHseg. Most computations are parallelized \(either via forking or with clusters\, including MPI and sockets clusters\) and use ff for storing data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ADaCGH2.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-adacgh2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adacgh2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adacgh2/meta.yaml>`_

   


.. conda:package:: bioconductor-adacgh2

   |downloads_bioconductor-adacgh2| |docker_bioconductor-adacgh2|

   :versions: 

   :depends: 

   :required~by: |required_by_bioconductor-adacgh2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-adacgh2

   and update with::

      conda update bioconductor-adacgh2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-adacgh2


.. |required_by_bioconductor-adacgh2| conda:required_by:: bioconductor-adacgh2
.. |downloads_bioconductor-adacgh2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adacgh2.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-adacgh2| image:: https://quay.io/repository/biocontainers/bioconductor-adacgh2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adacgh2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adacgh2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adacgh2/README.html

