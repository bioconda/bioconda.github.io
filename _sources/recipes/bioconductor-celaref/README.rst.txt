:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celaref'
.. highlight: bash

bioconductor-celaref
====================

.. conda:recipe:: bioconductor-celaref
   :replaces_section_title:
   :noindex:

   Single\-cell RNAseq cell cluster labelling by reference

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/celaref.html
   :license: GPL-3
   :recipe: /`bioconductor-celaref <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celaref>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celaref/meta.yaml>`_

   After the clustering step of a single\-cell RNAseq experiment\, this package aims to suggest labels\/cell types for the clusters\, on the basis of similarity to a reference dataset. It requires a table of read counts per cell per gene\, and a list of the cells belonging to each of the clusters\, \(for both test and reference data\).


.. conda:package:: bioconductor-celaref

   |downloads_bioconductor-celaref| |docker_bioconductor-celaref|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-mast: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-tibble: 
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

      mamba install bioconductor-celaref

   and update with::

      mamba update bioconductor-celaref

  To create a new environment, run::

      mamba create --name myenvname bioconductor-celaref

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celaref:<tag>

   (see `bioconductor-celaref/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celaref| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celaref.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celaref
   :alt:   (downloads)
.. |docker_bioconductor-celaref| image:: https://quay.io/repository/biocontainers/bioconductor-celaref/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celaref
.. _`bioconductor-celaref/tags`: https://quay.io/repository/biocontainers/bioconductor-celaref?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-celaref";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celaref/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celaref/README.html