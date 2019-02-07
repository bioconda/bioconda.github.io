.. title:: Package Recipe 'bioconductor-sigar'
.. highlight: bash


bioconductor-sigar
==================

.. conda:recipe:: bioconductor-sigar
   :replaces_section_title:

   Facilitates the joint analysis of high\-throughput data from multiple molecular levels. Contains functions for manipulation of objects\, various analysis types\, and some visualization.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/sigaR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sigar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigar/meta.yaml>`_
   :links: biotools: :biotools:`sigar`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-sigar

   |downloads_bioconductor-sigar| |docker_bioconductor-sigar|

   :versions: 1.30.0, 1.28.0, 1.26.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-cghbase` >=1.42.0,<1.43.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-marray` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-corpcor` >=1.6.2 :conda:package:`r-igraph`  :conda:package:`r-mass`  :conda:package:`r-mvtnorm`  :conda:package:`r-penalized`  :conda:package:`r-quadprog`  :conda:package:`r-snowfall`  

   :required~by: |required_by_bioconductor-sigar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigar

   and update with::

      conda update bioconductor-sigar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sigar


.. |required_by_bioconductor-sigar| conda:required_by:: bioconductor-sigar
.. |downloads_bioconductor-sigar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sigar| image:: https://quay.io/repository/biocontainers/bioconductor-sigar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigar/README.html

