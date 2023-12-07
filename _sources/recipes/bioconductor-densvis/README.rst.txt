:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-densvis'
.. highlight: bash

bioconductor-densvis
====================

.. conda:recipe:: bioconductor-densvis
   :replaces_section_title:
   :noindex:

   Density\-Preserving Data Visualization via Non\-Linear Dimensionality Reduction

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/densvis.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-densvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-densvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-densvis/meta.yaml>`_

   Implements the density\-preserving modification to t\-SNE and UMAP described by Narayan et al. \(2020\) \<doi\:10.1101\/2020.05.12.077776\>. The non\-linear dimensionality reduction techniques t\-SNE and UMAP enable users to summarise complex high\-dimensional sequencing data such as single cell RNAseq using lower dimensional representations. These lower dimensional representations enable the visualisation of discrete transcriptional states\, as well as continuous trajectory \(for example\, in early development\). However\, these methods focus on the local neighbourhood structure of the data. In some cases\, this results in misleading visualisations\, where the density of cells in the low\-dimensional embedding does not represent the transcriptional heterogeneity of data in the original high\-dimensional space. den\-SNE and densMAP aim to enable more accurate visual interpretation of high\-dimensional datasets by producing lower\-dimensional embeddings that accurately represent the heterogeneity of the original high\-dimensional space\, enabling the identification of homogeneous and heterogeneous cell states. This accuracy is accomplished by including in the optimisation process a term which considers the local density of points in the original high\-dimensional space. This can help to create visualisations that are more representative of heterogeneity in the original high\-dimensional space.


.. conda:package:: bioconductor-densvis

   |downloads_bioconductor-densvis| |docker_bioconductor-densvis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.10.2-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  <code>1.00.6-0</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.10.2-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.00.6-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-basilisk: ``>=1.14.0,<1.15.0``
   :depends bioconductor-basilisk: ``>=1.14.1,<1.15.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-irlba: 
   :depends r-rcpp: 
   :depends r-reticulate: 
   :depends r-rtsne: 
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

      mamba install bioconductor-densvis

   and update with::

      mamba update bioconductor-densvis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-densvis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-densvis:<tag>

   (see `bioconductor-densvis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-densvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-densvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-densvis
   :alt:   (downloads)
.. |docker_bioconductor-densvis| image:: https://quay.io/repository/biocontainers/bioconductor-densvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-densvis
.. _`bioconductor-densvis/tags`: https://quay.io/repository/biocontainers/bioconductor-densvis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-densvis";
        var versions = ["1.12.0","1.10.2","1.8.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-densvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-densvis/README.html