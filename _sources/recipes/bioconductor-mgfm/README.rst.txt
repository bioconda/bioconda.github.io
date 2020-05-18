:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mgfm'
.. highlight: bash

bioconductor-mgfm
=================

.. conda:recipe:: bioconductor-mgfm
   :replaces_section_title:

   Marker Gene Finder in Microarray gene expression data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MGFM.html
   :license: GPL-3
   :recipe: /`bioconductor-mgfm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgfm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgfm/meta.yaml>`_
   :links: biotools: :biotools:`mgfm`, doi: :doi:`10.1186/s12864-015-1785-9`

   The package is designed to detect marker genes from Microarray gene expression data sets


.. conda:package:: bioconductor-mgfm

   |downloads_bioconductor-mgfm| |docker_bioconductor-mgfm|

   :versions: 1.22.0-0, 1.20.0-0, 1.18.0-1, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-annotate: >=1.66.0,<1.67.0
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mgfm

   and update with::

      conda update bioconductor-mgfm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mgfm:<tag>

   (see `bioconductor-mgfm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mgfm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mgfm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mgfm
   :alt:   (downloads)
.. |docker_bioconductor-mgfm| image:: https://quay.io/repository/biocontainers/bioconductor-mgfm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mgfm
.. _`bioconductor-mgfm/tags`: https://quay.io/repository/biocontainers/bioconductor-mgfm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mgfm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mgfm/README.html