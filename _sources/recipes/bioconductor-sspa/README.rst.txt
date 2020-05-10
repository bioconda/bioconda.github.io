:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sspa'
.. highlight: bash

bioconductor-sspa
=================

.. conda:recipe:: bioconductor-sspa
   :replaces_section_title:

   General Sample Size and Power Analysis for Microarray and Next\-Generation Sequencing Data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/SSPA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sspa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sspa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sspa/meta.yaml>`_
   :links: biotools: :biotools:`sspa`

   General Sample size and power analysis for microarray and next\-generation sequencing data.


.. conda:package:: bioconductor-sspa

   |downloads_bioconductor-sspa| |docker_bioconductor-sspa|

   :versions: 2.28.0-0, 2.26.0-0, 2.24.0-1, 2.24.0-0, 2.22.1-0, 2.22.0-0, 2.20.0-0, 2.18.0-0, 2.16.0-0
   
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-qvalue: >=2.20.0,<2.21.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sspa

   and update with::

      conda update bioconductor-sspa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sspa:<tag>

   (see `bioconductor-sspa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sspa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sspa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sspa
   :alt:   (downloads)
.. |docker_bioconductor-sspa| image:: https://quay.io/repository/biocontainers/bioconductor-sspa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sspa
.. _`bioconductor-sspa/tags`: https://quay.io/repository/biocontainers/bioconductor-sspa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sspa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sspa/README.html