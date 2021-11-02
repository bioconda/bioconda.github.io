:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bridge'
.. highlight: bash

bioconductor-bridge
===================

.. conda:recipe:: bioconductor-bridge
   :replaces_section_title:
   :noindex:

   Bayesian Robust Inference for Differential Gene Expression

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/bridge.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bridge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bridge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bridge/meta.yaml>`_
   :links: biotools: :biotools:`bridge`, doi: :doi:`10.1111/j.1541-0420.2005.00397.x`

   Test for differentially expressed genes with microarray data. This package can be used with both cDNA microarrays or Affymetrix chip. The packge fits a robust Bayesian hierarchical model for testing for differential expression. Outliers are modeled explicitly using a \$t\$\-distribution. The model includes an exchangeable prior for the variances which allow different variances for the genes but still shrink extreme empirical variances. Our model can be used for testing for differentially expressed genes among multiple samples\, and can distinguish between the different possible patterns of differential expression when there are three or more samples. Parameter estimation is carried out using a novel version of Markov Chain Monte Carlo that is appropriate when the model puts mass on subspaces of the full parameter space.


.. conda:package:: bioconductor-bridge

   |downloads_bioconductor-bridge| |docker_bioconductor-bridge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rama: ``>=1.68.0,<1.69.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bridge

   and update with::

      conda update bioconductor-bridge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bridge:<tag>

   (see `bioconductor-bridge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bridge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bridge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bridge
   :alt:   (downloads)
.. |docker_bioconductor-bridge| image:: https://quay.io/repository/biocontainers/bioconductor-bridge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bridge
.. _`bioconductor-bridge/tags`: https://quay.io/repository/biocontainers/bioconductor-bridge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bridge";
        var versions = ["1.58.0","1.56.0","1.54.0","1.54.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bridge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bridge/README.html