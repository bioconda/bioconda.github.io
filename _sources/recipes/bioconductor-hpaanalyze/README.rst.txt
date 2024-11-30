:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpaanalyze'
.. highlight: bash

bioconductor-hpaanalyze
=======================

.. conda:recipe:: bioconductor-hpaanalyze
   :replaces_section_title:
   :noindex:

   Retrieve and analyze data from the Human Protein Atlas

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HPAanalyze.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-hpaanalyze <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpaanalyze>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpaanalyze/meta.yaml>`_

   Provide functions for retrieving\, exploratory analyzing and visualizing the Human Protein Atlas data.


.. conda:package:: bioconductor-hpaanalyze

   |downloads_bioconductor-hpaanalyze| |docker_bioconductor-hpaanalyze|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-openxlsx: 
   :depends r-tibble: 
   :depends r-xml2: 
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

      mamba install bioconductor-hpaanalyze

   and update with::

      mamba update bioconductor-hpaanalyze

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hpaanalyze

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hpaanalyze:<tag>

   (see `bioconductor-hpaanalyze/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hpaanalyze| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpaanalyze.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hpaanalyze
   :alt:   (downloads)
.. |docker_bioconductor-hpaanalyze| image:: https://quay.io/repository/biocontainers/bioconductor-hpaanalyze/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpaanalyze
.. _`bioconductor-hpaanalyze/tags`: https://quay.io/repository/biocontainers/bioconductor-hpaanalyze?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hpaanalyze";
        var versions = ["1.20.0","1.20.0","1.18.1","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpaanalyze/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpaanalyze/README.html