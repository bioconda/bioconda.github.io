:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oppar'
.. highlight: bash

bioconductor-oppar
==================

.. conda:recipe:: bioconductor-oppar
   :replaces_section_title:

   The R implementation of mCOPA package published by Wang et al. \(2012\). Oppar provides methods for Cancer Outlier profile Analysis. Although initially developed to detect outlier genes in cancer studies\, methods presented in oppar can be used for outlier profile analysis in general. In addition\, tools are provided for gene set enrichment and pathway analysis.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/oppar.html
   :license: GPL-2
   :recipe: /`bioconductor-oppar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oppar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oppar/meta.yaml>`_
   :links: biotools: :biotools:`oppar`

   


.. conda:package:: bioconductor-oppar

   |downloads_bioconductor-oppar| |docker_bioconductor-oppar|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-gseabase: >=1.44.0,<1.45.0
   :depends bioconductor-gsva: >=1.30.0,<1.31.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
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