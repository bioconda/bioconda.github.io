.. title:: Package Recipe 'bioconductor-ncdfflow'
.. highlight: bash


bioconductor-ncdfflow
=====================

.. conda:recipe:: bioconductor-ncdfflow
   :replaces_section_title:

   Provides HDF5 storage based methods and functions for manipulation of flow cytometry data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ncdfFlow.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ncdfflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncdfflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncdfflow/meta.yaml>`_
   :links: biotools: :biotools:`ncdfflow`, doi: :doi:`10.1016/j.copbio.2012.09.003`

   


.. conda:package:: bioconductor-ncdfflow

   |downloads_bioconductor-ncdfflow| |docker_bioconductor-ncdfflow|

   :versions: 2.28.0, 2.26.0, 2.24.0, 2.22.2, 2.22.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`bioconductor-flowviz` >=1.46.0,<1.47.0 :conda:package:`bioconductor-rhdf5lib` >=1.4.0,<1.5.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bh`  :conda:package:`r-rcpp`  :conda:package:`r-rcpparmadillo`  

   :required~by: |required_by_bioconductor-ncdfflow|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ncdfflow

   and update with::

      conda update bioconductor-ncdfflow

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ncdfflow


.. |required_by_bioconductor-ncdfflow| conda:required_by:: bioconductor-ncdfflow
.. |downloads_bioconductor-ncdfflow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ncdfflow.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ncdfflow| image:: https://quay.io/repository/biocontainers/bioconductor-ncdfflow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ncdfflow







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ncdfflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ncdfflow/README.html

