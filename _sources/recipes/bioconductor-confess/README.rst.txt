:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-confess'
.. highlight: bash

bioconductor-confess
====================

.. conda:recipe:: bioconductor-confess
   :replaces_section_title:
   :noindex:

   Cell OrderiNg by FluorEScence Signal

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/CONFESS.html
   :license: GPL-2
   :recipe: /`bioconductor-confess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-confess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-confess/meta.yaml>`_

   Single Cell Fluidigm Spot Detector.


.. conda:package:: bioconductor-confess

   |downloads_bioconductor-confess| |docker_bioconductor-confess|

   :versions:
      
      

      ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``

      

   
   :depends bioconductor-ebimage: ``>=4.32.0,<4.33.0``
   :depends bioconductor-flowclust: ``>=3.28.0,<3.29.0``
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends bioconductor-flowmeans: ``>=1.50.0,<1.51.0``
   :depends bioconductor-flowmerge: ``>=2.38.0,<2.39.0``
   :depends bioconductor-flowpeaks: ``>=1.36.0,<1.37.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-samspectral: ``>=1.44.0,<1.45.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-changepoint: 
   :depends r-cluster: 
   :depends r-contrast: 
   :depends r-data.table: ``>=1.9.7``
   :depends r-ecp: 
   :depends r-flexmix: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-moments: 
   :depends r-outliers: 
   :depends r-plotrix: 
   :depends r-raster: 
   :depends r-readbitmap: 
   :depends r-reshape2: 
   :depends r-waveslim: 
   :depends r-wavethresh: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-confess

   and update with::

      conda update bioconductor-confess

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-confess:<tag>

   (see `bioconductor-confess/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-confess| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-confess.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-confess
   :alt:   (downloads)
.. |docker_bioconductor-confess| image:: https://quay.io/repository/biocontainers/bioconductor-confess/status
   :target: https://quay.io/repository/biocontainers/bioconductor-confess
.. _`bioconductor-confess/tags`: https://quay.io/repository/biocontainers/bioconductor-confess?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-confess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-confess/README.html