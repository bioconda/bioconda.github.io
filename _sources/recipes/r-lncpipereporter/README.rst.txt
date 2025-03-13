:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lncpipereporter'
.. highlight: bash

r-lncpipereporter
=================

.. conda:recipe:: r-lncpipereporter
   :replaces_section_title:
   :noindex:

   Automatically Aggregating and Summarizing lncRNA Analysis Results for Interactive Report

   :homepage: https://github.com/bioinformatist/LncPipeReporter
   :license: GPL-2
   :recipe: /`r-lncpipereporter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lncpipereporter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lncpipereporter/meta.yaml>`_

   


.. conda:package:: r-lncpipereporter

   |downloads_r-lncpipereporter| |docker_r-lncpipereporter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.1-10</code>,  <code>0.1.1-9</code>,  <code>0.1.1-8</code>,  <code>0.1.1-7</code>,  <code>0.1.1-6</code>,  <code>0.1.1-5</code>,  <code>0.1.1-4</code>,  <code>0.1.1-2</code>,  <code>0.1.1-1</code>,  </span></summary>
      

      ``0.1.1-10``,  ``0.1.1-9``,  ``0.1.1-8``,  ``0.1.1-7``,  ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0a0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends bioconductor-noiseq: ``>=2.50.0,<2.51.0a0``
   :depends libgcc: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-devtools: 
   :depends r-dt: 
   :depends r-flexdashboard: 
   :depends r-ggbiplot: ``>=0.55,<0.56.0a0``
   :depends r-ggplot2: 
   :depends r-ggsci: 
   :depends r-heatmaply: 
   :depends r-htmlwidgets: 
   :depends r-knitr: 
   :depends r-plotly: 
   :depends r-rmarkdown: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-lncpipereporter

   and update with::

      mamba update r-lncpipereporter

  To create a new environment, run::

      mamba create --name myenvname r-lncpipereporter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-lncpipereporter:<tag>

   (see `r-lncpipereporter/tags`_ for valid values for ``<tag>``)


.. |downloads_r-lncpipereporter| image:: https://img.shields.io/conda/dn/bioconda/r-lncpipereporter.svg?style=flat
   :target: https://anaconda.org/bioconda/r-lncpipereporter
   :alt:   (downloads)
.. |docker_r-lncpipereporter| image:: https://quay.io/repository/biocontainers/r-lncpipereporter/status
   :target: https://quay.io/repository/biocontainers/r-lncpipereporter
.. _`r-lncpipereporter/tags`: https://quay.io/repository/biocontainers/r-lncpipereporter?tab=tags


.. raw:: html

    <script>
        var package = "r-lncpipereporter";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lncpipereporter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lncpipereporter/README.html