:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ldweaver'
.. highlight: bash

r-ldweaver
==========

.. conda:recipe:: r-ldweaver
   :replaces_section_title:
   :noindex:

   Perform genomewide epistasis analysis by evaluating the LD structure in bacteria.

   :homepage: https://github.com/Sudaraka88/LDWeaver
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-ldweaver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ldweaver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ldweaver/meta.yaml>`_

   


.. conda:package:: r-ldweaver

   |downloads_r-ldweaver| |docker_r-ldweaver|

   :versions:
      
      

      ``1.2-0``,  ``1.1.1-0``

      

   
   :depends bioconductor-genbankr: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-ggtree: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-chromomap: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-fitdistrplus: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-heatmap3: 
   :depends r-htmlwidgets: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-matrixextra: 
   :depends r-phytools: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-stringi: 
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

      mamba install r-ldweaver

   and update with::

      mamba update r-ldweaver

  To create a new environment, run::

      mamba create --name myenvname r-ldweaver

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-ldweaver:<tag>

   (see `r-ldweaver/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ldweaver| image:: https://img.shields.io/conda/dn/bioconda/r-ldweaver.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ldweaver
   :alt:   (downloads)
.. |docker_r-ldweaver| image:: https://quay.io/repository/biocontainers/r-ldweaver/status
   :target: https://quay.io/repository/biocontainers/r-ldweaver
.. _`r-ldweaver/tags`: https://quay.io/repository/biocontainers/r-ldweaver?tab=tags


.. raw:: html

    <script>
        var package = "r-ldweaver";
        var versions = ["1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ldweaver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ldweaver/README.html