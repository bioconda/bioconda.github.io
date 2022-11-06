:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cancersubtypes'
.. highlight: bash

bioconductor-cancersubtypes
===========================

.. conda:recipe:: bioconductor-cancersubtypes
   :replaces_section_title:
   :noindex:

   Cancer subtypes identification\, validation and visualization based on multiple genomic data sets

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/CancerSubtypes.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cancersubtypes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancersubtypes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancersubtypes/meta.yaml>`_
   :links: biotools: :biotools:`cancersubtypes`, doi: :doi:`10.1038/nmeth.3252`

   CancerSubtypes integrates the current common computational biology methods for cancer subtypes identification and provides a standardized framework for cancer subtype analysis based multi\-omics data\, such as gene expression\, miRNA expression\, DNA methylation and others.


.. conda:package:: bioconductor-cancersubtypes

   |downloads_bioconductor-cancersubtypes| |docker_bioconductor-cancersubtypes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-consensusclusterplus: ``>=1.62.0,<1.63.0``
   :depends bioconductor-impute: ``>=1.72.0,<1.73.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-cluster: 
   :depends r-nmf: 
   :depends r-sigclust: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cancersubtypes

   and update with::

      conda update bioconductor-cancersubtypes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cancersubtypes:<tag>

   (see `bioconductor-cancersubtypes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cancersubtypes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancersubtypes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cancersubtypes
   :alt:   (downloads)
.. |docker_bioconductor-cancersubtypes| image:: https://quay.io/repository/biocontainers/bioconductor-cancersubtypes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancersubtypes
.. _`bioconductor-cancersubtypes/tags`: https://quay.io/repository/biocontainers/bioconductor-cancersubtypes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cancersubtypes";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancersubtypes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancersubtypes/README.html