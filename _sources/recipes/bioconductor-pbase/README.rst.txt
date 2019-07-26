:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pbase'
.. highlight: bash

bioconductor-pbase
==================

.. conda:recipe:: bioconductor-pbase
   :replaces_section_title:

   A set of classes and functions to investigate and understand protein sequence data in the context of a proteomics experiment.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Pbase.html
   :license: GPL-3
   :recipe: /`bioconductor-pbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pbase/meta.yaml>`_
   :links: biotools: :biotools:`pbase`, doi: :doi:`10.1002/pmic.201400392`

   


.. conda:package:: bioconductor-pbase

   |downloads_bioconductor-pbase| |docker_bioconductor-pbase|

   :versions: 0.22.1-0, 0.22.0-0, 0.18.0-0
   
   :depends bioconductor-annotationfilter: >=1.6.0,<1.7.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-cleaver: >=1.20.0,<1.21.0
   :depends bioconductor-ensembldb: >=2.6.0,<2.7.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-gviz: >=1.26.0,<1.27.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-msnbase: >=2.8.0,<2.9.0
   :depends bioconductor-mzid: >=1.20.0,<1.21.0
   :depends bioconductor-mzr: >=2.16.0,<2.17.0
   :depends bioconductor-pviz: >=1.16.0,<1.17.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pbase

   and update with::

      conda update bioconductor-pbase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pbase:<tag>

   (see `bioconductor-pbase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pbase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pbase
   :alt:   (downloads)
.. |docker_bioconductor-pbase| image:: https://quay.io/repository/biocontainers/bioconductor-pbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pbase
.. _`bioconductor-pbase/tags`: https://quay.io/repository/biocontainers/bioconductor-pbase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pbase/README.html