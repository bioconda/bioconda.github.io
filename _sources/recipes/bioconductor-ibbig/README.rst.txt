:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ibbig'
.. highlight: bash

bioconductor-ibbig
==================

.. conda:recipe:: bioconductor-ibbig
   :replaces_section_title:
   :noindex:

   Iterative Binary Biclustering of Genesets

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/iBBiG.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ibbig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ibbig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ibbig/meta.yaml>`_

   iBBiG is a bi\-clustering algorithm which is optimizes for binary data analysis. We apply it to meta\-gene set analysis of large numbers of gene expression datasets. The iterative algorithm extracts groups of phenotypes from multiple studies that are associated with similar gene sets. iBBiG does not require prior knowledge of the number or scale of clusters and allows discovery of clusters with diverse sizes


.. conda:package:: bioconductor-ibbig

   |downloads_bioconductor-ibbig| |docker_bioconductor-ibbig|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-2</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.38.0-2</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.1-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-2``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.38.0-2``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.1-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-ade4: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biclust: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ibbig

   and update with::

      conda update bioconductor-ibbig

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ibbig:<tag>

   (see `bioconductor-ibbig/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ibbig| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ibbig.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ibbig
   :alt:   (downloads)
.. |docker_bioconductor-ibbig| image:: https://quay.io/repository/biocontainers/bioconductor-ibbig/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ibbig
.. _`bioconductor-ibbig/tags`: https://quay.io/repository/biocontainers/bioconductor-ibbig?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ibbig";
        var versions = ["1.44.0","1.42.0","1.42.0","1.42.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ibbig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ibbig/README.html