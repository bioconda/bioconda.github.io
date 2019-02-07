.. title:: Package Recipe 'bioconductor-deseq'
.. highlight: bash


bioconductor-deseq
==================

.. conda:recipe:: bioconductor-deseq
   :replaces_section_title:

   Estimate variance\-mean dependence in count data from high\-throughput sequencing assays and test for differential expression based on a model using the negative binomial distribution

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DESeq.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-deseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deseq/meta.yaml>`_
   :links: biotools: :biotools:`deseq`

   


.. conda:package:: bioconductor-deseq

   |downloads_bioconductor-deseq| |docker_bioconductor-deseq|

   :versions: 1.34.0, 1.32.0, 1.30.0, 1.28.0, 1.24.0, 1.22.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-geneplotter` >=1.60.0,<1.61.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  :conda:package:`r-locfit`  :conda:package:`r-mass`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-deseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deseq

   and update with::

      conda update bioconductor-deseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-deseq


.. |required_by_bioconductor-deseq| conda:required_by:: bioconductor-deseq
.. |downloads_bioconductor-deseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-deseq| image:: https://quay.io/repository/biocontainers/bioconductor-deseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deseq/README.html

