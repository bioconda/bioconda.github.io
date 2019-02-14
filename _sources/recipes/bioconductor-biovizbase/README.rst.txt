:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biovizbase'
.. highlight: bash

bioconductor-biovizbase
=======================

.. conda:recipe:: bioconductor-biovizbase
   :replaces_section_title:

   The biovizBase package is designed to provide a set of utilities\, color schemes and conventions for genomic data. It serves as the base for various high\-level packages for biological data visualization. This saves development effort and encourages consistency.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/biovizBase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biovizbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biovizbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biovizbase/meta.yaml>`_
   :links: biotools: :biotools:`biovizbase`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-biovizbase

   |downloads_bioconductor-biovizbase| |docker_bioconductor-biovizbase|

   :versions: 1.30.1-0, 1.30.0-0, 1.28.2-0, 1.26.0-0, 1.24.0-0, 1.20.0-0, 1.18.0-1, 1.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-annotationfilter: >=1.6.0,<1.7.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-ensembldb: >=2.6.0,<2.7.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dichromat: 
   
   :depends r-hmisc: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-rlang: 
   
   :depends r-scales: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biovizbase

   and update with::

      conda update bioconductor-biovizbase

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biovizbase:<tag>

   (see `bioconductor-biovizbase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biovizbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biovizbase.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biovizbase| image:: https://quay.io/repository/biocontainers/bioconductor-biovizbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biovizbase
.. _`bioconductor-biovizbase/tags`: https://quay.io/repository/biocontainers/bioconductor-biovizbase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biovizbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biovizbase/README.html