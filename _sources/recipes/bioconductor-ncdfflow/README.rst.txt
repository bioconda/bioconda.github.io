:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ncdfflow'
.. highlight: bash

bioconductor-ncdfflow
=====================

.. conda:recipe:: bioconductor-ncdfflow
   :replaces_section_title:
   :noindex:

   ncdfFlow\: A package that provides HDF5 based storage for flow cytometry data.

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/ncdfFlow.html
   :license: AGPL-3.0-only
   :recipe: /`bioconductor-ncdfflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncdfflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncdfflow/meta.yaml>`_
   :links: biotools: :biotools:`ncdfflow`, doi: :doi:`10.1016/j.copbio.2012.09.003`

   Provides HDF5 storage based methods and functions for manipulation of flow cytometry data.


.. conda:package:: bioconductor-ncdfflow

   |downloads_bioconductor-ncdfflow| |docker_bioconductor-ncdfflow|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.44.0-1</code>,  <code>2.44.0-0</code>,  <code>2.40.0-2</code>,  <code>2.40.0-1</code>,  <code>2.40.0-0</code>,  <code>2.38.0-0</code>,  <code>2.36.0-2</code>,  <code>2.36.0-1</code>,  <code>2.36.0-0</code>,  </span></summary>
      

      ``2.44.0-1``,  ``2.44.0-0``,  ``2.40.0-2``,  ``2.40.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-2``,  ``2.36.0-1``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.1-0``,  ``2.28.1-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.2-0``,  ``2.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-flowcore: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rhdf5lib: ``>=1.20.0,<1.21.0``
   :depends bioconductor-zlibbioc: ``>=1.44.0,<1.45.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bh: 
   :depends r-cpp11: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ncdfflow

   and update with::

      conda update bioconductor-ncdfflow

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ncdfflow:<tag>

   (see `bioconductor-ncdfflow/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ncdfflow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ncdfflow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ncdfflow
   :alt:   (downloads)
.. |docker_bioconductor-ncdfflow| image:: https://quay.io/repository/biocontainers/bioconductor-ncdfflow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ncdfflow
.. _`bioconductor-ncdfflow/tags`: https://quay.io/repository/biocontainers/bioconductor-ncdfflow?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ncdfflow";
        var versions = ["2.44.0","2.44.0","2.40.0","2.40.0","2.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ncdfflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ncdfflow/README.html