:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bettr'
.. highlight: bash

bioconductor-bettr
==================

.. conda:recipe:: bioconductor-bettr
   :replaces_section_title:
   :noindex:

   A Better Way To Explore What Is Best

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/bettr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-bettr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bettr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bettr/meta.yaml>`_

   bettr provides a set of interactive visualization methods to explore the results of a benchmarking study\, where typically more than a single performance measures are computed. The user can weight the performance measures according to their preferences. Performance measures can also be grouped and aggregated according to additional annotations.


.. conda:package:: bioconductor-bettr

   |downloads_bioconductor-bettr| |docker_bioconductor-bettr|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bslib: 
   :depends r-circlize: 
   :depends r-cowplot: 
   :depends r-dplyr: ``>=1.0``
   :depends r-dt: 
   :depends r-ggplot2: ``>=3.4.1``
   :depends r-hmisc: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-shiny: ``>=1.6``
   :depends r-shinyjqui: 
   :depends r-sortable: 
   :depends r-tibble: 
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

      mamba install bioconductor-bettr

   and update with::

      mamba update bioconductor-bettr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bettr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bettr:<tag>

   (see `bioconductor-bettr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bettr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bettr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bettr
   :alt:   (downloads)
.. |docker_bioconductor-bettr| image:: https://quay.io/repository/biocontainers/bioconductor-bettr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bettr
.. _`bioconductor-bettr/tags`: https://quay.io/repository/biocontainers/bioconductor-bettr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bettr";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bettr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bettr/README.html