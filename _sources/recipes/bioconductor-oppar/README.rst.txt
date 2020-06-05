:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oppar'
.. highlight: bash

bioconductor-oppar
==================

.. conda:recipe:: bioconductor-oppar
   :replaces_section_title:
   :noindex:

   Outlier profile and pathway analysis in R

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/oppar.html
   :license: GPL-2
   :recipe: /`bioconductor-oppar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oppar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oppar/meta.yaml>`_
   :links: biotools: :biotools:`oppar`

   The R implementation of mCOPA package published by Wang et al. \(2012\). Oppar provides methods for Cancer Outlier profile Analysis. Although initially developed to detect outlier genes in cancer studies\, methods presented in oppar can be used for outlier profile analysis in general. In addition\, tools are provided for gene set enrichment and pathway analysis.


.. conda:package:: bioconductor-oppar

   |downloads_bioconductor-oppar| |docker_bioconductor-oppar|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-gseabase: ``>=1.50.0,<1.51.0``
   :depends bioconductor-gsva: ``>=1.36.0,<1.37.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oppar

   and update with::

      conda update bioconductor-oppar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oppar:<tag>

   (see `bioconductor-oppar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oppar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oppar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oppar
   :alt:   (downloads)
.. |docker_bioconductor-oppar| image:: https://quay.io/repository/biocontainers/bioconductor-oppar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oppar
.. _`bioconductor-oppar/tags`: https://quay.io/repository/biocontainers/bioconductor-oppar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oppar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oppar/README.html