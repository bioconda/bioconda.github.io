:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifbreakr'
.. highlight: bash

bioconductor-motifbreakr
========================

.. conda:recipe:: bioconductor-motifbreakr
   :replaces_section_title:

   We introduce motifbreakR\, which allows the biologist to judge in the first place whether the sequence surrounding the polymorphism is a good match\, and in the second place how much information is gained or lost in one allele of the polymorphism relative to another. MotifbreakR is both flexible and extensible over previous offerings\; giving a choice of algorithms for interrogation of genomes with motifs from public sources that users can choose from\; these are 1\) a weighted\-sum probability matrix\, 2\) log\-probabilities\, and 3\) weighted by relative entropy. MotifbreakR can predict effects for novel or previously described variants in public databases\, making it suitable for tasks beyond the scope of its original design. Lastly\, it can be used to interrogate any genome curated within Bioconductor \(currently there are 22\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/motifbreakR.html
   :license: GPL-2
   :recipe: /`bioconductor-motifbreakr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifbreakr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifbreakr/meta.yaml>`_
   :links: biotools: :biotools:`motifbreakr`

   


.. conda:package:: bioconductor-motifbreakr

   |downloads_bioconductor-motifbreakr| |docker_bioconductor-motifbreakr|

   :versions: 2.0.0-0, 1.14.0-1, 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-gviz: >=1.30.0,<1.31.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-motifdb: >=1.28.0,<1.29.0
   :depends bioconductor-motifstack: >=1.30.0,<1.31.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends bioconductor-variantannotation: >=1.32.0,<1.33.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-grimport: 
   :depends r-matrixstats: 
   :depends r-stringr: 
   :depends r-tfmpvalue: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-motifbreakr

   and update with::

      conda update bioconductor-motifbreakr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motifbreakr:<tag>

   (see `bioconductor-motifbreakr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motifbreakr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifbreakr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifbreakr
   :alt:   (downloads)
.. |docker_bioconductor-motifbreakr| image:: https://quay.io/repository/biocontainers/bioconductor-motifbreakr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifbreakr
.. _`bioconductor-motifbreakr/tags`: https://quay.io/repository/biocontainers/bioconductor-motifbreakr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifbreakr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifbreakr/README.html