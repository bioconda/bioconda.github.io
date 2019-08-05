:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-canineprobe'
.. highlight: bash

bioconductor-canineprobe
========================

.. conda:recipe:: bioconductor-canineprobe
   :replaces_section_title:

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Canine\\\_probe\\\_tab.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/canineprobe.html
   :license: LGPL
   :recipe: /`bioconductor-canineprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-canineprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-canineprobe/meta.yaml>`_

   


.. conda:package:: bioconductor-canineprobe

   |downloads_bioconductor-canineprobe| |docker_bioconductor-canineprobe|

   :versions: 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-canineprobe

   and update with::

      conda update bioconductor-canineprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-canineprobe:<tag>

   (see `bioconductor-canineprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-canineprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-canineprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-canineprobe
   :alt:   (downloads)
.. |docker_bioconductor-canineprobe| image:: https://quay.io/repository/biocontainers/bioconductor-canineprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-canineprobe
.. _`bioconductor-canineprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-canineprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-canineprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-canineprobe/README.html