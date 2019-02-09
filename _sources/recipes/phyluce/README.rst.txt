.. title:: Package Recipe 'phyluce'
.. highlight: bash


phyluce
=======

.. conda:recipe:: phyluce
   :replaces_section_title:

   Software for UCE \(and general\) phylogenomics.

   :homepage: https://github.com/faircloth-lab/phyluce
   :license: BSD
   :recipe: /`phyluce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyluce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyluce/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv646`

   


.. conda:package:: phyluce

   |downloads_phyluce| |docker_phyluce|

   :versions: 1.6.7, 1.6.6, 1.6.5, 1.6.4, 1.6.3, 1.6.2

   :depends: :conda:package:`abyss` 1.5.* :conda:package:`bcftools`  :conda:package:`bedtools`  :conda:package:`biopython`  :conda:package:`bowtie`  :conda:package:`bwa`  :conda:package:`bx-python`  :conda:package:`dendropy` 3.* :conda:package:`gatk` 3.8.* :conda:package:`gblocks`  :conda:package:`illumiprocessor`  :conda:package:`itero`  :conda:package:`lastz`  :conda:package:`mafft`  :conda:package:`muscle`  :conda:package:`pandas`  :conda:package:`picard`  :conda:package:`pysam`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`pyvcf`  :conda:package:`raxml`  :conda:package:`samtools`  :conda:package:`seqtk`  :conda:package:`spades` 3.12.* :conda:package:`trimal`  :conda:package:`velvet` 1.2.* 

   :required~by: |required_by_phyluce|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phyluce

   and update with::

      conda update phyluce

   or use the docker container::

      docker pull quay.io/repository/biocontainers/phyluce


.. |required_by_phyluce| conda:required_by:: phyluce
.. |downloads_phyluce| image:: https://img.shields.io/conda/dn/bioconda/phyluce.svg?style=flat
   :alt:   (downloads)
.. |docker_phyluce| image:: https://quay.io/repository/biocontainers/phyluce/status
   :target: https://quay.io/repository/biocontainers/phyluce







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyluce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyluce/README.html

