:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mantelcorr'
.. highlight: bash

bioconductor-mantelcorr
=======================

.. conda:recipe:: bioconductor-mantelcorr
   :replaces_section_title:
   :noindex:

   Compute Mantel Cluster Correlations

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/MantelCorr.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mantelcorr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mantelcorr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mantelcorr/meta.yaml>`_
   :links: biotools: :biotools:`mantelcorr`, doi: :doi:`10.1038/nmeth.3252`

   Computes Mantel cluster correlations from a \(p x n\) numeric data matrix \(e.g. microarray gene\-expression data\).


.. conda:package:: bioconductor-mantelcorr

   |downloads_bioconductor-mantelcorr| |docker_bioconductor-mantelcorr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mantelcorr

   and update with::

      conda update bioconductor-mantelcorr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mantelcorr:<tag>

   (see `bioconductor-mantelcorr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mantelcorr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mantelcorr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mantelcorr
   :alt:   (downloads)
.. |docker_bioconductor-mantelcorr| image:: https://quay.io/repository/biocontainers/bioconductor-mantelcorr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mantelcorr
.. _`bioconductor-mantelcorr/tags`: https://quay.io/repository/biocontainers/bioconductor-mantelcorr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mantelcorr";
        var versions = ["1.68.0","1.64.0","1.62.0","1.60.0","1.60.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mantelcorr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mantelcorr/README.html