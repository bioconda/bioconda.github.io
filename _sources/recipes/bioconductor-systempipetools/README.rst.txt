:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-systempipetools'
.. highlight: bash

bioconductor-systempipetools
============================

.. conda:recipe:: bioconductor-systempipetools
   :replaces_section_title:
   :noindex:

   Tools for data visualization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/systemPipeTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-systempipetools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempipetools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempipetools/meta.yaml>`_

   systemPipeTools package extends the widely used systemPipeR \(SPR\) workflow environment with an enhanced toolkit for data visualization\, including utilities to automate the data visualizaton for analysis of differentially expressed genes \(DEGs\). systemPipeTools provides data transformation and data exploration functions via scatterplots\, hierarchical clustering heatMaps\, principal component analysis\, multidimensional scaling\, generalized principal components\, t\-Distributed Stochastic Neighbor embedding \(t\-SNE\)\, and MA and volcano plots. All these utilities can be integrated with the modular design of the systemPipeR environment that allows users to easily substitute any of these features and\/or custom with alternatives.


.. conda:package:: bioconductor-systempipetools

   |downloads_bioconductor-systempipetools| |docker_bioconductor-systempipetools|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-ggtree: ``>=3.14.0,<3.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-glmpca: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-rtsne: 
   :depends r-tibble: 
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

      mamba install bioconductor-systempipetools

   and update with::

      mamba update bioconductor-systempipetools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-systempipetools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-systempipetools:<tag>

   (see `bioconductor-systempipetools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-systempipetools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-systempipetools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-systempipetools
   :alt:   (downloads)
.. |docker_bioconductor-systempipetools| image:: https://quay.io/repository/biocontainers/bioconductor-systempipetools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-systempipetools
.. _`bioconductor-systempipetools/tags`: https://quay.io/repository/biocontainers/bioconductor-systempipetools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-systempipetools";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-systempipetools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-systempipetools/README.html