:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-powerexplorer'
.. highlight: bash

bioconductor-powerexplorer
==========================

.. conda:recipe:: bioconductor-powerexplorer
   :replaces_section_title:

   Power Estimation Tool for RNA\-Seq and proteomics data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/PowerExplorer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-powerexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-powerexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-powerexplorer/meta.yaml>`_

   Estimate and predict power among groups and multiple sample sizes with simulated data\, the simulations are operated based on distribution parameters estimated from the provided input dataset.


.. conda:package:: bioconductor-powerexplorer

   |downloads_bioconductor-powerexplorer| |docker_bioconductor-powerexplorer|

   :versions: 1.7.0-0, 1.6.0-0, 1.4.0-1, 1.2.2-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-deseq2: >=1.28.0,<1.29.0
   :depends bioconductor-rots: >=1.16.0,<1.17.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends bioconductor-vsn: >=3.56.0,<3.57.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-powerexplorer

   and update with::

      conda update bioconductor-powerexplorer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-powerexplorer:<tag>

   (see `bioconductor-powerexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-powerexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-powerexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-powerexplorer
   :alt:   (downloads)
.. |docker_bioconductor-powerexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-powerexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-powerexplorer
.. _`bioconductor-powerexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-powerexplorer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-powerexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-powerexplorer/README.html