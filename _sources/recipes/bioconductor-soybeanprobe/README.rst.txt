:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-soybeanprobe'
.. highlight: bash

bioconductor-soybeanprobe
=========================

.. conda:recipe:: bioconductor-soybeanprobe
   :replaces_section_title:

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Soybean\\\_probe\\\_tab.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/soybeanprobe.html
   :license: LGPL
   :recipe: /`bioconductor-soybeanprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soybeanprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soybeanprobe/meta.yaml>`_

   


.. conda:package:: bioconductor-soybeanprobe

   |downloads_bioconductor-soybeanprobe| |docker_bioconductor-soybeanprobe|

   :versions: 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-soybeanprobe

   and update with::

      conda update bioconductor-soybeanprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-soybeanprobe:<tag>

   (see `bioconductor-soybeanprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-soybeanprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-soybeanprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-soybeanprobe
   :alt:   (downloads)
.. |docker_bioconductor-soybeanprobe| image:: https://quay.io/repository/biocontainers/bioconductor-soybeanprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-soybeanprobe
.. _`bioconductor-soybeanprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-soybeanprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-soybeanprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-soybeanprobe/README.html