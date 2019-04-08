:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gwascat'
.. highlight: bash

bioconductor-gwascat
====================

.. conda:recipe:: bioconductor-gwascat
   :replaces_section_title:

   Represent and model data in the EMBL\-EBI GWAS catalog.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gwascat.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gwascat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwascat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwascat/meta.yaml>`_

   


.. conda:package:: bioconductor-gwascat

   |downloads_bioconductor-gwascat| |docker_bioconductor-gwascat|

   :versions: 2.14.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-annotationhub: >=2.14.0,<2.15.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-ggbio: >=1.30.0,<1.31.0
   :depends bioconductor-gqtlstats: >=1.14.0,<1.15.0
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends bioconductor-gviz: >=1.26.0,<1.27.0
   :depends bioconductor-homo.sapiens: >=1.3.0,<1.4.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-snpstats: >=1.32.0,<1.33.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gwascat

   and update with::

      conda update bioconductor-gwascat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gwascat:<tag>

   (see `bioconductor-gwascat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gwascat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gwascat.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gwascat| image:: https://quay.io/repository/biocontainers/bioconductor-gwascat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gwascat
.. _`bioconductor-gwascat/tags`: https://quay.io/repository/biocontainers/bioconductor-gwascat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gwascat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gwascat/README.html