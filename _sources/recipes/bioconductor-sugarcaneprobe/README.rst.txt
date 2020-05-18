:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sugarcaneprobe'
.. highlight: bash

bioconductor-sugarcaneprobe
===========================

.. conda:recipe:: bioconductor-sugarcaneprobe
   :replaces_section_title:

   Probe sequence data for microarrays of type sugarcane

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/sugarcaneprobe.html
   :license: LGPL
   :recipe: /`bioconductor-sugarcaneprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sugarcaneprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sugarcaneprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Sugar\\\_Cane\\\_probe\\\_tab.


.. conda:package:: bioconductor-sugarcaneprobe

   |downloads_bioconductor-sugarcaneprobe| |docker_bioconductor-sugarcaneprobe|

   :versions: 2.18.0-5, 2.18.0-4, 2.18.0-3, 2.18.0-1, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sugarcaneprobe

   and update with::

      conda update bioconductor-sugarcaneprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sugarcaneprobe:<tag>

   (see `bioconductor-sugarcaneprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sugarcaneprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sugarcaneprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sugarcaneprobe
   :alt:   (downloads)
.. |docker_bioconductor-sugarcaneprobe| image:: https://quay.io/repository/biocontainers/bioconductor-sugarcaneprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sugarcaneprobe
.. _`bioconductor-sugarcaneprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-sugarcaneprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sugarcaneprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sugarcaneprobe/README.html