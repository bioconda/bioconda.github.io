.. title:: Package Recipe 'bioconductor-rots'
.. highlight: bash


bioconductor-rots
=================

.. conda:recipe:: bioconductor-rots
   :replaces_section_title:

   Calculates the Reproducibility\-Optimized Test Statistic \(ROTS\) for differential testing in omics data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ROTS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rots/meta.yaml>`_
   :links: biotools: :biotools:`rots`, doi: :doi:`10.1109/tcbb.2007.1078`

   


.. conda:package:: bioconductor-rots

   |downloads_bioconductor-rots| |docker_bioconductor-rots|

   :versions: 1.10.0, 1.8.0, 1.6.0, 1.4.0, 1.0.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcpp`  

   :required~by: |required_by_bioconductor-rots|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rots

   and update with::

      conda update bioconductor-rots

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rots


.. |required_by_bioconductor-rots| conda:required_by:: bioconductor-rots
.. |downloads_bioconductor-rots| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rots.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rots| image:: https://quay.io/repository/biocontainers/bioconductor-rots/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rots







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rots/README.html

