:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fusesom'
.. highlight: bash

bioconductor-fusesom
====================

.. conda:recipe:: bioconductor-fusesom
   :replaces_section_title:
   :noindex:

   A Correlation Based Multiview Self Organizing Maps Clustering For IMC Datasets

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/FuseSOM.html
   :license: GPL-2
   :recipe: /`bioconductor-fusesom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fusesom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fusesom/meta.yaml>`_

   A correlation\-based multiview self\-organizing map for the characterization of cell types in highly multiplexed in situ imaging cytometry assays \(\`FuseSOM\`\) is a tool for unsupervised clustering. \`FuseSOM\` is robust and achieves high accuracy by combining a \`Self Organizing Map\` architecture and a \`Multiview\` integration of correlation based metrics. This allows FuseSOM to cluster highly multiplexed in situ imaging cytometry assays.


.. conda:package:: bioconductor-fusesom

   |downloads_bioconductor-fusesom| |docker_bioconductor-fusesom|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-analogue: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-coop: 
   :depends r-diptest: 
   :depends r-fastcluster: 
   :depends r-fcps: 
   :depends r-fpc: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-ggpubr: 
   :depends r-pheatmap: 
   :depends r-proxy: 
   :depends r-psych: 
   :depends r-rcpp: 
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

      mamba install bioconductor-fusesom

   and update with::

      mamba update bioconductor-fusesom

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fusesom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fusesom:<tag>

   (see `bioconductor-fusesom/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fusesom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fusesom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fusesom
   :alt:   (downloads)
.. |docker_bioconductor-fusesom| image:: https://quay.io/repository/biocontainers/bioconductor-fusesom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fusesom
.. _`bioconductor-fusesom/tags`: https://quay.io/repository/biocontainers/bioconductor-fusesom?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fusesom";
        var versions = ["1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fusesom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fusesom/README.html