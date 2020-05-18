:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-porcineprobe'
.. highlight: bash

bioconductor-porcineprobe
=========================

.. conda:recipe:: bioconductor-porcineprobe
   :replaces_section_title:

   Probe sequence data for microarrays of type porcine

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/porcineprobe.html
   :license: LGPL
   :recipe: /`bioconductor-porcineprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-porcineprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-porcineprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Porcine\\\_probe\\\_tab.


.. conda:package:: bioconductor-porcineprobe

   |downloads_bioconductor-porcineprobe| |docker_bioconductor-porcineprobe|

   :versions: 2.18.0-4, 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-porcineprobe

   and update with::

      conda update bioconductor-porcineprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-porcineprobe:<tag>

   (see `bioconductor-porcineprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-porcineprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-porcineprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-porcineprobe
   :alt:   (downloads)
.. |docker_bioconductor-porcineprobe| image:: https://quay.io/repository/biocontainers/bioconductor-porcineprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-porcineprobe
.. _`bioconductor-porcineprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-porcineprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-porcineprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-porcineprobe/README.html