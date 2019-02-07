.. title:: Package Recipe 'phenix'
.. highlight: bash


phenix
======

.. conda:recipe:: phenix
   :replaces_section_title:

   Public Health England SNP calling pipeline

   :homepage: https://github.com/phe-bioinformatics/PHEnix
   :license: GPL3
   :recipe: /`phenix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phenix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phenix/meta.yaml>`_
   :links: biotools: :biotools:`phenix`

   


.. conda:package:: phenix

   |downloads_phenix| |docker_phenix|

   :versions: 1.4.1a

   :depends: :conda:package:`argparse`  :conda:package:`bcftools`  :conda:package:`bintrees`  :conda:package:`biopython`  :conda:package:`bowtie2`  :conda:package:`bwa`  :conda:package:`gatk`  :conda:package:`matplotlib`  :conda:package:`matplotlib-venn`  :conda:package:`numpy`  :conda:package:`picard`  :conda:package:`psycopg2`  :conda:package:`pysam`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`pyvcf`  :conda:package:`pyyaml`  :conda:package:`samtools`  

   :required~by: |required_by_phenix|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phenix

   and update with::

      conda update phenix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/phenix


.. |required_by_phenix| conda:required_by:: phenix
.. |downloads_phenix| image:: https://img.shields.io/conda/dn/bioconda/phenix.svg?style=flat
   :alt:   (downloads)
.. |docker_phenix| image:: https://quay.io/repository/biocontainers/phenix/status
   :target: https://quay.io/repository/biocontainers/phenix







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phenix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phenix/README.html

