:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mwastools'
.. highlight: bash

bioconductor-mwastools
======================

.. conda:recipe:: bioconductor-mwastools
   :replaces_section_title:
   :noindex:

   MWASTools\: an integrated pipeline to perform metabolome\-wide association studies

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MWASTools.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-mwastools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mwastools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mwastools/meta.yaml>`_

   MWASTools provides a complete pipeline to perform metabolome\-wide association studies. Key functionalities of the package include\: quality control analysis of metabonomic data\; MWAS using different association models \(partial correlations\; generalized linear models\)\; model validation using non\-parametric bootstrapping\; visualization of MWAS results\; NMR metabolite identification using STOCSY\; and biological interpretation of MWAS results.


.. conda:package:: bioconductor-mwastools

   |downloads_bioconductor-mwastools| |docker_bioconductor-mwastools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-kegggraph: ``>=1.60.0,<1.61.0``
   :depends bioconductor-keggrest: ``>=1.40.0,<1.41.0``
   :depends bioconductor-qvalue: ``>=2.32.0,<2.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-boot: 
   :depends r-car: 
   :depends r-ggplot2: 
   :depends r-glm2: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-ppcor: 
   :depends r-rcurl: 
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

      mamba install bioconductor-mwastools

   and update with::

      mamba update bioconductor-mwastools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mwastools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mwastools:<tag>

   (see `bioconductor-mwastools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mwastools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mwastools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mwastools
   :alt:   (downloads)
.. |docker_bioconductor-mwastools| image:: https://quay.io/repository/biocontainers/bioconductor-mwastools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mwastools
.. _`bioconductor-mwastools/tags`: https://quay.io/repository/biocontainers/bioconductor-mwastools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mwastools";
        var versions = ["1.24.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mwastools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mwastools/README.html