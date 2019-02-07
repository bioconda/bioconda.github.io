.. title:: Package Recipe 'bioconductor-motifbreakr'
.. highlight: bash


bioconductor-motifbreakr
========================

.. conda:recipe:: bioconductor-motifbreakr
   :replaces_section_title:

   We introduce motifbreakR\, which allows the biologist to judge in the first place whether the sequence surrounding the polymorphism is a good match\, and in the second place how much information is gained or lost in one allele of the polymorphism relative to another. MotifbreakR is both flexible and extensible over previous offerings\; giving a choice of algorithms for interrogation of genomes with motifs from public sources that users can choose from\; these are 1\) a weighted\-sum probability matrix\, 2\) log\-probabilities\, and 3\) weighted by relative entropy. MotifbreakR can predict effects for novel or previously described variants in public databases\, making it suitable for tasks beyond the scope of its original design. Lastly\, it can be used to interrogate any genome curated within Bioconductor \(currently there are 22\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/motifbreakR.html
   :license: GPL-2
   :recipe: /`bioconductor-motifbreakr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifbreakr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifbreakr/meta.yaml>`_
   :links: biotools: :biotools:`motifbreakr`

   


.. conda:package:: bioconductor-motifbreakr

   |downloads_bioconductor-motifbreakr| |docker_bioconductor-motifbreakr|

   :versions: 1.12.0, 1.10.0, 1.8.0, 1.6.0, 1.4.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-motifdb` >=1.24.0,<1.25.0 :conda:package:`bioconductor-motifstack` >=1.26.0,<1.27.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-grimport`  :conda:package:`r-matrixstats`  :conda:package:`r-stringr`  :conda:package:`r-tfmpvalue`  

   :required~by: |required_by_bioconductor-motifbreakr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-motifbreakr

   and update with::

      conda update bioconductor-motifbreakr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-motifbreakr


.. |required_by_bioconductor-motifbreakr| conda:required_by:: bioconductor-motifbreakr
.. |downloads_bioconductor-motifbreakr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifbreakr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-motifbreakr| image:: https://quay.io/repository/biocontainers/bioconductor-motifbreakr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifbreakr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifbreakr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifbreakr/README.html

