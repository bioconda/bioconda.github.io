:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'secapr'
.. highlight: bash

secapr
======

.. conda:recipe:: secapr
   :replaces_section_title:

   Process sequence\-capture FASTQ files into alignments for phylogenetic analyses. Integrates allele phasing\, producing haplotype alignments.

   :homepage: https://github.com/AntonelliLab/seqcap_processor
   :license: MIT
   :recipe: /`secapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secapr/meta.yaml>`_

   


.. conda:package:: secapr

   |downloads_secapr| |docker_secapr|

   :versions: 1.1.12-0, 1.1.10-2, 1.1.10-0, 1.1.9-0, 1.1.8-0, 1.1.7-0, 1.1.4-0, 1.1.0-0, 1.0.2-0, 1.0.1-0
   
   :depends abyss: 
   
   :depends bcftools: 1.8
   
   :depends biopython: 
   
   :depends bwa: >=0.7
   
   :depends cogent: 
   
   :depends emboss: 
   
   :depends fastqc: 
   
   :depends lastz: 
   
   :depends mafft: >=7.2
   
   :depends muscle: 
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends picard: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :depends r-tidyverse: 
   
   :depends samtools: 0.1.19.*
   
   :depends seqtk: >=1.0.82,<=1.2
   
   :depends trimmomatic: 0.33
   
   :depends trinity: <=2.3.2
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install secapr

   and update with::

      conda update secapr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/secapr:<tag>

   (see `secapr/tags`_ for valid values for ``<tag>``)


.. |downloads_secapr| image:: https://img.shields.io/conda/dn/bioconda/secapr.svg?style=flat
   :alt:   (downloads)
.. |docker_secapr| image:: https://quay.io/repository/biocontainers/secapr/status
   :target: https://quay.io/repository/biocontainers/secapr
.. _`secapr/tags`: https://quay.io/repository/biocontainers/secapr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/secapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/secapr/README.html