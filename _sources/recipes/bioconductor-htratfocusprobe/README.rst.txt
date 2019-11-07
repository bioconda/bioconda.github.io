:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htratfocusprobe'
.. highlight: bash

bioconductor-htratfocusprobe
============================

.. conda:recipe:: bioconductor-htratfocusprobe
   :replaces_section_title:

   Probe sequence data for microarrays of type htratfocus

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/htratfocusprobe.html
   :license: LGPL
   :recipe: /`bioconductor-htratfocusprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htratfocusprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htratfocusprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was HT\\\_Rat\-Focus\\\_probe\\\_tab.


.. conda:package:: bioconductor-htratfocusprobe

   |downloads_bioconductor-htratfocusprobe| |docker_bioconductor-htratfocusprobe|

   :versions: 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-htratfocusprobe

   and update with::

      conda update bioconductor-htratfocusprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-htratfocusprobe:<tag>

   (see `bioconductor-htratfocusprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-htratfocusprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htratfocusprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-htratfocusprobe
   :alt:   (downloads)
.. |docker_bioconductor-htratfocusprobe| image:: https://quay.io/repository/biocontainers/bioconductor-htratfocusprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htratfocusprobe
.. _`bioconductor-htratfocusprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-htratfocusprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htratfocusprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htratfocusprobe/README.html