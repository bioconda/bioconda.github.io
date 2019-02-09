.. title:: Package Recipe 'bioconductor-deseq2'
.. highlight: bash


bioconductor-deseq2
===================

.. conda:recipe:: bioconductor-deseq2
   :replaces_section_title:

   Estimate variance\-mean dependence in count data from high\-throughput sequencing assays and test for differential expression based on a model using the negative binomial distribution.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DESeq2.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-deseq2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deseq2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deseq2/meta.yaml>`_
   :links: biotools: :biotools:`deseq2`, doi: :doi:`10.1186/s13059-014-0550-8`

   


.. conda:package:: bioconductor-deseq2

   |downloads_bioconductor-deseq2| |docker_bioconductor-deseq2|

   :versions: 1.22.1, 1.20.0, 1.18.1, 1.18.0, 1.16.1, 1.14.1, 1.12.4, 1.10.1, 1.10.0, 1.8.2

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-geneplotter` >=1.60.0,<1.61.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-hmisc`  :conda:package:`r-locfit`  :conda:package:`r-rcpp` >=0.11.0 :conda:package:`r-rcpparmadillo`  

   :required~by: |required_by_bioconductor-deseq2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deseq2

   and update with::

      conda update bioconductor-deseq2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-deseq2


.. |required_by_bioconductor-deseq2| conda:required_by:: bioconductor-deseq2
.. |downloads_bioconductor-deseq2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deseq2.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-deseq2| image:: https://quay.io/repository/biocontainers/bioconductor-deseq2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deseq2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deseq2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deseq2/README.html

