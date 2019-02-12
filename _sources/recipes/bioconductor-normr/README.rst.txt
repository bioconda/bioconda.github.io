.. title:: Package Recipe 'bioconductor-normr'
.. highlight: bash


bioconductor-normr
==================

.. conda:recipe:: bioconductor-normr
   :replaces_section_title:

   Robust normalization and difference calling procedures for ChIP\-seq and alike data. Read counts are modeled jointly as a binomial mixture model with a user\-specified number of components. A fitted background estimate accounts for the effect of enrichment in certain regions and\, therefore\, represents an appropriate null hypothesis. This robust background is used to identify significantly enriched or depleted regions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/normr.html
   :license: GPL-2
   :recipe: /`bioconductor-normr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normr/meta.yaml>`_

   


.. conda:package:: bioconductor-normr

   |downloads_bioconductor-normr| |docker_bioconductor-normr|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-bamsignals` >=1.14.0,<1.15.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcpp` >=0.11 

   :required~by: |required_by_bioconductor-normr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-normr

   and update with::

      conda update bioconductor-normr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-normr


.. |required_by_bioconductor-normr| conda:required_by:: bioconductor-normr
.. |downloads_bioconductor-normr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-normr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-normr| image:: https://quay.io/repository/biocontainers/bioconductor-normr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-normr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-normr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-normr/README.html

