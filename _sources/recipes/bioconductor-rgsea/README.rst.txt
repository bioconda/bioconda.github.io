:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgsea'
.. highlight: bash

bioconductor-rgsea
==================

.. conda:recipe:: bioconductor-rgsea
   :replaces_section_title:
   :noindex:

   Random Gene Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/RGSEA.html
   :license: GPL(>=3)
   :recipe: /`bioconductor-rgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgsea/meta.yaml>`_
   :links: biotools: :biotools:`rgsea`, doi: :doi:`10.1038/nmeth.3252`

   Combining bootstrap aggregating and Gene set enrichment analysis \(GSEA\)\, RGSEA is a classfication algorithm with high robustness and no over\-fitting problem. It performs well especially for the data generated from different exprements.


.. conda:package:: bioconductor-rgsea

   |downloads_bioconductor-rgsea| |docker_bioconductor-rgsea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgsea

   and update with::

      conda update bioconductor-rgsea

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgsea:<tag>

   (see `bioconductor-rgsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgsea
   :alt:   (downloads)
.. |docker_bioconductor-rgsea| image:: https://quay.io/repository/biocontainers/bioconductor-rgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgsea
.. _`bioconductor-rgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-rgsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgsea";
        var versions = ["1.34.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgsea/README.html