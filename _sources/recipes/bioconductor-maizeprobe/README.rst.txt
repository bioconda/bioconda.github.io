:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maizeprobe'
.. highlight: bash

bioconductor-maizeprobe
=======================

.. conda:recipe:: bioconductor-maizeprobe
   :replaces_section_title:

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Maize\\\_probe\\\_tab.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/maizeprobe.html
   :license: LGPL
   :recipe: /`bioconductor-maizeprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maizeprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maizeprobe/meta.yaml>`_

   


.. conda:package:: bioconductor-maizeprobe

   |downloads_bioconductor-maizeprobe| |docker_bioconductor-maizeprobe|

   :versions: 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-maizeprobe

   and update with::

      conda update bioconductor-maizeprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maizeprobe:<tag>

   (see `bioconductor-maizeprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maizeprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maizeprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maizeprobe
   :alt:   (downloads)
.. |docker_bioconductor-maizeprobe| image:: https://quay.io/repository/biocontainers/bioconductor-maizeprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maizeprobe
.. _`bioconductor-maizeprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-maizeprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maizeprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maizeprobe/README.html