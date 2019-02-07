.. title:: Package Recipe 'checkm-genome'
.. highlight: bash


checkm-genome
=============

.. conda:recipe:: checkm-genome
   :replaces_section_title:

   Assess the quality of microbial genomes recovered from isolates\, single cells\, and metagenomes.

   :homepage: https://ecogenomics.github.io/CheckM/
   :license: GPL3
   :recipe: /`checkm-genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkm-genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkm-genome/meta.yaml>`_

   


.. conda:package:: checkm-genome

   |downloads_checkm-genome| |docker_checkm-genome|

   :versions: 1.0.13, 1.0.12, 1.0.11, 1.0.7, 1.0.5

   :depends: :conda:package:`dendropy` >=4.0.0 :conda:package:`hmmer` >=3.1b1 :conda:package:`matplotlib` >=1.3.1 :conda:package:`numpy` >=1.8.0 :conda:package:`pplacer` >1.0 :conda:package:`prodigal` >=2.6.1 :conda:package:`pysam` >=0.8.3 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy` >=0.9.0 

   :required~by: |required_by_checkm-genome|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install checkm-genome

   and update with::

      conda update checkm-genome

   or use the docker container::

      docker pull quay.io/repository/biocontainers/checkm-genome


.. |required_by_checkm-genome| conda:required_by:: checkm-genome
.. |downloads_checkm-genome| image:: https://img.shields.io/conda/dn/bioconda/checkm-genome.svg?style=flat
   :alt:   (downloads)
.. |docker_checkm-genome| image:: https://quay.io/repository/biocontainers/checkm-genome/status
   :target: https://quay.io/repository/biocontainers/checkm-genome







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/checkm-genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/checkm-genome/README.html

