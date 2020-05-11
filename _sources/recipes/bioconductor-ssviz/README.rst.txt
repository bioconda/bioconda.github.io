:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ssviz'
.. highlight: bash

bioconductor-ssviz
==================

.. conda:recipe:: bioconductor-ssviz
   :replaces_section_title:

   A small RNA\-seq visualizer and analysis toolkit

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/ssviz.html
   :license: GPL-2
   :recipe: /`bioconductor-ssviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssviz/meta.yaml>`_
   :links: biotools: :biotools:`ssviz`, doi: :doi:`10.1038/nmeth.3252`

   Small RNA sequencing viewer


.. conda:package:: bioconductor-ssviz

   |downloads_bioconductor-ssviz| |docker_bioconductor-ssviz|

   :versions: 1.22.0-0, 1.20.0-0, 1.18.0-1, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-ggplot2: 
   :depends r-rcolorbrewer: 
   :depends r-reshape: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ssviz

   and update with::

      conda update bioconductor-ssviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ssviz:<tag>

   (see `bioconductor-ssviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ssviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ssviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ssviz
   :alt:   (downloads)
.. |docker_bioconductor-ssviz| image:: https://quay.io/repository/biocontainers/bioconductor-ssviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ssviz
.. _`bioconductor-ssviz/tags`: https://quay.io/repository/biocontainers/bioconductor-ssviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ssviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ssviz/README.html