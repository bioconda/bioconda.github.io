:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocsingular'
.. highlight: bash

bioconductor-biocsingular
=========================

.. conda:recipe:: bioconductor-biocsingular
   :replaces_section_title:
   :noindex:

   Singular Value Decomposition for Bioconductor Packages

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/BiocSingular.html
   :license: GPL-3
   :recipe: /`bioconductor-biocsingular <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocsingular>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocsingular/meta.yaml>`_

   Implements exact and approximate methods for singular value decomposition and principal components analysis\, in a framework that allows them to be easily switched within Bioconductor packages or workflows. Where possible\, parallelization is achieved using the BiocParallel framework.


.. conda:package:: bioconductor-biocsingular

   |downloads_bioconductor-biocsingular| |docker_bioconductor-biocsingular|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beachmat: ``>=2.14.0,<2.15.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-scaledmatrix: ``>=1.6.0,<1.7.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rsvd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocsingular

   and update with::

      conda update bioconductor-biocsingular

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocsingular:<tag>

   (see `bioconductor-biocsingular/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocsingular| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocsingular.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocsingular
   :alt:   (downloads)
.. |docker_bioconductor-biocsingular| image:: https://quay.io/repository/biocontainers/bioconductor-biocsingular/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocsingular
.. _`bioconductor-biocsingular/tags`: https://quay.io/repository/biocontainers/bioconductor-biocsingular?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocsingular";
        var versions = ["1.14.0","1.10.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocsingular/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocsingular/README.html