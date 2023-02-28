:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-delayedmatrixstats'
.. highlight: bash

bioconductor-delayedmatrixstats
===============================

.. conda:recipe:: bioconductor-delayedmatrixstats
   :replaces_section_title:
   :noindex:

   Functions that Apply to Rows and Columns of \'DelayedMatrix\' Objects

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/DelayedMatrixStats.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-delayedmatrixstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedmatrixstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedmatrixstats/meta.yaml>`_

   A port of the \'matrixStats\' API for use with DelayedMatrix objects from the \'DelayedArray\' package. High\-performing functions operating on rows and columns of DelayedMatrix objects\, e.g. col \/ rowMedians\(\)\, col \/ rowRanks\(\)\, and col \/ rowSds\(\). Functions optimized per data type and for subsetted calculations such that both memory usage and processing time is minimized.


.. conda:package:: bioconductor-delayedmatrixstats

   |downloads_bioconductor-delayedmatrixstats| |docker_bioconductor-delayedmatrixstats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.3-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.3-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-matrixgenerics: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-sparsematrixstats: ``>=1.10.0,<1.11.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-matrix: ``>=1.5-0``
   :depends r-matrixstats: ``>=0.60.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-delayedmatrixstats

   and update with::

      conda update bioconductor-delayedmatrixstats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-delayedmatrixstats:<tag>

   (see `bioconductor-delayedmatrixstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-delayedmatrixstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-delayedmatrixstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-delayedmatrixstats
   :alt:   (downloads)
.. |docker_bioconductor-delayedmatrixstats| image:: https://quay.io/repository/biocontainers/bioconductor-delayedmatrixstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-delayedmatrixstats
.. _`bioconductor-delayedmatrixstats/tags`: https://quay.io/repository/biocontainers/bioconductor-delayedmatrixstats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-delayedmatrixstats";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.3","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-delayedmatrixstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-delayedmatrixstats/README.html