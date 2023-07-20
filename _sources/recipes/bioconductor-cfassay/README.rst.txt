:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cfassay'
.. highlight: bash

bioconductor-cfassay
====================

.. conda:recipe:: bioconductor-cfassay
   :replaces_section_title:
   :noindex:

   Statistical analysis for the Colony Formation Assay

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CFAssay.html
   :license: LGPL
   :recipe: /`bioconductor-cfassay <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cfassay>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cfassay/meta.yaml>`_
   :links: biotools: :biotools:`cfassay`, doi: :doi:`10.1186/s13014-015-0529-y`

   The package provides functions for calculation of linear\-quadratic cell survival curves and for ANOVA of experimental 2\-way designs along with the colony formation assay.


.. conda:package:: bioconductor-cfassay

   |downloads_bioconductor-cfassay| |docker_bioconductor-cfassay|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cfassay

   and update with::

      conda update bioconductor-cfassay

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cfassay:<tag>

   (see `bioconductor-cfassay/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cfassay| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cfassay.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cfassay
   :alt:   (downloads)
.. |docker_bioconductor-cfassay| image:: https://quay.io/repository/biocontainers/bioconductor-cfassay/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cfassay
.. _`bioconductor-cfassay/tags`: https://quay.io/repository/biocontainers/bioconductor-cfassay?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cfassay";
        var versions = ["1.34.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cfassay/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cfassay/README.html