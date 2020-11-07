:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ecoliprobe'
.. highlight: bash

bioconductor-ecoliprobe
=======================

.. conda:recipe:: bioconductor-ecoliprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type ecoli

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/ecoliprobe.html
   :license: LGPL
   :recipe: /`bioconductor-ecoliprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecoliprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecoliprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was E\\\_coli\\\_probe\\\_tab.


.. conda:package:: bioconductor-ecoliprobe

   |downloads_bioconductor-ecoliprobe| |docker_bioconductor-ecoliprobe|

   :versions:
      
      

      ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ecoliprobe

   and update with::

      conda update bioconductor-ecoliprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ecoliprobe:<tag>

   (see `bioconductor-ecoliprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ecoliprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ecoliprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ecoliprobe
   :alt:   (downloads)
.. |docker_bioconductor-ecoliprobe| image:: https://quay.io/repository/biocontainers/bioconductor-ecoliprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ecoliprobe
.. _`bioconductor-ecoliprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-ecoliprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ecoliprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ecoliprobe/README.html