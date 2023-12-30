:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiome'
.. highlight: bash

bioconductor-microbiome
=======================

.. conda:recipe:: bioconductor-microbiome
   :replaces_section_title:
   :noindex:

   Microbiome Analytics

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/microbiome.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-microbiome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiome/meta.yaml>`_

   Utilities for microbiome analysis.


.. conda:package:: bioconductor-microbiome

   |downloads_bioconductor-microbiome| |docker_bioconductor-microbiome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.2-0``,  ``1.2.1-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-phyloseq: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-compositions: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vegan: 
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

      mamba install bioconductor-microbiome

   and update with::

      mamba update bioconductor-microbiome

  To create a new environment, run::

      mamba create --name myenvname bioconductor-microbiome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiome:<tag>

   (see `bioconductor-microbiome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiome
   :alt:   (downloads)
.. |docker_bioconductor-microbiome| image:: https://quay.io/repository/biocontainers/bioconductor-microbiome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiome
.. _`bioconductor-microbiome/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiome";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiome/README.html