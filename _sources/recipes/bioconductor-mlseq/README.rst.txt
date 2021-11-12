:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mlseq'
.. highlight: bash

bioconductor-mlseq
==================

.. conda:recipe:: bioconductor-mlseq
   :replaces_section_title:
   :noindex:

   Machine Learning Interface for RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MLSeq.html
   :license: GPL(>=2)
   :recipe: /`bioconductor-mlseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlseq/meta.yaml>`_
   :links: biotools: :biotools:`mlseq`, doi: :doi:`10.1038/nmeth.3252`

   This package applies several machine learning methods\, including SVM\, bagSVM\, Random Forest and CART to RNA\-Seq data.


.. conda:package:: bioconductor-mlseq

   |downloads_bioconductor-mlseq| |docker_bioconductor-mlseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.1-1</code>,  <code>2.0.0-0</code>,  <code>1.20.3-0</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.1-1``,  ``2.0.0-0``,  ``1.20.3-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-deseq2: ``>=1.34.0,<1.35.0``
   :depends bioconductor-edger: ``>=3.36.0,<3.37.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-sseq: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-caret: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-pamr: 
   :depends r-plyr: 
   :depends r-testthat: 
   :depends r-venndiagram: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mlseq

   and update with::

      conda update bioconductor-mlseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mlseq:<tag>

   (see `bioconductor-mlseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mlseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mlseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mlseq
   :alt:   (downloads)
.. |docker_bioconductor-mlseq| image:: https://quay.io/repository/biocontainers/bioconductor-mlseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mlseq
.. _`bioconductor-mlseq/tags`: https://quay.io/repository/biocontainers/bioconductor-mlseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mlseq";
        var versions = ["2.12.0","2.10.0","2.8.0","2.8.0","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mlseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mlseq/README.html