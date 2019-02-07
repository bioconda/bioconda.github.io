.. title:: Package Recipe 'snvphyl-tools'
.. highlight: bash


snvphyl-tools
=============

.. conda:recipe:: snvphyl-tools
   :replaces_section_title:

   The SNVPhyl \(Single Nucleotide Variant PHYLogenomics\) pipeline is a pipeline for identifying Single Nucleotide Variants \(SNV\) within a collection of microbial genomes and constructing a phylogenetic tree

   :homepage: https://github.com/phac-nml/snvphyl-tools
   :license: apache_2.0
   :recipe: /`snvphyl-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snvphyl-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snvphyl-tools/meta.yaml>`_

   


.. conda:package:: snvphyl-tools

   |downloads_snvphyl-tools| |docker_snvphyl-tools|

   :versions: 1.8.1

   :depends: :conda:package:`bcftools-snvphyl-plugin`  :conda:package:`mummer`  :conda:package:`perl` 5.22.0* :conda:package:`perl-bioperl`  :conda:package:`perl-hash-merge`  :conda:package:`perl-list-moreutils`  :conda:package:`perl-math-round`  :conda:package:`perl-parallel-forkmanager`  :conda:package:`perl-string-util`  :conda:package:`perl-text-csv`  :conda:package:`samtools`  :conda:package:`vcftools`  

   :required~by: |required_by_snvphyl-tools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snvphyl-tools

   and update with::

      conda update snvphyl-tools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/snvphyl-tools


.. |required_by_snvphyl-tools| conda:required_by:: snvphyl-tools
.. |downloads_snvphyl-tools| image:: https://img.shields.io/conda/dn/bioconda/snvphyl-tools.svg?style=flat
   :alt:   (downloads)
.. |docker_snvphyl-tools| image:: https://quay.io/repository/biocontainers/snvphyl-tools/status
   :target: https://quay.io/repository/biocontainers/snvphyl-tools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snvphyl-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snvphyl-tools/README.html

