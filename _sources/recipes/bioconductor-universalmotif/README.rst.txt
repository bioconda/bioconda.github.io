:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-universalmotif'
.. highlight: bash

bioconductor-universalmotif
===========================

.. conda:recipe:: bioconductor-universalmotif
   :replaces_section_title:
   :noindex:

   Import\, Modify\, and Export Motifs with R

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/universalmotif.html
   :license: GPL-3
   :recipe: /`bioconductor-universalmotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-universalmotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-universalmotif/meta.yaml>`_

   Allows for importing most common motif types into R for use by functions provided by other Bioconductor motif\-related packages. Motifs can be exported into most major motif formats from various classes as defined by other Bioconductor packages. A suite of motif and sequence manipulation and analysis functions are included\, including enrichment\, comparison\, P\-value calculation\, shuffling\, trimming\, higher\-order motifs\, and others.


.. conda:package:: bioconductor-universalmotif

   |downloads_bioconductor-universalmotif| |docker_bioconductor-universalmotif|

   :versions:
      
      

      ``1.10.1-0``,  ``1.8.3-0``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.12-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-rcpp: 
   :depends r-rcppthread: 
   :depends r-rlang: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-universalmotif

   and update with::

      conda update bioconductor-universalmotif

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-universalmotif:<tag>

   (see `bioconductor-universalmotif/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-universalmotif| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-universalmotif.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-universalmotif
   :alt:   (downloads)
.. |docker_bioconductor-universalmotif| image:: https://quay.io/repository/biocontainers/bioconductor-universalmotif/status
   :target: https://quay.io/repository/biocontainers/bioconductor-universalmotif
.. _`bioconductor-universalmotif/tags`: https://quay.io/repository/biocontainers/bioconductor-universalmotif?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-universalmotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-universalmotif/README.html