:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cottonprobe'
.. highlight: bash

bioconductor-cottonprobe
========================

.. conda:recipe:: bioconductor-cottonprobe
   :replaces_section_title:

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Cotton\\\_probe\\\_tab.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/cottonprobe.html
   :license: LGPL
   :recipe: /`bioconductor-cottonprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cottonprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cottonprobe/meta.yaml>`_

   


.. conda:package:: bioconductor-cottonprobe

   |downloads_bioconductor-cottonprobe| |docker_bioconductor-cottonprobe|

   :versions: 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cottonprobe

   and update with::

      conda update bioconductor-cottonprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cottonprobe:<tag>

   (see `bioconductor-cottonprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cottonprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cottonprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cottonprobe
   :alt:   (downloads)
.. |docker_bioconductor-cottonprobe| image:: https://quay.io/repository/biocontainers/bioconductor-cottonprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cottonprobe
.. _`bioconductor-cottonprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-cottonprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cottonprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cottonprobe/README.html