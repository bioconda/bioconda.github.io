:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-safe'
.. highlight: bash

bioconductor-safe
=================

.. conda:recipe:: bioconductor-safe
   :replaces_section_title:
   :noindex:

   Significance Analysis of Function and Expression

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/safe.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-safe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-safe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-safe/meta.yaml>`_
   :links: biotools: :biotools:`safe`, doi: :doi:`10.1093/bioinformatics/bti260`

   SAFE is a resampling\-based method for testing functional categories in gene expression experiments. SAFE can be applied to 2\-sample and multi\-class comparisons\, or simple linear regressions. Other experimental designs can also be accommodated through user\-defined functions.


.. conda:package:: bioconductor-safe

   |downloads_bioconductor-safe| |docker_bioconductor-safe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.40.0-0</code>,  <code>3.38.0-0</code>,  <code>3.34.0-0</code>,  <code>3.32.0-0</code>,  <code>3.30.0-1</code>,  <code>3.30.0-0</code>,  <code>3.27.0-0</code>,  <code>3.26.0-0</code>,  <code>3.24.0-1</code>,  </span></summary>
      

      ``3.40.0-0``,  ``3.38.0-0``,  ``3.34.0-0``,  ``3.32.0-0``,  ``3.30.0-1``,  ``3.30.0-0``,  ``3.27.0-0``,  ``3.26.0-0``,  ``3.24.0-1``,  ``3.22.0-0``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-sparsem: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-safe

   and update with::

      conda update bioconductor-safe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-safe:<tag>

   (see `bioconductor-safe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-safe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-safe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-safe
   :alt:   (downloads)
.. |docker_bioconductor-safe| image:: https://quay.io/repository/biocontainers/bioconductor-safe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-safe
.. _`bioconductor-safe/tags`: https://quay.io/repository/biocontainers/bioconductor-safe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-safe";
        var versions = ["3.40.0","3.38.0","3.34.0","3.32.0","3.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-safe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-safe/README.html