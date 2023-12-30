:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rscudo'
.. highlight: bash

bioconductor-rscudo
===================

.. conda:recipe:: bioconductor-rscudo
   :replaces_section_title:
   :noindex:

   Signature\-based Clustering for Diagnostic Purposes

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/rScudo.html
   :license: GPL-3
   :recipe: /`bioconductor-rscudo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rscudo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rscudo/meta.yaml>`_

   SCUDO \(Signature\-based Clustering for Diagnostic Purposes\) is a rank\-based method for the analysis of gene expression profiles for diagnostic and classification purposes. It is based on the identification of sample\-specific gene signatures composed of the most up\- and down\-regulated genes for that sample. Starting from gene expression data\, functions in this package identify sample\-specific gene signatures and use them to build a graph of samples. In this graph samples are joined by edges if they have a similar expression profile\, according to a pre\-computed similarity matrix. The similarity between the expression profiles of two samples is computed using a method similar to GSEA. The graph of samples can then be used to perform community clustering or to perform supervised classification of samples in a testing set.


.. conda:package:: bioconductor-rscudo

   |downloads_bioconductor-rscudo| |docker_bioconductor-rscudo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rscudo

   and update with::

      mamba update bioconductor-rscudo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rscudo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rscudo:<tag>

   (see `bioconductor-rscudo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rscudo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rscudo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rscudo
   :alt:   (downloads)
.. |docker_bioconductor-rscudo| image:: https://quay.io/repository/biocontainers/bioconductor-rscudo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rscudo
.. _`bioconductor-rscudo/tags`: https://quay.io/repository/biocontainers/bioconductor-rscudo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rscudo";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rscudo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rscudo/README.html