:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mfa'
.. highlight: bash

bioconductor-mfa
================

.. conda:recipe:: bioconductor-mfa
   :replaces_section_title:
   :noindex:

   Bayesian hierarchical mixture of factor analyzers for modelling genomic bifurcations

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/mfa.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mfa/meta.yaml>`_

   MFA models genomic bifurcations using a Bayesian hierarchical mixture of factor analysers.


.. conda:package:: bioconductor-mfa

   |downloads_bioconductor-mfa| |docker_bioconductor-mfa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.4.1-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-coda: 
   :depends r-dplyr: 
   :depends r-ggmcmc: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-mcmcglmm: 
   :depends r-mcmcpack: 
   :depends r-rcpp: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mfa

   and update with::

      conda update bioconductor-mfa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mfa:<tag>

   (see `bioconductor-mfa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mfa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mfa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mfa
   :alt:   (downloads)
.. |docker_bioconductor-mfa| image:: https://quay.io/repository/biocontainers/bioconductor-mfa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mfa
.. _`bioconductor-mfa/tags`: https://quay.io/repository/biocontainers/bioconductor-mfa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mfa";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mfa/README.html