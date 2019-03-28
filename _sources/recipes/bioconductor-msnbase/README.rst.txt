:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msnbase'
.. highlight: bash

bioconductor-msnbase
====================

.. conda:recipe:: bioconductor-msnbase
   :replaces_section_title:

   MSnbase provides infrastructure for manipulation\, processing and visualisation of mass spectrometry and proteomics data\, ranging from raw to quantitative and annotated data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MSnbase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msnbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msnbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msnbase/meta.yaml>`_
   :links: biotools: :biotools:`msnbase`

   


.. conda:package:: bioconductor-msnbase

   |downloads_bioconductor-msnbase| |docker_bioconductor-msnbase|

   :versions: 2.8.2-0, 2.4.0-1, 2.4.0-0, 2.2.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   
   :depends bioconductor-impute: >=1.56.0,<1.57.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-mzid: >=1.20.0,<1.21.0
   
   :depends bioconductor-mzr: >=2.16.0,<2.17.0
   
   :depends bioconductor-pcamethods: >=1.74.0,<1.75.0
   
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   
   :depends bioconductor-protgenerics: >=1.14.0,<1.15.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-vsn: >=3.50.0,<3.51.0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-digest: 
   
   :depends r-ggplot2: 
   
   :depends r-lattice: 
   
   :depends r-maldiquant: >=1.16
   
   :depends r-mass: 
   
   :depends r-plyr: 
   
   :depends r-rcpp: 
   
   :depends r-scales: 
   
   :depends r-xml: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msnbase

   and update with::

      conda update bioconductor-msnbase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msnbase:<tag>

   (see `bioconductor-msnbase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msnbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msnbase.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-msnbase| image:: https://quay.io/repository/biocontainers/bioconductor-msnbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msnbase
.. _`bioconductor-msnbase/tags`: https://quay.io/repository/biocontainers/bioconductor-msnbase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msnbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msnbase/README.html