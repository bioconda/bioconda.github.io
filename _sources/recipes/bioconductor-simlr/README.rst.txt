:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simlr'
.. highlight: bash

bioconductor-simlr
==================

.. conda:recipe:: bioconductor-simlr
   :replaces_section_title:
   :noindex:

   Single\-cell Interpretation via Multi\-kernel LeaRning \(SIMLR\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SIMLR.html
   :license: file LICENSE
   :recipe: /`bioconductor-simlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simlr/meta.yaml>`_
   :links: biotools: :biotools:`simlr`, doi: :doi:`10.1101/118901`

   Single\-cell RNA\-seq technologies enable high throughput gene expression measurement of individual cells\, and allow the discovery of heterogeneity within cell populations. Measurement of cell\-to\-cell gene expression similarity is critical for the identification\, visualization and analysis of cell populations. However\, single\-cell data introduce challenges to conventional measures of gene expression similarity because of the high level of noise\, outliers and dropouts. We develop a novel similarity\-learning framework\, SIMLR \(Single\-cell Interpretation via Multi\-kernel LeaRning\)\, which learns an appropriate distance metric from the data for dimension reduction\, clustering and visualization.


.. conda:package:: bioconductor-simlr

   |downloads_bioconductor-simlr| |docker_bioconductor-simlr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.1-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.26.1-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-pracma: 
   :depends r-rcpp: 
   :depends r-rcppannoy: 
   :depends r-rspectra: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simlr

   and update with::

      conda update bioconductor-simlr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simlr:<tag>

   (see `bioconductor-simlr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simlr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simlr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simlr
   :alt:   (downloads)
.. |docker_bioconductor-simlr| image:: https://quay.io/repository/biocontainers/bioconductor-simlr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simlr
.. _`bioconductor-simlr/tags`: https://quay.io/repository/biocontainers/bioconductor-simlr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simlr";
        var versions = ["1.26.1","1.24.0","1.24.0","1.20.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simlr/README.html