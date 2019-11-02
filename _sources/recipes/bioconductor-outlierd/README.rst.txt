:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-outlierd'
.. highlight: bash

bioconductor-outlierd
=====================

.. conda:recipe:: bioconductor-outlierd
   :replaces_section_title:

   This package detects outliers using quantile regression on the M\-A scatterplots of high\-throughput data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/OutlierD.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-outlierd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-outlierd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-outlierd/meta.yaml>`_
   :links: biotools: :biotools:`outlierd`, doi: :doi:`10.1093/bioinformatics/btn012`

   


.. conda:package:: bioconductor-outlierd

   |downloads_bioconductor-outlierd| |docker_bioconductor-outlierd|

   :versions: 1.50.0-0, 1.48.0-1, 1.46.0-0, 1.44.0-0, 1.42.0-0, 1.40.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-quantreg: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-outlierd

   and update with::

      conda update bioconductor-outlierd

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-outlierd:<tag>

   (see `bioconductor-outlierd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-outlierd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-outlierd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-outlierd
   :alt:   (downloads)
.. |docker_bioconductor-outlierd| image:: https://quay.io/repository/biocontainers/bioconductor-outlierd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-outlierd
.. _`bioconductor-outlierd/tags`: https://quay.io/repository/biocontainers/bioconductor-outlierd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-outlierd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-outlierd/README.html