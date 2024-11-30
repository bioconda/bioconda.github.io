:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ggmsa'
.. highlight: bash

r-ggmsa
=======

.. conda:recipe:: r-ggmsa
   :replaces_section_title:
   :noindex:

   Supports visualizing multiple sequence alignment of DNA and protein sequences using \'ggplot2\'. It supports a number of colour schemes\, including Chemistry\, Clustal\, Shapely\, Taylor and Zappo. Multiple sequence alignment can easily be combined with other \'ggplot2\' plots\, such as aligning a phylogenetic tree produced by \'ggtree\' with multiple sequence alignment.

   :homepage: https://CRAN.R-project.org/package=ggmsa
   :license: OTHER / Artistic-2.0
   :recipe: /`r-ggmsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggmsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggmsa/meta.yaml>`_

   


.. conda:package:: r-ggmsa

   |downloads_r-ggmsa| |docker_r-ggmsa|

   :versions:
      
      

      ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-r4rna: 
   :depends r-aplot: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggalt: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rcolorbrewer: 
   :depends r-seqmagick: 
   :depends r-stringr: 
   :depends r-tidyr: 
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

      mamba install r-ggmsa

   and update with::

      mamba update r-ggmsa

  To create a new environment, run::

      mamba create --name myenvname r-ggmsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-ggmsa:<tag>

   (see `r-ggmsa/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ggmsa| image:: https://img.shields.io/conda/dn/bioconda/r-ggmsa.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ggmsa
   :alt:   (downloads)
.. |docker_r-ggmsa| image:: https://quay.io/repository/biocontainers/r-ggmsa/status
   :target: https://quay.io/repository/biocontainers/r-ggmsa
.. _`r-ggmsa/tags`: https://quay.io/repository/biocontainers/r-ggmsa?tab=tags


.. raw:: html

    <script>
        var package = "r-ggmsa";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ggmsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ggmsa/README.html