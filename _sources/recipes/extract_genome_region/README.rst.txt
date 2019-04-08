:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extract_genome_region'
.. highlight: bash

extract_genome_region
=====================

.. conda:recipe:: extract_genome_region
   :replaces_section_title:

   Given a CSV file of variable information defining the regions of interest\, return a file that contains a fasta\-formatted representation of these regions.

   :homepage: https://github.com/xguse/extract-genome-region
   :license: BSD License
   :recipe: /`extract_genome_region <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_genome_region>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_genome_region/meta.yaml>`_

   


.. conda:package:: extract_genome_region

   |downloads_extract_genome_region| |docker_extract_genome_region|

   :versions: 0.0.3-1, 0.0.3-0
   
   :depends click: 
   :depends pyfaidx: 
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install extract_genome_region

   and update with::

      conda update extract_genome_region

   or use the docker container::

      docker pull quay.io/biocontainers/extract_genome_region:<tag>

   (see `extract_genome_region/tags`_ for valid values for ``<tag>``)


.. |downloads_extract_genome_region| image:: https://img.shields.io/conda/dn/bioconda/extract_genome_region.svg?style=flat
   :alt:   (downloads)
.. |docker_extract_genome_region| image:: https://quay.io/repository/biocontainers/extract_genome_region/status
   :target: https://quay.io/repository/biocontainers/extract_genome_region
.. _`extract_genome_region/tags`: https://quay.io/repository/biocontainers/extract_genome_region?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extract_genome_region/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extract_genome_region/README.html