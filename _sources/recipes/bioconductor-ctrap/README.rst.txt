:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctrap'
.. highlight: bash

bioconductor-ctrap
==================

.. conda:recipe:: bioconductor-ctrap
   :replaces_section_title:
   :noindex:

   Identification of candidate causal perturbations from differential gene expression data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/cTRAP.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ctrap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctrap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctrap/meta.yaml>`_

   Compare differential gene expression results with those from known cellular perturbations \(such as gene knock\-down\, overexpression or small molecules\) derived from the Connectivity Map. Such analyses allow not only to infer the molecular causes of the observed difference in gene expression but also to identify small molecules that could drive or revert specific transcriptomic alterations.


.. conda:package:: bioconductor-ctrap

   |downloads_bioconductor-ctrap| |docker_bioconductor-ctrap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-fgsea: ``>=1.26.0,<1.27.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-binr: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-fastmatch: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-highcharter: 
   :depends r-htmltools: 
   :depends r-httr: 
   :depends r-pbapply: 
   :depends r-purrr: 
   :depends r-qs: 
   :depends r-r.utils: 
   :depends r-readxl: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-shiny: ``>=1.7.0``
   :depends r-shinycssloaders: 
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

      mamba install bioconductor-ctrap

   and update with::

      mamba update bioconductor-ctrap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ctrap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctrap:<tag>

   (see `bioconductor-ctrap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctrap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctrap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctrap
   :alt:   (downloads)
.. |docker_bioconductor-ctrap| image:: https://quay.io/repository/biocontainers/bioconductor-ctrap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctrap
.. _`bioconductor-ctrap/tags`: https://quay.io/repository/biocontainers/bioconductor-ctrap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctrap";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctrap/README.html