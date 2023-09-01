:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sconify'
.. highlight: bash

bioconductor-sconify
====================

.. conda:recipe:: bioconductor-sconify
   :replaces_section_title:
   :noindex:

   A toolkit for performing KNN\-based statistics for flow and mass cytometry data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Sconify.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sconify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sconify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sconify/meta.yaml>`_

   This package does k\-nearest neighbor based statistics and visualizations with flow and mass cytometery data. This gives tSNE maps\"fold change\" functionality and provides a data quality metric by assessing manifold overlap between fcs files expected to be the same. Other applications using this package include imputation\, marker redundancy\, and testing the relative information loss of lower dimension embeddings compared to the original manifold.


.. conda:package:: bioconductor-sconify

   |downloads_bioconductor-sconify| |docker_bioconductor-sconify|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowcore: ``>=2.12.0,<2.13.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-fnn: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-readr: 
   :depends r-rtsne: 
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

      mamba install bioconductor-sconify

   and update with::

      mamba update bioconductor-sconify

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sconify

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sconify:<tag>

   (see `bioconductor-sconify/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sconify| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sconify.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sconify
   :alt:   (downloads)
.. |docker_bioconductor-sconify| image:: https://quay.io/repository/biocontainers/bioconductor-sconify/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sconify
.. _`bioconductor-sconify/tags`: https://quay.io/repository/biocontainers/bioconductor-sconify?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sconify";
        var versions = ["1.20.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sconify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sconify/README.html