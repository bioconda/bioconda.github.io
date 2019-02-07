.. title:: Package Recipe 'bioconductor-polyester'
.. highlight: bash


bioconductor-polyester
======================

.. conda:recipe:: bioconductor-polyester
   :replaces_section_title:

   This package can be used to simulate RNA\-seq reads from differential expression experiments with replicates. The reads can then be aligned and used to perform comparisons of methods for differential expression.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/polyester.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-polyester <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-polyester>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-polyester/meta.yaml>`_

   


.. conda:package:: bioconductor-polyester

   |downloads_bioconductor-polyester| |docker_bioconductor-polyester|

   :versions: 1.18.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-logspline`  

   :required~by: |required_by_bioconductor-polyester|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-polyester

   and update with::

      conda update bioconductor-polyester

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-polyester


.. |required_by_bioconductor-polyester| conda:required_by:: bioconductor-polyester
.. |downloads_bioconductor-polyester| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-polyester.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-polyester| image:: https://quay.io/repository/biocontainers/bioconductor-polyester/status
   :target: https://quay.io/repository/biocontainers/bioconductor-polyester







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-polyester/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-polyester/README.html

