:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mcbiclust'
.. highlight: bash

bioconductor-mcbiclust
======================

.. conda:recipe:: bioconductor-mcbiclust
   :replaces_section_title:
   :noindex:

   Massive correlating biclusters for gene expression data and associated methods

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MCbiclust.html
   :license: GPL-2
   :recipe: /`bioconductor-mcbiclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcbiclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcbiclust/meta.yaml>`_

   Custom made algorithm and associated methods for finding\, visualising and analysing biclusters in large gene expression data sets. Algorithm is based on with a supplied gene set of size n\, finding the maximum strength correlation matrix containing m samples from the data set.


.. conda:package:: bioconductor-mcbiclust

   |downloads_bioconductor-mcbiclust| |docker_bioconductor-mcbiclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-scales: 
   :depends r-wgcna: 
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

      mamba install bioconductor-mcbiclust

   and update with::

      mamba update bioconductor-mcbiclust

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mcbiclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mcbiclust:<tag>

   (see `bioconductor-mcbiclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mcbiclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mcbiclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mcbiclust
   :alt:   (downloads)
.. |docker_bioconductor-mcbiclust| image:: https://quay.io/repository/biocontainers/bioconductor-mcbiclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mcbiclust
.. _`bioconductor-mcbiclust/tags`: https://quay.io/repository/biocontainers/bioconductor-mcbiclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mcbiclust";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mcbiclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mcbiclust/README.html