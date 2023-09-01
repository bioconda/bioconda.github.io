:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-condiments'
.. highlight: bash

bioconductor-condiments
=======================

.. conda:recipe:: bioconductor-condiments
   :replaces_section_title:
   :noindex:

   Differential Topology\, Progression and Differentiation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/condiments.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-condiments <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-condiments>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-condiments/meta.yaml>`_

   This package encapsulate many functions to conduct a differential topology analysis. It focuses on analyzing an \'omic dataset with multiple conditions. While the package is mostly geared toward scRNASeq\, it does not place any restriction on the actual input format.


.. conda:package:: bioconductor-condiments

   |downloads_bioconductor-condiments| |docker_bioconductor-condiments|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-distinct: ``>=1.12.0,<1.13.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-slingshot: ``>=2.8.0,<2.9.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-trajectoryutils: ``>=1.8.0,<1.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=1.0``
   :depends r-ecume: ``>=0.9.1``
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-mgcv: 
   :depends r-pbapply: 
   :depends r-rann: 
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

      mamba install bioconductor-condiments

   and update with::

      mamba update bioconductor-condiments

  To create a new environment, run::

      mamba create --name myenvname bioconductor-condiments

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-condiments:<tag>

   (see `bioconductor-condiments/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-condiments| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-condiments.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-condiments
   :alt:   (downloads)
.. |docker_bioconductor-condiments| image:: https://quay.io/repository/biocontainers/bioconductor-condiments/status
   :target: https://quay.io/repository/biocontainers/bioconductor-condiments
.. _`bioconductor-condiments/tags`: https://quay.io/repository/biocontainers/bioconductor-condiments?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-condiments";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-condiments/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-condiments/README.html