.. title:: Package Recipe 'bioconductor-bayseq'
.. highlight: bash


bioconductor-bayseq
===================

.. conda:recipe:: bioconductor-bayseq
   :replaces_section_title:

   This package identifies differential expression in high\-throughput \'count\' data\, such as that derived from next\-generation sequencing machines\, calculating estimated posterior likelihoods of differential expression \(or more complex hypotheses\) via empirical Bayesian methods.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/baySeq.html
   :license: GPL-3
   :recipe: /`bioconductor-bayseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayseq/meta.yaml>`_
   :links: biotools: :biotools:`bayseq`, doi: :doi:`10.1186/1471-2105-11-422`

   


.. conda:package:: bioconductor-bayseq

   |downloads_bioconductor-bayseq| |docker_bioconductor-bayseq|

   :versions: 2.16.0, 2.14.0, 2.12.0, 2.10.0

   :depends: :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`r-abind`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-bayseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bayseq

   and update with::

      conda update bioconductor-bayseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bayseq


.. |required_by_bioconductor-bayseq| conda:required_by:: bioconductor-bayseq
.. |downloads_bioconductor-bayseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bayseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bayseq| image:: https://quay.io/repository/biocontainers/bioconductor-bayseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bayseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bayseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bayseq/README.html

