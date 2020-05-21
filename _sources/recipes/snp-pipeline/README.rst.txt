:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-pipeline'
.. highlight: bash

snp-pipeline
============

.. conda:recipe:: snp-pipeline
   :replaces_section_title:

   Script and functions for SNP matrix construction

   :homepage: https://github.com/CFSAN-Biostatistics/snp-pipeline
   :license: BSD License
   :recipe: /`snp-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pipeline/meta.yaml>`_

   


.. conda:package:: snp-pipeline

   |downloads_snp-pipeline| |docker_snp-pipeline|

   :versions: 2.2.0-0, 2.1.1-0, 2.1.0-0, 2.0.2-0, 1.0.1-2, 1.0.1-0, 0.7.0-0, 0.5.0-0
   
   :depends biopython: 
   :depends jobrunner: 
   :depends psutil: 
   :depends python: 
   :depends pyvcf: >=0.6.7
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snp-pipeline

   and update with::

      conda update snp-pipeline

   or use the docker container::

      docker pull quay.io/biocontainers/snp-pipeline:<tag>

   (see `snp-pipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_snp-pipeline| image:: https://img.shields.io/conda/dn/bioconda/snp-pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-pipeline
   :alt:   (downloads)
.. |docker_snp-pipeline| image:: https://quay.io/repository/biocontainers/snp-pipeline/status
   :target: https://quay.io/repository/biocontainers/snp-pipeline
.. _`snp-pipeline/tags`: https://quay.io/repository/biocontainers/snp-pipeline?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-pipeline/README.html