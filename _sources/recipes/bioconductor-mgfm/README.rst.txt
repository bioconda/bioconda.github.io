:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mgfm'
.. highlight: bash

bioconductor-mgfm
=================

.. conda:recipe:: bioconductor-mgfm
   :replaces_section_title:
   :noindex:

   Marker Gene Finder in Microarray gene expression data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MGFM.html
   :license: GPL-3
   :recipe: /`bioconductor-mgfm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgfm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgfm/meta.yaml>`_
   :links: biotools: :biotools:`mgfm`, doi: :doi:`10.1186/s12864-015-1785-9`

   The package is designed to detect marker genes from Microarray gene expression data sets


.. conda:package:: bioconductor-mgfm

   |downloads_bioconductor-mgfm| |docker_bioconductor-mgfm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.72.0,<1.73.0``
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mgfm

   and update with::

      conda update bioconductor-mgfm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mgfm:<tag>

   (see `bioconductor-mgfm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mgfm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mgfm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mgfm
   :alt:   (downloads)
.. |docker_bioconductor-mgfm| image:: https://quay.io/repository/biocontainers/bioconductor-mgfm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mgfm
.. _`bioconductor-mgfm/tags`: https://quay.io/repository/biocontainers/bioconductor-mgfm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mgfm";
        var versions = ["1.28.0","1.26.0","1.24.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mgfm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mgfm/README.html