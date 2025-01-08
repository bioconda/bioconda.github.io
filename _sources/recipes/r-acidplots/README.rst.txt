:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidplots'
.. highlight: bash

r-acidplots
===========

.. conda:recipe:: r-acidplots
   :replaces_section_title:
   :noindex:

   Functions for plotting genomic data.

   :homepage: https://r.acidgenomics.com/packages/acidplots/
   :developer docs: https://github.com/acidgenomics/r-acidplots
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidplots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplots/meta.yaml>`_

   


.. conda:package:: r-acidplots

   |downloads_r-acidplots| |docker_r-acidplots|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.3-1</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.5-2</code>,  <code>0.5.5-1</code>,  <code>0.5.5-0</code>,  </span></summary>
      

      ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.5-2``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.4.0-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.5-2``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.0-0``,  ``0.2.36-0``,  ``0.2.35-0``,  ``0.2.34-0``,  ``0.2.32-0``,  ``0.2.30-0``,  ``0.2.29-0``,  ``0.2.28-0``,  ``0.2.27-0``,  ``0.2.26-1``,  ``0.2.26-0``,  ``0.2.24-0``,  ``0.2.23-0``,  ``0.2.22-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0``
   :depends bioconductor-dropletutils: ``>=1.20.0``
   :depends bioconductor-iranges: ``>=2.34.0``
   :depends bioconductor-s4vectors: ``>=0.38.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0``
   :depends r-acidbase: ``>=0.7.0``
   :depends r-acidcli: ``>=0.3.0``
   :depends r-acidexperiment: ``>=0.5.0``
   :depends r-acidgenerics: ``>=0.7.1``
   :depends r-acidgenomes: ``>=0.6.0``
   :depends r-acidmarkdown: ``>=0.3.0``
   :depends r-acidplyr: ``>=0.5.0``
   :depends r-acidsinglecell: ``>=0.4.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-complexupset: ``>=1.3.3``
   :depends r-ggplot2: ``>=3.4.3``
   :depends r-ggpmisc: ``>=0.5.4``
   :depends r-ggrepel: ``>=0.9.3``
   :depends r-ggridges: ``>=0.5.4``
   :depends r-goalie: ``>=0.7.1``
   :depends r-matrix: ``>=1.6.1``
   :depends r-matrixstats: ``>=1.0.0``
   :depends r-patchwork: ``>=1.1.3``
   :depends r-pheatmap: ``>=1.0.12``
   :depends r-pipette: ``>=0.14.0``
   :depends r-rcolorbrewer: ``>=1.1.3``
   :depends r-rlang: ``>=1.1.1``
   :depends r-scales: ``>=1.2.1``
   :depends r-syntactic: ``>=0.7.0``
   :depends r-viridis: ``>=0.6.4``
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

      mamba install r-acidplots

   and update with::

      mamba update r-acidplots

  To create a new environment, run::

      mamba create --name myenvname r-acidplots

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-acidplots:<tag>

   (see `r-acidplots/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidplots| image:: https://img.shields.io/conda/dn/bioconda/r-acidplots.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidplots
   :alt:   (downloads)
.. |docker_r-acidplots| image:: https://quay.io/repository/biocontainers/r-acidplots/status
   :target: https://quay.io/repository/biocontainers/r-acidplots
.. _`r-acidplots/tags`: https://quay.io/repository/biocontainers/r-acidplots?tab=tags


.. raw:: html

    <script>
        var package = "r-acidplots";
        var versions = ["0.7.3","0.7.3","0.7.2","0.7.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidplots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidplots/README.html