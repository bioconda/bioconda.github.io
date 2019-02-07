.. title:: Package Recipe 'bioconductor-metaseq'
.. highlight: bash


bioconductor-metaseq
====================

.. conda:recipe:: bioconductor-metaseq
   :replaces_section_title:

   The probabilities by one\-sided NOISeq are combined by Fisher\'s method or Stouffer\'s method

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/metaSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseq/meta.yaml>`_
   :links: biotools: :biotools:`metaseq`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-metaseq

   |downloads_bioconductor-metaseq| |docker_bioconductor-metaseq|

   :versions: 1.22.1, 1.20.0, 1.18.0, 1.16.0

   :depends: :conda:package:`bioconductor-noiseq` >=2.26.0,<2.27.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcpp`  :conda:package:`r-snow`  

   :required~by: |required_by_bioconductor-metaseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metaseq

   and update with::

      conda update bioconductor-metaseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-metaseq


.. |required_by_bioconductor-metaseq| conda:required_by:: bioconductor-metaseq
.. |downloads_bioconductor-metaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-metaseq| image:: https://quay.io/repository/biocontainers/bioconductor-metaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaseq/README.html

