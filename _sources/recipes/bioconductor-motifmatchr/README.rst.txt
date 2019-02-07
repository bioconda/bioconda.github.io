.. title:: Package Recipe 'bioconductor-motifmatchr'
.. highlight: bash


bioconductor-motifmatchr
========================

.. conda:recipe:: bioconductor-motifmatchr
   :replaces_section_title:

   Quickly find motif matches for many motifs and many sequences. Wraps C\+\+ code from the MOODS motif calling library\, which was developed by Pasi Rastas\, Janne Korhonen\, and Petri Martinmäki.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/motifmatchr.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-motifmatchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifmatchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifmatchr/meta.yaml>`_

   


.. conda:package:: bioconductor-motifmatchr

   |downloads_bioconductor-motifmatchr| |docker_bioconductor-motifmatchr|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-tfbstools` >=1.20.0,<1.21.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrix`  :conda:package:`r-rcpp`  :conda:package:`r-rcpparmadillo`  

   :required~by: |required_by_bioconductor-motifmatchr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-motifmatchr

   and update with::

      conda update bioconductor-motifmatchr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-motifmatchr


.. |required_by_bioconductor-motifmatchr| conda:required_by:: bioconductor-motifmatchr
.. |downloads_bioconductor-motifmatchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifmatchr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-motifmatchr| image:: https://quay.io/repository/biocontainers/bioconductor-motifmatchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifmatchr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifmatchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifmatchr/README.html

