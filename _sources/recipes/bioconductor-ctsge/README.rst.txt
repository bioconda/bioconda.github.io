:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctsge'
.. highlight: bash

bioconductor-ctsge
==================

.. conda:recipe:: bioconductor-ctsge
   :replaces_section_title:
   :noindex:

   Clustering of Time Series Gene Expression data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ctsGE.html
   :license: GPL-2
   :recipe: /`bioconductor-ctsge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctsge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctsge/meta.yaml>`_
   :links: biotools: :biotools:`ctsge`, doi: :doi:`10.1093/bioinformatics/btx116`

   Methodology for supervised clustering of potentially many predictor variables\, such as genes etc.\, in time series datasets Provides functions that help the user assigning genes to predefined set of model profiles.


.. conda:package:: bioconductor-ctsge

   |downloads_bioconductor-ctsge| |docker_bioconductor-ctsge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ccapp: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :depends r-shiny: 
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

      mamba install bioconductor-ctsge

   and update with::

      mamba update bioconductor-ctsge

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ctsge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctsge:<tag>

   (see `bioconductor-ctsge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctsge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctsge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctsge
   :alt:   (downloads)
.. |docker_bioconductor-ctsge| image:: https://quay.io/repository/biocontainers/bioconductor-ctsge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctsge
.. _`bioconductor-ctsge/tags`: https://quay.io/repository/biocontainers/bioconductor-ctsge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctsge";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctsge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctsge/README.html