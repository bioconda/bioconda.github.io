:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snvphyl-tools'
.. highlight: bash

snvphyl-tools
=============

.. conda:recipe:: snvphyl-tools
   :replaces_section_title:
   :noindex:

   The SNVPhyl \(Single Nucleotide Variant PHYLogenomics\) pipeline is a pipeline for identifying
   Single Nucleotide Variants \(SNV\) within a collection of microbial genomes and constructing a phylogenetic tree

   :homepage: https://github.com/phac-nml/snvphyl-tools
   :license: apache_2.0
   :recipe: /`snvphyl-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snvphyl-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snvphyl-tools/meta.yaml>`_

   


.. conda:package:: snvphyl-tools

   |downloads_snvphyl-tools| |docker_snvphyl-tools|

   :versions:
      
      

      ``1.8.2-4``,  ``1.8.2-3``,  ``1.8.2-2``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-0``

      

   
   :depends bcftools-snvphyl-plugin: ``>=1.9``
   :depends grep: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends mummer: 
   :depends openssl: ``>=1.1.1k,<1.1.2a``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-hash-merge: 
   :depends perl-list-moreutils: 
   :depends perl-math-round: 
   :depends perl-parallel-forkmanager: 
   :depends perl-string-util: 
   :depends perl-text-csv: 
   :depends perl-vcftools-vcf: 
   :depends samtools: 
   :depends vcftools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snvphyl-tools

   and update with::

      conda update snvphyl-tools

   or use the docker container::

      docker pull quay.io/biocontainers/snvphyl-tools:<tag>

   (see `snvphyl-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_snvphyl-tools| image:: https://img.shields.io/conda/dn/bioconda/snvphyl-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/snvphyl-tools
   :alt:   (downloads)
.. |docker_snvphyl-tools| image:: https://quay.io/repository/biocontainers/snvphyl-tools/status
   :target: https://quay.io/repository/biocontainers/snvphyl-tools
.. _`snvphyl-tools/tags`: https://quay.io/repository/biocontainers/snvphyl-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snvphyl-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snvphyl-tools/README.html