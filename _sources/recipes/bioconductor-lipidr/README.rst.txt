:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lipidr'
.. highlight: bash

bioconductor-lipidr
===================

.. conda:recipe:: bioconductor-lipidr
   :replaces_section_title:
   :noindex:

   Data Mining and Analysis of Lipidomics Datasets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lipidr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lipidr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lipidr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lipidr/meta.yaml>`_

   lipidr an easy\-to\-use R package implementing a complete workflow for downstream analysis of targeted and untargeted lipidomics data. lipidomics results can be imported into lipidr as a numerical matrix or a Skyline export\, allowing integration into current analysis frameworks. Data mining of lipidomics datasets is enabled through integration with Metabolomics Workbench API. lipidr allows data inspection\, normalization\, univariate and multivariate analysis\, displaying informative visualizations. lipidr also implements a novel Lipid Set Enrichment Analysis \(LSEA\)\, harnessing molecular information such as lipid class\, total chain length and unsaturation.


.. conda:package:: bioconductor-lipidr

   |downloads_bioconductor-lipidr| |docker_bioconductor-lipidr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.1-0</code>,  <code>2.12.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``2.20.0-0``,  ``2.16.0-0``,  ``2.14.1-0``,  ``2.12.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-fgsea: ``>=1.32.0,<1.33.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-ropls: ``>=1.38.0,<1.39.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-imputelcmd: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-lipidr

   and update with::

      mamba update bioconductor-lipidr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lipidr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lipidr:<tag>

   (see `bioconductor-lipidr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lipidr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lipidr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lipidr
   :alt:   (downloads)
.. |docker_bioconductor-lipidr| image:: https://quay.io/repository/biocontainers/bioconductor-lipidr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lipidr
.. _`bioconductor-lipidr/tags`: https://quay.io/repository/biocontainers/bioconductor-lipidr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lipidr";
        var versions = ["2.20.0","2.16.0","2.14.1","2.12.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lipidr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lipidr/README.html