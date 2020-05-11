:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-medicagoprobe'
.. highlight: bash

bioconductor-medicagoprobe
==========================

.. conda:recipe:: bioconductor-medicagoprobe
   :replaces_section_title:

   Probe sequence data for microarrays of type medicago

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/medicagoprobe.html
   :license: LGPL
   :recipe: /`bioconductor-medicagoprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-medicagoprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-medicagoprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Medicago\\\_probe\\\_tab.


.. conda:package:: bioconductor-medicagoprobe

   |downloads_bioconductor-medicagoprobe| |docker_bioconductor-medicagoprobe|

   :versions: 2.18.0-4, 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-medicagoprobe

   and update with::

      conda update bioconductor-medicagoprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-medicagoprobe:<tag>

   (see `bioconductor-medicagoprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-medicagoprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-medicagoprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-medicagoprobe
   :alt:   (downloads)
.. |docker_bioconductor-medicagoprobe| image:: https://quay.io/repository/biocontainers/bioconductor-medicagoprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-medicagoprobe
.. _`bioconductor-medicagoprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-medicagoprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-medicagoprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-medicagoprobe/README.html