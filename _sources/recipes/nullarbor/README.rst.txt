.. title:: Package Recipe 'nullarbor'
.. highlight: bash


nullarbor
=========

.. conda:recipe:: nullarbor
   :replaces_section_title:

   Pipeline to generate complete public health microbiology reports from sequenced isolates

   :homepage: https://github.com/tseemann/nullarbor
   :license: GPL2
   :recipe: /`nullarbor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nullarbor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nullarbor/meta.yaml>`_

   


.. conda:package:: nullarbor

   |downloads_nullarbor| |docker_nullarbor|

   :versions: 2.0.20181010

   :depends: :conda:package:`abricate`  :conda:package:`bwa` >=0.7.17 :conda:package:`centrifuge`  :conda:package:`fasttree`  :conda:package:`flash` >=1.2 :conda:package:`iqtree`  :conda:package:`kraken` >=1.1 :conda:package:`kraken2`  :conda:package:`lighter` >=1.1 :conda:package:`mash` >=2.0 :conda:package:`megahit` >=1.1 :conda:package:`mlst`  :conda:package:`newick_utils`  :conda:package:`perl`  :conda:package:`perl-file-spec`  :conda:package:`perl-findbin`  :conda:package:`perl-path-tiny`  :conda:package:`perl-yaml-tiny`  :conda:package:`pigz`  :conda:package:`pilon` >=1.22 :conda:package:`prokka`  :conda:package:`quicktree`  :conda:package:`roary`  :conda:package:`samclip` >=0.2 :conda:package:`samtools` >=1.8 :conda:package:`seqtk` >=1.3 :conda:package:`shovill` >=1.0 :conda:package:`skesa` >=2.2 :conda:package:`snippy`  :conda:package:`snp-dists`  :conda:package:`spades` >=3.6 :conda:package:`trimmomatic` >=0.36 :conda:package:`velvet` >=1.2.10 

   :required~by: |required_by_nullarbor|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nullarbor

   and update with::

      conda update nullarbor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nullarbor


.. |required_by_nullarbor| conda:required_by:: nullarbor
.. |downloads_nullarbor| image:: https://img.shields.io/conda/dn/bioconda/nullarbor.svg?style=flat
   :alt:   (downloads)
.. |docker_nullarbor| image:: https://quay.io/repository/biocontainers/nullarbor/status
   :target: https://quay.io/repository/biocontainers/nullarbor







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nullarbor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nullarbor/README.html

