.. title:: Package Recipe 'bioconductor-junctionseq'
.. highlight: bash


bioconductor-junctionseq
========================

.. conda:recipe:: bioconductor-junctionseq
   :replaces_section_title:

   A Utility for Detection and Visualization of Differential Exon or Splice\-Junction Usage in RNA\-Seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/JunctionSeq.html
   :license: file LICENSE
   :recipe: /`bioconductor-junctionseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-junctionseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-junctionseq/meta.yaml>`_
   :links: biotools: :biotools:`junctionseq`

   


.. conda:package:: bioconductor-junctionseq

   |downloads_bioconductor-junctionseq| |docker_bioconductor-junctionseq|

   :versions: 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-geneplotter` >=1.60.0,<1.61.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-hmisc`  :conda:package:`r-locfit`  :conda:package:`r-plotrix`  :conda:package:`r-rcpp` >=0.11.0 :conda:package:`r-rcpparmadillo` >=0.3.4.4 :conda:package:`r-statmod`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-junctionseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-junctionseq

   and update with::

      conda update bioconductor-junctionseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-junctionseq


.. |required_by_bioconductor-junctionseq| conda:required_by:: bioconductor-junctionseq
.. |downloads_bioconductor-junctionseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-junctionseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-junctionseq| image:: https://quay.io/repository/biocontainers/bioconductor-junctionseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-junctionseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-junctionseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-junctionseq/README.html

