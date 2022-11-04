:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cghregions'
.. highlight: bash

bioconductor-cghregions
=======================

.. conda:recipe:: bioconductor-cghregions
   :replaces_section_title:
   :noindex:

   Dimension Reduction for Array CGH Data with Minimal Information Loss.

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/CGHregions.html
   :license: GPL (http://www.gnu.org/copyleft/gpl.html)
   :recipe: /`bioconductor-cghregions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghregions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghregions/meta.yaml>`_
   :links: biotools: :biotools:`cghregions`, doi: :doi:`10.1002/9783527678679.dg00687`

   Dimension Reduction for Array CGH Data with Minimal Information Loss


.. conda:package:: bioconductor-cghregions

   |downloads_bioconductor-cghregions| |docker_bioconductor-cghregions|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-cghbase: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cghregions

   and update with::

      conda update bioconductor-cghregions

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cghregions:<tag>

   (see `bioconductor-cghregions/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cghregions| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cghregions.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cghregions
   :alt:   (downloads)
.. |docker_bioconductor-cghregions| image:: https://quay.io/repository/biocontainers/bioconductor-cghregions/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cghregions
.. _`bioconductor-cghregions/tags`: https://quay.io/repository/biocontainers/bioconductor-cghregions?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cghregions";
        var versions = ["1.56.0","1.52.0","1.50.0","1.48.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cghregions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cghregions/README.html