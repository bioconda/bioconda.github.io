:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gloscope'
.. highlight: bash

bioconductor-gloscope
=====================

.. conda:recipe:: bioconductor-gloscope
   :replaces_section_title:
   :noindex:

   Population\-level Representation on scRNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GloScope.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gloscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gloscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gloscope/meta.yaml>`_

   This package aims at representing and summarizing the entire single\-cell profile of a sample. It allows researchers to perform important bioinformatic analyses at the sample\-level such as visualization and quality control. The main functions Estimate sample distribution and calculate statistical divergence among samples\, and visualize the distance matrix through MDS plots.


.. conda:package:: bioconductor-gloscope

   |downloads_bioconductor-gloscope| |docker_bioconductor-gloscope|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-fnn: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-mclust: 
   :depends r-mvnfast: 
   :depends r-rann: 
   :depends r-rlang: 
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

      mamba install bioconductor-gloscope

   and update with::

      mamba update bioconductor-gloscope

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gloscope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gloscope:<tag>

   (see `bioconductor-gloscope/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gloscope| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gloscope.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gloscope
   :alt:   (downloads)
.. |docker_bioconductor-gloscope| image:: https://quay.io/repository/biocontainers/bioconductor-gloscope/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gloscope
.. _`bioconductor-gloscope/tags`: https://quay.io/repository/biocontainers/bioconductor-gloscope?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gloscope";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gloscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gloscope/README.html