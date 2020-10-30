:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cohcapanno'
.. highlight: bash

bioconductor-cohcapanno
=======================

.. conda:recipe:: bioconductor-cohcapanno
   :replaces_section_title:
   :noindex:

   Annotations for City of Hope CpG Island Analysis Pipeline

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/COHCAPanno.html
   :license: GPL-3
   :recipe: /`bioconductor-cohcapanno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cohcapanno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cohcapanno/meta.yaml>`_

   Provides genomic location\, nearby CpG island and nearby gene information for common Illumina methylation array platforms


.. conda:package:: bioconductor-cohcapanno

   |downloads_bioconductor-cohcapanno| |docker_bioconductor-cohcapanno|

   :versions:
      
      

      ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cohcapanno

   and update with::

      conda update bioconductor-cohcapanno

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cohcapanno:<tag>

   (see `bioconductor-cohcapanno/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cohcapanno| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cohcapanno.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cohcapanno
   :alt:   (downloads)
.. |docker_bioconductor-cohcapanno| image:: https://quay.io/repository/biocontainers/bioconductor-cohcapanno/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cohcapanno
.. _`bioconductor-cohcapanno/tags`: https://quay.io/repository/biocontainers/bioconductor-cohcapanno?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cohcapanno/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cohcapanno/README.html