:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-philr'
.. highlight: bash

bioconductor-philr
==================

.. conda:recipe:: bioconductor-philr
   :replaces_section_title:
   :noindex:

   Phylogenetic partitioning based ILR transform for metagenomics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/philr.html
   :license: GPL-3
   :recipe: /`bioconductor-philr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-philr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-philr/meta.yaml>`_
   :links: biotools: :biotools:`philr`

   PhILR is short for Phylogenetic Isometric Log\-Ratio Transform. This package provides functions for the analysis of compositional data \(e.g.\, data representing proportions of different variables\/parts\). Specifically this package allows analysis of compositional data where the parts can be related through a phylogenetic tree \(as is common in microbiota survey data\) and makes available the Isometric Log Ratio transform built from the phylogenetic tree and utilizing a weighted reference measure.


.. conda:package:: bioconductor-philr

   |downloads_bioconductor-philr| |docker_bioconductor-philr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ggtree: ``>=3.8.0,<3.9.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-phangorn: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-philr

   and update with::

      mamba update bioconductor-philr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-philr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-philr:<tag>

   (see `bioconductor-philr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-philr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-philr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-philr
   :alt:   (downloads)
.. |docker_bioconductor-philr| image:: https://quay.io/repository/biocontainers/bioconductor-philr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-philr
.. _`bioconductor-philr/tags`: https://quay.io/repository/biocontainers/bioconductor-philr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-philr";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-philr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-philr/README.html