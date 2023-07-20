:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cogaps'
.. highlight: bash

bioconductor-cogaps
===================

.. conda:recipe:: bioconductor-cogaps
   :replaces_section_title:
   :noindex:

   Coordinated Gene Activity in Pattern Sets

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CoGAPS.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-cogaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogaps/meta.yaml>`_

   Coordinated Gene Activity in Pattern Sets \(CoGAPS\) implements a Bayesian MCMC matrix factorization algorithm\, GAPS\, and links it to gene set statistic methods to infer biological process activity.  It can be used to perform sparse matrix factorization on any data\, and when this data represents biomolecules\, to do gene set analysis.


.. conda:package:: bioconductor-cogaps

   |downloads_bioconductor-cogaps| |docker_bioconductor-cogaps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.19.1-0</code>,  <code>3.18.0-1</code>,  <code>3.18.0-0</code>,  <code>3.14.0-2</code>,  <code>3.14.0-1</code>,  <code>3.14.0-0</code>,  <code>3.12.0-0</code>,  <code>3.10.0-1</code>,  <code>3.10.0-0</code>,  </span></summary>
      

      ``3.19.1-0``,  ``3.18.0-1``,  ``3.18.0-0``,  ``3.14.0-2``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.12.0-0``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-0``,  ``3.4.1-0``,  ``3.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-fgsea: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-cluster: 
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-msigdbr: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cogaps

   and update with::

      conda update bioconductor-cogaps

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cogaps:<tag>

   (see `bioconductor-cogaps/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cogaps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogaps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cogaps
   :alt:   (downloads)
.. |docker_bioconductor-cogaps| image:: https://quay.io/repository/biocontainers/bioconductor-cogaps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogaps
.. _`bioconductor-cogaps/tags`: https://quay.io/repository/biocontainers/bioconductor-cogaps?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cogaps";
        var versions = ["3.19.1","3.18.0","3.18.0","3.14.0","3.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogaps/README.html