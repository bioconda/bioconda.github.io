:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-summarizedexperiment'
.. highlight: bash

bioconductor-summarizedexperiment
=================================

.. conda:recipe:: bioconductor-summarizedexperiment
   :replaces_section_title:
   :noindex:

   SummarizedExperiment container

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/SummarizedExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-summarizedexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summarizedexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summarizedexperiment/meta.yaml>`_
   :links: biotools: :biotools:`summarizedexperiment`, doi: :doi:`10.1038/nmeth.3252`

   The SummarizedExperiment container contains one or more assays\, each represented by a matrix\-like object of numeric or other mode. The rows typically represent genomic ranges of interest and the columns represent samples.


.. conda:package:: bioconductor-summarizedexperiment

   |downloads_bioconductor-summarizedexperiment| |docker_bioconductor-summarizedexperiment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.6.5-0``,  ``1.4.0-2``,  ``1.4.0-0``,  ``1.2.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-delayedarray: ``>=0.20.0,<0.21.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-matrixgenerics: ``>=1.6.0,<1.7.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-summarizedexperiment

   and update with::

      conda update bioconductor-summarizedexperiment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-summarizedexperiment:<tag>

   (see `bioconductor-summarizedexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-summarizedexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-summarizedexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-summarizedexperiment
   :alt:   (downloads)
.. |docker_bioconductor-summarizedexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-summarizedexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-summarizedexperiment
.. _`bioconductor-summarizedexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-summarizedexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-summarizedexperiment";
        var versions = ["1.24.0","1.22.0","1.20.0","1.20.0","1.18.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-summarizedexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-summarizedexperiment/README.html