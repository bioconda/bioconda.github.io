:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cadra'
.. highlight: bash

bioconductor-cadra
==================

.. conda:recipe:: bioconductor-cadra
   :replaces_section_title:
   :noindex:

   Candidate Driver Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CaDrA.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-cadra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cadra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cadra/meta.yaml>`_

   Performs both stepwise and backward heuristic search for candidate \(epi\)genetic drivers based on a binary multi\-omics dataset. CaDrA\'s main objective is to identify features which\, together\, are significantly skewed or enriched pertaining to a given vector of continuous scores \(e.g. sample\-specific scores representing a phenotypic readout of interest\, such as protein expression\, pathway activity\, etc.\)\, based on the union occurence \(i.e. logical OR\) of the events.


.. conda:package:: bioconductor-cadra

   |downloads_bioconductor-cadra| |docker_bioconductor-cadra|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gtable: 
   :depends r-mass: 
   :depends r-misc3d: 
   :depends r-plyr: 
   :depends r-ppcor: 
   :depends r-r.cache: 
   :depends r-reshape2: 
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

      mamba install bioconductor-cadra

   and update with::

      mamba update bioconductor-cadra

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cadra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cadra:<tag>

   (see `bioconductor-cadra/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cadra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cadra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cadra
   :alt:   (downloads)
.. |docker_bioconductor-cadra| image:: https://quay.io/repository/biocontainers/bioconductor-cadra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cadra
.. _`bioconductor-cadra/tags`: https://quay.io/repository/biocontainers/bioconductor-cadra?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cadra";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cadra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cadra/README.html