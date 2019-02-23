:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fithic'
.. highlight: bash

bioconductor-fithic
===================

.. conda:recipe:: bioconductor-fithic
   :replaces_section_title:

   Fit\-Hi\-C is a tool for assigning statistical confidence estimates to intra\-chromosomal contact maps produced by genome\-wide genome architecture assays such as Hi\-C.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/FitHiC.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-fithic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fithic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fithic/meta.yaml>`_
   :links: biotools: :biotools:`fithic`, doi: :doi:`10.1101/gr.160374`

   


.. conda:package:: bioconductor-fithic

   |downloads_bioconductor-fithic| |docker_bioconductor-fithic|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-data.table: 
   
   :depends r-fdrtool: 
   
   :depends r-rcpp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fithic

   and update with::

      conda update bioconductor-fithic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fithic:<tag>

   (see `bioconductor-fithic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fithic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fithic.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fithic| image:: https://quay.io/repository/biocontainers/bioconductor-fithic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fithic
.. _`bioconductor-fithic/tags`: https://quay.io/repository/biocontainers/bioconductor-fithic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fithic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fithic/README.html