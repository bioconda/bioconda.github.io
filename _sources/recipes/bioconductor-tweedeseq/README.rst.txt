.. title:: Package Recipe 'bioconductor-tweedeseq'
.. highlight: bash


bioconductor-tweedeseq
======================

.. conda:recipe:: bioconductor-tweedeseq
   :replaces_section_title:

   Differential expression analysis of RNA\-seq using the Poisson\-Tweedie family of distributions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/tweeDEseq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-tweedeseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tweedeseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tweedeseq/meta.yaml>`_
   :links: biotools: :biotools:`tweedeseq`

   


.. conda:package:: bioconductor-tweedeseq

   |downloads_bioconductor-tweedeseq| |docker_bioconductor-tweedeseq|

   :versions: 1.28.0, 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`bioconductor-cqn` >=1.28.0,<1.29.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-tweedeseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tweedeseq

   and update with::

      conda update bioconductor-tweedeseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tweedeseq


.. |required_by_bioconductor-tweedeseq| conda:required_by:: bioconductor-tweedeseq
.. |downloads_bioconductor-tweedeseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tweedeseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tweedeseq| image:: https://quay.io/repository/biocontainers/bioconductor-tweedeseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tweedeseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tweedeseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tweedeseq/README.html

