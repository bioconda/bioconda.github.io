:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scran'
.. highlight: bash

bioconductor-scran
==================

.. conda:recipe:: bioconductor-scran
   :replaces_section_title:
   :noindex:

   Methods for Single\-Cell RNA\-Seq Data Analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/scran.html
   :license: GPL-3
   :recipe: /`bioconductor-scran <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scran>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scran/meta.yaml>`_
   :links: biotools: :biotools:`scran`

   Implements miscellaneous functions for interpretation of single\-cell RNA\-seq data. Methods are provided for assignment of cell cycle phase\, detection of highly variable and significantly correlated genes\, identification of marker genes\, and other common tasks in routine single\-cell analysis workflows.


.. conda:package:: bioconductor-scran

   |downloads_bioconductor-scran| |docker_bioconductor-scran|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.1-0</code>,  <code>1.18.5-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.10.1-0</code>,  <code>1.8.4-0</code>,  </span></summary>
      

      ``1.20.1-0``,  ``1.18.5-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.1-0``,  ``1.8.4-0``,  ``1.6.2-0``,  ``1.4.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beachmat: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biocsingular: ``>=1.8.0,<1.9.0``
   :depends bioconductor-bluster: ``>=1.2.0,<1.3.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.14.0,<1.15.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-metapod: ``>=1.0.0,<1.1.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-scuttle: ``>=1.2.0,<1.3.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bh: 
   :depends r-dqrng: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-statmod: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scran

   and update with::

      conda update bioconductor-scran

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scran:<tag>

   (see `bioconductor-scran/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scran| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scran.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scran
   :alt:   (downloads)
.. |docker_bioconductor-scran| image:: https://quay.io/repository/biocontainers/bioconductor-scran/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scran
.. _`bioconductor-scran/tags`: https://quay.io/repository/biocontainers/bioconductor-scran?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scran/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scran/README.html