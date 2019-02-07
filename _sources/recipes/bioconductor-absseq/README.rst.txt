.. title:: Package Recipe 'bioconductor-absseq'
.. highlight: bash


bioconductor-absseq
===================

.. conda:recipe:: bioconductor-absseq
   :replaces_section_title:

   Inferring differential expression genes by absolute counts difference between two groups\, utilizing Negative binomial distribution and moderating fold\-change according to heterogeneity of dispersion across expression level.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ABSSeq.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-absseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-absseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-absseq/meta.yaml>`_
   :links: biotools: :biotools:`absseq`

   


.. conda:package:: bioconductor-absseq

   |downloads_bioconductor-absseq| |docker_bioconductor-absseq|

   :versions: 1.36.0, 1.34.1, 1.32.0, 1.22.8

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-locfit`  

   :required~by: |required_by_bioconductor-absseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-absseq

   and update with::

      conda update bioconductor-absseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-absseq


.. |required_by_bioconductor-absseq| conda:required_by:: bioconductor-absseq
.. |downloads_bioconductor-absseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-absseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-absseq| image:: https://quay.io/repository/biocontainers/bioconductor-absseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-absseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-absseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-absseq/README.html

