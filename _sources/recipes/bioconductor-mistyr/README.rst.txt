:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mistyr'
.. highlight: bash

bioconductor-mistyr
===================

.. conda:recipe:: bioconductor-mistyr
   :replaces_section_title:
   :noindex:

   Multiview Intercellular SpaTial modeling framework

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/mistyR.html
   :license: GPL-3
   :recipe: /`bioconductor-mistyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mistyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mistyr/meta.yaml>`_

   mistyR is an implementation of the Multiview Intercellular SpaTialmodeling framework \(MISTy\). MISTy is an explainable machine learning framework for knowledge extraction and analysis of single\-cell\, highly multiplexed\, spatially resolved data. MISTy facilitates an in\-depth understanding of marker interactions by profiling the intra\- and intercellular relationships. MISTy is a flexible framework able to process a custom number of views. Each of these views can describe a different spatial context\, i.e.\, define a relationship among the observed expressions of the markers\, such as intracellular regulation or paracrine regulation\, but also\, the views can also capture cell\-type specific relationships\, capture relations between functional footprints or focus on relations between different anatomical regions. Each MISTy view is considered as a potential source of variability in the measured marker expressions. Each MISTy view is then analyzed for its contribution to the total expression of each marker and is explained in terms of the interactions with other measurements that led to the observed contribution.


.. conda:package:: bioconductor-mistyr

   |downloads_bioconductor-mistyr| |docker_bioconductor-mistyr|

   :versions:
      
      

      ``1.8.1-0``,  ``1.6.0-0``,  ``1.2.1-0``,  ``1.0.2-0``

      

   
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-deldir: 
   :depends r-digest: 
   :depends r-distances: 
   :depends r-dplyr: ``>=1.1.0``
   :depends r-filelock: 
   :depends r-furrr: ``>=0.2.0``
   :depends r-ggplot2: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-ranger: 
   :depends r-readr: ``>=2.0.0``
   :depends r-ridge: 
   :depends r-rlang: 
   :depends r-rlist: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: ``>=1.2.0``
   :depends r-withr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-mistyr

   and update with::

      mamba update bioconductor-mistyr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mistyr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mistyr:<tag>

   (see `bioconductor-mistyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mistyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mistyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mistyr
   :alt:   (downloads)
.. |docker_bioconductor-mistyr| image:: https://quay.io/repository/biocontainers/bioconductor-mistyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mistyr
.. _`bioconductor-mistyr/tags`: https://quay.io/repository/biocontainers/bioconductor-mistyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mistyr";
        var versions = ["1.8.1","1.6.0","1.2.1","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mistyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mistyr/README.html