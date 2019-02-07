.. title:: Package Recipe 'snippy'
.. highlight: bash


snippy
======

.. conda:recipe:: snippy
   :replaces_section_title:

   Rapid bacterial SNP calling and core genome alignments

   :homepage: https://github.com/tseemann/snippy
   :license: GPL / GPL-2.0
   :recipe: /`snippy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snippy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snippy/meta.yaml>`_
   :links: biotools: :biotools:`snippy`

   


.. conda:package:: snippy

   |downloads_snippy| |docker_snippy|

   :versions: 4.3.6, 4.3.5, 4.3.3, 4.2.3, 4.1.0, 4.0.7, 4.0.5, 4.0.2, 3.2, 3.1, 3.0, 2.9

   :depends: :conda:package:`bcftools` >=1.8 :conda:package:`bedtools`  :conda:package:`bwa` >=0.7.17 :conda:package:`emboss` >=6.0 :conda:package:`freebayes` >=1.1 :conda:package:`minimap2` >=2.10 :conda:package:`parallel` >=20170422 :conda:package:`perl`  :conda:package:`perl-bioperl` >=1.7.2 :conda:package:`perl-time-piece`  :conda:package:`samclip` >=0.2 :conda:package:`samtools` >=1.8 :conda:package:`seqtk` >=1.2 :conda:package:`snp-sites` >=2.4 :conda:package:`snpeff` >=4.3 :conda:package:`vcflib`  :conda:package:`vt` >=0.5772 

   :required~by: |required_by_snippy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snippy

   and update with::

      conda update snippy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/snippy


.. |required_by_snippy| conda:required_by:: snippy
.. |downloads_snippy| image:: https://img.shields.io/conda/dn/bioconda/snippy.svg?style=flat
   :alt:   (downloads)
.. |docker_snippy| image:: https://quay.io/repository/biocontainers/snippy/status
   :target: https://quay.io/repository/biocontainers/snippy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snippy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snippy/README.html

