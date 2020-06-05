:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phenix'
.. highlight: bash

phenix
======

.. conda:recipe:: phenix
   :replaces_section_title:
   :noindex:

   Public Health England SNP calling pipeline

   :homepage: https://github.com/phe-bioinformatics/PHEnix
   :license: GPL3
   :recipe: /`phenix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phenix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phenix/meta.yaml>`_
   :links: biotools: :biotools:`phenix`

   


.. conda:package:: phenix

   |downloads_phenix| |docker_phenix|

   :versions:
      
      

      ``1.4.1a-0``

      

   
   :depends argparse: 
   :depends bcftools: 
   :depends bintrees: 
   :depends biopython: 
   :depends bowtie2: 
   :depends bwa: 
   :depends gatk: 
   :depends matplotlib: 
   :depends matplotlib-venn: 
   :depends numpy: 
   :depends picard: 
   :depends psycopg2: 
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends pyvcf: 
   :depends pyyaml: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phenix

   and update with::

      conda update phenix

   or use the docker container::

      docker pull quay.io/biocontainers/phenix:<tag>

   (see `phenix/tags`_ for valid values for ``<tag>``)


.. |downloads_phenix| image:: https://img.shields.io/conda/dn/bioconda/phenix.svg?style=flat
   :target: https://anaconda.org/bioconda/phenix
   :alt:   (downloads)
.. |docker_phenix| image:: https://quay.io/repository/biocontainers/phenix/status
   :target: https://quay.io/repository/biocontainers/phenix
.. _`phenix/tags`: https://quay.io/repository/biocontainers/phenix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phenix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phenix/README.html