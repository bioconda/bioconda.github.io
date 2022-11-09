:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-slalom'
.. highlight: bash

bioconductor-slalom
===================

.. conda:recipe:: bioconductor-slalom
   :replaces_section_title:
   :noindex:

   Factorial Latent Variable Modeling of Single\-Cell RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/slalom.html
   :license: GPL-2
   :recipe: /`bioconductor-slalom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slalom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slalom/meta.yaml>`_

   slalom is a scalable modelling framework for single\-cell RNA\-seq data that uses gene set annotations to dissect single\-cell transcriptome heterogeneity\, thereby allowing to identify biological drivers of cell\-to\-cell variability and model confounding factors. The method uses Bayesian factor analysis with a latent variable model to identify active pathways \(selected by the user\, e.g. KEGG pathways\) that explain variation in a single\-cell RNA\-seq dataset. This an R\/C\+\+ implementation of the f\-scLVM Python package. See the publication describing the method at https\:\/\/doi.org\/10.1186\/s13059\-017\-1334\-8.


.. conda:package:: bioconductor-slalom

   |downloads_bioconductor-slalom| |docker_bioconductor-slalom|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-gseabase: ``>=1.60.0,<1.61.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bh: 
   :depends r-ggplot2: 
   :depends r-rcpp: ``>=0.12.8``
   :depends r-rcpparmadillo: 
   :depends r-rsvd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-slalom

   and update with::

      conda update bioconductor-slalom

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-slalom:<tag>

   (see `bioconductor-slalom/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-slalom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-slalom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-slalom
   :alt:   (downloads)
.. |docker_bioconductor-slalom| image:: https://quay.io/repository/biocontainers/bioconductor-slalom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-slalom
.. _`bioconductor-slalom/tags`: https://quay.io/repository/biocontainers/bioconductor-slalom?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-slalom";
        var versions = ["1.20.0","1.16.0","1.16.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-slalom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-slalom/README.html