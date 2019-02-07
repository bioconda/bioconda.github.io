.. title:: Package Recipe 'bioconductor-cohcapanno'
.. highlight: bash


bioconductor-cohcapanno
=======================

.. conda:recipe:: bioconductor-cohcapanno
   :replaces_section_title:

   Provides genomic location\, nearby CpG island and nearby gene information for common Illumina methylation array platforms

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/COHCAPanno.html
   :license: GPL-3
   :recipe: /`bioconductor-cohcapanno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cohcapanno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cohcapanno/meta.yaml>`_

   


.. conda:package:: bioconductor-cohcapanno

   |downloads_bioconductor-cohcapanno| |docker_bioconductor-cohcapanno|

   :versions: 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-cohcapanno|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cohcapanno

   and update with::

      conda update bioconductor-cohcapanno

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cohcapanno


.. |required_by_bioconductor-cohcapanno| conda:required_by:: bioconductor-cohcapanno
.. |downloads_bioconductor-cohcapanno| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cohcapanno.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cohcapanno| image:: https://quay.io/repository/biocontainers/bioconductor-cohcapanno/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cohcapanno







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cohcapanno/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cohcapanno/README.html

