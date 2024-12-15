:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-projectr'
.. highlight: bash

bioconductor-projectr
=====================

.. conda:recipe:: bioconductor-projectr
   :replaces_section_title:
   :noindex:

   Functions for the projection of weights from PCA\, CoGAPS\, NMF\, correlation\, and clustering

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/projectR.html
   :license: GPL (==2)
   :recipe: /`bioconductor-projectr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-projectr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-projectr/meta.yaml>`_

   Functions for the projection of data into the spaces defined by PCA\, CoGAPS\, NMF\, correlation\, and clustering.


.. conda:package:: bioconductor-projectr

   |downloads_bioconductor-projectr| |docker_bioconductor-projectr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-fgsea: ``>=1.32.0,<1.33.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggalluvial: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-matrix: 
   :depends r-matrixmodels: 
   :depends r-msigdbr: 
   :depends r-nmf: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rocr: 
   :depends r-scales: 
   :depends r-tsne: 
   :depends r-umap: 
   :depends r-viridis: 
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

      mamba install bioconductor-projectr

   and update with::

      mamba update bioconductor-projectr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-projectr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-projectr:<tag>

   (see `bioconductor-projectr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-projectr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-projectr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-projectr
   :alt:   (downloads)
.. |docker_bioconductor-projectr| image:: https://quay.io/repository/biocontainers/bioconductor-projectr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-projectr
.. _`bioconductor-projectr/tags`: https://quay.io/repository/biocontainers/bioconductor-projectr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-projectr";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-projectr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-projectr/README.html