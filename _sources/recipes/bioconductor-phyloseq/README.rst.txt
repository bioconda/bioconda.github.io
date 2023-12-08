:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phyloseq'
.. highlight: bash

bioconductor-phyloseq
=====================

.. conda:recipe:: bioconductor-phyloseq
   :replaces_section_title:
   :noindex:

   Handling and analysis of high\-throughput microbiome census data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/phyloseq.html
   :license: AGPL-3
   :recipe: /`bioconductor-phyloseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phyloseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phyloseq/meta.yaml>`_
   :links: biotools: :biotools:`phyloseq`

   phyloseq provides a set of classes and tools to facilitate the import\, storage\, analysis\, and graphical display of microbiome census data.


.. conda:package:: bioconductor-phyloseq

   |downloads_bioconductor-phyloseq| |docker_bioconductor-phyloseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.1-0``,  ``1.26.0-0``,  ``1.24.2-0``,  ``1.22.3-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.1-0``,  ``1.16.2-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biomformat: ``>=1.30.0,<1.31.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-multtest: ``>=2.58.0,<2.59.0``
   :depends r-ade4: ``>=1.7-4``
   :depends r-ape: ``>=5.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: ``>=2.0.4``
   :depends r-data.table: ``>=1.10.4``
   :depends r-foreach: ``>=1.4.3``
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-igraph: ``>=1.0.1``
   :depends r-plyr: ``>=1.8.3``
   :depends r-reshape2: ``>=1.4.1``
   :depends r-scales: ``>=0.4.0``
   :depends r-vegan: ``>=2.5``
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

      mamba install bioconductor-phyloseq

   and update with::

      mamba update bioconductor-phyloseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phyloseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phyloseq:<tag>

   (see `bioconductor-phyloseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phyloseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phyloseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phyloseq
   :alt:   (downloads)
.. |docker_bioconductor-phyloseq| image:: https://quay.io/repository/biocontainers/bioconductor-phyloseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phyloseq
.. _`bioconductor-phyloseq/tags`: https://quay.io/repository/biocontainers/bioconductor-phyloseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phyloseq";
        var versions = ["1.46.0","1.44.0","1.42.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phyloseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phyloseq/README.html