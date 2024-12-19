:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tpp'
.. highlight: bash

bioconductor-tpp
================

.. conda:recipe:: bioconductor-tpp
   :replaces_section_title:
   :noindex:

   Analyze thermal proteome profiling \(TPP\) experiments

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TPP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpp/meta.yaml>`_

   Analyze thermal proteome profiling \(TPP\) experiments with varying temperatures \(TR\) or compound concentrations \(CCR\).


.. conda:package:: bioconductor-tpp

   |downloads_bioconductor-tpp| |docker_bioconductor-tpp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.34.0-0</code>,  <code>3.30.0-0</code>,  <code>3.28.0-0</code>,  <code>3.26.0-0</code>,  <code>3.22.0-0</code>,  <code>3.20.0-0</code>,  <code>3.18.0-1</code>,  <code>3.18.0-0</code>,  <code>3.16.0-0</code>,  </span></summary>
      

      ``3.34.0-0``,  ``3.30.0-0``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.22.0-0``,  ``3.20.0-0``,  ``3.18.0-1``,  ``3.18.0-0``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-1``,  ``3.10.1-0``,  ``3.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobroom: ``>=1.38.0,<1.39.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-broom: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-mefa: 
   :depends r-nls2: 
   :depends r-openxlsx: ``>=2.4.0``
   :depends r-plyr: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-venndiagram: 
   :depends r-vgam: 
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

      mamba install bioconductor-tpp

   and update with::

      mamba update bioconductor-tpp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tpp:<tag>

   (see `bioconductor-tpp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tpp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tpp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tpp
   :alt:   (downloads)
.. |docker_bioconductor-tpp| image:: https://quay.io/repository/biocontainers/bioconductor-tpp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tpp
.. _`bioconductor-tpp/tags`: https://quay.io/repository/biocontainers/bioconductor-tpp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tpp";
        var versions = ["3.34.0","3.30.0","3.28.0","3.26.0","3.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tpp/README.html